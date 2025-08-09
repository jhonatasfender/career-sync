import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(): Promise<void> {
  const email = "jhonatas.fender@gamil.com";
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

  await prisma.summary.upsert({
    where: { userId: user.id },
    update: {
      content:
        "Desenvolvedor full-stack com foco em Node.js e React. Experiência em monorepos Nx, NestJS, Prisma e práticas de CI/CD.",
    },
    create: {
      userId: user.id,
      content:
        "Desenvolvedor full-stack com foco em Node.js e React. Experiência em monorepos Nx, NestJS, Prisma e práticas de CI/CD.",
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
          "Intermediário de seguros cibernéticos; liderança de arquitetura em JavaScript; monorepo Nx; BFF em NestJS; Next.js para SEO; React no front; backend em .NET Core, EF Code First e Web API; PostgreSQL; microsserviços; deploy e mensageria em Azure.",
      },
      {
        userId: user.id,
        company: "NTT DATA Europe & Latam",
        position: "Customer Service Specialist (CSS)",
        startDate: new Date("2023-07-01"),
        endDate: new Date("2024-02-01"),
        summary:
          "Projetos Android/iOS para RD (Drogasil/Droga Raia); clean code, clean architecture e SOLID, atuação nível sênior.",
      },
      {
        userId: user.id,
        company: "Pixeon",
        position: "Analista Desenvolvedor Pleno",
        startDate: new Date("2022-06-01"),
        endDate: new Date("2023-07-01"),
        summary:
          "SLA e bugs em Aurora (Java Swing) e demandas em Groovy; liderança técnica no Xviewer: NX monorepo, React + RxJS, CBOR para comunicação rápida; foco em testes unitários e de integração; BDD com Python.",
      },
      {
        userId: user.id,
        company: "Pixeon",
        position: "Analista Desenvolvedor Júnior",
        startDate: new Date("2021-03-01"),
        endDate: new Date("2022-06-01"),
        summary:
          "Frontend do LGPD (React + Styled Components) e backend em Java Spring Boot; Weblaudos (CSS); liderança no projeto LTA (React).",
      },
      {
        userId: user.id,
        company: "GS3 Tecnologia",
        position: "Desenvolvedor Frontend",
        startDate: new Date("2022-06-01"),
        endDate: new Date("2023-05-01"),
        summary:
          "Arquitetura de Micro Frontends com Module Federation (Webpack) em projetos Angular 12/13/14.",
      },
      {
        userId: user.id,
        company: "Capgemini",
        position: "Analista de Sistema Pleno",
        startDate: new Date("2020-03-01"),
        endDate: new Date("2021-02-01"),
        summary:
          "Funcionalidades em Java (Kumuluz, Quarkus), Node.js e React; DevOps com Kubernetes, Docker, Jenkins, ArgoCD; observabilidade com InfluxDB, Prometheus e Grafana.",
      },
      {
        userId: user.id,
        company: "SONDA",
        position: "Desenvolvedor SW 4",
        startDate: new Date("2019-11-01"),
        endDate: new Date("2020-03-01"),
        summary:
          "Evoluções e manutenção de legados com Java, Angular (6,7,9), PHP, Laravel e Drupal 8.",
      },
      {
        userId: user.id,
        company: "CONNECT DF",
        position: "Desenvolvedor Java",
        startDate: new Date("2019-08-01"),
        endDate: new Date("2019-11-01"),
        summary:
          "Serviços para o SEBRAE: Java Spring, Angular 8, ReactJS; CI com Docker, Jenkins e Rancher.",
      },
      {
        userId: user.id,
        company: "Faros Educacional",
        position: "Desenvolvedor Pleno",
        startDate: new Date("2018-02-01"),
        endDate: new Date("2019-08-01"),
        summary:
          "Projetos em C#, Ruby, Angular V2+, Node.js + Ionic, PHP (CodeIgniter, Moodle, etc.), ExtJS e Sencha Architect.",
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
        company: "Insert Web",
        position: "Desenvolvedor Freelancer",
        startDate: new Date("2017-05-01"),
        endDate: new Date("2018-02-01"),
        summary: "Sistemas com PHP (CodeIgniter) e Ionic.",
      },
      {
        userId: user.id,
        company: "Polisys Informática",
        position: "Programador Java Trainee",
        startDate: new Date("2017-08-01"),
        endDate: new Date("2017-10-01"),
        summary: "Sistemas com Spring Boot e aplicações Web com AngularJS.",
      },
      {
        userId: user.id,
        company: "CNM - Confederação Nacional de Municípios",
        position: "Programador PHP",
        startDate: new Date("2016-11-01"),
        endDate: new Date("2017-08-01"),
        summary:
          "Sistemas com CodeIgniter, Laravel e Angular/TypeScript; apps híbridos em Ionic; manutenções; geoprocessamento e visualização de dados.",
      },
      {
        userId: user.id,
        company: "Micromed Biotecnologia LTDA",
        position: "Programador PHP",
        startDate: new Date("2015-05-01"),
        endDate: new Date("2016-11-01"),
        summary:
          "Migração de intranet de Access para PHP (Phalcon 2.0); AdvPL, Protheus, Zend Framework 2; PostgreSQL; Web Services (SOAP/REST); SCRUM; SVN.",
      },
    ],
    skipDuplicates: true,
  });

  await prisma.education.deleteMany({ where: { userId: user.id } });

  await prisma.skill.createMany({
    data: [
      { userId: user.id, name: "Node.js" },
      { userId: user.id, name: "React" },
      { userId: user.id, name: "NestJS" },
      { userId: user.id, name: "Prisma" },
      { userId: user.id, name: "Nx Monorepo" },
    ],
    skipDuplicates: true,
  });
}

// eslint-disable-next-line unicorn/prefer-top-level-await
void main().finally(() => prisma.$disconnect());
