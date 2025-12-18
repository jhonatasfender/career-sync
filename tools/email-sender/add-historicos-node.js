#!/usr/bin/env node
/**
 * Script para adicionar histórico profissional no Nerdin via curl
 *
 * Uso: node add-historicos-node.js "PHPSESSID=seu_session_id"
 *
 * Ou defina: export PHPSESSID=seu_session_id
 */

const { execSync } = require("child_process");
const crypto = require("crypto");

// Mapeamento de meses
const MESES = {
  Janeiro: "1",
  Fevereiro: "2",
  Março: "3",
  Abril: "4",
  Maio: "5",
  Junho: "6",
  Julho: "7",
  Agosto: "8",
  Setembro: "9",
  Outubro: "10",
  Novembro: "11",
  Dezembro: "12",
};

const CODIGO_CIDADE = "5569"; // Brasília-DF
const URL = "https://www.nerdin.com.br/historico_profissional.php";

// Obter PHPSESSID
const phpsessid = process.argv[2]?.split("=")[1] || process.env.PHPSESSID;

if (!phpsessid) {
  console.error("Erro: PHPSESSID não fornecido!");
  console.error("Uso: node add-historicos-node.js 'PHPSESSID=seu_session_id'");
  console.error("Ou: export PHPSESSID=seu_session_id && node add-historicos-node.js");
  process.exit(1);
}

// Cookies base (adicione outros se necessário)
const cookies = `_gid=GA1.3.899488447.1765342478; __gads=ID=f0c8d0f20173b312:T=1765342477:RT=1765343736:S=ALNI_MZtPq9iPXS--gFM2KITd346I2QuCQ; __gpi=UID=000012aa3ea1feaf:T=1765342477:RT=1765343736:S=ALNI_MYe7Twx38JbJ8Mj3zWltLgZtJ4gAw; __eoi=ID=53262ffc44a39dcb:T=1765342477:RT=1765343736:S=AA-AfjZ3Lu-PRbMcpQB-SQbeUZlt; PHPSESSID=${phpsessid}`;

function generateBoundary() {
  return `----WebKitFormBoundary${crypto.randomBytes(8).toString("hex")}`;
}

function createMultipartBody(
  boundary,
  empresa,
  mesInicio,
  anoInicio,
  mesTermino,
  anoTermino,
  descricao,
  remuneracao = "",
) {
  const mesInicioNum = MESES[mesInicio] || "1";
  const mesTerminoNum = MESES[mesTermino] || "1";

  return `--${boundary}
Content-Disposition: form-data; name="nome_empresa"

${empresa}
--${boundary}
Content-Disposition: form-data; name="mes_inicio"

${mesInicioNum}
--${boundary}
Content-Disposition: form-data; name="ano_inicio"

${anoInicio}
--${boundary}
Content-Disposition: form-data; name="mes_termino"

${mesTerminoNum}
--${boundary}
Content-Disposition: form-data; name="ano_termino"

${anoTermino}
--${boundary}
Content-Disposition: form-data; name="codigo_cidade"

${CODIGO_CIDADE}
--${boundary}
Content-Disposition: form-data; name="valor_remuneracao"

${remuneracao}
--${boundary}
Content-Disposition: form-data; name="descricao"

${descricao}
--${boundary}--`;
}

function addExperiencia(empresa, mesInicio, anoInicio, mesTermino, anoTermino, descricao) {
  const boundary = generateBoundary();
  const body = createMultipartBody(
    boundary,
    empresa,
    mesInicio,
    anoInicio,
    mesTermino,
    anoTermino,
    descricao,
  );

  console.log(
    `\nAdicionando: ${empresa} (${mesInicio}/${anoInicio} - ${mesTermino}/${anoTermino})`,
  );

  try {
    const curlCommand = `curl -s -w "\\n%{http_code}" '${URL}' \\
      -H 'Accept: text/html, */*; q=0.01' \\
      -H 'Accept-Language: en-US,en;q=0.9' \\
      -H 'Connection: keep-alive' \\
      -H 'Content-Type: multipart/form-data; boundary=${boundary}' \\
      -H 'Cookie: ${cookies}' \\
      -H 'Origin: https://www.nerdin.com.br' \\
      -H 'Referer: https://www.nerdin.com.br/historico_profissional.php' \\
      -H 'Sec-Fetch-Dest: empty' \\
      -H 'Sec-Fetch-Mode: cors' \\
      -H 'Sec-Fetch-Site: same-origin' \\
      -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36' \\
      -H 'X-Requested-With: XMLHttpRequest' \\
      --data-raw $'${body.replace(/'/g, "\\'")}'`;

    const output = execSync(curlCommand, { encoding: "utf-8", maxBuffer: 10 * 1024 * 1024 });
    const lines = output.trim().split("\n");
    const httpCode = lines[lines.length - 1];
    const responseBody = lines.slice(0, -1).join("\n");

    if (httpCode === "200") {
      if (
        responseBody.toLowerCase().includes("sucesso") ||
        responseBody.toLowerCase().includes("success")
      ) {
        console.log(`  ✓ Sucesso: ${empresa}`);
        return true;
      } else {
        console.log(`  ⚠ Resposta recebida mas verifique: ${empresa}`);
        return false;
      }
    } else {
      console.log(`  ✗ Erro HTTP ${httpCode}: ${empresa}`);
      return false;
    }
  } catch (error) {
    console.log(`  ✗ Erro ao adicionar ${empresa}: ${error.message}`);
    return false;
  }
}

// Lista de experiências
const experiencias = [
  {
    empresa: "NTT DATA Europe & Latam",
    mesInicio: "Julho",
    anoInicio: "2023",
    mesTermino: "Fevereiro",
    anoTermino: "2024",
    descricao:
      "Participação de projetos Android/iOS para a RD, contribuindo com os aplicativos da Drogasil e DrogaRaia. Aplicação dos princípios de clean code, clean architecture e SOLID, elevando meu perfil para um profissional sênior.",
  },
  {
    empresa: "Pixeon",
    mesInicio: "Junho",
    anoInicio: "2022",
    mesTermino: "Julho",
    anoTermino: "2023",
    descricao:
      "Com o avanço e destaque dentro da equipe, tive a oportunidade de assumir alguns projetos que me proporcionaram um grande crescimento profissional. Atuei em SLA, resolvendo bugs para a aplicação Aurora, que utiliza Java Swing. Nesse mesmo projeto, trabalhei em demandas de codificação com Groovy, uma linguagem com a qual nunca havia trabalhado antes, mas consegui demonstrar uma boa resiliência. Com o aumento dos meus conhecimentos em JavaScript, assumi um projeto muito importante. Na primeira fase, modifiquei o estilo da aplicação, e na próxima etapa, refatorei o código. Realizei provas de conceito para escolhermos as tecnologias adequadas, e optamos por utilizar o NX para o monorepo, React + RxJS (para trabalhar com reatividade no front-end) e CBOR para a comunicação com o back-end, a fim de termos uma comunicação rápida. A aplicação é chamada de Xviewer e tem como objetivo ser um visualizador web de exames de raio-X. Também para aumentar a confiabilidade das aplicações, prezei bastante por testes unitários e testes de integração. Além disso, pude apresentar como trabalho com BDD utilizando Python.",
  },
  {
    empresa: "Pixeon",
    mesInicio: "Março",
    anoInicio: "2021",
    mesTermino: "Junho",
    anoTermino: "2022",
    descricao:
      "Durante minha trajetória profissional, tive a oportunidade de liderar projetos de destaque, que me permitiram ampliar minhas habilidades e conhecimentos. Como responsável pelo frontend do projeto LGPD, desenvolvi soluções com React e Styled Components, enquanto no backend utilizei Java com Spring Boot. Posteriormente, atuei no projeto Weblaudos, onde aprimorei meus conhecimentos em CSS. Em seguida, assumi a liderança do projeto LTA, onde também utilizei minhas habilidades com React.",
  },
  {
    empresa: "GS3 TECNOLOGIA",
    mesInicio: "Junho",
    anoInicio: "2022",
    mesTermino: "Maio",
    anoTermino: "2023",
    descricao:
      "Arquitetura de Micro Frontends utilizando Module Federation do Webpack em projetos Angular (versões 12, 13 e 14).",
  },
  {
    empresa: "Capgemini",
    mesInicio: "Março",
    anoInicio: "2020",
    mesTermino: "Fevereiro",
    anoTermino: "2021",
    descricao:
      "Desenvolvimento de novas funcionalidades utilizando Java (Kumuluz, Quarkus), Node.js e React. Utilizei ferramentas DevOps como Kubernetes, Docker, Jenkins, e ArgoCD, além de ferramentas de monitoramento como InfluxDB, Prometheus e Grafana.",
  },
];

console.log(`Usando PHPSESSID: ${phpsessid.substring(0, 10)}...`);
console.log(`Total de experiências: ${experiencias.length}\n`);

let sucessos = 0;
let falhas = 0;

experiencias.forEach((exp, index) => {
  if (
    addExperiencia(
      exp.empresa,
      exp.mesInicio,
      exp.anoInicio,
      exp.mesTermino,
      exp.anoTermino,
      exp.descricao,
    )
  ) {
    sucessos++;
  } else {
    falhas++;
  }

  // Aguardar 1 segundo entre requisições (exceto na última)
  if (index < experiencias.length - 1) {
    setTimeout(() => {}, 1000);
  }
});

console.log(`\nConcluído! Sucessos: ${sucessos}, Falhas: ${falhas}`);
console.log("Verifique o histórico profissional no Nerdin.");
