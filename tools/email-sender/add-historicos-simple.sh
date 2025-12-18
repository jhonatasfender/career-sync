#!/bin/bash
# Script simplificado para adicionar histórico profissional via curl
#
# Uso: ./add-historicos-simple.sh "seu_phpsessid_aqui"
#
# Ou defina: export PHPSESSID=seu_phpsessid && ./add-historicos-simple.sh

PHPSESSID="${1:-${PHPSESSID}}"

if [ -z "$PHPSESSID" ]; then
  echo "Erro: PHPSESSID não fornecido!"
  echo "Uso: $0 'seu_phpsessid'"
  echo "Ou: export PHPSESSID=seu_phpsessid && $0"
  exit 1
fi

COOKIES="_gid=GA1.3.899488447.1765342478; __gads=ID=f0c8d0f20173b312:T=1765342477:RT=1765343736:S=ALNI_MZtPq9iPXS--gFM2KITd346I2QuCQ; __gpi=UID=000012aa3ea1feaf:T=1765342477:RT=1765343736:S=ALNI_MYe7Twx38JbJ8Mj3zWltLgZtJ4gAw; __eoi=ID=53262ffc44a39dcb:T=1765342477:RT=1765343736:S=AA-AfjZ3Lu-PRbMcpQB-SQbeUZlt; PHPSESSID=${PHPSESSID}"

URL="https://www.nerdin.com.br/historico_profissional.php"
CODIGO_CIDADE="5569"  # Brasília-DF

# Função para gerar boundary
generate_boundary() {
    echo "----WebKitFormBoundary$(openssl rand -hex 8)"
}

# Função para criar multipart body
create_body() {
    local boundary="$1"
    local empresa="$2"
    local mes_inicio="$3"
    local ano_inicio="$4"
    local mes_termino="$5"
    local ano_termino="$6"
    local descricao="$7"

    # Mapear meses
    case "$mes_inicio" in
        "Janeiro") mes_inicio_num="1" ;;
        "Fevereiro") mes_inicio_num="2" ;;
        "Março") mes_inicio_num="3" ;;
        "Abril") mes_inicio_num="4" ;;
        "Maio") mes_inicio_num="5" ;;
        "Junho") mes_inicio_num="6" ;;
        "Julho") mes_inicio_num="7" ;;
        "Agosto") mes_inicio_num="8" ;;
        "Setembro") mes_inicio_num="9" ;;
        "Outubro") mes_inicio_num="10" ;;
        "Novembro") mes_inicio_num="11" ;;
        "Dezembro") mes_inicio_num="12" ;;
        *) mes_inicio_num="1" ;;
    esac

    case "$mes_termino" in
        "Janeiro") mes_termino_num="1" ;;
        "Fevereiro") mes_termino_num="2" ;;
        "Março") mes_termino_num="3" ;;
        "Abril") mes_termino_num="4" ;;
        "Maio") mes_termino_num="5" ;;
        "Junho") mes_termino_num="6" ;;
        "Julho") mes_termino_num="7" ;;
        "Agosto") mes_termino_num="8" ;;
        "Setembro") mes_termino_num="9" ;;
        "Outubro") mes_termino_num="10" ;;
        "Novembro") mes_termino_num="11" ;;
        "Dezembro") mes_termino_num="12" ;;
        *) mes_termino_num="1" ;;
    esac

    cat <<EOF
--${boundary}
Content-Disposition: form-data; name="nome_empresa"

${empresa}
--${boundary}
Content-Disposition: form-data; name="mes_inicio"

${mes_inicio_num}
--${boundary}
Content-Disposition: form-data; name="ano_inicio"

${ano_inicio}
--${boundary}
Content-Disposition: form-data; name="mes_termino"

${mes_termino_num}
--${boundary}
Content-Disposition: form-data; name="ano_termino"

${ano_termino}
--${boundary}
Content-Disposition: form-data; name="codigo_cidade"

${CODIGO_CIDADE}
--${boundary}
Content-Disposition: form-data; name="valor_remuneracao"


--${boundary}
Content-Disposition: form-data; name="descricao"

${descricao}
--${boundary}--
EOF
}

# Função para adicionar experiência
add_experiencia() {
    local empresa="$1"
    local mes_inicio="$2"
    local ano_inicio="$3"
    local mes_termino="$4"
    local ano_termino="$5"
    local descricao="$6"

    local boundary=$(generate_boundary)
    local body=$(create_body "$boundary" "$empresa" "$mes_inicio" "$ano_inicio" "$mes_termino" "$ano_termino" "$descricao")

    echo "Adicionando: $empresa ($mes_inicio/$ano_inicio - $mes_termino/$ano_termino)"

    # Salvar body em arquivo temporário para evitar problemas com caracteres especiais
    local temp_file=$(mktemp)
    echo -n "$body" > "$temp_file"

    response=$(curl -s -w "\n%{http_code}" "$URL" \
        -H 'Accept: text/html, */*; q=0.01' \
        -H 'Accept-Language: en-US,en;q=0.9' \
        -H 'Connection: keep-alive' \
        -H "Content-Type: multipart/form-data; boundary=${boundary}" \
        -H "Cookie: ${COOKIES}" \
        -H 'Origin: https://www.nerdin.com.br' \
        -H 'Referer: https://www.nerdin.com.br/historico_profissional.php' \
        -H 'Sec-Fetch-Dest: empty' \
        -H 'Sec-Fetch-Mode: cors' \
        -H 'Sec-Fetch-Site: same-origin' \
        -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36' \
        -H 'X-Requested-With: XMLHttpRequest' \
        -H 'sec-ch-ua: "Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"' \
        -H 'sec-ch-ua-mobile: ?0' \
        -H 'sec-ch-ua-platform: "Linux"' \
        --data-binary "@${temp_file}")

    rm -f "$temp_file"

    http_code=$(echo "$response" | tail -n1)
    body_response=$(echo "$response" | sed '$d')

    if [ "$http_code" = "200" ]; then
        if echo "$body_response" | grep -qi "sucesso\|success"; then
            echo "  ✓ Sucesso: $empresa"
            return 0
        else
            echo "  ⚠ Resposta recebida mas verifique: $empresa"
            return 1
        fi
    else
        echo "  ✗ Erro HTTP $http_code: $empresa"
        return 1
    fi
}

echo "Usando PHPSESSID: ${PHPSESSID:0:10}..."
echo ""

# Adicionar experiências
sucessos=0
falhas=0

# 1. NTT DATA Europe & Latam
if add_experiencia \
    "NTT DATA Europe & Latam" \
    "Julho" \
    "2023" \
    "Fevereiro" \
    "2024" \
    "Participação de projetos Android/iOS para a RD, contribuindo com os aplicativos da Drogasil e DrogaRaia. Aplicação dos princípios de clean code, clean architecture e SOLID, elevando meu perfil para um profissional sênior."; then
    ((sucessos++))
else
    ((falhas++))
fi
sleep 1

# 2. Pixeon (Pleno)
if add_experiencia \
    "Pixeon" \
    "Junho" \
    "2022" \
    "Julho" \
    "2023" \
    "Com o avanço e destaque dentro da equipe, tive a oportunidade de assumir alguns projetos que me proporcionaram um grande crescimento profissional. Atuei em SLA, resolvendo bugs para a aplicação Aurora, que utiliza Java Swing. Nesse mesmo projeto, trabalhei em demandas de codificação com Groovy, uma linguagem com a qual nunca havia trabalhado antes, mas consegui demonstrar uma boa resiliência. Com o aumento dos meus conhecimentos em JavaScript, assumi um projeto muito importante. Na primeira fase, modifiquei o estilo da aplicação, e na próxima etapa, refatorei o código. Realizei provas de conceito para escolhermos as tecnologias adequadas, e optamos por utilizar o NX para o monorepo, React + RxJS (para trabalhar com reatividade no front-end) e CBOR para a comunicação com o back-end, a fim de termos uma comunicação rápida. A aplicação é chamada de Xviewer e tem como objetivo ser um visualizador web de exames de raio-X. Também para aumentar a confiabilidade das aplicações, prezei bastante por testes unitários e testes de integração. Além disso, pude apresentar como trabalho com BDD utilizando Python."; then
    ((sucessos++))
else
    ((falhas++))
fi
sleep 1

# 3. Pixeon (Junior)
if add_experiencia \
    "Pixeon" \
    "Março" \
    "2021" \
    "Junho" \
    "2022" \
    "Durante minha trajetória profissional, tive a oportunidade de liderar projetos de destaque, que me permitiram ampliar minhas habilidades e conhecimentos. Como responsável pelo frontend do projeto LGPD, desenvolvi soluções com React e Styled Components, enquanto no backend utilizei Java com Spring Boot. Posteriormente, atuei no projeto Weblaudos, onde aprimorei meus conhecimentos em CSS. Em seguida, assumi a liderança do projeto LTA, onde também utilizei minhas habilidades com React."; then
    ((sucessos++))
else
    ((falhas++))
fi
sleep 1

# 4. GS3 TECNOLOGIA
if add_experiencia \
    "GS3 TECNOLOGIA" \
    "Junho" \
    "2022" \
    "Maio" \
    "2023" \
    "Arquitetura de Micro Frontends utilizando Module Federation do Webpack em projetos Angular (versões 12, 13 e 14)."; then
    ((sucessos++))
else
    ((falhas++))
fi
sleep 1

# 5. Capgemini
if add_experiencia \
    "Capgemini" \
    "Março" \
    "2020" \
    "Fevereiro" \
    "2021" \
    "Desenvolvimento de novas funcionalidades utilizando Java (Kumuluz, Quarkus), Node.js e React. Utilizei ferramentas DevOps como Kubernetes, Docker, Jenkins, e ArgoCD, além de ferramentas de monitoramento como InfluxDB, Prometheus e Grafana."; then
    ((sucessos++))
else
    ((falhas++))
fi

echo ""
echo "Concluído! Sucessos: $sucessos, Falhas: $falhas"
echo "Verifique o histórico profissional no Nerdin."

