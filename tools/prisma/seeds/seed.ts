import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(): Promise<void> {
  const email = "jhonatas.fender@gmail.com";
  const username = "jonatas";
  const user = await prisma.user.upsert({
    where: { email },
    update: {
      name: "Jônatas Rodrigues Carvalho Turibio",
      locale: "pt-BR",
    },
    create: {
      name: "Jônatas Rodrigues Carvalho Turibio",
      email,
      username,
      provider: "email",
    },
  });

  await prisma.basics.deleteMany({ where: { userId: user.id } });
  await prisma.basics.upsert({
    where: { userId: user.id },
    update: {
      name: user.name,
      email: user.email,
      headline: "Desenvolvedor Full-Stack",
      phone: "+5561996650556",
      location: "Foz do Iguaçu",
    },
    create: {
      name: user.name,
      email: user.email,
      headline: "Desenvolvedor Full-Stack",
      phone: "+5561996650556",
      location: "Foz do Iguaçu",
      userId: user.id,
    },
  });

  await prisma.summary.deleteMany({ where: { userId: user.id } });
  await prisma.summary.upsert({
    where: { userId: user.id },
    update: {
      content: `Desenvolvedor Fullstack Sênior com mais de 7 anos de experiência, apaixonado por tecnologia e inovação. Tenho uma sólida trajetória em desenvolvimento de software, com expertise em:
        - JavaScript (sênior): Experiência abrangendo React, Angular, Next.js, Node.js e NestJS para desenvolvimento de aplicações front-end e back-end.
        - PHP (sênior): Experiência com Laravel, CodeIgniter e Drupal, entregando soluções robustas e eficientes.
        - Java (pleno): Atuação com Spring Boot, Quarkus e JUnit em projetos backend.
        - Python (júnior) e C# (júnior): Experiência prática em projetos pontuais, com base em .NET Core, Entity Framework e Web API.
        - Participei de projetos complexos utilizando arquitetura de micro front-ends (MFE) e microservices, demonstrando capacidade de adaptação e evolução constante. Minha experiência engloba metodologias ágeis, práticas de DevOps e ferramentas de monitoramento com Kubernetes, Docker, Jenkins, ArgoCD, Rancher, Helm, InfluxDB, Prometheus e Grafana.
        - No campo de bancos de dados, trabalho com SQL Server, MySQL, PostgreSQL e MongoDB. Além disso, estou em constante aprimoramento, estudando novas tecnologias e práticas do setor, e fortalecendo minha comunicação em inglês.`,
    },
    create: {
      userId: user.id,
      content: `Desenvolvedor Fullstack Sênior com mais de 7 anos de experiência, apaixonado por tecnologia e inovação. Tenho uma sólida trajetória em desenvolvimento de software, com expertise em:
        - JavaScript (sênior): Experiência abrangendo React, Angular, Next.js, Node.js e NestJS para desenvolvimento de aplicações front-end e back-end.
        - PHP (sênior): Experiência com Laravel, CodeIgniter e Drupal, entregando soluções robustas e eficientes.
        - Java (pleno): Atuação com Spring Boot, Quarkus e JUnit em projetos backend.
        - Python (júnior) e C# (júnior): Experiência prática em projetos pontuais, com base em .NET Core, Entity Framework e Web API.
        - Participei de projetos complexos utilizando arquitetura de micro front-ends (MFE) e microservices, demonstrando capacidade de adaptação e evolução constante. Minha experiência engloba metodologias ágeis, práticas de DevOps e ferramentas de monitoramento com Kubernetes, Docker, Jenkins, ArgoCD, Rancher, Helm, InfluxDB, Prometheus e Grafana.
        - No campo de bancos de dados, trabalho com SQL Server, MySQL, PostgreSQL e MongoDB. Além disso, estou em constante aprimoramento, estudando novas tecnologias e práticas do setor, e fortalecendo minha comunicação em inglês.`,
    },
  });

  await prisma.experience.deleteMany({ where: { userId: user.id } });
  await prisma.experience.createMany({
    data: [
      {
        userId: user.id,
        company: "BLUECYBER Seguros",
        position: "Desenvolvedor Fullstack Sênior",
        startDate: new Date("2024-03-01"),
        endDate: new Date("2025-02-01"),
        summary:
          "Intermediário de seguros cibernéticos entre corretoras e seguradoras; liderança da arquitetura dos projetos em JavaScript; implementação de funcionalidades em C#; monorepo com Nx; BFF em NestJS; Next.js para SEO; React no front-end; backend em .NET Core, Entity Framework (Code First) e Web API; PostgreSQL; microsserviços; mensageria e deploy com ferramentas da Azure.",
      },
      {
        userId: user.id,
        company: "NTT DATA Europe & Latam",
        position: "Customer Service Specialist (CSS)",
        startDate: new Date("2023-07-01"),
        endDate: new Date("2024-02-01"),
        summary:
          "Participação de projetos Android/iOS para a RD, contribuindo com os aplicativos da Drogasil e Droga Raia. Aplicação dos princípios de clean code, clean architecture e SOLID, elevando meu perfil para um profissional sênior.",
      },
      {
        userId: user.id,
        company: "Pixeon",
        position: "Analista Desenvolvedor Pleno",
        startDate: new Date("2022-06-01"),
        endDate: new Date("2023-07-01"),
        summary: `Com o avanço e destaque dentro da equipe, tive a oportunidade de assumir alguns projetos que me proporcionaram um grande crescimento profissional. Atuei em SLA, resolvendo bugs para a aplicação Aurora, que utiliza Java Swing.
          Nesse mesmo projeto, trabalhei em demandas de codificação com Groovy, uma linguagem com a qual nunca havia trabalhado antes, mas consegui demonstrar uma boa resiliência.
          Com o aumento dos meus conhecimentos em JavaScript, assumi um projeto muito importante. Na primeira fase, modifiquei o estilo da aplicação, e na próxima etapa, refatorei o código.
          Realizei provas de conceito para escolhermos as tecnologias adequadas, e optamos por utilizar o NX para o monorepo, React + RxJS (para trabalhar com reatividade no front-end) e CBOR para a comunicação com o back-end, a fim de termos uma comunicação rápida.
          A aplicação é chamada de Xviewer e tem como objetivo ser um visualizador web de exames de raio-X. Também para aumentar a confiabilidade das aplicações, prezei bastante por testes unitários e testes de integração. Além disso, pude apresentar como trabalho com BDD utilizando Python.
         `,
      },
      {
        userId: user.id,
        company: "GS3 Tecnologia",
        position: "Desenvolvedor Frontend",
        startDate: new Date("2022-06-01"),
        endDate: new Date("2023-05-01"),
        summary:
          "Arquitetura de Micro Frontends utilizando Module Federation (Webpack) em projetos Angular (12/13/14).",
      },
      {
        userId: user.id,
        company: "Pixeon",
        position: "Analista Desenvolvedor Júnior",
        startDate: new Date("2021-03-01"),
        endDate: new Date("2022-06-01"),
        summary: `Durante minha trajetória profissional, tive a oportunidade de liderar projetos de destaque, que me permitiram ampliar minhas habilidades e conhecimentos. Como responsável pelo frontend do projeto LGPD, desenvolvi soluções com React e Styled Components, enquanto no backend utilizei Java com Spring Boot.
          Posteriormente, atuei no projeto Weblaudos, onde aprimorei meus conhecimentos em CSS. Em seguida, assumi a liderança do projeto LTA, onde também utilizei minhas habilidades com React.`,
      },
      {
        userId: user.id,
        company: "Capgemini",
        position: "Analista de Sistema Pleno",
        startDate: new Date("2020-03-01"),
        endDate: new Date("2021-02-01"),
        summary:
          "Desenvolvimento de funcionalidades com Java (Kumuluz, Quarkus), Node.js e React; DevOps com Kubernetes, Docker, Jenkins e ArgoCD; observabilidade com InfluxDB, Prometheus e Grafana.",
      },
      {
        userId: user.id,
        company: "SONDA",
        position: "Desenvolvedor SW 4",
        startDate: new Date("2019-11-01"),
        endDate: new Date("2020-03-01"),
        summary:
          "Evoluções e manutenção de sistemas legados com Java; Angular (6/7/9); PHP com Laravel e Drupal 8.",
      },
      {
        userId: user.id,
        company: "CONNECT DF",
        position: "Desenvolvedor Java",
        startDate: new Date("2019-08-01"),
        endDate: new Date("2019-11-01"),
        summary:
          "Serviços para o SEBRAE: Java Spring, Angular 8 e ReactJS; integração contínua com Docker, Jenkins e Rancher.",
      },
      {
        userId: user.id,
        company: "Output - Pax Vida",
        position: "Desenvolvedor AOSP",
        startDate: new Date("2019-01-01"),
        endDate: new Date("2019-05-01"),
        summary:
          "Android Open Source Project; alterações no template na camada HIDL (HAL Interface Design Language).",
      },
      {
        userId: user.id,
        company: "Faros Educacional",
        position: "Desenvolvedor Pleno",
        startDate: new Date("2018-02-01"),
        endDate: new Date("2019-08-01"),
        summary: `Essa empresa tinha o objetivo de ser uma agência/fábrica de software, e era a junção de duas empresas, a Icon e a Faros. Durante minha passagem por lá, trabalhei em diversos projetos, utilizando as seguintes linguagens:
          - C# (projeto SGUS)
          - Ruby (projeto Redimine)
          - Angular V2+ (projetos Trilhas e Atendimento)
          - NodeJs + Ionic (projeto Conhecigame)
          - PHP (projetos Conselhos, Transparência, Moodle, Eleições, entre outros)
          - Extjs e Sencha Architect (sistemas da CODEVASF)`,
      },
      {
        userId: user.id,
        company: "Insert Web",
        position: "Desenvolvedor Freelancer",
        startDate: new Date("2017-05-01"),
        endDate: new Date("2018-02-01"),
        summary: "Desenvolvimento de sistemas com PHP (CodeIgniter) e Ionic.",
      },
      {
        userId: user.id,
        company: "Polisys Informática",
        position: "Programador Java Training",
        startDate: new Date("2017-08-01"),
        endDate: new Date("2017-10-01"),
        summary: "Sistemas com Spring Boot e aplicações web com AngularJS.",
      },
      {
        userId: user.id,
        company: "CNM - Confederação Nacional de Municípios",
        position: "Programador PHP",
        startDate: new Date("2016-11-01"),
        endDate: new Date("2017-08-01"),
        summary:
          "Sistemas com CodeIgniter e Laravel; Angular/TypeScript; aplicativos híbridos com Ionic; manutenções; geoprocessamento e visualização de dados.",
      },
      {
        userId: user.id,
        company: "Micromed Biotecnologia LTDA",
        position: "Programador PHP",
        startDate: new Date("2015-05-01"),
        endDate: new Date("2016-11-01"),
        summary:
          "Migração da intranet de Access para PHP (Phalcon 2.0); AdvPL, Protheus, Zend Framework 2; PostgreSQL; web services (SOAP/REST); SCRUM; SVN.",
      },
    ],
    skipDuplicates: true,
  });

  await prisma.education.deleteMany({ where: { userId: user.id } });

  await prisma.skill.createMany({
    data: [
      // Linguagens & runtime
      { userId: user.id, name: "JavaScript" },
      { userId: user.id, name: "TypeScript" },
      { userId: user.id, name: "PHP" },
      { userId: user.id, name: "Java" },
      { userId: user.id, name: "C#" },
      { userId: user.id, name: "Python" },

      // Front-end
      { userId: user.id, name: "React" },
      { userId: user.id, name: "Angular" },
      { userId: user.id, name: "Next.js" },
      { userId: user.id, name: "RxJS" },
      { userId: user.id, name: "Styled Components" },
      { userId: user.id, name: "Micro Frontends (MFE)" },
      { userId: user.id, name: "Webpack Module Federation" },
      { userId: user.id, name: "Ext JS" },
      { userId: user.id, name: "Sencha Architect" },
      { userId: user.id, name: "Ionic" },

      // Back-end / APIs
      { userId: user.id, name: "Node.js" },
      { userId: user.id, name: "NestJS" },
      { userId: user.id, name: "Spring Boot" },
      { userId: user.id, name: "Quarkus" },
      { userId: user.id, name: ".NET Core" },
      { userId: user.id, name: "Entity Framework" },
      { userId: user.id, name: "Web API" },
      { userId: user.id, name: "JUnit" },
      { userId: user.id, name: "Groovy" },
      { userId: user.id, name: "Drupal" },
      { userId: user.id, name: "Laravel" },
      { userId: user.id, name: "CodeIgniter" },
      { userId: user.id, name: "SOAP" },
      { userId: user.id, name: "REST" },
      { userId: user.id, name: "CBOR" },

      // Monorepo & produtividade
      { userId: user.id, name: "Nx Monorepo" },

      // Bancos de dados
      { userId: user.id, name: "PostgreSQL" },
      { userId: user.id, name: "MySQL" },
      { userId: user.id, name: "SQL Server" },
      { userId: user.id, name: "Oracle" },
      { userId: user.id, name: "MongoDB" },

      // DevOps / Infra / Observabilidade
      { userId: user.id, name: "Docker" },
      { userId: user.id, name: "Kubernetes" },
      { userId: user.id, name: "Jenkins" },
      { userId: user.id, name: "Git" },
      { userId: user.id, name: "GitLab" },
      { userId: user.id, name: "ArgoCD" },
      { userId: user.id, name: "Rancher" },
      { userId: user.id, name: "Helm" },
      { userId: user.id, name: "Grafana" },
      { userId: user.id, name: "Prometheus" },
      { userId: user.id, name: "InfluxDB" },

      // Outras
      { userId: user.id, name: "Microservices" },
      { userId: user.id, name: "SSH" },
    ],
    skipDuplicates: true,
  });
}

// eslint-disable-next-line unicorn/prefer-top-level-await
void main().finally(() => prisma.$disconnect());
