#!/usr/bin/env python3
"""
Script para adicionar histórico profissional no Nerdin via requisições HTTP.
Este script pode ser executado após obter os cookies da sessão do navegador.
"""

import requests
import time
import sys

# Mapeamento de meses para números
MESES = {
    "Janeiro": "1", "Fevereiro": "2", "Março": "3", "Abril": "4",
    "Maio": "5", "Junho": "6", "Julho": "7", "Agosto": "8",
    "Setembro": "9", "Outubro": "10", "Novembro": "11", "Dezembro": "12"
}

# Código da cidade Brasília-DF
CODIGO_CIDADE = "5569"

URL = "https://www.nerdin.com.br/historico_profissional.php"

def get_mes_num(mes):
    """Converte nome do mês para número"""
    return MESES.get(mes, "1")

def add_experiencia(empresa, mes_inicio, ano_inicio, mes_termino, ano_termino, descricao, cookies, remuneracao=""):
    """Adiciona uma experiência profissional"""

    mes_inicio_num = get_mes_num(mes_inicio)
    mes_termino_num = get_mes_num(mes_termino)

    data = {
        'nome_empresa': empresa,
        'mes_inicio': mes_inicio_num,
        'ano_inicio': ano_inicio,
        'mes_termino': mes_termino_num,
        'ano_termino': ano_termino,
        'codigo_cidade': CODIGO_CIDADE,
        'valor_remuneracao': remuneracao,
        'descricao': descricao
    }

    headers = {
        'Accept': 'text/html, */*; q=0.01',
        'Accept-Language': 'en-US,en;q=0.9',
        'Connection': 'keep-alive',
        'Origin': 'https://www.nerdin.com.br',
        'Referer': 'https://www.nerdin.com.br/historico_profissional.php',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest',
        'sec-ch-ua': '"Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"'
    }

    print(f"Adicionando: {empresa} ({mes_inicio}/{ano_inicio} - {mes_termino}/{ano_termino})")

    try:
        response = requests.post(URL, data=data, headers=headers, cookies=cookies, timeout=30)

        if response.status_code == 200:
            if 'sucesso' in response.text.lower() or 'success' in response.text.lower():
                print(f"  ✓ Sucesso: {empresa}")
                return True
            else:
                print(f"  ⚠ Resposta recebida mas verifique: {empresa}")
                print(f"    Status: {response.status_code}")
                return False
        else:
            print(f"  ✗ Erro HTTP {response.status_code}: {empresa}")
            print(f"    Resposta: {response.text[:200]}")
            return False

    except Exception as e:
        print(f"  ✗ Erro ao adicionar {empresa}: {e}")
        return False

def main():
    """Função principal"""

    # IMPORTANTE: Você precisa fornecer os cookies da sua sessão
    # Obtenha do navegador (F12 > Application > Cookies > nerdin.com.br)
    # Especialmente o PHPSESSID

    if len(sys.argv) < 2:
        print("Uso: python3 add-historicos.py 'PHPSESSID=seu_session_id; outros_cookies=valores'")
        print("\nOu defina a variável de ambiente COOKIES:")
        print("export COOKIES='PHPSESSID=xxx; outros=yyy'")
        print("python3 add-historicos.py")
        sys.exit(1)

    # Obter cookies da linha de comando ou variável de ambiente
    if len(sys.argv) >= 2:
        cookies_str = sys.argv[1]
    else:
        cookies_str = os.environ.get('COOKIES', '')

    if not cookies_str:
        print("Erro: Cookies não fornecidos!")
        sys.exit(1)

    # Converter string de cookies para dicionário
    cookies = {}
    for cookie in cookies_str.split(';'):
        if '=' in cookie:
            key, value = cookie.strip().split('=', 1)
            cookies[key] = value

    print(f"Usando cookies: {list(cookies.keys())}")
    print("")

    # Lista de experiências para adicionar
    experiencias = [
        {
            "empresa": "NTT DATA Europe & Latam",
            "mes_inicio": "Julho",
            "ano_inicio": "2023",
            "mes_termino": "Fevereiro",
            "ano_termino": "2024",
            "descricao": "Participação de projetos Android/iOS para a RD, contribuindo com os aplicativos da Drogasil e DrogaRaia. Aplicação dos princípios de clean code, clean architecture e SOLID, elevando meu perfil para um profissional sênior."
        },
        {
            "empresa": "Pixeon",
            "mes_inicio": "Junho",
            "ano_inicio": "2022",
            "mes_termino": "Julho",
            "ano_termino": "2023",
            "descricao": "Com o avanço e destaque dentro da equipe, tive a oportunidade de assumir alguns projetos que me proporcionaram um grande crescimento profissional. Atuei em SLA, resolvendo bugs para a aplicação Aurora, que utiliza Java Swing. Nesse mesmo projeto, trabalhei em demandas de codificação com Groovy, uma linguagem com a qual nunca havia trabalhado antes, mas consegui demonstrar uma boa resiliência. Com o aumento dos meus conhecimentos em JavaScript, assumi um projeto muito importante. Na primeira fase, modifiquei o estilo da aplicação, e na próxima etapa, refatorei o código. Realizei provas de conceito para escolhermos as tecnologias adequadas, e optamos por utilizar o NX para o monorepo, React + RxJS (para trabalhar com reatividade no front-end) e CBOR para a comunicação com o back-end, a fim de termos uma comunicação rápida. A aplicação é chamada de Xviewer e tem como objetivo ser um visualizador web de exames de raio-X. Também para aumentar a confiabilidade das aplicações, prezei bastante por testes unitários e testes de integração. Além disso, pude apresentar como trabalho com BDD utilizando Python."
        },
        {
            "empresa": "Pixeon",
            "mes_inicio": "Março",
            "ano_inicio": "2021",
            "mes_termino": "Junho",
            "ano_termino": "2022",
            "descricao": "Durante minha trajetória profissional, tive a oportunidade de liderar projetos de destaque, que me permitiram ampliar minhas habilidades e conhecimentos. Como responsável pelo frontend do projeto LGPD, desenvolvi soluções com React e Styled Components, enquanto no backend utilizei Java com Spring Boot. Posteriormente, atuei no projeto Weblaudos, onde aprimorei meus conhecimentos em CSS. Em seguida, assumi a liderança do projeto LTA, onde também utilizei minhas habilidades com React."
        },
        {
            "empresa": "GS3 TECNOLOGIA",
            "mes_inicio": "Junho",
            "ano_inicio": "2022",
            "mes_termino": "Maio",
            "ano_termino": "2023",
            "descricao": "Arquitetura de Micro Frontends utilizando Module Federation do Webpack em projetos Angular (versões 12, 13 e 14)."
        },
        {
            "empresa": "Capgemini",
            "mes_inicio": "Março",
            "ano_inicio": "2020",
            "mes_termino": "Fevereiro",
            "ano_termino": "2021",
            "descricao": "Desenvolvimento de novas funcionalidades utilizando Java (Kumuluz, Quarkus), Node.js e React. Utilizei ferramentas DevOps como Kubernetes, Docker, Jenkins, e ArgoCD, além de ferramentas de monitoramento como InfluxDB, Prometheus e Grafana."
        }
    ]

    sucessos = 0
    falhas = 0

    for exp in experiencias:
        if add_experiencia(
            exp["empresa"],
            exp["mes_inicio"],
            exp["ano_inicio"],
            exp["mes_termino"],
            exp["ano_termino"],
            exp["descricao"],
            cookies
        ):
            sucessos += 1
        else:
            falhas += 1

        time.sleep(1)  # Aguardar 1 segundo entre requisições

    print("")
    print(f"Concluído! Sucessos: {sucessos}, Falhas: {falhas}")
    print("Verifique o histórico profissional no Nerdin.")

if __name__ == "__main__":
    main()

