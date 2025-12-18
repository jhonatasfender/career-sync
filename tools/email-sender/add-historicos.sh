#!/bin/bash

# Script para adicionar histórico profissional via curl
# Código da cidade Brasília-DF: 5569

# Função para criar o boundary único
generate_boundary() {
    echo "----WebKitFormBoundary$(openssl rand -hex 16)"
}

# Função para criar o corpo multipart
create_multipart_body() {
    local boundary="$1"
    local empresa="$2"
    local mes_inicio="$3"
    local ano_inicio="$4"
    local mes_termino="$5"
    local ano_termino="$6"
    local codigo_cidade="$7"
    local descricao="$8"
    local remuneracao="${9:-}"

    cat <<EOF
--${boundary}
Content-Disposition: form-data; name="nome_empresa"

${empresa}
--${boundary}
Content-Disposition: form-data; name="mes_inicio"

${mes_inicio}
--${boundary}
Content-Disposition: form-data; name="ano_inicio"

${ano_inicio}
--${boundary}
Content-Disposition: form-data; name="mes_termino"

${mes_termino}
--${boundary}
Content-Disposition: form-data; name="ano_termino"

${ano_termino}
--${boundary}
Content-Disposition: form-data; name="codigo_cidade"

${codigo_cidade}
--${boundary}
Content-Disposition: form-data; name="valor_remuneracao"

${remuneracao}
--${boundary}
Content-Disposition: form-data; name="descricao"

${descricao}
--${boundary}--
EOF
}

# Mapeamento de meses para números
get_mes_num() {
    case "$1" in
        "Janeiro") echo "1" ;;
        "Fevereiro") echo "2" ;;
        "Março") echo "3" ;;
        "Abril") echo "4" ;;
        "Maio") echo "5" ;;
        "Junho") echo "6" ;;
        "Julho") echo "7" ;;
        "Agosto") echo "8" ;;
        "Setembro") echo "9" ;;
        "Outubro") echo "10" ;;
        "Novembro") echo "11" ;;
        "Dezembro") echo "12" ;;
        *) echo "1" ;;
    esac
}

# IMPORTANTE: Substitua os cookies abaixo pelos seus cookies atuais da sessão
COOKIES="_gid=GA1.3.899488447.1765342478; __gads=ID=f0c8d0f20173b312:T=1765342477:RT=1765343736:S=ALNI_MZtPq9iPXS--gFM2KITd346I2QuCQ; __gpi=UID=000012aa3ea1feaf:T=1765342477:RT=1765343736:S=ALNI_MYe7Twx38JbJ8Mj3zWltLgZtJ4gAw; __eoi=ID=53262ffc44a39dcb:T=1765342477:RT=1765343736:S=AA-AfjZ3Lu-PRbMcpQB-SQbeUZlt; FCCDCF=%5Bnull%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2C%5B%5B32%2C%22%5B%5C%22210a8f5b-48e3-422a-b74d-b830df80761c%5C%22%2C%5B1765342513%2C688000000%5D%5D%22%5D%5D%5D; FCNEC=%5B%5B%22AKsRol9Gyz3poxjQH3isIJrqP0niDWP8I59nWF3gLtIiYTYs9isUqiWaEsY-vB4zRqG0M8ulx5KOTUBm2_C8iBZFILoa-itY4GzHklls_pyRFCWS15X4L5o4gOYRJpotHc1Z0EyNIwfG7ZvfT2CaL9m2P6U9LpTH-w%3D%3D%22%5D%5D; _ga_FW2TBJ5HQZ=GS2.1.s1765342477\$o1\$g1\$t1765343943\$j60\$l0\$h0; _ga=GA1.3.1127405567.1765342478; _gat_gtag_UA_128634108_1=1"

# IMPORTANTE: Adicione o PHPSESSID aqui (obtenha do navegador)
PHPSESSID="SEU_PHPSESSID_AQUI"
COOKIES="${COOKIES}; PHPSESSID=${PHPSESSID}"

CODIGO_CIDADE="5569"  # Brasília-DF

URL="https://www.nerdin.com.br/historico_profissional.php"

# Função para adicionar uma experiência
add_experiencia() {
    local empresa="$1"
    local mes_inicio="$2"
    local ano_inicio="$3"
    local mes_termino="$4"
    local ano_termino="$5"
    local descricao="$6"
    local remuneracao="${7:-}"

    local mes_inicio_num=$(get_mes_num "$mes_inicio")
    local mes_termino_num=$(get_mes_num "$mes_termino")
    local boundary=$(generate_boundary)

    local body=$(create_multipart_body "$boundary" "$empresa" "$mes_inicio_num" "$ano_inicio" "$mes_termino_num" "$ano_termino" "$CODIGO_CIDADE" "$descricao" "$remuneracao")

    echo "Adicionando: $empresa ($mes_inicio/$ano_inicio - $mes_termino/$ano_termino)"

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
        --data-raw "$body")

    http_code=$(echo "$response" | tail -n1)
    body_response=$(echo "$response" | sed '$d')

    if [ "$http_code" = "200" ]; then
        echo "✓ Sucesso: $empresa"
        echo "$body_response" | grep -q "sucesso" && echo "  Confirmação recebida"
    else
        echo "✗ Erro HTTP $http_code: $empresa"
        echo "$body_response" | head -20
    fi

    sleep 1
}

# Adicionar experiências (da mais recente para a mais antiga)

# 1. NTT DATA Europe & Latam
add_experiencia \
    "NTT DATA Europe & Latam" \
    "Julho" \
    "2023" \
    "Fevereiro" \
    "2024" \
    "Participação de projetos Android/iOS para a RD, contribuindo com os aplicativos da Drogasil e DrogaRaia. Aplicação dos princípios de clean code, clean architecture e SOLID, elevando meu perfil para um profissional sênior."

# 2. Pixeon (Pleno)
add_experiencia \
    "Pixeon" \
    "Junho" \
    "2022" \
    "Julho" \
    "2023" \
    "Com o avanço e destaque dentro da equipe, tive a oportunidade de assumir alguns projetos que me proporcionaram um grande crescimento profissional. Atuei em SLA, resolvendo bugs para a aplicação Aurora, que utiliza Java Swing. Nesse mesmo projeto, trabalhei em demandas de codificação com Groovy, uma linguagem com a qual nunca havia trabalhado antes, mas consegui demonstrar uma boa resiliência. Com o aumento dos meus conhecimentos em JavaScript, assumi um projeto muito importante. Na primeira fase, modifiquei o estilo da aplicação, e na próxima etapa, refatorei o código. Realizei provas de conceito para escolhermos as tecnologias adequadas, e optamos por utilizar o NX para o monorepo, React + RxJS (para trabalhar com reatividade no front-end) e CBOR para a comunicação com o back-end, a fim de termos uma comunicação rápida. A aplicação é chamada de Xviewer e tem como objetivo ser um visualizador web de exames de raio-X. Também para aumentar a confiabilidade das aplicações, prezei bastante por testes unitários e testes de integração. Além disso, pude apresentar como trabalho com BDD utilizando Python."

# 3. Pixeon (Junior)
add_experiencia \
    "Pixeon" \
    "Março" \
    "2021" \
    "Junho" \
    "2022" \
    "Durante minha trajetória profissional, tive a oportunidade de liderar projetos de destaque, que me permitiram ampliar minhas habilidades e conhecimentos. Como responsável pelo frontend do projeto LGPD, desenvolvi soluções com React e Styled Components, enquanto no backend utilizei Java com Spring Boot. Posteriormente, atuei no projeto Weblaudos, onde aprimorei meus conhecimentos em CSS. Em seguida, assumi a liderança do projeto LTA, onde também utilizei minhas habilidades com React."

# 4. GS3 TECNOLOGIA
add_experiencia \
    "GS3 TECNOLOGIA" \
    "Junho" \
    "2022" \
    "Maio" \
    "2023" \
    "Arquitetura de Micro Frontends utilizando Module Federation do Webpack em projetos Angular (versões 12, 13 e 14)."

# 5. Capgemini
add_experiencia \
    "Capgemini" \
    "Março" \
    "2020" \
    "Fevereiro" \
    "2021" \
    "Desenvolvimento de novas funcionalidades utilizando Java (Kumuluz, Quarkus), Node.js e React. Utilizei ferramentas DevOps como Kubernetes, Docker, Jenkins, e ArgoCD, além de ferramentas de monitoramento como InfluxDB, Prometheus e Grafana."

echo ""
echo "Concluído! Verifique o histórico profissional no Nerdin."

