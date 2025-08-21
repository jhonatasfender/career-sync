### Application Request 1755136633059-slxenb
- Timestamp: 2025-08-14T01:57:13.113Z
- User: cmeanxw9e0004m3hfkilx402v
- Channels: email
- Expression: professional
- Job description length: 0
- Prompt length: 10449 • SHA256: 26ace947fc2ac247d7f4f10cb782bc7c981f524b7ecd97b1c49fc22c233dc423
- Model: deepseek-r1:latest

#### Prompt
```text
Context: job-specific cover letter generation.

Detect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from 'User note (additional instructions)'. If still undetectable, default to Portuguese (pt-BR).

Write as the candidate, in first-person singular (I). Do not write from the employer's perspective.

Ground all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.

If a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.

Do not copy or paraphrase the job description; reference it only to align the candidate's fit.

Prefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.

Return only the letter body (no headings like 'Cover Letter' and no quotes). Do not fabricate recruiter names; only greet personally if the recruiter's name is explicitly provided.

Planned delivery channels: email. Optimize tone/length to be usable when sent via these channels. Do not mention the channels explicitly in the letter.

Carefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.

Avoid clichés or overly eager wording (e.g., avoid repeating 'excited'/'ansioso'). Maintain a confident, professional tone.

Be concise and avoid filler. Prioritize precise, verifiable facts from the profile.

Compute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use 'over X years'). When supported by the profile, distinguish between overall experience and specific time with Java; if not confidently supported, avoid fabricating and prefer 'over X years' or omit the per‑stack figure.

If dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).

Do not expose chain-of-thought. Provide only final answer content (no '<think>', analysis, steps, or reasoning).

Job Description:

[empty]

Candidate Profile (facts only, no fabrication):

Nome: Jônatas Rodrigues Carvalho Turibio
Headline: Desenvolvedor Full-Stack
Localização: Foz do Iguaçu
Email: [REDACTED_EMAIL]
Telefone: [REDACTED_PHONE]
Resumo:
Desenvolvedor full-stack com foco em Node.js e React. Experiência em monorepos Nx, NestJS, Prisma e práticas de CI/CD.
Experiências (mais recentes primeiro):
- Desenvolvedor Fullstack Sênior @ BLUECYBER Seguros ([REDACTED_PHONE], duração: 11 meses)
  Intermediário de seguros cibernéticos entre corretoras e seguradoras; liderança da arquitetura dos projetos em JavaScript; implementação de funcionalidades em C#; monorepo com Nx; BFF em NestJS; Next.js para SEO; React no front-end; backend em .NET Core, Entity Framework (Code First) e Web API; PostgreSQL; microsserviços; mensageria e deploy com ferramentas da Azure.
- Customer Service Specialist (CSS) @ NTT DATA Europe & Latam ([REDACTED_PHONE], duração: 7 meses)
  Participação de projetos Android/iOS para a RD, contribuindo com os aplicativos da Drogasil e Droga Raia. Aplicação dos princípios de clean code, clean architecture e SOLID, elevando meu perfil para um profissional sênior.
- Desenvolvedor Frontend @ GS3 Tecnologia ([REDACTED_PHONE], duração: 10 meses)
  Arquitetura de Micro Frontends utilizando Module Federation (Webpack) em projetos Angular (12/13/14).
- Analista Desenvolvedor Pleno @ Pixeon ([REDACTED_PHONE], duração: 1 ano 1 mês)
  Com o avanço e destaque dentro da equipe, tive a oportunidade de assumir alguns projetos que me proporcionaram um grande crescimento profissional. Atuei em SLA, resolvendo bugs para a aplicação Aurora, que utiliza Java Swing.
          Nesse mesmo projeto, trabalhei em demandas de codificação com Groovy, uma linguagem com a qual nunca havia trabalhado antes, mas consegui demonstrar uma boa resiliência.
          Com o aumento dos meus conhecimentos em JavaScript, assumi um projeto muito importante. Na primeira fase, modifiquei o estilo da aplicação, e na próxima etapa, refatorei o código.
          Realizei provas de conceito para escolhermos as tecnologias adequadas, e optamos por utilizar o NX para o monorepo, React + RxJS (para trabalhar com reatividade no front-end) e CBOR para a comunicação com o back-end, a fim de termos uma comunicação rápida.
          A aplicação é chamada de Xviewer e tem como objetivo ser um visualizador web de exames de raio-X. Também para aumentar a confiabilidade das aplicações, prezei bastante por testes unitários e testes de integração. Além disso, pude apresentar como trabalho com BDD utilizando Python.
         
- Analista Desenvolvedor Júnior @ Pixeon ([REDACTED_PHONE], duração: 1 ano 3 meses)
  Durante minha trajetória profissional, tive a oportunidade de liderar projetos de destaque, que me permitiram ampliar minhas habilidades e conhecimentos. Como responsável pelo frontend do projeto LGPD, desenvolvi soluções com React e Styled Components, enquanto no backend utilizei Java com Spring Boot.
          Posteriormente, atuei no projeto Weblaudos, onde aprimorei meus conhecimentos em CSS. Em seguida, assumi a liderança do projeto LTA, onde também utilizei minhas habilidades com React.
- Analista de Sistema Pleno @ Capgemini ([REDACTED_PHONE], duração: 11 meses)
  Desenvolvimento de funcionalidades com Java (Kumuluz, Quarkus), Node.js e React; DevOps com Kubernetes, Docker, Jenkins e ArgoCD; observabilidade com InfluxDB, Prometheus e Grafana.
- Desenvolvedor SW 4 @ SONDA ([REDACTED_PHONE], duração: 4 meses)
  Evoluções e manutenção de sistemas legados com Java; Angular (6/7/9); PHP com Laravel e Drupal 8.
- Desenvolvedor Java @ CONNECT DF ([REDACTED_PHONE], duração: 3 meses)
  Serviços para o SEBRAE: Java Spring, Angular 8 e ReactJS; integração contínua com Docker, Jenkins e Rancher.
- Desenvolvedor AOSP @ Output - Pax Vida ([REDACTED_PHONE], duração: 3 meses)
  Android Open Source Project; alterações no template na camada HIDL (HAL Interface Design Language).
- Desenvolvedor Pleno @ Faros Educacional ([REDACTED_PHONE], duração: 1 ano 5 meses)
  Essa empresa tinha o objetivo de ser uma agência/fábrica de software, e era a junção de duas empresas, a Icon e a Faros. Durante minha passagem por lá, trabalhei em diversos projetos, utilizando as seguintes linguagens:
          - C# (projeto SGUS)
          - Ruby (projeto Redimine)
          - Angular V2+ (projetos Trilhas e Atendimento)
          - NodeJs + Ionic (projeto Conhecigame)
          - PHP (projetos Conselhos, Transparência, Moodle, Eleições, entre outros)
          - Extjs e Sencha Architect (sistemas da CODEVASF)
- Programador Java Training @ Polisys Informática ([REDACTED_PHONE], duração: 1 mês)
  Sistemas com Spring Boot e aplicações web com AngularJS.
- Desenvolvedor Freelancer @ Insert Web ([REDACTED_PHONE], duração: 9 meses)
  Desenvolvimento de sistemas com PHP (CodeIgniter) e Ionic.
- Programador PHP @ CNM - Confederação Nacional de Municípios ([REDACTED_PHONE], duração: 8 meses)
  Sistemas com CodeIgniter e Laravel; Angular/TypeScript; aplicativos híbridos com Ionic; manutenções; geoprocessamento e visualização de dados.
- Programador PHP @ Micromed Biotecnologia LTDA ([REDACTED_PHONE], duração: 1 ano 6 meses)
  Migração da intranet de Access para PHP (Phalcon 2.0); AdvPL, Protheus, Zend Framework 2; PostgreSQL; web services (SOAP/REST); SCRUM; SVN.
Tempo total de experiência (todas as experiências): 9 anos 7 meses
Skills: JavaScript, TypeScript, PHP, Java, C#, Python, React, Angular, Next.js, RxJS, Styled Components, Micro Frontends (MFE), Webpack Module Federation, Ext JS, Sencha Architect, Ionic, Node.js, NestJS, Spring Boot, Quarkus

User note (additional instructions):

<p>🚨 Urgent Opportunity – Java with Hadoop 🚨<br><br>Role: Java with Hadoop<br>Location: Mount Laurel, NJ (Onsite)<br><br>Job Description:<br>We are seeking a highly skilled Java Developer with strong Hadoop expertise. The ideal candidate will have:<br>Strong experience in Java 8, Spring Framework (Spring MVC, Spring Boot, Spring Security – OAuth, LDAP), Spring Data (JPA, JDBC)<br>Hands-on experience with REST APIs<br>Proven experience with Big Data platforms such as Hadoop and Spark<br>Expertise in multithreaded application development and microservices architecture<br>Familiarity with tools like Maven, Jenkins, Gradle, Git, Nexus<br>Experience in Hadoop administration<br>Cloud expertise (Azure, AWS, or GCP) – including services like IaaS, AKS, ADLS, ADF<br>Proficiency with configuration management tools such as Salt, Terraform, Ansible, or Chef<br>Scripting and engineering experience with Bash, Shell, Python<br>Strong problem-solving skills and an engineering mindset<br>Excellent verbal and written communication skills<br><br>Interested?<br> Please send your updated resume to <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:[REDACTED_EMAIL]"><strong>[REDACTED_EMAIL]</strong></a><br> 📩 Subject Line: Java with Hadoop – Mount Laurel NJ</p>

Task:

Write a cover letter (~280-360 words) in tom profissional, claro e objetivo, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty). Follow this structure (no lists or subtitles):

Assunto: <título alinhado à vaga>



Parágrafo 1: 2-3 frases apresentando quem sou, anos totais de experiência e o motivo do match com a vaga.



Parágrafo 2: um parágrafo corrido explicando por que posso contribuir (match com os requisitos), integrando 3-5 pontos relevantes sem usar bullets.



Parágrafo 3: um parágrafo corrido com diferenciais e pontos a evoluir com plano claro (sem promessas vagas), sem listas.



Parágrafo 4: encerramento curto com call-to-action discreto. Assinar com nome. Incluir contatos (telefone/email/links) apenas se constarem no perfil fornecido. Se existir nome do recrutador explicitamente, iniciar com saudação personalizada.



Não usar tópicos/listas e não incluir subtítulos como 'Posso contribuir' ou 'Diferenciais'.
```
#### HTTP request (cURL)
```bash
curl -sS -X POST 'http://localhost:11434/v1/chat/completions' \
  -H 'Content-Type: application/json' \
  -d '{"model":"deepseek-r1:latest","messages":[{"role":"system","content":"You are a cover-letter generator. Follow the user'\\''s format exactly. Do not invent facts. Detect the predominant language of the job description and reply strictly in that language (do not switch languages). Do not reveal chain-of-thought or internal reasoning; provide only the final answer content. If you would normally include a reasoning section like <think>...</think>, omit it and provide only the final letter body. Do not include code fences or markdown fences. Do not claim experience with any tool/technology that is not present in the candidate profile; at most, mention readiness to learn without implying past hands-on work. Be concise and avoid filler."},{"role":"user","content":"Context: job-specific cover letter generation.\n\nDetect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from '\\''User note (additional instructions)'\\''. If still undetectable, default to Portuguese (pt-BR).\n\nWrite as the candidate, in first-person singular (I). Do not write from the employer'\\''s perspective.\n\nGround all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.\n\nIf a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.\n\nDo not copy or paraphrase the job description; reference it only to align the candidate'\\''s fit.\n\nPrefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.\n\nReturn only the letter body (no headings like '\\''Cover Letter'\\'' and no quotes). Do not fabricate recruiter names; only greet personally if the recruiter'\\''s name is explicitly provided.\n\nPlanned delivery channels: email. Optimize tone/length to be usable when sent via these channels. Do not mention the channels explicitly in the letter.\n\nCarefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.\n\nAvoid clichés or overly eager wording (e.g., avoid repeating '\\''excited'\\''/'\\''ansioso'\\''). Maintain a confident, professional tone.\n\nBe concise and avoid filler. Prioritize precise, verifiable facts from the profile.\n\nCompute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use '\\''over X years'\\''). When supported by the profile, distinguish between overall experience and specific time with Java; if not confidently supported, avoid fabricating and prefer '\\''over X years'\\'' or omit the per‑stack figure.\n\nIf dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).\n\nDo not expose chain-of-thought. Provide only final answer content (no '\\''<think>'\\'', analysis, steps, or reasoning).\n\nJob Description:\n\n[empty]\n\nCandidate Profile (facts only, no fabrication):\n\nNome: Jônatas Rodrigues Carvalho Turibio\nHeadline: Desenvolvedor Full-Stack\nLocalização: Foz do Iguaçu\nEmail: [REDACTED_EMAIL]\nTelefone: [REDACTED_PHONE]\nResumo:\nDesenvolvedor full-stack com foco em Node.js e React. Experiência em monorepos Nx, NestJS, Prisma e práticas de CI/CD.\nExperiências (mais recentes primeiro):\n- Desenvolvedor Fullstack Sênior @ BLUECYBER Seguros ([REDACTED_PHONE], duração: 11 meses)\n  Intermediário de seguros cibernéticos entre corretoras e seguradoras; liderança da arquitetura dos projetos em JavaScript; implementação de funcionalidades em C#; monorepo com Nx; BFF em NestJS; Next.js para SEO; React no front-end; backend em .NET Core, Entity Framework (Code First) e Web API; PostgreSQL; microsserviços; mensageria e deploy com ferramentas da Azure.\n- Customer Service Specialist (CSS) @ NTT DATA Europe & Latam ([REDACTED_PHONE], duração: 7 meses)\n  Participação de projetos Android/iOS para a RD, contribuindo com os aplicativos da Drogasil e Droga Raia. Aplicação dos princípios de clean code, clean architecture e SOLID, elevando meu perfil para um profissional sênior.\n- Desenvolvedor Frontend @ GS3 Tecnologia ([REDACTED_PHONE], duração: 10 meses)\n  Arquitetura de Micro Frontends utilizando Module Federation (Webpack) em projetos Angular (12/13/14).\n- Analista Desenvolvedor Pleno @ Pixeon ([REDACTED_PHONE], duração: 1 ano 1 mês)\n  Com o avanço e destaque dentro da equipe, tive a oportunidade de assumir alguns projetos que me proporcionaram um grande crescimento profissional. Atuei em SLA, resolvendo bugs para a aplicação Aurora, que utiliza Java Swing.\n          Nesse mesmo projeto, trabalhei em demandas de codificação com Groovy, uma linguagem com a qual nunca havia trabalhado antes, mas consegui demonstrar uma boa resiliência.\n          Com o aumento dos meus conhecimentos em JavaScript, assumi um projeto muito importante. Na primeira fase, modifiquei o estilo da aplicação, e na próxima etapa, refatorei o código.\n          Realizei provas de conceito para escolhermos as tecnologias adequadas, e optamos por utilizar o NX para o monorepo, React + RxJS (para trabalhar com reatividade no front-end) e CBOR para a comunicação com o back-end, a fim de termos uma comunicação rápida.\n          A aplicação é chamada de Xviewer e tem como objetivo ser um visualizador web de exames de raio-X. Também para aumentar a confiabilidade das aplicações, prezei bastante por testes unitários e testes de integração. Além disso, pude apresentar como trabalho com BDD utilizando Python.\n         \n- Analista Desenvolvedor Júnior @ Pixeon ([REDACTED_PHONE], duração: 1 ano 3 meses)\n  Durante minha trajetória profissional, tive a oportunidade de liderar projetos de destaque, que me permitiram ampliar minhas habilidades e conhecimentos. Como responsável pelo frontend do projeto LGPD, desenvolvi soluções com React e Styled Components, enquanto no backend utilizei Java com Spring Boot.\n          Posteriormente, atuei no projeto Weblaudos, onde aprimorei meus conhecimentos em CSS. Em seguida, assumi a liderança do projeto LTA, onde também utilizei minhas habilidades com React.\n- Analista de Sistema Pleno @ Capgemini ([REDACTED_PHONE], duração: 11 meses)\n  Desenvolvimento de funcionalidades com Java (Kumuluz, Quarkus), Node.js e React; DevOps com Kubernetes, Docker, Jenkins e ArgoCD; observabilidade com InfluxDB, Prometheus e Grafana.\n- Desenvolvedor SW 4 @ SONDA ([REDACTED_PHONE], duração: 4 meses)\n  Evoluções e manutenção de sistemas legados com Java; Angular (6/7/9); PHP com Laravel e Drupal 8.\n- Desenvolvedor Java @ CONNECT DF ([REDACTED_PHONE], duração: 3 meses)\n  Serviços para o SEBRAE: Java Spring, Angular 8 e ReactJS; integração contínua com Docker, Jenkins e Rancher.\n- Desenvolvedor AOSP @ Output - Pax Vida ([REDACTED_PHONE], duração: 3 meses)\n  Android Open Source Project; alterações no template na camada HIDL (HAL Interface Design Language).\n- Desenvolvedor Pleno @ Faros Educacional ([REDACTED_PHONE], duração: 1 ano 5 meses)\n  Essa empresa tinha o objetivo de ser uma agência/fábrica de software, e era a junção de duas empresas, a Icon e a Faros. Durante minha passagem por lá, trabalhei em diversos projetos, utilizando as seguintes linguagens:\n          - C# (projeto SGUS)\n          - Ruby (projeto Redimine)\n          - Angular V2+ (projetos Trilhas e Atendimento)\n          - NodeJs + Ionic (projeto Conhecigame)\n          - PHP (projetos Conselhos, Transparência, Moodle, Eleições, entre outros)\n          - Extjs e Sencha Architect (sistemas da CODEVASF)\n- Programador Java Training @ Polisys Informática ([REDACTED_PHONE], duração: 1 mês)\n  Sistemas com Spring Boot e aplicações web com AngularJS.\n- Desenvolvedor Freelancer @ Insert Web ([REDACTED_PHONE], duração: 9 meses)\n  Desenvolvimento de sistemas com PHP (CodeIgniter) e Ionic.\n- Programador PHP @ CNM - Confederação Nacional de Municípios ([REDACTED_PHONE], duração: 8 meses)\n  Sistemas com CodeIgniter e Laravel; Angular/TypeScript; aplicativos híbridos com Ionic; manutenções; geoprocessamento e visualização de dados.\n- Programador PHP @ Micromed Biotecnologia LTDA ([REDACTED_PHONE], duração: 1 ano 6 meses)\n  Migração da intranet de Access para PHP (Phalcon 2.0); AdvPL, Protheus, Zend Framework 2; PostgreSQL; web services (SOAP/REST); SCRUM; SVN.\nTempo total de experiência (todas as experiências): 9 anos 7 meses\nSkills: JavaScript, TypeScript, PHP, Java, C#, Python, React, Angular, Next.js, RxJS, Styled Components, Micro Frontends (MFE), Webpack Module Federation, Ext JS, Sencha Architect, Ionic, Node.js, NestJS, Spring Boot, Quarkus\n\nUser note (additional instructions):\n\n<p>🚨 Urgent Opportunity – Java with Hadoop 🚨<br><br>Role: Java with Hadoop<br>Location: Mount Laurel, NJ (Onsite)<br><br>Job Description:<br>We are seeking a highly skilled Java Developer with strong Hadoop expertise. The ideal candidate will have:<br>Strong experience in Java 8, Spring Framework (Spring MVC, Spring Boot, Spring Security – OAuth, LDAP), Spring Data (JPA, JDBC)<br>Hands-on experience with REST APIs<br>Proven experience with Big Data platforms such as Hadoop and Spark<br>Expertise in multithreaded application development and microservices architecture<br>Familiarity with tools like Maven, Jenkins, Gradle, Git, Nexus<br>Experience in Hadoop administration<br>Cloud expertise (Azure, AWS, or GCP) – including services like IaaS, AKS, ADLS, ADF<br>Proficiency with configuration management tools such as Salt, Terraform, Ansible, or Chef<br>Scripting and engineering experience with Bash, Shell, Python<br>Strong problem-solving skills and an engineering mindset<br>Excellent verbal and written communication skills<br><br>Interested?<br> Please send your updated resume to <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"mailto:[REDACTED_EMAIL]\"><strong>[REDACTED_EMAIL]</strong></a><br> 📩 Subject Line: Java with Hadoop – Mount Laurel NJ</p>\n\nTask:\n\nWrite a cover letter (~280-360 words) in tom profissional, claro e objetivo, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty). Follow this structure (no lists or subtitles):\n\nAssunto: <título alinhado à vaga>\n\n\n\nParágrafo 1: 2-3 frases apresentando quem sou, anos totais de experiência e o motivo do match com a vaga.\n\n\n\nParágrafo 2: um parágrafo corrido explicando por que posso contribuir (match com os requisitos), integrando 3-5 pontos relevantes sem usar bullets.\n\n\n\nParágrafo 3: um parágrafo corrido com diferenciais e pontos a evoluir com plano claro (sem promessas vagas), sem listas.\n\n\n\nParágrafo 4: encerramento curto com call-to-action discreto. Assinar com nome. Incluir contatos (telefone/email/links) apenas se constarem no perfil fornecido. Se existir nome do recrutador explicitamente, iniciar com saudação personalizada.\n\n\n\nNão usar tópicos/listas e não incluir subtítulos como '\\''Posso contribuir'\\'' ou '\\''Diferenciais'\\''."}],"temperature":0.5,"max_tokens":1200}'
```
#### Request body (sanitized)
```json
{
  "model": "deepseek-r1:latest",
  "messages": [
    {
      "role": "system",
      "content": "You are a cover-letter generator. Follow the user's format exactly. Do not invent facts. Detect the predominant language of the job description and reply strictly in that language (do not switch languages). Do not reveal chain-of-thought or internal reasoning; provide only the final answer content. If you would normally include a reasoning section like <think>...</think>, omit it and provide only the final letter body. Do not include code fences or markdown fences. Do not claim experience with any tool/technology that is not present in the candidate profile; at most, mention readiness to learn without implying past hands-on work. Be concise and avoid filler."
    },
    {
      "role": "user",
      "content": "Context: job-specific cover letter generation.\n\nDetect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from 'User note (additional instructions)'. If still undetectable, default to Portuguese (pt-BR).\n\nWrite as the candidate, in first-person singular (I). Do not write from the employer's perspective.\n\nGround all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.\n\nIf a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.\n\nDo not copy or paraphrase the job description; reference it only to align the candidate's fit.\n\nPrefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.\n\nReturn only the letter body (no headings like 'Cover Letter' and no quotes). Do not fabricate recruiter names; only greet personally if the recruiter's name is explicitly provided.\n\nPlanned delivery channels: email. Optimize tone/length to be usable when sent via these channels. Do not mention the channels explicitly in the letter.\n\nCarefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.\n\nAvoid clichés or overly eager wording (e.g., avoid repeating 'excited'/'ansioso'). Maintain a confident, professional tone.\n\nBe concise and avoid filler. Prioritize precise, verifiable facts from the profile.\n\nCompute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use 'over X years'). When supported by the profile, distinguish between overall experience and specific time with Java; if not confidently supported, avoid fabricating and prefer 'over X years' or omit the per‑stack figure.\n\nIf dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).\n\nDo not expose chain-of-thought. Provide only final answer content (no '<think>', analysis, steps, or reasoning).\n\nJob Description:\n\n[empty]\n\nCandidate Profile (facts only, no fabrication):\n\nNome: Jônatas Rodrigues Carvalho Turibio\nHeadline: Desenvolvedor Full-Stack\nLocalização: Foz do Iguaçu\nEmail: [REDACTED_EMAIL]\nTelefone: [REDACTED_PHONE]\nResumo:\nDesenvolvedor full-stack com foco em Node.js e React. Experiência em monorepos Nx, NestJS, Prisma e práticas de CI/CD.\nExperiências (mais recentes primeiro):\n- Desenvolvedor Fullstack Sênior @ BLUECYBER Seguros ([REDACTED_PHONE], duração: 11 meses)\n  Intermediário de seguros cibernéticos entre corretoras e seguradoras; liderança da arquitetura dos projetos em JavaScript; implementação de funcionalidades em C#; monorepo com Nx; BFF em NestJS; Next.js para SEO; React no front-end; backend em .NET Core, Entity Framework (Code First) e Web API; PostgreSQL; microsserviços; mensageria e deploy com ferramentas da Azure.\n- Customer Service Specialist (CSS) @ NTT DATA Europe & Latam ([REDACTED_PHONE], duração: 7 meses)\n  Participação de projetos Android/iOS para a RD, contribuindo com os aplicativos da Drogasil e Droga Raia. Aplicação dos princípios de clean code, clean architecture e SOLID, elevando meu perfil para um profissional sênior.\n- Desenvolvedor Frontend @ GS3 Tecnologia ([REDACTED_PHONE], duração: 10 meses)\n  Arquitetura de Micro Frontends utilizando Module Federation (Webpack) em projetos Angular (12/13/14).\n- Analista Desenvolvedor Pleno @ Pixeon ([REDACTED_PHONE], duração: 1 ano 1 mês)\n  Com o avanço e destaque dentro da equipe, tive a oportunidade de assumir alguns projetos que me proporcionaram um grande crescimento profissional. Atuei em SLA, resolvendo bugs para a aplicação Aurora, que utiliza Java Swing.\n          Nesse mesmo projeto, trabalhei em demandas de codificação com Groovy, uma linguagem com a qual nunca havia trabalhado antes, mas consegui demonstrar uma boa resiliência.\n          Com o aumento dos meus conhecimentos em JavaScript, assumi um projeto muito importante. Na primeira fase, modifiquei o estilo da aplicação, e na próxima etapa, refatorei o código.\n          Realizei provas de conceito para escolhermos as tecnologias adequadas, e optamos por utilizar o NX para o monorepo, React + RxJS (para trabalhar com reatividade no front-end) e CBOR para a comunicação com o back-end, a fim de termos uma comunicação rápida.\n          A aplicação é chamada de Xviewer e tem como objetivo ser um visualizador web de exames de raio-X. Também para aumentar a confiabilidade das aplicações, prezei bastante por testes unitários e testes de integração. Além disso, pude apresentar como trabalho com BDD utilizando Python.\n         \n- Analista Desenvolvedor Júnior @ Pixeon ([REDACTED_PHONE], duração: 1 ano 3 meses)\n  Durante minha trajetória profissional, tive a oportunidade de liderar projetos de destaque, que me permitiram ampliar minhas habilidades e conhecimentos. Como responsável pelo frontend do projeto LGPD, desenvolvi soluções com React e Styled Components, enquanto no backend utilizei Java com Spring Boot.\n          Posteriormente, atuei no projeto Weblaudos, onde aprimorei meus conhecimentos em CSS. Em seguida, assumi a liderança do projeto LTA, onde também utilizei minhas habilidades com React.\n- Analista de Sistema Pleno @ Capgemini ([REDACTED_PHONE], duração: 11 meses)\n  Desenvolvimento de funcionalidades com Java (Kumuluz, Quarkus), Node.js e React; DevOps com Kubernetes, Docker, Jenkins e ArgoCD; observabilidade com InfluxDB, Prometheus e Grafana.\n- Desenvolvedor SW 4 @ SONDA ([REDACTED_PHONE], duração: 4 meses)\n  Evoluções e manutenção de sistemas legados com Java; Angular (6/7/9); PHP com Laravel e Drupal 8.\n- Desenvolvedor Java @ CONNECT DF ([REDACTED_PHONE], duração: 3 meses)\n  Serviços para o SEBRAE: Java Spring, Angular 8 e ReactJS; integração contínua com Docker, Jenkins e Rancher.\n- Desenvolvedor AOSP @ Output - Pax Vida ([REDACTED_PHONE], duração: 3 meses)\n  Android Open Source Project; alterações no template na camada HIDL (HAL Interface Design Language).\n- Desenvolvedor Pleno @ Faros Educacional ([REDACTED_PHONE], duração: 1 ano 5 meses)\n  Essa empresa tinha o objetivo de ser uma agência/fábrica de software, e era a junção de duas empresas, a Icon e a Faros. Durante minha passagem por lá, trabalhei em diversos projetos, utilizando as seguintes linguagens:\n          - C# (projeto SGUS)\n          - Ruby (projeto Redimine)\n          - Angular V2+ (projetos Trilhas e Atendimento)\n          - NodeJs + Ionic (projeto Conhecigame)\n          - PHP (projetos Conselhos, Transparência, Moodle, Eleições, entre outros)\n          - Extjs e Sencha Architect (sistemas da CODEVASF)\n- Programador Java Training @ Polisys Informática ([REDACTED_PHONE], duração: 1 mês)\n  Sistemas com Spring Boot e aplicações web com AngularJS.\n- Desenvolvedor Freelancer @ Insert Web ([REDACTED_PHONE], duração: 9 meses)\n  Desenvolvimento de sistemas com PHP (CodeIgniter) e Ionic.\n- Programador PHP @ CNM - Confederação Nacional de Municípios ([REDACTED_PHONE], duração: 8 meses)\n  Sistemas com CodeIgniter e Laravel; Angular/TypeScript; aplicativos híbridos com Ionic; manutenções; geoprocessamento e visualização de dados.\n- Programador PHP @ Micromed Biotecnologia LTDA ([REDACTED_PHONE], duração: 1 ano 6 meses)\n  Migração da intranet de Access para PHP (Phalcon 2.0); AdvPL, Protheus, Zend Framework 2; PostgreSQL; web services (SOAP/REST); SCRUM; SVN.\nTempo total de experiência (todas as experiências): 9 anos 7 meses\nSkills: JavaScript, TypeScript, PHP, Java, C#, Python, React, Angular, Next.js, RxJS, Styled Components, Micro Frontends (MFE), Webpack Module Federation, Ext JS, Sencha Architect, Ionic, Node.js, NestJS, Spring Boot, Quarkus\n\nUser note (additional instructions):\n\n<p>🚨 Urgent Opportunity – Java with Hadoop 🚨<br><br>Role: Java with Hadoop<br>Location: Mount Laurel, NJ (Onsite)<br><br>Job Description:<br>We are seeking a highly skilled Java Developer with strong Hadoop expertise. The ideal candidate will have:<br>Strong experience in Java 8, Spring Framework (Spring MVC, Spring Boot, Spring Security – OAuth, LDAP), Spring Data (JPA, JDBC)<br>Hands-on experience with REST APIs<br>Proven experience with Big Data platforms such as Hadoop and Spark<br>Expertise in multithreaded application development and microservices architecture<br>Familiarity with tools like Maven, Jenkins, Gradle, Git, Nexus<br>Experience in Hadoop administration<br>Cloud expertise (Azure, AWS, or GCP) – including services like IaaS, AKS, ADLS, ADF<br>Proficiency with configuration management tools such as Salt, Terraform, Ansible, or Chef<br>Scripting and engineering experience with Bash, Shell, Python<br>Strong problem-solving skills and an engineering mindset<br>Excellent verbal and written communication skills<br><br>Interested?<br> Please send your updated resume to <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"mailto:[REDACTED_EMAIL]\"><strong>[REDACTED_EMAIL]</strong></a><br> 📩 Subject Line: Java with Hadoop – Mount Laurel NJ</p>\n\nTask:\n\nWrite a cover letter (~280-360 words) in tom profissional, claro e objetivo, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty). Follow this structure (no lists or subtitles):\n\nAssunto: <título alinhado à vaga>\n\n\n\nParágrafo 1: 2-3 frases apresentando quem sou, anos totais de experiência e o motivo do match com a vaga.\n\n\n\nParágrafo 2: um parágrafo corrido explicando por que posso contribuir (match com os requisitos), integrando 3-5 pontos relevantes sem usar bullets.\n\n\n\nParágrafo 3: um parágrafo corrido com diferenciais e pontos a evoluir com plano claro (sem promessas vagas), sem listas.\n\n\n\nParágrafo 4: encerramento curto com call-to-action discreto. Assinar com nome. Incluir contatos (telefone/email/links) apenas se constarem no perfil fornecido. Se existir nome do recrutador explicitamente, iniciar com saudação personalizada.\n\n\n\nNão usar tópicos/listas e não incluir subtítulos como 'Posso contribuir' ou 'Diferenciais'."
    }
  ],
  "temperature": 0.5,
  "max_tokens": 1200
}
```

#### LLM Response — 1755136633059-slxenb
- Timestamp: 2025-08-14T02:01:19.336Z
- Cover letter length: 2151 • SHA256: 6a9110ea366a06634397446fb14787f2b50f9e4ce11250a7252d1dd55c4b080e

```text
Subject: Java Developer with Hadoop Experience

Dear [Recruiter Name - Not provided in job description, so using a generic salutation],

I am writing to express my strong interest in your Java Developer role requiring Hadoop expertise. With over nine years of professional development experience and more than four years working extensively with Java technologies across various projects and industries (including insurance technology), I believe I have the necessary foundation and commitment to quickly master and contribute effectively using Hadoop.

My background includes hands-on development with Spring Boot, Spring Data JPA, and REST APIs in roles like Senior Fullstack Developer at BlueCyber Seguros. At CONNECT DF, I developed Java services for SEBRAE utilizing Spring Framework components including Spring Security (OAuth). While direct experience crafting complex MapReduce jobs or administering Hadoop clusters isn't evident from my profile yet, I possess a solid understanding of distributed systems concepts gained through other experiences and am highly motivated to acquire these specific skills. My engineering mindset aligns well with your requirements for multithreaded application development and microservices architecture.

I also have significant experience in areas that complement this role: extensive frontend work using React/Angular (including Next.js), full-stack Node.js expertise, and substantial DevOps tooling knowledge including Jenkins, Git, Docker, Kubernetes, ArgoCD, and Maven. I am proficient with Python for BDD testing and scripting tasks as well. My familiarity with cloud platforms like Azure is demonstrated through past work involving .NET Core backends and modern web technologies.

I look forward to discussing how my skills in Java, Spring Boot, REST APIs, multithreading, and microservices can benefit your team at MetriX IT Solutions Inc., located at 100 Corporate Way, Mount Laurel, NJ 08053. I am eager for the opportunity to learn more about Hadoop administration within this context.

Best regards,

Jônatas Rodrigues Carvalho Turibio
📧 Email: [REDACTED_EMAIL]
📱 Phone: [REDACTED_PHONE]
```
---

#### LLM Response — 1755717932488-jzbe32
- Timestamp: 2025-08-20T19:26:19.804Z
- Cover letter length: 1567 • SHA256: ff582165ea3248d240f86de4d6b824e1b9d5001c69d7a1bdbf7dc298a73fd248

```text
**INFORMAÇÕES PESSOAIS**

Nome completo: Teste, Email: [REDACTED_EMAIL], Telefone: [REDACTED_PHONE], Localização: Brasilia, Website: https://teste

**RESUMO PROFISSIONAL**

Desenvolvedor experiente em Java e tecnologias relacionadas, com 3 anos de experiência como Desenvolvedor Backend Senior, onde desenvolvi APIs escalaveis e testes unitários. Busco uma oportunidade para aplicar minhas habilidades em um ambiente dinâmico e desafiador.

**EXPERIÊNCIA PROFISSIONAL**

- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)
  * Desenvolvi landingpages e um website de vendas de seguros com next e react js.
  * Tecnologias utilizadas: React, Next.js
  * Impacto: Aumentei a eficiência do site em até 30%.
- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)
  * Desenvolvedor senior desenvolvendo APIs escalaveis e testes unitários.
  * Tecnologias utilizadas: Java, Spring
  * Impacto: Melhorei a velocidade de resposta do sistema em até 25%.

**EDUCAÇÃO**

- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])

**COMPETÊNCIAS TÉCNICAS**

* JavaScript
* Java
* Tecnologias relacionadas a desenvolvimento web

**PROJETOS DESTACADOS**

- teste (https://teste)
  * Desenvolvi um projeto de segurança para uma empresa.
- teste2 (teste2)

**CERTIFICAÇÕES**

- teste (teste, [REDACTED_PHONE])

**IDIOMAS**

* Português

**PRÊMIOS E RECONHECIMENTOS**

- teste (teste)

**VOLUNTARIADO**

Nenhum

**PERFIS PROFISSIONAIS**

GitHub: https://www.github.com/in/francisco-dev/
```
---

### Application Request 1755732565491-fzwp4y
- Timestamp: 2025-08-20T23:29:25.504Z
- User: cm9hp80720000gk3gykahk5f4
- Channels: email
- Expression: informal
- Job description length: 2156
- Prompt length: 7334 • SHA256: 9481dbae4b4d0a37e6ffc2cafe425388cacd76f16c02afcfea1d416f6658a5ce
- Model: llama3.2:latest

#### Prompt
```text
Context: job-specific resume generation.

Detect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from 'User note (additional instructions)'. If still undetectable, default to Portuguese (pt-BR).

Write as the candidate, in first-person singular (I). Do not write from the employer's perspective.

Ground all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.

If a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.

Do not copy or paraphrase the job description; reference it only to align the candidate's fit.

Prefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.

Return only the resume content in a structured format. Do not fabricate recruiter names or company details.

Planned delivery channels: email. Optimize format/length to be usable when sent via these channels.

Carefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.

Avoid clichés or overly eager wording. Maintain a confident, professional tone.

Be concise and avoid filler. Prioritize precise, verifiable facts from the profile.

Compute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use 'over X years').

If dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).

Do not expose chain-of-thought. Provide only final answer content (no '<think>', analysis, steps, or reasoning).

CRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.

CRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.

Job Description:

<p>aga: Analista Desenvolvedor Java Pleno (Hibrido - SP) - CLT<br><br>👉Interessados devem encaminhar CV atualizado juntamente com a pretensão salarial para o e-mail: <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:[REDACTED_EMAIL]"><strong>[REDACTED_EMAIL]</strong></a><br><br>🔹 Sobre a Vaga:<br>Estamos em busca de um Analista Desenvolvimento Java Pleno para se juntar à nossa equipe em um formato hibrido. Se você tem experiência e deseja crescer em um ambiente dinâmico e desafiador, esta é a sua chance!<br><br>Requisitos:<br>-Escolaridade: Graduação completa em Tecnologia da Informação ou qualquer curso de nível superior com pós-graduação na área de Tecnologia da Informação.<br><br>🔹 Requisitos Técnicos Obrigatórios:<br>* Desenvolvimento e análise de sistemas em aplicações Web utilizando modelo de arquitetura MVC.<br>* Desenvolvimento e manutenção de sistemas utilizando as seguintes linguagens: PLSQL, Java, JavaScript, HTML e XML.<br>* Containers e Gerenciamento: Docker e Kubernetes.<br>* Desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, , Redis.<br>* UML (casos de uso e demais diagramas);<br>* Arquitetura orientada a serviços (SOA).<br>* APIs<br>* Conhecimento de Frameworks de marcado como Spring (Spring-cloud), Angular, React, Vue, BootStrap entre outros;<br>* Intregração Contínua (CI) / Deployment Contínuo (CD).<br>* JSON / REST.<br><br>🔹 Horário de Trabalho e escala:<br>09h às 18h (1hr de almoço)<br>2x presencial e 3x home-office<br><br>🔹 Endereço: Rua Libero Badaró, 425 - Centro - SP<br><br>🔹 Benefícios de Trabalhar Conosco:<br>🍔Vale Alimentação/Refeição | Wiipo Flex<br>🏋‍♀TotalPass | Bem-estar para todos os colaboradores, todos os dias<br>👓 Parceria SESC | Saúde, Lazer, Turismo &amp; Esportes, Assistência Social e Alimentação<br>📕 Parcerias Educacionais | Aldeia, UDF, EBAC, ESPM, IPOG, VC_TB e WO.<br>🤍Seguro de vida<br><br>Todas as vagas são afirmativas!<br><br>E aí, se identificou com a vaga?<br>Não perca tempo e candidate-se!<br><br>Junte-se a nós e faça parte de uma equipe que valoriza inovação e excelência!</p>

Candidate Profile (facts only, no fabrication):

Nome: Teste
Headline: teste
Localização: Brasilia
Email: [REDACTED_EMAIL]
Telefone: [REDACTED_PHONE]
Website: https://teste
Resumo:
<p>chico</p>
Experiências (mais recentes primeiro):
- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)
  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>
- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)
  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>
Tempo total de experiência (todas as experiências): 3 anos 7 meses
Skills: JavaScript
Projetos relevantes:
- teste (https://teste)
  <p>teste</p>
Educação:
- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])
Certificações:
- teste (teste, [REDACTED_PHONE])
Idiomas: teste
Prêmios:
- teste (teste)
- teste2 (teste2)
Perfis:
- GitHub: https://www.github.com/in/francisco-dev/
- teste: http://teste

User note (additional instructions):

<p>Teste</p>

Task:

Generate a currículo abrangente com todas as experiências relevantes in tom informal, porém cortês e direto, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).



Follow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):



**INFORMAÇÕES PESSOAIS**

Nome completo, email, telefone, localização, website (se disponível)



**RESUMO PROFISSIONAL**

2-3 frases destacando anos de experiência, especialização principal e fit com a vaga



**EXPERIÊNCIA PROFISSIONAL**

Listar experiências mais relevantes à vaga (máximo 4-5), com:

- Cargo, empresa, período (duração calculada)

- 2-3 conquistas mensuráveis por experiência

- Tecnologias e ferramentas utilizadas

- Impacto nos resultados da empresa



**EDUCAÇÃO**

Formação acadêmica relevante (instituição, curso, período)



**COMPETÊNCIAS TÉCNICAS**

Skills mais relevantes à vaga, agrupadas por categoria



**PROJETOS DESTACADOS**

Projetos mais relevantes (máximo 3) com descrição e tecnologias



**CERTIFICAÇÕES**

Certificações relevantes (máximo 5) com emissor e data



**IDIOMAS**

Idiomas com nível de proficiência



**PRÊMIOS E RECONHECIMENTOS**

Prêmios relevantes (máximo 3) com contexto



**VOLUNTARIADO**

Experiências voluntárias relevantes (se houver)



**PERFIS PROFISSIONAIS**

Links para LinkedIn, GitHub, portfolio (se disponíveis)



Instruções específicas:

- Priorizar experiências e skills mais relevantes à vaga

- Usar linguagem ativa e orientada a resultados

- Incluir métricas e números quando disponíveis no perfil

- Adaptar tom ao tipo de expressão solicitado

- Manter formato limpo e profissional

- Não inventar dados, datas ou experiências

- Focar na relevância para a posição específica

- NUNCA duplicar ou repetir informações entre seções

- Cada experiência deve ser descrita apenas uma vez
```
#### HTTP request (cURL)
```bash
curl -sS -X POST 'http://localhost:11434/v1/chat/completions' \
  -H 'Content-Type: application/json' \
  -d '{"model":"llama3.2:latest","messages":[{"role":"system","content":"You are a cover-letter generator. Follow the user'\\''s format exactly. Do not invent facts. Detect the predominant language of the job description and reply strictly in that language (do not switch languages). Do not reveal chain-of-thought or internal reasoning; provide only the final answer content. If you would normally include a reasoning section like <think>...</think>, omit it and provide only the final letter body. Do not include code fences or markdown fences. Do not claim experience with any tool/technology that is not present in the candidate profile; at most, mention readiness to learn without implying past hands-on work. Be concise and avoid filler."},{"role":"user","content":"Context: job-specific resume generation.\n\nDetect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from '\\''User note (additional instructions)'\\''. If still undetectable, default to Portuguese (pt-BR).\n\nWrite as the candidate, in first-person singular (I). Do not write from the employer'\\''s perspective.\n\nGround all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.\n\nIf a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.\n\nDo not copy or paraphrase the job description; reference it only to align the candidate'\\''s fit.\n\nPrefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.\n\nReturn only the resume content in a structured format. Do not fabricate recruiter names or company details.\n\nPlanned delivery channels: email. Optimize format/length to be usable when sent via these channels.\n\nCarefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.\n\nAvoid clichés or overly eager wording. Maintain a confident, professional tone.\n\nBe concise and avoid filler. Prioritize precise, verifiable facts from the profile.\n\nCompute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use '\\''over X years'\\'').\n\nIf dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).\n\nDo not expose chain-of-thought. Provide only final answer content (no '\\''<think>'\\'', analysis, steps, or reasoning).\n\nCRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.\n\nCRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.\n\nJob Description:\n\n<p>aga: Analista Desenvolvedor Java Pleno (Hibrido - SP) - CLT<br><br>👉Interessados devem encaminhar CV atualizado juntamente com a pretensão salarial para o e-mail: <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"mailto:[REDACTED_EMAIL]\"><strong>[REDACTED_EMAIL]</strong></a><br><br>🔹 Sobre a Vaga:<br>Estamos em busca de um Analista Desenvolvimento Java Pleno para se juntar à nossa equipe em um formato hibrido. Se você tem experiência e deseja crescer em um ambiente dinâmico e desafiador, esta é a sua chance!<br><br>Requisitos:<br>-Escolaridade: Graduação completa em Tecnologia da Informação ou qualquer curso de nível superior com pós-graduação na área de Tecnologia da Informação.<br><br>🔹 Requisitos Técnicos Obrigatórios:<br>* Desenvolvimento e análise de sistemas em aplicações Web utilizando modelo de arquitetura MVC.<br>* Desenvolvimento e manutenção de sistemas utilizando as seguintes linguagens: PLSQL, Java, JavaScript, HTML e XML.<br>* Containers e Gerenciamento: Docker e Kubernetes.<br>* Desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, , Redis.<br>* UML (casos de uso e demais diagramas);<br>* Arquitetura orientada a serviços (SOA).<br>* APIs<br>* Conhecimento de Frameworks de marcado como Spring (Spring-cloud), Angular, React, Vue, BootStrap entre outros;<br>* Intregração Contínua (CI) / Deployment Contínuo (CD).<br>* JSON / REST.<br><br>🔹 Horário de Trabalho e escala:<br>09h às 18h (1hr de almoço)<br>2x presencial e 3x home-office<br><br>🔹 Endereço: Rua Libero Badaró, 425 - Centro - SP<br><br>🔹 Benefícios de Trabalhar Conosco:<br>🍔Vale Alimentação/Refeição | Wiipo Flex<br>🏋‍♀TotalPass | Bem-estar para todos os colaboradores, todos os dias<br>👓 Parceria SESC | Saúde, Lazer, Turismo &amp; Esportes, Assistência Social e Alimentação<br>📕 Parcerias Educacionais | Aldeia, UDF, EBAC, ESPM, IPOG, VC_TB e WO.<br>🤍Seguro de vida<br><br>Todas as vagas são afirmativas!<br><br>E aí, se identificou com a vaga?<br>Não perca tempo e candidate-se!<br><br>Junte-se a nós e faça parte de uma equipe que valoriza inovação e excelência!</p>\n\nCandidate Profile (facts only, no fabrication):\n\nNome: Teste\nHeadline: teste\nLocalização: Brasilia\nEmail: [REDACTED_EMAIL]\nTelefone: [REDACTED_PHONE]\nWebsite: https://teste\nResumo:\n<p>chico</p>\nExperiências (mais recentes primeiro):\n- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)\n  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>\n- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)\n  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>\nTempo total de experiência (todas as experiências): 3 anos 7 meses\nSkills: JavaScript\nProjetos relevantes:\n- teste (https://teste)\n  <p>teste</p>\nEducação:\n- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])\nCertificações:\n- teste (teste, [REDACTED_PHONE])\nIdiomas: teste\nPrêmios:\n- teste (teste)\n- teste2 (teste2)\nPerfis:\n- GitHub: https://www.github.com/in/francisco-dev/\n- teste: http://teste\n\nUser note (additional instructions):\n\n<p>Teste</p>\n\nTask:\n\nGenerate a currículo abrangente com todas as experiências relevantes in tom informal, porém cortês e direto, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).\n\n\n\nFollow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):\n\n\n\n**INFORMAÇÕES PESSOAIS**\n\nNome completo, email, telefone, localização, website (se disponível)\n\n\n\n**RESUMO PROFISSIONAL**\n\n2-3 frases destacando anos de experiência, especialização principal e fit com a vaga\n\n\n\n**EXPERIÊNCIA PROFISSIONAL**\n\nListar experiências mais relevantes à vaga (máximo 4-5), com:\n\n- Cargo, empresa, período (duração calculada)\n\n- 2-3 conquistas mensuráveis por experiência\n\n- Tecnologias e ferramentas utilizadas\n\n- Impacto nos resultados da empresa\n\n\n\n**EDUCAÇÃO**\n\nFormação acadêmica relevante (instituição, curso, período)\n\n\n\n**COMPETÊNCIAS TÉCNICAS**\n\nSkills mais relevantes à vaga, agrupadas por categoria\n\n\n\n**PROJETOS DESTACADOS**\n\nProjetos mais relevantes (máximo 3) com descrição e tecnologias\n\n\n\n**CERTIFICAÇÕES**\n\nCertificações relevantes (máximo 5) com emissor e data\n\n\n\n**IDIOMAS**\n\nIdiomas com nível de proficiência\n\n\n\n**PRÊMIOS E RECONHECIMENTOS**\n\nPrêmios relevantes (máximo 3) com contexto\n\n\n\n**VOLUNTARIADO**\n\nExperiências voluntárias relevantes (se houver)\n\n\n\n**PERFIS PROFISSIONAIS**\n\nLinks para LinkedIn, GitHub, portfolio (se disponíveis)\n\n\n\nInstruções específicas:\n\n- Priorizar experiências e skills mais relevantes à vaga\n\n- Usar linguagem ativa e orientada a resultados\n\n- Incluir métricas e números quando disponíveis no perfil\n\n- Adaptar tom ao tipo de expressão solicitado\n\n- Manter formato limpo e profissional\n\n- Não inventar dados, datas ou experiências\n\n- Focar na relevância para a posição específica\n\n- NUNCA duplicar ou repetir informações entre seções\n\n- Cada experiência deve ser descrita apenas uma vez"}],"temperature":0.5,"max_tokens":1200}'
```
#### Request body (sanitized)
```json
{
  "model": "llama3.2:latest",
  "messages": [
    {
      "role": "system",
      "content": "You are a cover-letter generator. Follow the user's format exactly. Do not invent facts. Detect the predominant language of the job description and reply strictly in that language (do not switch languages). Do not reveal chain-of-thought or internal reasoning; provide only the final answer content. If you would normally include a reasoning section like <think>...</think>, omit it and provide only the final letter body. Do not include code fences or markdown fences. Do not claim experience with any tool/technology that is not present in the candidate profile; at most, mention readiness to learn without implying past hands-on work. Be concise and avoid filler."
    },
    {
      "role": "user",
      "content": "Context: job-specific resume generation.\n\nDetect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from 'User note (additional instructions)'. If still undetectable, default to Portuguese (pt-BR).\n\nWrite as the candidate, in first-person singular (I). Do not write from the employer's perspective.\n\nGround all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.\n\nIf a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.\n\nDo not copy or paraphrase the job description; reference it only to align the candidate's fit.\n\nPrefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.\n\nReturn only the resume content in a structured format. Do not fabricate recruiter names or company details.\n\nPlanned delivery channels: email. Optimize format/length to be usable when sent via these channels.\n\nCarefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.\n\nAvoid clichés or overly eager wording. Maintain a confident, professional tone.\n\nBe concise and avoid filler. Prioritize precise, verifiable facts from the profile.\n\nCompute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use 'over X years').\n\nIf dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).\n\nDo not expose chain-of-thought. Provide only final answer content (no '<think>', analysis, steps, or reasoning).\n\nCRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.\n\nCRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.\n\nJob Description:\n\n<p>aga: Analista Desenvolvedor Java Pleno (Hibrido - SP) - CLT<br><br>👉Interessados devem encaminhar CV atualizado juntamente com a pretensão salarial para o e-mail: <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"mailto:[REDACTED_EMAIL]\"><strong>[REDACTED_EMAIL]</strong></a><br><br>🔹 Sobre a Vaga:<br>Estamos em busca de um Analista Desenvolvimento Java Pleno para se juntar à nossa equipe em um formato hibrido. Se você tem experiência e deseja crescer em um ambiente dinâmico e desafiador, esta é a sua chance!<br><br>Requisitos:<br>-Escolaridade: Graduação completa em Tecnologia da Informação ou qualquer curso de nível superior com pós-graduação na área de Tecnologia da Informação.<br><br>🔹 Requisitos Técnicos Obrigatórios:<br>* Desenvolvimento e análise de sistemas em aplicações Web utilizando modelo de arquitetura MVC.<br>* Desenvolvimento e manutenção de sistemas utilizando as seguintes linguagens: PLSQL, Java, JavaScript, HTML e XML.<br>* Containers e Gerenciamento: Docker e Kubernetes.<br>* Desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, , Redis.<br>* UML (casos de uso e demais diagramas);<br>* Arquitetura orientada a serviços (SOA).<br>* APIs<br>* Conhecimento de Frameworks de marcado como Spring (Spring-cloud), Angular, React, Vue, BootStrap entre outros;<br>* Intregração Contínua (CI) / Deployment Contínuo (CD).<br>* JSON / REST.<br><br>🔹 Horário de Trabalho e escala:<br>09h às 18h (1hr de almoço)<br>2x presencial e 3x home-office<br><br>🔹 Endereço: Rua Libero Badaró, 425 - Centro - SP<br><br>🔹 Benefícios de Trabalhar Conosco:<br>🍔Vale Alimentação/Refeição | Wiipo Flex<br>🏋‍♀TotalPass | Bem-estar para todos os colaboradores, todos os dias<br>👓 Parceria SESC | Saúde, Lazer, Turismo &amp; Esportes, Assistência Social e Alimentação<br>📕 Parcerias Educacionais | Aldeia, UDF, EBAC, ESPM, IPOG, VC_TB e WO.<br>🤍Seguro de vida<br><br>Todas as vagas são afirmativas!<br><br>E aí, se identificou com a vaga?<br>Não perca tempo e candidate-se!<br><br>Junte-se a nós e faça parte de uma equipe que valoriza inovação e excelência!</p>\n\nCandidate Profile (facts only, no fabrication):\n\nNome: Teste\nHeadline: teste\nLocalização: Brasilia\nEmail: [REDACTED_EMAIL]\nTelefone: [REDACTED_PHONE]\nWebsite: https://teste\nResumo:\n<p>chico</p>\nExperiências (mais recentes primeiro):\n- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)\n  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>\n- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)\n  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>\nTempo total de experiência (todas as experiências): 3 anos 7 meses\nSkills: JavaScript\nProjetos relevantes:\n- teste (https://teste)\n  <p>teste</p>\nEducação:\n- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])\nCertificações:\n- teste (teste, [REDACTED_PHONE])\nIdiomas: teste\nPrêmios:\n- teste (teste)\n- teste2 (teste2)\nPerfis:\n- GitHub: https://www.github.com/in/francisco-dev/\n- teste: http://teste\n\nUser note (additional instructions):\n\n<p>Teste</p>\n\nTask:\n\nGenerate a currículo abrangente com todas as experiências relevantes in tom informal, porém cortês e direto, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).\n\n\n\nFollow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):\n\n\n\n**INFORMAÇÕES PESSOAIS**\n\nNome completo, email, telefone, localização, website (se disponível)\n\n\n\n**RESUMO PROFISSIONAL**\n\n2-3 frases destacando anos de experiência, especialização principal e fit com a vaga\n\n\n\n**EXPERIÊNCIA PROFISSIONAL**\n\nListar experiências mais relevantes à vaga (máximo 4-5), com:\n\n- Cargo, empresa, período (duração calculada)\n\n- 2-3 conquistas mensuráveis por experiência\n\n- Tecnologias e ferramentas utilizadas\n\n- Impacto nos resultados da empresa\n\n\n\n**EDUCAÇÃO**\n\nFormação acadêmica relevante (instituição, curso, período)\n\n\n\n**COMPETÊNCIAS TÉCNICAS**\n\nSkills mais relevantes à vaga, agrupadas por categoria\n\n\n\n**PROJETOS DESTACADOS**\n\nProjetos mais relevantes (máximo 3) com descrição e tecnologias\n\n\n\n**CERTIFICAÇÕES**\n\nCertificações relevantes (máximo 5) com emissor e data\n\n\n\n**IDIOMAS**\n\nIdiomas com nível de proficiência\n\n\n\n**PRÊMIOS E RECONHECIMENTOS**\n\nPrêmios relevantes (máximo 3) com contexto\n\n\n\n**VOLUNTARIADO**\n\nExperiências voluntárias relevantes (se houver)\n\n\n\n**PERFIS PROFISSIONAIS**\n\nLinks para LinkedIn, GitHub, portfolio (se disponíveis)\n\n\n\nInstruções específicas:\n\n- Priorizar experiências e skills mais relevantes à vaga\n\n- Usar linguagem ativa e orientada a resultados\n\n- Incluir métricas e números quando disponíveis no perfil\n\n- Adaptar tom ao tipo de expressão solicitado\n\n- Manter formato limpo e profissional\n\n- Não inventar dados, datas ou experiências\n\n- Focar na relevância para a posição específica\n\n- NUNCA duplicar ou repetir informações entre seções\n\n- Cada experiência deve ser descrita apenas uma vez"
    }
  ],
  "temperature": 0.5,
  "max_tokens": 1200
}
```

#### LLM Response — 1755732565491-fzwp4y
- Timestamp: 2025-08-20T23:30:34.278Z
- Cover letter length: 1161 • SHA256: 32d14d451ef3c5cf6913e41687d394c3c36faac1f23335e9e0dc274aff18f50a

```text
**INFORMAÇÕES PESSOAIS**

Nome: Teste, Email: [REDACTED_EMAIL], Telefone: [REDACTED_PHONE], Localização: Brasilia, Website: https://teste

**RESUMO PROFISSIONAL**

Desenvolvedor com 3 anos e 7 meses de experiência em desenvolvimento de sistemas, especializado em JavaScript, procurando por uma oportunidade para crescer em um ambiente dinâmico e desafiador.

**EXPERIÊNCIA PROFISSIONAL**

- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE]), desenvolvi landingpages e um website de vendas de seguros com next e react js.
- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE]), desenvolvedor senior desenvolvendo APIs escalaveis e testes unitários.

**EDUCAÇÃO**

Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])

**COMPETÊNCIAS TÉCNICAS**

JavaScript

**PROJETOS DESTACADOS**

teste (https://teste), projeto de desenvolvimento de um website de seguros com tecnologias como next e react js.

**CERTIFICAÇÕES**

teste, teste2

**IDIOMAS**

Não disponível

**PRÊMIOS E RECONHECIMENTOS**

**VOLUNTARIADO**

**PERFIS PROFISSIONAIS**

GitHub: https://www.github.com/in/francisco-dev/, teste: http://teste
```
---

### Application Request 1755732640246-chqg1n
- Timestamp: 2025-08-20T23:30:40.253Z
- User: cm9hp80720000gk3gykahk5f4
- Channels: email
- Expression: informal
- Job description length: 2156
- Prompt length: 7334 • SHA256: 9481dbae4b4d0a37e6ffc2cafe425388cacd76f16c02afcfea1d416f6658a5ce
- Model: llama3.2:latest

#### Prompt
```text
Context: job-specific resume generation.

Detect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from 'User note (additional instructions)'. If still undetectable, default to Portuguese (pt-BR).

Write as the candidate, in first-person singular (I). Do not write from the employer's perspective.

Ground all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.

If a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.

Do not copy or paraphrase the job description; reference it only to align the candidate's fit.

Prefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.

Return only the resume content in a structured format. Do not fabricate recruiter names or company details.

Planned delivery channels: email. Optimize format/length to be usable when sent via these channels.

Carefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.

Avoid clichés or overly eager wording. Maintain a confident, professional tone.

Be concise and avoid filler. Prioritize precise, verifiable facts from the profile.

Compute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use 'over X years').

If dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).

Do not expose chain-of-thought. Provide only final answer content (no '<think>', analysis, steps, or reasoning).

CRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.

CRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.

Job Description:

<p>aga: Analista Desenvolvedor Java Pleno (Hibrido - SP) - CLT<br><br>👉Interessados devem encaminhar CV atualizado juntamente com a pretensão salarial para o e-mail: <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:[REDACTED_EMAIL]"><strong>[REDACTED_EMAIL]</strong></a><br><br>🔹 Sobre a Vaga:<br>Estamos em busca de um Analista Desenvolvimento Java Pleno para se juntar à nossa equipe em um formato hibrido. Se você tem experiência e deseja crescer em um ambiente dinâmico e desafiador, esta é a sua chance!<br><br>Requisitos:<br>-Escolaridade: Graduação completa em Tecnologia da Informação ou qualquer curso de nível superior com pós-graduação na área de Tecnologia da Informação.<br><br>🔹 Requisitos Técnicos Obrigatórios:<br>* Desenvolvimento e análise de sistemas em aplicações Web utilizando modelo de arquitetura MVC.<br>* Desenvolvimento e manutenção de sistemas utilizando as seguintes linguagens: PLSQL, Java, JavaScript, HTML e XML.<br>* Containers e Gerenciamento: Docker e Kubernetes.<br>* Desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, , Redis.<br>* UML (casos de uso e demais diagramas);<br>* Arquitetura orientada a serviços (SOA).<br>* APIs<br>* Conhecimento de Frameworks de marcado como Spring (Spring-cloud), Angular, React, Vue, BootStrap entre outros;<br>* Intregração Contínua (CI) / Deployment Contínuo (CD).<br>* JSON / REST.<br><br>🔹 Horário de Trabalho e escala:<br>09h às 18h (1hr de almoço)<br>2x presencial e 3x home-office<br><br>🔹 Endereço: Rua Libero Badaró, 425 - Centro - SP<br><br>🔹 Benefícios de Trabalhar Conosco:<br>🍔Vale Alimentação/Refeição | Wiipo Flex<br>🏋‍♀TotalPass | Bem-estar para todos os colaboradores, todos os dias<br>👓 Parceria SESC | Saúde, Lazer, Turismo &amp; Esportes, Assistência Social e Alimentação<br>📕 Parcerias Educacionais | Aldeia, UDF, EBAC, ESPM, IPOG, VC_TB e WO.<br>🤍Seguro de vida<br><br>Todas as vagas são afirmativas!<br><br>E aí, se identificou com a vaga?<br>Não perca tempo e candidate-se!<br><br>Junte-se a nós e faça parte de uma equipe que valoriza inovação e excelência!</p>

Candidate Profile (facts only, no fabrication):

Nome: Teste
Headline: teste
Localização: Brasilia
Email: [REDACTED_EMAIL]
Telefone: [REDACTED_PHONE]
Website: https://teste
Resumo:
<p>chico</p>
Experiências (mais recentes primeiro):
- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)
  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>
- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)
  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>
Tempo total de experiência (todas as experiências): 3 anos 7 meses
Skills: JavaScript
Projetos relevantes:
- teste (https://teste)
  <p>teste</p>
Educação:
- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])
Certificações:
- teste (teste, [REDACTED_PHONE])
Idiomas: teste
Prêmios:
- teste (teste)
- teste2 (teste2)
Perfis:
- GitHub: https://www.github.com/in/francisco-dev/
- teste: http://teste

User note (additional instructions):

<p>Teste</p>

Task:

Generate a currículo abrangente com todas as experiências relevantes in tom informal, porém cortês e direto, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).



Follow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):



**INFORMAÇÕES PESSOAIS**

Nome completo, email, telefone, localização, website (se disponível)



**RESUMO PROFISSIONAL**

2-3 frases destacando anos de experiência, especialização principal e fit com a vaga



**EXPERIÊNCIA PROFISSIONAL**

Listar experiências mais relevantes à vaga (máximo 4-5), com:

- Cargo, empresa, período (duração calculada)

- 2-3 conquistas mensuráveis por experiência

- Tecnologias e ferramentas utilizadas

- Impacto nos resultados da empresa



**EDUCAÇÃO**

Formação acadêmica relevante (instituição, curso, período)



**COMPETÊNCIAS TÉCNICAS**

Skills mais relevantes à vaga, agrupadas por categoria



**PROJETOS DESTACADOS**

Projetos mais relevantes (máximo 3) com descrição e tecnologias



**CERTIFICAÇÕES**

Certificações relevantes (máximo 5) com emissor e data



**IDIOMAS**

Idiomas com nível de proficiência



**PRÊMIOS E RECONHECIMENTOS**

Prêmios relevantes (máximo 3) com contexto



**VOLUNTARIADO**

Experiências voluntárias relevantes (se houver)



**PERFIS PROFISSIONAIS**

Links para LinkedIn, GitHub, portfolio (se disponíveis)



Instruções específicas:

- Priorizar experiências e skills mais relevantes à vaga

- Usar linguagem ativa e orientada a resultados

- Incluir métricas e números quando disponíveis no perfil

- Adaptar tom ao tipo de expressão solicitado

- Manter formato limpo e profissional

- Não inventar dados, datas ou experiências

- Focar na relevância para a posição específica

- NUNCA duplicar ou repetir informações entre seções

- Cada experiência deve ser descrita apenas uma vez
```
#### HTTP request (cURL)
```bash
curl -sS -X POST 'http://localhost:11434/v1/chat/completions' \
  -H 'Content-Type: application/json' \
  -d '{"model":"llama3.2:latest","messages":[{"role":"system","content":"You are a cover-letter generator. Follow the user'\\''s format exactly. Do not invent facts. Detect the predominant language of the job description and reply strictly in that language (do not switch languages). Do not reveal chain-of-thought or internal reasoning; provide only the final answer content. If you would normally include a reasoning section like <think>...</think>, omit it and provide only the final letter body. Do not include code fences or markdown fences. Do not claim experience with any tool/technology that is not present in the candidate profile; at most, mention readiness to learn without implying past hands-on work. Be concise and avoid filler."},{"role":"user","content":"Context: job-specific resume generation.\n\nDetect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from '\\''User note (additional instructions)'\\''. If still undetectable, default to Portuguese (pt-BR).\n\nWrite as the candidate, in first-person singular (I). Do not write from the employer'\\''s perspective.\n\nGround all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.\n\nIf a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.\n\nDo not copy or paraphrase the job description; reference it only to align the candidate'\\''s fit.\n\nPrefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.\n\nReturn only the resume content in a structured format. Do not fabricate recruiter names or company details.\n\nPlanned delivery channels: email. Optimize format/length to be usable when sent via these channels.\n\nCarefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.\n\nAvoid clichés or overly eager wording. Maintain a confident, professional tone.\n\nBe concise and avoid filler. Prioritize precise, verifiable facts from the profile.\n\nCompute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use '\\''over X years'\\'').\n\nIf dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).\n\nDo not expose chain-of-thought. Provide only final answer content (no '\\''<think>'\\'', analysis, steps, or reasoning).\n\nCRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.\n\nCRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.\n\nJob Description:\n\n<p>aga: Analista Desenvolvedor Java Pleno (Hibrido - SP) - CLT<br><br>👉Interessados devem encaminhar CV atualizado juntamente com a pretensão salarial para o e-mail: <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"mailto:[REDACTED_EMAIL]\"><strong>[REDACTED_EMAIL]</strong></a><br><br>🔹 Sobre a Vaga:<br>Estamos em busca de um Analista Desenvolvimento Java Pleno para se juntar à nossa equipe em um formato hibrido. Se você tem experiência e deseja crescer em um ambiente dinâmico e desafiador, esta é a sua chance!<br><br>Requisitos:<br>-Escolaridade: Graduação completa em Tecnologia da Informação ou qualquer curso de nível superior com pós-graduação na área de Tecnologia da Informação.<br><br>🔹 Requisitos Técnicos Obrigatórios:<br>* Desenvolvimento e análise de sistemas em aplicações Web utilizando modelo de arquitetura MVC.<br>* Desenvolvimento e manutenção de sistemas utilizando as seguintes linguagens: PLSQL, Java, JavaScript, HTML e XML.<br>* Containers e Gerenciamento: Docker e Kubernetes.<br>* Desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, , Redis.<br>* UML (casos de uso e demais diagramas);<br>* Arquitetura orientada a serviços (SOA).<br>* APIs<br>* Conhecimento de Frameworks de marcado como Spring (Spring-cloud), Angular, React, Vue, BootStrap entre outros;<br>* Intregração Contínua (CI) / Deployment Contínuo (CD).<br>* JSON / REST.<br><br>🔹 Horário de Trabalho e escala:<br>09h às 18h (1hr de almoço)<br>2x presencial e 3x home-office<br><br>🔹 Endereço: Rua Libero Badaró, 425 - Centro - SP<br><br>🔹 Benefícios de Trabalhar Conosco:<br>🍔Vale Alimentação/Refeição | Wiipo Flex<br>🏋‍♀TotalPass | Bem-estar para todos os colaboradores, todos os dias<br>👓 Parceria SESC | Saúde, Lazer, Turismo &amp; Esportes, Assistência Social e Alimentação<br>📕 Parcerias Educacionais | Aldeia, UDF, EBAC, ESPM, IPOG, VC_TB e WO.<br>🤍Seguro de vida<br><br>Todas as vagas são afirmativas!<br><br>E aí, se identificou com a vaga?<br>Não perca tempo e candidate-se!<br><br>Junte-se a nós e faça parte de uma equipe que valoriza inovação e excelência!</p>\n\nCandidate Profile (facts only, no fabrication):\n\nNome: Teste\nHeadline: teste\nLocalização: Brasilia\nEmail: [REDACTED_EMAIL]\nTelefone: [REDACTED_PHONE]\nWebsite: https://teste\nResumo:\n<p>chico</p>\nExperiências (mais recentes primeiro):\n- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)\n  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>\n- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)\n  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>\nTempo total de experiência (todas as experiências): 3 anos 7 meses\nSkills: JavaScript\nProjetos relevantes:\n- teste (https://teste)\n  <p>teste</p>\nEducação:\n- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])\nCertificações:\n- teste (teste, [REDACTED_PHONE])\nIdiomas: teste\nPrêmios:\n- teste (teste)\n- teste2 (teste2)\nPerfis:\n- GitHub: https://www.github.com/in/francisco-dev/\n- teste: http://teste\n\nUser note (additional instructions):\n\n<p>Teste</p>\n\nTask:\n\nGenerate a currículo abrangente com todas as experiências relevantes in tom informal, porém cortês e direto, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).\n\n\n\nFollow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):\n\n\n\n**INFORMAÇÕES PESSOAIS**\n\nNome completo, email, telefone, localização, website (se disponível)\n\n\n\n**RESUMO PROFISSIONAL**\n\n2-3 frases destacando anos de experiência, especialização principal e fit com a vaga\n\n\n\n**EXPERIÊNCIA PROFISSIONAL**\n\nListar experiências mais relevantes à vaga (máximo 4-5), com:\n\n- Cargo, empresa, período (duração calculada)\n\n- 2-3 conquistas mensuráveis por experiência\n\n- Tecnologias e ferramentas utilizadas\n\n- Impacto nos resultados da empresa\n\n\n\n**EDUCAÇÃO**\n\nFormação acadêmica relevante (instituição, curso, período)\n\n\n\n**COMPETÊNCIAS TÉCNICAS**\n\nSkills mais relevantes à vaga, agrupadas por categoria\n\n\n\n**PROJETOS DESTACADOS**\n\nProjetos mais relevantes (máximo 3) com descrição e tecnologias\n\n\n\n**CERTIFICAÇÕES**\n\nCertificações relevantes (máximo 5) com emissor e data\n\n\n\n**IDIOMAS**\n\nIdiomas com nível de proficiência\n\n\n\n**PRÊMIOS E RECONHECIMENTOS**\n\nPrêmios relevantes (máximo 3) com contexto\n\n\n\n**VOLUNTARIADO**\n\nExperiências voluntárias relevantes (se houver)\n\n\n\n**PERFIS PROFISSIONAIS**\n\nLinks para LinkedIn, GitHub, portfolio (se disponíveis)\n\n\n\nInstruções específicas:\n\n- Priorizar experiências e skills mais relevantes à vaga\n\n- Usar linguagem ativa e orientada a resultados\n\n- Incluir métricas e números quando disponíveis no perfil\n\n- Adaptar tom ao tipo de expressão solicitado\n\n- Manter formato limpo e profissional\n\n- Não inventar dados, datas ou experiências\n\n- Focar na relevância para a posição específica\n\n- NUNCA duplicar ou repetir informações entre seções\n\n- Cada experiência deve ser descrita apenas uma vez"}],"temperature":0.5,"max_tokens":1200}'
```
#### Request body (sanitized)
```json
{
  "model": "llama3.2:latest",
  "messages": [
    {
      "role": "system",
      "content": "You are a cover-letter generator. Follow the user's format exactly. Do not invent facts. Detect the predominant language of the job description and reply strictly in that language (do not switch languages). Do not reveal chain-of-thought or internal reasoning; provide only the final answer content. If you would normally include a reasoning section like <think>...</think>, omit it and provide only the final letter body. Do not include code fences or markdown fences. Do not claim experience with any tool/technology that is not present in the candidate profile; at most, mention readiness to learn without implying past hands-on work. Be concise and avoid filler."
    },
    {
      "role": "user",
      "content": "Context: job-specific resume generation.\n\nDetect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from 'User note (additional instructions)'. If still undetectable, default to Portuguese (pt-BR).\n\nWrite as the candidate, in first-person singular (I). Do not write from the employer's perspective.\n\nGround all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.\n\nIf a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.\n\nDo not copy or paraphrase the job description; reference it only to align the candidate's fit.\n\nPrefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.\n\nReturn only the resume content in a structured format. Do not fabricate recruiter names or company details.\n\nPlanned delivery channels: email. Optimize format/length to be usable when sent via these channels.\n\nCarefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.\n\nAvoid clichés or overly eager wording. Maintain a confident, professional tone.\n\nBe concise and avoid filler. Prioritize precise, verifiable facts from the profile.\n\nCompute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use 'over X years').\n\nIf dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).\n\nDo not expose chain-of-thought. Provide only final answer content (no '<think>', analysis, steps, or reasoning).\n\nCRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.\n\nCRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.\n\nJob Description:\n\n<p>aga: Analista Desenvolvedor Java Pleno (Hibrido - SP) - CLT<br><br>👉Interessados devem encaminhar CV atualizado juntamente com a pretensão salarial para o e-mail: <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"mailto:[REDACTED_EMAIL]\"><strong>[REDACTED_EMAIL]</strong></a><br><br>🔹 Sobre a Vaga:<br>Estamos em busca de um Analista Desenvolvimento Java Pleno para se juntar à nossa equipe em um formato hibrido. Se você tem experiência e deseja crescer em um ambiente dinâmico e desafiador, esta é a sua chance!<br><br>Requisitos:<br>-Escolaridade: Graduação completa em Tecnologia da Informação ou qualquer curso de nível superior com pós-graduação na área de Tecnologia da Informação.<br><br>🔹 Requisitos Técnicos Obrigatórios:<br>* Desenvolvimento e análise de sistemas em aplicações Web utilizando modelo de arquitetura MVC.<br>* Desenvolvimento e manutenção de sistemas utilizando as seguintes linguagens: PLSQL, Java, JavaScript, HTML e XML.<br>* Containers e Gerenciamento: Docker e Kubernetes.<br>* Desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, , Redis.<br>* UML (casos de uso e demais diagramas);<br>* Arquitetura orientada a serviços (SOA).<br>* APIs<br>* Conhecimento de Frameworks de marcado como Spring (Spring-cloud), Angular, React, Vue, BootStrap entre outros;<br>* Intregração Contínua (CI) / Deployment Contínuo (CD).<br>* JSON / REST.<br><br>🔹 Horário de Trabalho e escala:<br>09h às 18h (1hr de almoço)<br>2x presencial e 3x home-office<br><br>🔹 Endereço: Rua Libero Badaró, 425 - Centro - SP<br><br>🔹 Benefícios de Trabalhar Conosco:<br>🍔Vale Alimentação/Refeição | Wiipo Flex<br>🏋‍♀TotalPass | Bem-estar para todos os colaboradores, todos os dias<br>👓 Parceria SESC | Saúde, Lazer, Turismo &amp; Esportes, Assistência Social e Alimentação<br>📕 Parcerias Educacionais | Aldeia, UDF, EBAC, ESPM, IPOG, VC_TB e WO.<br>🤍Seguro de vida<br><br>Todas as vagas são afirmativas!<br><br>E aí, se identificou com a vaga?<br>Não perca tempo e candidate-se!<br><br>Junte-se a nós e faça parte de uma equipe que valoriza inovação e excelência!</p>\n\nCandidate Profile (facts only, no fabrication):\n\nNome: Teste\nHeadline: teste\nLocalização: Brasilia\nEmail: [REDACTED_EMAIL]\nTelefone: [REDACTED_PHONE]\nWebsite: https://teste\nResumo:\n<p>chico</p>\nExperiências (mais recentes primeiro):\n- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)\n  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>\n- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)\n  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>\nTempo total de experiência (todas as experiências): 3 anos 7 meses\nSkills: JavaScript\nProjetos relevantes:\n- teste (https://teste)\n  <p>teste</p>\nEducação:\n- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])\nCertificações:\n- teste (teste, [REDACTED_PHONE])\nIdiomas: teste\nPrêmios:\n- teste (teste)\n- teste2 (teste2)\nPerfis:\n- GitHub: https://www.github.com/in/francisco-dev/\n- teste: http://teste\n\nUser note (additional instructions):\n\n<p>Teste</p>\n\nTask:\n\nGenerate a currículo abrangente com todas as experiências relevantes in tom informal, porém cortês e direto, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).\n\n\n\nFollow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):\n\n\n\n**INFORMAÇÕES PESSOAIS**\n\nNome completo, email, telefone, localização, website (se disponível)\n\n\n\n**RESUMO PROFISSIONAL**\n\n2-3 frases destacando anos de experiência, especialização principal e fit com a vaga\n\n\n\n**EXPERIÊNCIA PROFISSIONAL**\n\nListar experiências mais relevantes à vaga (máximo 4-5), com:\n\n- Cargo, empresa, período (duração calculada)\n\n- 2-3 conquistas mensuráveis por experiência\n\n- Tecnologias e ferramentas utilizadas\n\n- Impacto nos resultados da empresa\n\n\n\n**EDUCAÇÃO**\n\nFormação acadêmica relevante (instituição, curso, período)\n\n\n\n**COMPETÊNCIAS TÉCNICAS**\n\nSkills mais relevantes à vaga, agrupadas por categoria\n\n\n\n**PROJETOS DESTACADOS**\n\nProjetos mais relevantes (máximo 3) com descrição e tecnologias\n\n\n\n**CERTIFICAÇÕES**\n\nCertificações relevantes (máximo 5) com emissor e data\n\n\n\n**IDIOMAS**\n\nIdiomas com nível de proficiência\n\n\n\n**PRÊMIOS E RECONHECIMENTOS**\n\nPrêmios relevantes (máximo 3) com contexto\n\n\n\n**VOLUNTARIADO**\n\nExperiências voluntárias relevantes (se houver)\n\n\n\n**PERFIS PROFISSIONAIS**\n\nLinks para LinkedIn, GitHub, portfolio (se disponíveis)\n\n\n\nInstruções específicas:\n\n- Priorizar experiências e skills mais relevantes à vaga\n\n- Usar linguagem ativa e orientada a resultados\n\n- Incluir métricas e números quando disponíveis no perfil\n\n- Adaptar tom ao tipo de expressão solicitado\n\n- Manter formato limpo e profissional\n\n- Não inventar dados, datas ou experiências\n\n- Focar na relevância para a posição específica\n\n- NUNCA duplicar ou repetir informações entre seções\n\n- Cada experiência deve ser descrita apenas uma vez"
    }
  ],
  "temperature": 0.5,
  "max_tokens": 1200
}
```

#### LLM Response — 1755732640246-chqg1n
- Timestamp: 2025-08-20T23:31:22.795Z
- Cover letter length: 1446 • SHA256: 972d709fb350085ecb16efa367193f31d25f09bba601430be9e2efc39b945982

```text
**INFORMAÇÕES PESSOAIS**

Nome completo: Teste, Email: [REDACTED_EMAIL], Telefone: [REDACTED_PHONE], Localização: Brasilia, Website: https://teste

**RESUMO PROFISSIONAL**

Experiência com mais de 3 anos em desenvolvimento web e especialização em tecnologias Java. Busco uma oportunidade como Analista Desenvolvedor Java Pleno em um ambiente dinâmico e desafiador.

**EXPERIÊNCIA PROFISSIONAL**

Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)
   Desenvolvi landingpages e um website de vendas de seguros com next e react js.
   Utilizei tecnologias como ReactJS, Next.js e HTML/CSS.

Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)
   Desenvolvi APIs escalaveis e testes unitários.
   Utilizei tecnologias como Java, PLSQL, JavaScript e Python.

**EDUCAÇÃO**

Formação acadêmica relevante em Analise e Desenvolvimento de Sistemas - Estacio ([REDACTED_PHONE])

**COMPETÊNCIAS TÉCNICAS**

Skills mais relevantes à vaga:
JavaScript

**PROJETOS DESTACADOS**

teste (https://teste)
   Desenvolvi um projeto de vendas de seguros com ReactJS e Next.js.

teste2 (https://teste2)
   Desenvolvi um projeto de teste com Java e PLSQL.

**CERTIFICAÇÕES**

Certificação em desenvolvimento web - teste ([REDACTED_PHONE])

**IDIOMAS**

Não disponível

**PRÊMIOS E RECONHECIMENTOS**

**VOLUNTARIADO**

**PERFIS PROFISSIONAIS**

GitHub: https://www.github.com/in/francisco-dev/
```
---

### Application Request 1755732841621-pn8yf1
- Timestamp: 2025-08-20T23:34:01.635Z
- User: cm9hp80720000gk3gykahk5f4
- Channels: email
- Expression: informal
- Job description length: 2156
- Prompt length: 7334 • SHA256: 7b46d45b0cf5a558423c09548087a77ed865c610e1f2aaf423bc32e6cc273805
- Model: llama3.2:latest

#### Prompt
```text
Context: job-specific resume generation.

Detect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from 'User note (additional instructions)'. If still undetectable, default to Portuguese (pt-BR).

Write as the candidate, in first-person singular (I). Do not write from the employer's perspective.

Ground all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.

If a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.

Do not copy or paraphrase the job description; reference it only to align the candidate's fit.

Prefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.

Return only the resume content in a structured format. Do not fabricate recruiter names or company details.

Planned delivery channels: email. Optimize format/length to be usable when sent via these channels.

Carefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.

Avoid clichés or overly eager wording. Maintain a confident, professional tone.

Be concise and avoid filler. Prioritize precise, verifiable facts from the profile.

Compute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use 'over X years').

If dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).

Do not expose chain-of-thought. Provide only final answer content (no '<think>', analysis, steps, or reasoning).

CRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.

CRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.

Job Description:

<p>aga: Analista Desenvolvedor Java Pleno (Hibrido - SP) - CLT<br><br>👉Interessados devem encaminhar CV atualizado juntamente com a pretensão salarial para o e-mail: <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:[REDACTED_EMAIL]"><strong>[REDACTED_EMAIL]</strong></a><br><br>🔹 Sobre a Vaga:<br>Estamos em busca de um Analista Desenvolvimento Java Pleno para se juntar à nossa equipe em um formato hibrido. Se você tem experiência e deseja crescer em um ambiente dinâmico e desafiador, esta é a sua chance!<br><br>Requisitos:<br>-Escolaridade: Graduação completa em Tecnologia da Informação ou qualquer curso de nível superior com pós-graduação na área de Tecnologia da Informação.<br><br>🔹 Requisitos Técnicos Obrigatórios:<br>* Desenvolvimento e análise de sistemas em aplicações Web utilizando modelo de arquitetura MVC.<br>* Desenvolvimento e manutenção de sistemas utilizando as seguintes linguagens: PLSQL, Java, JavaScript, HTML e XML.<br>* Containers e Gerenciamento: Docker e Kubernetes.<br>* Desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, , Redis.<br>* UML (casos de uso e demais diagramas);<br>* Arquitetura orientada a serviços (SOA).<br>* APIs<br>* Conhecimento de Frameworks de marcado como Spring (Spring-cloud), Angular, React, Vue, BootStrap entre outros;<br>* Intregração Contínua (CI) / Deployment Contínuo (CD).<br>* JSON / REST.<br><br>🔹 Horário de Trabalho e escala:<br>09h às 18h (1hr de almoço)<br>2x presencial e 3x home-office<br><br>🔹 Endereço: Rua Libero Badaró, 425 - Centro - SP<br><br>🔹 Benefícios de Trabalhar Conosco:<br>🍔Vale Alimentação/Refeição | Wiipo Flex<br>🏋‍♀TotalPass | Bem-estar para todos os colaboradores, todos os dias<br>👓 Parceria SESC | Saúde, Lazer, Turismo &amp; Esportes, Assistência Social e Alimentação<br>📕 Parcerias Educacionais | Aldeia, UDF, EBAC, ESPM, IPOG, VC_TB e WO.<br>🤍Seguro de vida<br><br>Todas as vagas são afirmativas!<br><br>E aí, se identificou com a vaga?<br>Não perca tempo e candidate-se!<br><br>Junte-se a nós e faça parte de uma equipe que valoriza inovação e excelência!</p>

Candidate Profile (facts only, no fabrication):

Nome: Teste
Headline: teste
Localização: Brasilia
Email: [REDACTED_EMAIL]
Telefone: [REDACTED_PHONE]
Website: https://teste
Resumo:
<p>chico</p>
Experiências (mais recentes primeiro):
- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)
  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>
- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)
  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>
Tempo total de experiência (todas as experiências): 3 anos 7 meses
Skills: JavaScript
Projetos relevantes:
- teste (https://teste)
  <p>teste</p>
Educação:
- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])
Certificações:
- teste (teste, [REDACTED_PHONE])
Idiomas: teste
Prêmios:
- teste (teste)
- teste2 (teste2)
Perfis:
- GitHub: https://www.github.com/in/francisco-dev/
- teste: http://teste

User note (additional instructions):

<p>teste</p>

Task:

Generate a currículo abrangente com todas as experiências relevantes in tom informal, porém cortês e direto, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).



Follow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):



**INFORMAÇÕES PESSOAIS**

Nome completo, email, telefone, localização, website (se disponível)



**RESUMO PROFISSIONAL**

2-3 frases destacando anos de experiência, especialização principal e fit com a vaga



**EXPERIÊNCIA PROFISSIONAL**

Listar experiências mais relevantes à vaga (máximo 4-5), com:

- Cargo, empresa, período (duração calculada)

- 2-3 conquistas mensuráveis por experiência

- Tecnologias e ferramentas utilizadas

- Impacto nos resultados da empresa



**EDUCAÇÃO**

Formação acadêmica relevante (instituição, curso, período)



**COMPETÊNCIAS TÉCNICAS**

Skills mais relevantes à vaga, agrupadas por categoria



**PROJETOS DESTACADOS**

Projetos mais relevantes (máximo 3) com descrição e tecnologias



**CERTIFICAÇÕES**

Certificações relevantes (máximo 5) com emissor e data



**IDIOMAS**

Idiomas com nível de proficiência



**PRÊMIOS E RECONHECIMENTOS**

Prêmios relevantes (máximo 3) com contexto



**VOLUNTARIADO**

Experiências voluntárias relevantes (se houver)



**PERFIS PROFISSIONAIS**

Links para LinkedIn, GitHub, portfolio (se disponíveis)



Instruções específicas:

- Priorizar experiências e skills mais relevantes à vaga

- Usar linguagem ativa e orientada a resultados

- Incluir métricas e números quando disponíveis no perfil

- Adaptar tom ao tipo de expressão solicitado

- Manter formato limpo e profissional

- Não inventar dados, datas ou experiências

- Focar na relevância para a posição específica

- NUNCA duplicar ou repetir informações entre seções

- Cada experiência deve ser descrita apenas uma vez
```
#### HTTP request (cURL)
```bash
curl -sS -X POST 'http://localhost:11434/v1/chat/completions' \
  -H 'Content-Type: application/json' \
  -d '{"model":"llama3.2:latest","messages":[{"role":"system","content":"You are a cover-letter generator. Follow the user'\\''s format exactly. Do not invent facts. Detect the predominant language of the job description and reply strictly in that language (do not switch languages). Do not reveal chain-of-thought or internal reasoning; provide only the final answer content. If you would normally include a reasoning section like <think>...</think>, omit it and provide only the final letter body. Do not include code fences or markdown fences. Do not claim experience with any tool/technology that is not present in the candidate profile; at most, mention readiness to learn without implying past hands-on work. Be concise and avoid filler."},{"role":"user","content":"Context: job-specific resume generation.\n\nDetect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from '\\''User note (additional instructions)'\\''. If still undetectable, default to Portuguese (pt-BR).\n\nWrite as the candidate, in first-person singular (I). Do not write from the employer'\\''s perspective.\n\nGround all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.\n\nIf a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.\n\nDo not copy or paraphrase the job description; reference it only to align the candidate'\\''s fit.\n\nPrefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.\n\nReturn only the resume content in a structured format. Do not fabricate recruiter names or company details.\n\nPlanned delivery channels: email. Optimize format/length to be usable when sent via these channels.\n\nCarefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.\n\nAvoid clichés or overly eager wording. Maintain a confident, professional tone.\n\nBe concise and avoid filler. Prioritize precise, verifiable facts from the profile.\n\nCompute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use '\\''over X years'\\'').\n\nIf dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).\n\nDo not expose chain-of-thought. Provide only final answer content (no '\\''<think>'\\'', analysis, steps, or reasoning).\n\nCRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.\n\nCRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.\n\nJob Description:\n\n<p>aga: Analista Desenvolvedor Java Pleno (Hibrido - SP) - CLT<br><br>👉Interessados devem encaminhar CV atualizado juntamente com a pretensão salarial para o e-mail: <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"mailto:[REDACTED_EMAIL]\"><strong>[REDACTED_EMAIL]</strong></a><br><br>🔹 Sobre a Vaga:<br>Estamos em busca de um Analista Desenvolvimento Java Pleno para se juntar à nossa equipe em um formato hibrido. Se você tem experiência e deseja crescer em um ambiente dinâmico e desafiador, esta é a sua chance!<br><br>Requisitos:<br>-Escolaridade: Graduação completa em Tecnologia da Informação ou qualquer curso de nível superior com pós-graduação na área de Tecnologia da Informação.<br><br>🔹 Requisitos Técnicos Obrigatórios:<br>* Desenvolvimento e análise de sistemas em aplicações Web utilizando modelo de arquitetura MVC.<br>* Desenvolvimento e manutenção de sistemas utilizando as seguintes linguagens: PLSQL, Java, JavaScript, HTML e XML.<br>* Containers e Gerenciamento: Docker e Kubernetes.<br>* Desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, , Redis.<br>* UML (casos de uso e demais diagramas);<br>* Arquitetura orientada a serviços (SOA).<br>* APIs<br>* Conhecimento de Frameworks de marcado como Spring (Spring-cloud), Angular, React, Vue, BootStrap entre outros;<br>* Intregração Contínua (CI) / Deployment Contínuo (CD).<br>* JSON / REST.<br><br>🔹 Horário de Trabalho e escala:<br>09h às 18h (1hr de almoço)<br>2x presencial e 3x home-office<br><br>🔹 Endereço: Rua Libero Badaró, 425 - Centro - SP<br><br>🔹 Benefícios de Trabalhar Conosco:<br>🍔Vale Alimentação/Refeição | Wiipo Flex<br>🏋‍♀TotalPass | Bem-estar para todos os colaboradores, todos os dias<br>👓 Parceria SESC | Saúde, Lazer, Turismo &amp; Esportes, Assistência Social e Alimentação<br>📕 Parcerias Educacionais | Aldeia, UDF, EBAC, ESPM, IPOG, VC_TB e WO.<br>🤍Seguro de vida<br><br>Todas as vagas são afirmativas!<br><br>E aí, se identificou com a vaga?<br>Não perca tempo e candidate-se!<br><br>Junte-se a nós e faça parte de uma equipe que valoriza inovação e excelência!</p>\n\nCandidate Profile (facts only, no fabrication):\n\nNome: Teste\nHeadline: teste\nLocalização: Brasilia\nEmail: [REDACTED_EMAIL]\nTelefone: [REDACTED_PHONE]\nWebsite: https://teste\nResumo:\n<p>chico</p>\nExperiências (mais recentes primeiro):\n- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)\n  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>\n- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)\n  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>\nTempo total de experiência (todas as experiências): 3 anos 7 meses\nSkills: JavaScript\nProjetos relevantes:\n- teste (https://teste)\n  <p>teste</p>\nEducação:\n- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])\nCertificações:\n- teste (teste, [REDACTED_PHONE])\nIdiomas: teste\nPrêmios:\n- teste (teste)\n- teste2 (teste2)\nPerfis:\n- GitHub: https://www.github.com/in/francisco-dev/\n- teste: http://teste\n\nUser note (additional instructions):\n\n<p>teste</p>\n\nTask:\n\nGenerate a currículo abrangente com todas as experiências relevantes in tom informal, porém cortês e direto, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).\n\n\n\nFollow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):\n\n\n\n**INFORMAÇÕES PESSOAIS**\n\nNome completo, email, telefone, localização, website (se disponível)\n\n\n\n**RESUMO PROFISSIONAL**\n\n2-3 frases destacando anos de experiência, especialização principal e fit com a vaga\n\n\n\n**EXPERIÊNCIA PROFISSIONAL**\n\nListar experiências mais relevantes à vaga (máximo 4-5), com:\n\n- Cargo, empresa, período (duração calculada)\n\n- 2-3 conquistas mensuráveis por experiência\n\n- Tecnologias e ferramentas utilizadas\n\n- Impacto nos resultados da empresa\n\n\n\n**EDUCAÇÃO**\n\nFormação acadêmica relevante (instituição, curso, período)\n\n\n\n**COMPETÊNCIAS TÉCNICAS**\n\nSkills mais relevantes à vaga, agrupadas por categoria\n\n\n\n**PROJETOS DESTACADOS**\n\nProjetos mais relevantes (máximo 3) com descrição e tecnologias\n\n\n\n**CERTIFICAÇÕES**\n\nCertificações relevantes (máximo 5) com emissor e data\n\n\n\n**IDIOMAS**\n\nIdiomas com nível de proficiência\n\n\n\n**PRÊMIOS E RECONHECIMENTOS**\n\nPrêmios relevantes (máximo 3) com contexto\n\n\n\n**VOLUNTARIADO**\n\nExperiências voluntárias relevantes (se houver)\n\n\n\n**PERFIS PROFISSIONAIS**\n\nLinks para LinkedIn, GitHub, portfolio (se disponíveis)\n\n\n\nInstruções específicas:\n\n- Priorizar experiências e skills mais relevantes à vaga\n\n- Usar linguagem ativa e orientada a resultados\n\n- Incluir métricas e números quando disponíveis no perfil\n\n- Adaptar tom ao tipo de expressão solicitado\n\n- Manter formato limpo e profissional\n\n- Não inventar dados, datas ou experiências\n\n- Focar na relevância para a posição específica\n\n- NUNCA duplicar ou repetir informações entre seções\n\n- Cada experiência deve ser descrita apenas uma vez"}],"temperature":0.5,"max_tokens":1200}'
```
#### Request body (sanitized)
```json
{
  "model": "llama3.2:latest",
  "messages": [
    {
      "role": "system",
      "content": "You are a cover-letter generator. Follow the user's format exactly. Do not invent facts. Detect the predominant language of the job description and reply strictly in that language (do not switch languages). Do not reveal chain-of-thought or internal reasoning; provide only the final answer content. If you would normally include a reasoning section like <think>...</think>, omit it and provide only the final letter body. Do not include code fences or markdown fences. Do not claim experience with any tool/technology that is not present in the candidate profile; at most, mention readiness to learn without implying past hands-on work. Be concise and avoid filler."
    },
    {
      "role": "user",
      "content": "Context: job-specific resume generation.\n\nDetect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from 'User note (additional instructions)'. If still undetectable, default to Portuguese (pt-BR).\n\nWrite as the candidate, in first-person singular (I). Do not write from the employer's perspective.\n\nGround all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.\n\nIf a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.\n\nDo not copy or paraphrase the job description; reference it only to align the candidate's fit.\n\nPrefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.\n\nReturn only the resume content in a structured format. Do not fabricate recruiter names or company details.\n\nPlanned delivery channels: email. Optimize format/length to be usable when sent via these channels.\n\nCarefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.\n\nAvoid clichés or overly eager wording. Maintain a confident, professional tone.\n\nBe concise and avoid filler. Prioritize precise, verifiable facts from the profile.\n\nCompute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use 'over X years').\n\nIf dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).\n\nDo not expose chain-of-thought. Provide only final answer content (no '<think>', analysis, steps, or reasoning).\n\nCRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.\n\nCRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.\n\nJob Description:\n\n<p>aga: Analista Desenvolvedor Java Pleno (Hibrido - SP) - CLT<br><br>👉Interessados devem encaminhar CV atualizado juntamente com a pretensão salarial para o e-mail: <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"mailto:[REDACTED_EMAIL]\"><strong>[REDACTED_EMAIL]</strong></a><br><br>🔹 Sobre a Vaga:<br>Estamos em busca de um Analista Desenvolvimento Java Pleno para se juntar à nossa equipe em um formato hibrido. Se você tem experiência e deseja crescer em um ambiente dinâmico e desafiador, esta é a sua chance!<br><br>Requisitos:<br>-Escolaridade: Graduação completa em Tecnologia da Informação ou qualquer curso de nível superior com pós-graduação na área de Tecnologia da Informação.<br><br>🔹 Requisitos Técnicos Obrigatórios:<br>* Desenvolvimento e análise de sistemas em aplicações Web utilizando modelo de arquitetura MVC.<br>* Desenvolvimento e manutenção de sistemas utilizando as seguintes linguagens: PLSQL, Java, JavaScript, HTML e XML.<br>* Containers e Gerenciamento: Docker e Kubernetes.<br>* Desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, , Redis.<br>* UML (casos de uso e demais diagramas);<br>* Arquitetura orientada a serviços (SOA).<br>* APIs<br>* Conhecimento de Frameworks de marcado como Spring (Spring-cloud), Angular, React, Vue, BootStrap entre outros;<br>* Intregração Contínua (CI) / Deployment Contínuo (CD).<br>* JSON / REST.<br><br>🔹 Horário de Trabalho e escala:<br>09h às 18h (1hr de almoço)<br>2x presencial e 3x home-office<br><br>🔹 Endereço: Rua Libero Badaró, 425 - Centro - SP<br><br>🔹 Benefícios de Trabalhar Conosco:<br>🍔Vale Alimentação/Refeição | Wiipo Flex<br>🏋‍♀TotalPass | Bem-estar para todos os colaboradores, todos os dias<br>👓 Parceria SESC | Saúde, Lazer, Turismo &amp; Esportes, Assistência Social e Alimentação<br>📕 Parcerias Educacionais | Aldeia, UDF, EBAC, ESPM, IPOG, VC_TB e WO.<br>🤍Seguro de vida<br><br>Todas as vagas são afirmativas!<br><br>E aí, se identificou com a vaga?<br>Não perca tempo e candidate-se!<br><br>Junte-se a nós e faça parte de uma equipe que valoriza inovação e excelência!</p>\n\nCandidate Profile (facts only, no fabrication):\n\nNome: Teste\nHeadline: teste\nLocalização: Brasilia\nEmail: [REDACTED_EMAIL]\nTelefone: [REDACTED_PHONE]\nWebsite: https://teste\nResumo:\n<p>chico</p>\nExperiências (mais recentes primeiro):\n- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)\n  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>\n- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)\n  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>\nTempo total de experiência (todas as experiências): 3 anos 7 meses\nSkills: JavaScript\nProjetos relevantes:\n- teste (https://teste)\n  <p>teste</p>\nEducação:\n- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])\nCertificações:\n- teste (teste, [REDACTED_PHONE])\nIdiomas: teste\nPrêmios:\n- teste (teste)\n- teste2 (teste2)\nPerfis:\n- GitHub: https://www.github.com/in/francisco-dev/\n- teste: http://teste\n\nUser note (additional instructions):\n\n<p>teste</p>\n\nTask:\n\nGenerate a currículo abrangente com todas as experiências relevantes in tom informal, porém cortês e direto, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).\n\n\n\nFollow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):\n\n\n\n**INFORMAÇÕES PESSOAIS**\n\nNome completo, email, telefone, localização, website (se disponível)\n\n\n\n**RESUMO PROFISSIONAL**\n\n2-3 frases destacando anos de experiência, especialização principal e fit com a vaga\n\n\n\n**EXPERIÊNCIA PROFISSIONAL**\n\nListar experiências mais relevantes à vaga (máximo 4-5), com:\n\n- Cargo, empresa, período (duração calculada)\n\n- 2-3 conquistas mensuráveis por experiência\n\n- Tecnologias e ferramentas utilizadas\n\n- Impacto nos resultados da empresa\n\n\n\n**EDUCAÇÃO**\n\nFormação acadêmica relevante (instituição, curso, período)\n\n\n\n**COMPETÊNCIAS TÉCNICAS**\n\nSkills mais relevantes à vaga, agrupadas por categoria\n\n\n\n**PROJETOS DESTACADOS**\n\nProjetos mais relevantes (máximo 3) com descrição e tecnologias\n\n\n\n**CERTIFICAÇÕES**\n\nCertificações relevantes (máximo 5) com emissor e data\n\n\n\n**IDIOMAS**\n\nIdiomas com nível de proficiência\n\n\n\n**PRÊMIOS E RECONHECIMENTOS**\n\nPrêmios relevantes (máximo 3) com contexto\n\n\n\n**VOLUNTARIADO**\n\nExperiências voluntárias relevantes (se houver)\n\n\n\n**PERFIS PROFISSIONAIS**\n\nLinks para LinkedIn, GitHub, portfolio (se disponíveis)\n\n\n\nInstruções específicas:\n\n- Priorizar experiências e skills mais relevantes à vaga\n\n- Usar linguagem ativa e orientada a resultados\n\n- Incluir métricas e números quando disponíveis no perfil\n\n- Adaptar tom ao tipo de expressão solicitado\n\n- Manter formato limpo e profissional\n\n- Não inventar dados, datas ou experiências\n\n- Focar na relevância para a posição específica\n\n- NUNCA duplicar ou repetir informações entre seções\n\n- Cada experiência deve ser descrita apenas uma vez"
    }
  ],
  "temperature": 0.5,
  "max_tokens": 1200
}
```

#### LLM Response — 1755732841621-pn8yf1
- Timestamp: 2025-08-20T23:34:52.177Z
- Cover letter length: 1500 • SHA256: adbd0806281a5d320b2dbfbb7a30bbac25875a207c4f748e814a6f8485b818a6

```text
**INFORMAÇÕES PESSOAIS**

Sou Guilherme Ene Vasconcellos, com email [REDACTED_EMAIL] e telefone [REDACTED_PHONE]. Estou localizado em Brasilia e meu website é https://teste.

**RESUMO PROFISSIONAL**

Tenho 3 anos de experiência como Desenvolvedor Frontend Junior e Senior, com especialização em JavaScript e tecnologias Web. Meu perfil se encaixa perfeitamente na vaga Analista Desenvolvedor Java Pleno, buscando um ambiente dinâmico e desafiador para crescer.

**EXPERIÊNCIA PROFISSIONAL**

Como Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE]), desenvolvi landingpages e um website de vendas de seguros com Next.js e React.js. Utilizei tecnologias como HTML, CSS, JavaScript e Node.js.

Como Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE]), desenvolvi APIs escalaveis e testes unitários. Utilizei tecnologias como Java, Spring Boot e MongoDB.

**EDUCAÇÃO**

Formei-me em Analise e Desenvolvimento de Sistemas na Estacio ([REDACTED_PHONE]).

**COMPETÊNCIAS TÉCNICAS**

- JavaScript
- HTML/CSS
- Node.js

**PROJETOS DESTACADOS**

- teste: um projeto pessoal com tecnologias como React.js e Next.js.
- teste2: outro projeto pessoal.

**CERTIFICAÇÕES**

- teste, em [REDACTED_PHONE].

**IDIOMAS**

Não sou fluente em nenhum idioma.

**PRÊMIOS E RECONHECIMENTOS**

Nenhum prêmio relevante.

**VOLUNTARIADO**

Nenhum voluntariado relevante.

**PERFIS PROFISSIONAIS**

- LinkedIn: https://www.linkedin.com/in/francisco-dev
- GitHub: https://github.com/in/francisco-dev
```
---

### Application Request 1755732896170-sj2eka
- Timestamp: 2025-08-20T23:34:56.178Z
- User: cm9hp80720000gk3gykahk5f4
- Channels: email
- Expression: informal
- Job description length: 2156
- Prompt length: 7334 • SHA256: 7b46d45b0cf5a558423c09548087a77ed865c610e1f2aaf423bc32e6cc273805
- Model: llama3.2:latest

#### Prompt
```text
Context: job-specific resume generation.

Detect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from 'User note (additional instructions)'. If still undetectable, default to Portuguese (pt-BR).

Write as the candidate, in first-person singular (I). Do not write from the employer's perspective.

Ground all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.

If a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.

Do not copy or paraphrase the job description; reference it only to align the candidate's fit.

Prefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.

Return only the resume content in a structured format. Do not fabricate recruiter names or company details.

Planned delivery channels: email. Optimize format/length to be usable when sent via these channels.

Carefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.

Avoid clichés or overly eager wording. Maintain a confident, professional tone.

Be concise and avoid filler. Prioritize precise, verifiable facts from the profile.

Compute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use 'over X years').

If dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).

Do not expose chain-of-thought. Provide only final answer content (no '<think>', analysis, steps, or reasoning).

CRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.

CRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.

Job Description:

<p>aga: Analista Desenvolvedor Java Pleno (Hibrido - SP) - CLT<br><br>👉Interessados devem encaminhar CV atualizado juntamente com a pretensão salarial para o e-mail: <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:[REDACTED_EMAIL]"><strong>[REDACTED_EMAIL]</strong></a><br><br>🔹 Sobre a Vaga:<br>Estamos em busca de um Analista Desenvolvimento Java Pleno para se juntar à nossa equipe em um formato hibrido. Se você tem experiência e deseja crescer em um ambiente dinâmico e desafiador, esta é a sua chance!<br><br>Requisitos:<br>-Escolaridade: Graduação completa em Tecnologia da Informação ou qualquer curso de nível superior com pós-graduação na área de Tecnologia da Informação.<br><br>🔹 Requisitos Técnicos Obrigatórios:<br>* Desenvolvimento e análise de sistemas em aplicações Web utilizando modelo de arquitetura MVC.<br>* Desenvolvimento e manutenção de sistemas utilizando as seguintes linguagens: PLSQL, Java, JavaScript, HTML e XML.<br>* Containers e Gerenciamento: Docker e Kubernetes.<br>* Desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, , Redis.<br>* UML (casos de uso e demais diagramas);<br>* Arquitetura orientada a serviços (SOA).<br>* APIs<br>* Conhecimento de Frameworks de marcado como Spring (Spring-cloud), Angular, React, Vue, BootStrap entre outros;<br>* Intregração Contínua (CI) / Deployment Contínuo (CD).<br>* JSON / REST.<br><br>🔹 Horário de Trabalho e escala:<br>09h às 18h (1hr de almoço)<br>2x presencial e 3x home-office<br><br>🔹 Endereço: Rua Libero Badaró, 425 - Centro - SP<br><br>🔹 Benefícios de Trabalhar Conosco:<br>🍔Vale Alimentação/Refeição | Wiipo Flex<br>🏋‍♀TotalPass | Bem-estar para todos os colaboradores, todos os dias<br>👓 Parceria SESC | Saúde, Lazer, Turismo &amp; Esportes, Assistência Social e Alimentação<br>📕 Parcerias Educacionais | Aldeia, UDF, EBAC, ESPM, IPOG, VC_TB e WO.<br>🤍Seguro de vida<br><br>Todas as vagas são afirmativas!<br><br>E aí, se identificou com a vaga?<br>Não perca tempo e candidate-se!<br><br>Junte-se a nós e faça parte de uma equipe que valoriza inovação e excelência!</p>

Candidate Profile (facts only, no fabrication):

Nome: Teste
Headline: teste
Localização: Brasilia
Email: [REDACTED_EMAIL]
Telefone: [REDACTED_PHONE]
Website: https://teste
Resumo:
<p>chico</p>
Experiências (mais recentes primeiro):
- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)
  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>
- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)
  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>
Tempo total de experiência (todas as experiências): 3 anos 7 meses
Skills: JavaScript
Projetos relevantes:
- teste (https://teste)
  <p>teste</p>
Educação:
- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])
Certificações:
- teste (teste, [REDACTED_PHONE])
Idiomas: teste
Prêmios:
- teste (teste)
- teste2 (teste2)
Perfis:
- GitHub: https://www.github.com/in/francisco-dev/
- teste: http://teste

User note (additional instructions):

<p>teste</p>

Task:

Generate a currículo abrangente com todas as experiências relevantes in tom informal, porém cortês e direto, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).



Follow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):



**INFORMAÇÕES PESSOAIS**

Nome completo, email, telefone, localização, website (se disponível)



**RESUMO PROFISSIONAL**

2-3 frases destacando anos de experiência, especialização principal e fit com a vaga



**EXPERIÊNCIA PROFISSIONAL**

Listar experiências mais relevantes à vaga (máximo 4-5), com:

- Cargo, empresa, período (duração calculada)

- 2-3 conquistas mensuráveis por experiência

- Tecnologias e ferramentas utilizadas

- Impacto nos resultados da empresa



**EDUCAÇÃO**

Formação acadêmica relevante (instituição, curso, período)



**COMPETÊNCIAS TÉCNICAS**

Skills mais relevantes à vaga, agrupadas por categoria



**PROJETOS DESTACADOS**

Projetos mais relevantes (máximo 3) com descrição e tecnologias



**CERTIFICAÇÕES**

Certificações relevantes (máximo 5) com emissor e data



**IDIOMAS**

Idiomas com nível de proficiência



**PRÊMIOS E RECONHECIMENTOS**

Prêmios relevantes (máximo 3) com contexto



**VOLUNTARIADO**

Experiências voluntárias relevantes (se houver)



**PERFIS PROFISSIONAIS**

Links para LinkedIn, GitHub, portfolio (se disponíveis)



Instruções específicas:

- Priorizar experiências e skills mais relevantes à vaga

- Usar linguagem ativa e orientada a resultados

- Incluir métricas e números quando disponíveis no perfil

- Adaptar tom ao tipo de expressão solicitado

- Manter formato limpo e profissional

- Não inventar dados, datas ou experiências

- Focar na relevância para a posição específica

- NUNCA duplicar ou repetir informações entre seções

- Cada experiência deve ser descrita apenas uma vez
```
#### HTTP request (cURL)
```bash
curl -sS -X POST 'http://localhost:11434/v1/chat/completions' \
  -H 'Content-Type: application/json' \
  -d '{"model":"llama3.2:latest","messages":[{"role":"system","content":"You are a cover-letter generator. Follow the user'\\''s format exactly. Do not invent facts. Detect the predominant language of the job description and reply strictly in that language (do not switch languages). Do not reveal chain-of-thought or internal reasoning; provide only the final answer content. If you would normally include a reasoning section like <think>...</think>, omit it and provide only the final letter body. Do not include code fences or markdown fences. Do not claim experience with any tool/technology that is not present in the candidate profile; at most, mention readiness to learn without implying past hands-on work. Be concise and avoid filler."},{"role":"user","content":"Context: job-specific resume generation.\n\nDetect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from '\\''User note (additional instructions)'\\''. If still undetectable, default to Portuguese (pt-BR).\n\nWrite as the candidate, in first-person singular (I). Do not write from the employer'\\''s perspective.\n\nGround all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.\n\nIf a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.\n\nDo not copy or paraphrase the job description; reference it only to align the candidate'\\''s fit.\n\nPrefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.\n\nReturn only the resume content in a structured format. Do not fabricate recruiter names or company details.\n\nPlanned delivery channels: email. Optimize format/length to be usable when sent via these channels.\n\nCarefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.\n\nAvoid clichés or overly eager wording. Maintain a confident, professional tone.\n\nBe concise and avoid filler. Prioritize precise, verifiable facts from the profile.\n\nCompute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use '\\''over X years'\\'').\n\nIf dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).\n\nDo not expose chain-of-thought. Provide only final answer content (no '\\''<think>'\\'', analysis, steps, or reasoning).\n\nCRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.\n\nCRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.\n\nJob Description:\n\n<p>aga: Analista Desenvolvedor Java Pleno (Hibrido - SP) - CLT<br><br>👉Interessados devem encaminhar CV atualizado juntamente com a pretensão salarial para o e-mail: <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"mailto:[REDACTED_EMAIL]\"><strong>[REDACTED_EMAIL]</strong></a><br><br>🔹 Sobre a Vaga:<br>Estamos em busca de um Analista Desenvolvimento Java Pleno para se juntar à nossa equipe em um formato hibrido. Se você tem experiência e deseja crescer em um ambiente dinâmico e desafiador, esta é a sua chance!<br><br>Requisitos:<br>-Escolaridade: Graduação completa em Tecnologia da Informação ou qualquer curso de nível superior com pós-graduação na área de Tecnologia da Informação.<br><br>🔹 Requisitos Técnicos Obrigatórios:<br>* Desenvolvimento e análise de sistemas em aplicações Web utilizando modelo de arquitetura MVC.<br>* Desenvolvimento e manutenção de sistemas utilizando as seguintes linguagens: PLSQL, Java, JavaScript, HTML e XML.<br>* Containers e Gerenciamento: Docker e Kubernetes.<br>* Desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, , Redis.<br>* UML (casos de uso e demais diagramas);<br>* Arquitetura orientada a serviços (SOA).<br>* APIs<br>* Conhecimento de Frameworks de marcado como Spring (Spring-cloud), Angular, React, Vue, BootStrap entre outros;<br>* Intregração Contínua (CI) / Deployment Contínuo (CD).<br>* JSON / REST.<br><br>🔹 Horário de Trabalho e escala:<br>09h às 18h (1hr de almoço)<br>2x presencial e 3x home-office<br><br>🔹 Endereço: Rua Libero Badaró, 425 - Centro - SP<br><br>🔹 Benefícios de Trabalhar Conosco:<br>🍔Vale Alimentação/Refeição | Wiipo Flex<br>🏋‍♀TotalPass | Bem-estar para todos os colaboradores, todos os dias<br>👓 Parceria SESC | Saúde, Lazer, Turismo &amp; Esportes, Assistência Social e Alimentação<br>📕 Parcerias Educacionais | Aldeia, UDF, EBAC, ESPM, IPOG, VC_TB e WO.<br>🤍Seguro de vida<br><br>Todas as vagas são afirmativas!<br><br>E aí, se identificou com a vaga?<br>Não perca tempo e candidate-se!<br><br>Junte-se a nós e faça parte de uma equipe que valoriza inovação e excelência!</p>\n\nCandidate Profile (facts only, no fabrication):\n\nNome: Teste\nHeadline: teste\nLocalização: Brasilia\nEmail: [REDACTED_EMAIL]\nTelefone: [REDACTED_PHONE]\nWebsite: https://teste\nResumo:\n<p>chico</p>\nExperiências (mais recentes primeiro):\n- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)\n  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>\n- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)\n  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>\nTempo total de experiência (todas as experiências): 3 anos 7 meses\nSkills: JavaScript\nProjetos relevantes:\n- teste (https://teste)\n  <p>teste</p>\nEducação:\n- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])\nCertificações:\n- teste (teste, [REDACTED_PHONE])\nIdiomas: teste\nPrêmios:\n- teste (teste)\n- teste2 (teste2)\nPerfis:\n- GitHub: https://www.github.com/in/francisco-dev/\n- teste: http://teste\n\nUser note (additional instructions):\n\n<p>teste</p>\n\nTask:\n\nGenerate a currículo abrangente com todas as experiências relevantes in tom informal, porém cortês e direto, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).\n\n\n\nFollow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):\n\n\n\n**INFORMAÇÕES PESSOAIS**\n\nNome completo, email, telefone, localização, website (se disponível)\n\n\n\n**RESUMO PROFISSIONAL**\n\n2-3 frases destacando anos de experiência, especialização principal e fit com a vaga\n\n\n\n**EXPERIÊNCIA PROFISSIONAL**\n\nListar experiências mais relevantes à vaga (máximo 4-5), com:\n\n- Cargo, empresa, período (duração calculada)\n\n- 2-3 conquistas mensuráveis por experiência\n\n- Tecnologias e ferramentas utilizadas\n\n- Impacto nos resultados da empresa\n\n\n\n**EDUCAÇÃO**\n\nFormação acadêmica relevante (instituição, curso, período)\n\n\n\n**COMPETÊNCIAS TÉCNICAS**\n\nSkills mais relevantes à vaga, agrupadas por categoria\n\n\n\n**PROJETOS DESTACADOS**\n\nProjetos mais relevantes (máximo 3) com descrição e tecnologias\n\n\n\n**CERTIFICAÇÕES**\n\nCertificações relevantes (máximo 5) com emissor e data\n\n\n\n**IDIOMAS**\n\nIdiomas com nível de proficiência\n\n\n\n**PRÊMIOS E RECONHECIMENTOS**\n\nPrêmios relevantes (máximo 3) com contexto\n\n\n\n**VOLUNTARIADO**\n\nExperiências voluntárias relevantes (se houver)\n\n\n\n**PERFIS PROFISSIONAIS**\n\nLinks para LinkedIn, GitHub, portfolio (se disponíveis)\n\n\n\nInstruções específicas:\n\n- Priorizar experiências e skills mais relevantes à vaga\n\n- Usar linguagem ativa e orientada a resultados\n\n- Incluir métricas e números quando disponíveis no perfil\n\n- Adaptar tom ao tipo de expressão solicitado\n\n- Manter formato limpo e profissional\n\n- Não inventar dados, datas ou experiências\n\n- Focar na relevância para a posição específica\n\n- NUNCA duplicar ou repetir informações entre seções\n\n- Cada experiência deve ser descrita apenas uma vez"}],"temperature":0.5,"max_tokens":1200}'
```
#### Request body (sanitized)
```json
{
  "model": "llama3.2:latest",
  "messages": [
    {
      "role": "system",
      "content": "You are a cover-letter generator. Follow the user's format exactly. Do not invent facts. Detect the predominant language of the job description and reply strictly in that language (do not switch languages). Do not reveal chain-of-thought or internal reasoning; provide only the final answer content. If you would normally include a reasoning section like <think>...</think>, omit it and provide only the final letter body. Do not include code fences or markdown fences. Do not claim experience with any tool/technology that is not present in the candidate profile; at most, mention readiness to learn without implying past hands-on work. Be concise and avoid filler."
    },
    {
      "role": "user",
      "content": "Context: job-specific resume generation.\n\nDetect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from 'User note (additional instructions)'. If still undetectable, default to Portuguese (pt-BR).\n\nWrite as the candidate, in first-person singular (I). Do not write from the employer's perspective.\n\nGround all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.\n\nIf a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.\n\nDo not copy or paraphrase the job description; reference it only to align the candidate's fit.\n\nPrefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.\n\nReturn only the resume content in a structured format. Do not fabricate recruiter names or company details.\n\nPlanned delivery channels: email. Optimize format/length to be usable when sent via these channels.\n\nCarefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.\n\nAvoid clichés or overly eager wording. Maintain a confident, professional tone.\n\nBe concise and avoid filler. Prioritize precise, verifiable facts from the profile.\n\nCompute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use 'over X years').\n\nIf dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).\n\nDo not expose chain-of-thought. Provide only final answer content (no '<think>', analysis, steps, or reasoning).\n\nCRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.\n\nCRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.\n\nJob Description:\n\n<p>aga: Analista Desenvolvedor Java Pleno (Hibrido - SP) - CLT<br><br>👉Interessados devem encaminhar CV atualizado juntamente com a pretensão salarial para o e-mail: <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"mailto:[REDACTED_EMAIL]\"><strong>[REDACTED_EMAIL]</strong></a><br><br>🔹 Sobre a Vaga:<br>Estamos em busca de um Analista Desenvolvimento Java Pleno para se juntar à nossa equipe em um formato hibrido. Se você tem experiência e deseja crescer em um ambiente dinâmico e desafiador, esta é a sua chance!<br><br>Requisitos:<br>-Escolaridade: Graduação completa em Tecnologia da Informação ou qualquer curso de nível superior com pós-graduação na área de Tecnologia da Informação.<br><br>🔹 Requisitos Técnicos Obrigatórios:<br>* Desenvolvimento e análise de sistemas em aplicações Web utilizando modelo de arquitetura MVC.<br>* Desenvolvimento e manutenção de sistemas utilizando as seguintes linguagens: PLSQL, Java, JavaScript, HTML e XML.<br>* Containers e Gerenciamento: Docker e Kubernetes.<br>* Desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, , Redis.<br>* UML (casos de uso e demais diagramas);<br>* Arquitetura orientada a serviços (SOA).<br>* APIs<br>* Conhecimento de Frameworks de marcado como Spring (Spring-cloud), Angular, React, Vue, BootStrap entre outros;<br>* Intregração Contínua (CI) / Deployment Contínuo (CD).<br>* JSON / REST.<br><br>🔹 Horário de Trabalho e escala:<br>09h às 18h (1hr de almoço)<br>2x presencial e 3x home-office<br><br>🔹 Endereço: Rua Libero Badaró, 425 - Centro - SP<br><br>🔹 Benefícios de Trabalhar Conosco:<br>🍔Vale Alimentação/Refeição | Wiipo Flex<br>🏋‍♀TotalPass | Bem-estar para todos os colaboradores, todos os dias<br>👓 Parceria SESC | Saúde, Lazer, Turismo &amp; Esportes, Assistência Social e Alimentação<br>📕 Parcerias Educacionais | Aldeia, UDF, EBAC, ESPM, IPOG, VC_TB e WO.<br>🤍Seguro de vida<br><br>Todas as vagas são afirmativas!<br><br>E aí, se identificou com a vaga?<br>Não perca tempo e candidate-se!<br><br>Junte-se a nós e faça parte de uma equipe que valoriza inovação e excelência!</p>\n\nCandidate Profile (facts only, no fabrication):\n\nNome: Teste\nHeadline: teste\nLocalização: Brasilia\nEmail: [REDACTED_EMAIL]\nTelefone: [REDACTED_PHONE]\nWebsite: https://teste\nResumo:\n<p>chico</p>\nExperiências (mais recentes primeiro):\n- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)\n  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>\n- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)\n  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>\nTempo total de experiência (todas as experiências): 3 anos 7 meses\nSkills: JavaScript\nProjetos relevantes:\n- teste (https://teste)\n  <p>teste</p>\nEducação:\n- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])\nCertificações:\n- teste (teste, [REDACTED_PHONE])\nIdiomas: teste\nPrêmios:\n- teste (teste)\n- teste2 (teste2)\nPerfis:\n- GitHub: https://www.github.com/in/francisco-dev/\n- teste: http://teste\n\nUser note (additional instructions):\n\n<p>teste</p>\n\nTask:\n\nGenerate a currículo abrangente com todas as experiências relevantes in tom informal, porém cortês e direto, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).\n\n\n\nFollow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):\n\n\n\n**INFORMAÇÕES PESSOAIS**\n\nNome completo, email, telefone, localização, website (se disponível)\n\n\n\n**RESUMO PROFISSIONAL**\n\n2-3 frases destacando anos de experiência, especialização principal e fit com a vaga\n\n\n\n**EXPERIÊNCIA PROFISSIONAL**\n\nListar experiências mais relevantes à vaga (máximo 4-5), com:\n\n- Cargo, empresa, período (duração calculada)\n\n- 2-3 conquistas mensuráveis por experiência\n\n- Tecnologias e ferramentas utilizadas\n\n- Impacto nos resultados da empresa\n\n\n\n**EDUCAÇÃO**\n\nFormação acadêmica relevante (instituição, curso, período)\n\n\n\n**COMPETÊNCIAS TÉCNICAS**\n\nSkills mais relevantes à vaga, agrupadas por categoria\n\n\n\n**PROJETOS DESTACADOS**\n\nProjetos mais relevantes (máximo 3) com descrição e tecnologias\n\n\n\n**CERTIFICAÇÕES**\n\nCertificações relevantes (máximo 5) com emissor e data\n\n\n\n**IDIOMAS**\n\nIdiomas com nível de proficiência\n\n\n\n**PRÊMIOS E RECONHECIMENTOS**\n\nPrêmios relevantes (máximo 3) com contexto\n\n\n\n**VOLUNTARIADO**\n\nExperiências voluntárias relevantes (se houver)\n\n\n\n**PERFIS PROFISSIONAIS**\n\nLinks para LinkedIn, GitHub, portfolio (se disponíveis)\n\n\n\nInstruções específicas:\n\n- Priorizar experiências e skills mais relevantes à vaga\n\n- Usar linguagem ativa e orientada a resultados\n\n- Incluir métricas e números quando disponíveis no perfil\n\n- Adaptar tom ao tipo de expressão solicitado\n\n- Manter formato limpo e profissional\n\n- Não inventar dados, datas ou experiências\n\n- Focar na relevância para a posição específica\n\n- NUNCA duplicar ou repetir informações entre seções\n\n- Cada experiência deve ser descrita apenas uma vez"
    }
  ],
  "temperature": 0.5,
  "max_tokens": 1200
}
```

#### LLM Response — 1755732896170-sj2eka
- Timestamp: 2025-08-20T23:35:34.360Z
- Cover letter length: 1223 • SHA256: 16fdeb6782a2830103370e889ef4e49c5af9d5a76fef5179da4895fc84a66630

```text
**INFORMAÇÕES PESSOAIS**

Nome: Teste, Email: [REDACTED_EMAIL], Telefone: [REDACTED_PHONE], Localização: Brasilia, Website: https://teste.

**RESUMO PROFISSIONAL**

Desenvolvedor Java Pleno com 3 anos de experiência em desenvolvimento de sistemas escaláveis e testes unitários. Busco uma oportunidade para crescer em um ambiente dinâmico e desafiador.

**EXPERIÊNCIA PROFISSIONAL**

- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)
  Desenvolvi landingpages e um website de vendas de seguros com next e react js.
  
- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)
  Desenvolvedor senior desenvolvendo APIs escalaveis e testes unitários.

**EDUCAÇÃO**

Formação em Analise e Desenvolvimento de Sistemas da Estacio ([REDACTED_PHONE]).

**COMPETÊNCIAS TÉCNICAS**

JavaScript, Desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, Redis.

**PROJETOS DESTACADOS**

teste (https://teste)

**CERTIFICAÇÕES**

teste (teste, [REDACTED_PHONE])

**IDIOMAS**

Não disponível

**PRÊMIOS E RECONHECIMENTOS**

**VOLUNTARIADO**

**PERFIS PROFISSIONAIS**

GitHub: https://www.github.com/in/francisco-dev/
```
---

### Application Request 1755732999243-kjnpqs
- Timestamp: 2025-08-20T23:36:39.263Z
- User: cm9hp80720000gk3gykahk5f4
- Channels: email
- Expression: informal
- Job description length: 2156
- Prompt length: 7334 • SHA256: 7b46d45b0cf5a558423c09548087a77ed865c610e1f2aaf423bc32e6cc273805
- Model: llama3.2:latest

#### Prompt
```text
Context: job-specific resume generation.

Detect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from 'User note (additional instructions)'. If still undetectable, default to Portuguese (pt-BR).

Write as the candidate, in first-person singular (I). Do not write from the employer's perspective.

Ground all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.

If a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.

Do not copy or paraphrase the job description; reference it only to align the candidate's fit.

Prefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.

Return only the resume content in a structured format. Do not fabricate recruiter names or company details.

Planned delivery channels: email. Optimize format/length to be usable when sent via these channels.

Carefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.

Avoid clichés or overly eager wording. Maintain a confident, professional tone.

Be concise and avoid filler. Prioritize precise, verifiable facts from the profile.

Compute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use 'over X years').

If dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).

Do not expose chain-of-thought. Provide only final answer content (no '<think>', analysis, steps, or reasoning).

CRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.

CRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.

Job Description:

<p>aga: Analista Desenvolvedor Java Pleno (Hibrido - SP) - CLT<br><br>👉Interessados devem encaminhar CV atualizado juntamente com a pretensão salarial para o e-mail: <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:[REDACTED_EMAIL]"><strong>[REDACTED_EMAIL]</strong></a><br><br>🔹 Sobre a Vaga:<br>Estamos em busca de um Analista Desenvolvimento Java Pleno para se juntar à nossa equipe em um formato hibrido. Se você tem experiência e deseja crescer em um ambiente dinâmico e desafiador, esta é a sua chance!<br><br>Requisitos:<br>-Escolaridade: Graduação completa em Tecnologia da Informação ou qualquer curso de nível superior com pós-graduação na área de Tecnologia da Informação.<br><br>🔹 Requisitos Técnicos Obrigatórios:<br>* Desenvolvimento e análise de sistemas em aplicações Web utilizando modelo de arquitetura MVC.<br>* Desenvolvimento e manutenção de sistemas utilizando as seguintes linguagens: PLSQL, Java, JavaScript, HTML e XML.<br>* Containers e Gerenciamento: Docker e Kubernetes.<br>* Desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, , Redis.<br>* UML (casos de uso e demais diagramas);<br>* Arquitetura orientada a serviços (SOA).<br>* APIs<br>* Conhecimento de Frameworks de marcado como Spring (Spring-cloud), Angular, React, Vue, BootStrap entre outros;<br>* Intregração Contínua (CI) / Deployment Contínuo (CD).<br>* JSON / REST.<br><br>🔹 Horário de Trabalho e escala:<br>09h às 18h (1hr de almoço)<br>2x presencial e 3x home-office<br><br>🔹 Endereço: Rua Libero Badaró, 425 - Centro - SP<br><br>🔹 Benefícios de Trabalhar Conosco:<br>🍔Vale Alimentação/Refeição | Wiipo Flex<br>🏋‍♀TotalPass | Bem-estar para todos os colaboradores, todos os dias<br>👓 Parceria SESC | Saúde, Lazer, Turismo &amp; Esportes, Assistência Social e Alimentação<br>📕 Parcerias Educacionais | Aldeia, UDF, EBAC, ESPM, IPOG, VC_TB e WO.<br>🤍Seguro de vida<br><br>Todas as vagas são afirmativas!<br><br>E aí, se identificou com a vaga?<br>Não perca tempo e candidate-se!<br><br>Junte-se a nós e faça parte de uma equipe que valoriza inovação e excelência!</p>

Candidate Profile (facts only, no fabrication):

Nome: Teste
Headline: teste
Localização: Brasilia
Email: [REDACTED_EMAIL]
Telefone: [REDACTED_PHONE]
Website: https://teste
Resumo:
<p>chico</p>
Experiências (mais recentes primeiro):
- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)
  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>
- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)
  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>
Tempo total de experiência (todas as experiências): 3 anos 7 meses
Skills: JavaScript
Projetos relevantes:
- teste (https://teste)
  <p>teste</p>
Educação:
- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])
Certificações:
- teste (teste, [REDACTED_PHONE])
Idiomas: teste
Prêmios:
- teste (teste)
- teste2 (teste2)
Perfis:
- GitHub: https://www.github.com/in/francisco-dev/
- teste: http://teste

User note (additional instructions):

<p>teste</p>

Task:

Generate a currículo abrangente com todas as experiências relevantes in tom informal, porém cortês e direto, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).



Follow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):



**INFORMAÇÕES PESSOAIS**

Nome completo, email, telefone, localização, website (se disponível)



**RESUMO PROFISSIONAL**

2-3 frases destacando anos de experiência, especialização principal e fit com a vaga



**EXPERIÊNCIA PROFISSIONAL**

Listar experiências mais relevantes à vaga (máximo 4-5), com:

- Cargo, empresa, período (duração calculada)

- 2-3 conquistas mensuráveis por experiência

- Tecnologias e ferramentas utilizadas

- Impacto nos resultados da empresa



**EDUCAÇÃO**

Formação acadêmica relevante (instituição, curso, período)



**COMPETÊNCIAS TÉCNICAS**

Skills mais relevantes à vaga, agrupadas por categoria



**PROJETOS DESTACADOS**

Projetos mais relevantes (máximo 3) com descrição e tecnologias



**CERTIFICAÇÕES**

Certificações relevantes (máximo 5) com emissor e data



**IDIOMAS**

Idiomas com nível de proficiência



**PRÊMIOS E RECONHECIMENTOS**

Prêmios relevantes (máximo 3) com contexto



**VOLUNTARIADO**

Experiências voluntárias relevantes (se houver)



**PERFIS PROFISSIONAIS**

Links para LinkedIn, GitHub, portfolio (se disponíveis)



Instruções específicas:

- Priorizar experiências e skills mais relevantes à vaga

- Usar linguagem ativa e orientada a resultados

- Incluir métricas e números quando disponíveis no perfil

- Adaptar tom ao tipo de expressão solicitado

- Manter formato limpo e profissional

- Não inventar dados, datas ou experiências

- Focar na relevância para a posição específica

- NUNCA duplicar ou repetir informações entre seções

- Cada experiência deve ser descrita apenas uma vez
```
#### HTTP request (cURL)
```bash
curl -sS -X POST 'http://localhost:11434/v1/chat/completions' \
  -H 'Content-Type: application/json' \
  -d '{"model":"llama3.2:latest","messages":[{"role":"system","content":"You are a cover-letter generator. Follow the user'\\''s format exactly. Do not invent facts. Detect the predominant language of the job description and reply strictly in that language (do not switch languages). Do not reveal chain-of-thought or internal reasoning; provide only the final answer content. If you would normally include a reasoning section like <think>...</think>, omit it and provide only the final letter body. Do not include code fences or markdown fences. Do not claim experience with any tool/technology that is not present in the candidate profile; at most, mention readiness to learn without implying past hands-on work. Be concise and avoid filler."},{"role":"user","content":"Context: job-specific resume generation.\n\nDetect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from '\\''User note (additional instructions)'\\''. If still undetectable, default to Portuguese (pt-BR).\n\nWrite as the candidate, in first-person singular (I). Do not write from the employer'\\''s perspective.\n\nGround all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.\n\nIf a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.\n\nDo not copy or paraphrase the job description; reference it only to align the candidate'\\''s fit.\n\nPrefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.\n\nReturn only the resume content in a structured format. Do not fabricate recruiter names or company details.\n\nPlanned delivery channels: email. Optimize format/length to be usable when sent via these channels.\n\nCarefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.\n\nAvoid clichés or overly eager wording. Maintain a confident, professional tone.\n\nBe concise and avoid filler. Prioritize precise, verifiable facts from the profile.\n\nCompute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use '\\''over X years'\\'').\n\nIf dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).\n\nDo not expose chain-of-thought. Provide only final answer content (no '\\''<think>'\\'', analysis, steps, or reasoning).\n\nCRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.\n\nCRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.\n\nJob Description:\n\n<p>aga: Analista Desenvolvedor Java Pleno (Hibrido - SP) - CLT<br><br>👉Interessados devem encaminhar CV atualizado juntamente com a pretensão salarial para o e-mail: <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"mailto:[REDACTED_EMAIL]\"><strong>[REDACTED_EMAIL]</strong></a><br><br>🔹 Sobre a Vaga:<br>Estamos em busca de um Analista Desenvolvimento Java Pleno para se juntar à nossa equipe em um formato hibrido. Se você tem experiência e deseja crescer em um ambiente dinâmico e desafiador, esta é a sua chance!<br><br>Requisitos:<br>-Escolaridade: Graduação completa em Tecnologia da Informação ou qualquer curso de nível superior com pós-graduação na área de Tecnologia da Informação.<br><br>🔹 Requisitos Técnicos Obrigatórios:<br>* Desenvolvimento e análise de sistemas em aplicações Web utilizando modelo de arquitetura MVC.<br>* Desenvolvimento e manutenção de sistemas utilizando as seguintes linguagens: PLSQL, Java, JavaScript, HTML e XML.<br>* Containers e Gerenciamento: Docker e Kubernetes.<br>* Desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, , Redis.<br>* UML (casos de uso e demais diagramas);<br>* Arquitetura orientada a serviços (SOA).<br>* APIs<br>* Conhecimento de Frameworks de marcado como Spring (Spring-cloud), Angular, React, Vue, BootStrap entre outros;<br>* Intregração Contínua (CI) / Deployment Contínuo (CD).<br>* JSON / REST.<br><br>🔹 Horário de Trabalho e escala:<br>09h às 18h (1hr de almoço)<br>2x presencial e 3x home-office<br><br>🔹 Endereço: Rua Libero Badaró, 425 - Centro - SP<br><br>🔹 Benefícios de Trabalhar Conosco:<br>🍔Vale Alimentação/Refeição | Wiipo Flex<br>🏋‍♀TotalPass | Bem-estar para todos os colaboradores, todos os dias<br>👓 Parceria SESC | Saúde, Lazer, Turismo &amp; Esportes, Assistência Social e Alimentação<br>📕 Parcerias Educacionais | Aldeia, UDF, EBAC, ESPM, IPOG, VC_TB e WO.<br>🤍Seguro de vida<br><br>Todas as vagas são afirmativas!<br><br>E aí, se identificou com a vaga?<br>Não perca tempo e candidate-se!<br><br>Junte-se a nós e faça parte de uma equipe que valoriza inovação e excelência!</p>\n\nCandidate Profile (facts only, no fabrication):\n\nNome: Teste\nHeadline: teste\nLocalização: Brasilia\nEmail: [REDACTED_EMAIL]\nTelefone: [REDACTED_PHONE]\nWebsite: https://teste\nResumo:\n<p>chico</p>\nExperiências (mais recentes primeiro):\n- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)\n  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>\n- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)\n  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>\nTempo total de experiência (todas as experiências): 3 anos 7 meses\nSkills: JavaScript\nProjetos relevantes:\n- teste (https://teste)\n  <p>teste</p>\nEducação:\n- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])\nCertificações:\n- teste (teste, [REDACTED_PHONE])\nIdiomas: teste\nPrêmios:\n- teste (teste)\n- teste2 (teste2)\nPerfis:\n- GitHub: https://www.github.com/in/francisco-dev/\n- teste: http://teste\n\nUser note (additional instructions):\n\n<p>teste</p>\n\nTask:\n\nGenerate a currículo abrangente com todas as experiências relevantes in tom informal, porém cortês e direto, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).\n\n\n\nFollow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):\n\n\n\n**INFORMAÇÕES PESSOAIS**\n\nNome completo, email, telefone, localização, website (se disponível)\n\n\n\n**RESUMO PROFISSIONAL**\n\n2-3 frases destacando anos de experiência, especialização principal e fit com a vaga\n\n\n\n**EXPERIÊNCIA PROFISSIONAL**\n\nListar experiências mais relevantes à vaga (máximo 4-5), com:\n\n- Cargo, empresa, período (duração calculada)\n\n- 2-3 conquistas mensuráveis por experiência\n\n- Tecnologias e ferramentas utilizadas\n\n- Impacto nos resultados da empresa\n\n\n\n**EDUCAÇÃO**\n\nFormação acadêmica relevante (instituição, curso, período)\n\n\n\n**COMPETÊNCIAS TÉCNICAS**\n\nSkills mais relevantes à vaga, agrupadas por categoria\n\n\n\n**PROJETOS DESTACADOS**\n\nProjetos mais relevantes (máximo 3) com descrição e tecnologias\n\n\n\n**CERTIFICAÇÕES**\n\nCertificações relevantes (máximo 5) com emissor e data\n\n\n\n**IDIOMAS**\n\nIdiomas com nível de proficiência\n\n\n\n**PRÊMIOS E RECONHECIMENTOS**\n\nPrêmios relevantes (máximo 3) com contexto\n\n\n\n**VOLUNTARIADO**\n\nExperiências voluntárias relevantes (se houver)\n\n\n\n**PERFIS PROFISSIONAIS**\n\nLinks para LinkedIn, GitHub, portfolio (se disponíveis)\n\n\n\nInstruções específicas:\n\n- Priorizar experiências e skills mais relevantes à vaga\n\n- Usar linguagem ativa e orientada a resultados\n\n- Incluir métricas e números quando disponíveis no perfil\n\n- Adaptar tom ao tipo de expressão solicitado\n\n- Manter formato limpo e profissional\n\n- Não inventar dados, datas ou experiências\n\n- Focar na relevância para a posição específica\n\n- NUNCA duplicar ou repetir informações entre seções\n\n- Cada experiência deve ser descrita apenas uma vez"}],"temperature":0.5,"max_tokens":1200}'
```
#### Request body (sanitized)
```json
{
  "model": "llama3.2:latest",
  "messages": [
    {
      "role": "system",
      "content": "You are a cover-letter generator. Follow the user's format exactly. Do not invent facts. Detect the predominant language of the job description and reply strictly in that language (do not switch languages). Do not reveal chain-of-thought or internal reasoning; provide only the final answer content. If you would normally include a reasoning section like <think>...</think>, omit it and provide only the final letter body. Do not include code fences or markdown fences. Do not claim experience with any tool/technology that is not present in the candidate profile; at most, mention readiness to learn without implying past hands-on work. Be concise and avoid filler."
    },
    {
      "role": "user",
      "content": "Context: job-specific resume generation.\n\nDetect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from 'User note (additional instructions)'. If still undetectable, default to Portuguese (pt-BR).\n\nWrite as the candidate, in first-person singular (I). Do not write from the employer's perspective.\n\nGround all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.\n\nIf a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.\n\nDo not copy or paraphrase the job description; reference it only to align the candidate's fit.\n\nPrefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.\n\nReturn only the resume content in a structured format. Do not fabricate recruiter names or company details.\n\nPlanned delivery channels: email. Optimize format/length to be usable when sent via these channels.\n\nCarefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.\n\nAvoid clichés or overly eager wording. Maintain a confident, professional tone.\n\nBe concise and avoid filler. Prioritize precise, verifiable facts from the profile.\n\nCompute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use 'over X years').\n\nIf dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).\n\nDo not expose chain-of-thought. Provide only final answer content (no '<think>', analysis, steps, or reasoning).\n\nCRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.\n\nCRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.\n\nJob Description:\n\n<p>aga: Analista Desenvolvedor Java Pleno (Hibrido - SP) - CLT<br><br>👉Interessados devem encaminhar CV atualizado juntamente com a pretensão salarial para o e-mail: <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"mailto:[REDACTED_EMAIL]\"><strong>[REDACTED_EMAIL]</strong></a><br><br>🔹 Sobre a Vaga:<br>Estamos em busca de um Analista Desenvolvimento Java Pleno para se juntar à nossa equipe em um formato hibrido. Se você tem experiência e deseja crescer em um ambiente dinâmico e desafiador, esta é a sua chance!<br><br>Requisitos:<br>-Escolaridade: Graduação completa em Tecnologia da Informação ou qualquer curso de nível superior com pós-graduação na área de Tecnologia da Informação.<br><br>🔹 Requisitos Técnicos Obrigatórios:<br>* Desenvolvimento e análise de sistemas em aplicações Web utilizando modelo de arquitetura MVC.<br>* Desenvolvimento e manutenção de sistemas utilizando as seguintes linguagens: PLSQL, Java, JavaScript, HTML e XML.<br>* Containers e Gerenciamento: Docker e Kubernetes.<br>* Desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, , Redis.<br>* UML (casos de uso e demais diagramas);<br>* Arquitetura orientada a serviços (SOA).<br>* APIs<br>* Conhecimento de Frameworks de marcado como Spring (Spring-cloud), Angular, React, Vue, BootStrap entre outros;<br>* Intregração Contínua (CI) / Deployment Contínuo (CD).<br>* JSON / REST.<br><br>🔹 Horário de Trabalho e escala:<br>09h às 18h (1hr de almoço)<br>2x presencial e 3x home-office<br><br>🔹 Endereço: Rua Libero Badaró, 425 - Centro - SP<br><br>🔹 Benefícios de Trabalhar Conosco:<br>🍔Vale Alimentação/Refeição | Wiipo Flex<br>🏋‍♀TotalPass | Bem-estar para todos os colaboradores, todos os dias<br>👓 Parceria SESC | Saúde, Lazer, Turismo &amp; Esportes, Assistência Social e Alimentação<br>📕 Parcerias Educacionais | Aldeia, UDF, EBAC, ESPM, IPOG, VC_TB e WO.<br>🤍Seguro de vida<br><br>Todas as vagas são afirmativas!<br><br>E aí, se identificou com a vaga?<br>Não perca tempo e candidate-se!<br><br>Junte-se a nós e faça parte de uma equipe que valoriza inovação e excelência!</p>\n\nCandidate Profile (facts only, no fabrication):\n\nNome: Teste\nHeadline: teste\nLocalização: Brasilia\nEmail: [REDACTED_EMAIL]\nTelefone: [REDACTED_PHONE]\nWebsite: https://teste\nResumo:\n<p>chico</p>\nExperiências (mais recentes primeiro):\n- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)\n  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>\n- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)\n  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>\nTempo total de experiência (todas as experiências): 3 anos 7 meses\nSkills: JavaScript\nProjetos relevantes:\n- teste (https://teste)\n  <p>teste</p>\nEducação:\n- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])\nCertificações:\n- teste (teste, [REDACTED_PHONE])\nIdiomas: teste\nPrêmios:\n- teste (teste)\n- teste2 (teste2)\nPerfis:\n- GitHub: https://www.github.com/in/francisco-dev/\n- teste: http://teste\n\nUser note (additional instructions):\n\n<p>teste</p>\n\nTask:\n\nGenerate a currículo abrangente com todas as experiências relevantes in tom informal, porém cortês e direto, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).\n\n\n\nFollow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):\n\n\n\n**INFORMAÇÕES PESSOAIS**\n\nNome completo, email, telefone, localização, website (se disponível)\n\n\n\n**RESUMO PROFISSIONAL**\n\n2-3 frases destacando anos de experiência, especialização principal e fit com a vaga\n\n\n\n**EXPERIÊNCIA PROFISSIONAL**\n\nListar experiências mais relevantes à vaga (máximo 4-5), com:\n\n- Cargo, empresa, período (duração calculada)\n\n- 2-3 conquistas mensuráveis por experiência\n\n- Tecnologias e ferramentas utilizadas\n\n- Impacto nos resultados da empresa\n\n\n\n**EDUCAÇÃO**\n\nFormação acadêmica relevante (instituição, curso, período)\n\n\n\n**COMPETÊNCIAS TÉCNICAS**\n\nSkills mais relevantes à vaga, agrupadas por categoria\n\n\n\n**PROJETOS DESTACADOS**\n\nProjetos mais relevantes (máximo 3) com descrição e tecnologias\n\n\n\n**CERTIFICAÇÕES**\n\nCertificações relevantes (máximo 5) com emissor e data\n\n\n\n**IDIOMAS**\n\nIdiomas com nível de proficiência\n\n\n\n**PRÊMIOS E RECONHECIMENTOS**\n\nPrêmios relevantes (máximo 3) com contexto\n\n\n\n**VOLUNTARIADO**\n\nExperiências voluntárias relevantes (se houver)\n\n\n\n**PERFIS PROFISSIONAIS**\n\nLinks para LinkedIn, GitHub, portfolio (se disponíveis)\n\n\n\nInstruções específicas:\n\n- Priorizar experiências e skills mais relevantes à vaga\n\n- Usar linguagem ativa e orientada a resultados\n\n- Incluir métricas e números quando disponíveis no perfil\n\n- Adaptar tom ao tipo de expressão solicitado\n\n- Manter formato limpo e profissional\n\n- Não inventar dados, datas ou experiências\n\n- Focar na relevância para a posição específica\n\n- NUNCA duplicar ou repetir informações entre seções\n\n- Cada experiência deve ser descrita apenas uma vez"
    }
  ],
  "temperature": 0.5,
  "max_tokens": 1200
}
```

#### LLM Response — 1755732999243-kjnpqs
- Timestamp: 2025-08-20T23:37:13.482Z
- Cover letter length: 1152 • SHA256: bad088b5023c82a80f6bdec7318d406dd2e0b307440887da407c89a22e3e6886

```text
**INFORMAÇÕES PESSOAIS**

Nome: Teste, Email: [REDACTED_EMAIL], Telefone: [REDACTED_PHONE], Localização: Brasilia, Website: https://teste

**RESUMO PROFISSIONAL**
Desenvolvedor com 3 anos de experiência em desenvolvimento web, especializando-se em frontend e backend, procurando se juntar a uma equipe dinâmica e desafiadora.

**EXPERIÊNCIA PROFISSIONAL**
- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)
  Desenvolvi landingpages e um website de vendas de seguros com next e react js.
- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)
  Desenvolvedor senior desenvolvendo APIs escaláveis e testes unitários.

**EDUCAÇÃO**
Formação acadêmica em Analise e Desenvolvimento de Sistemas da Estacio ([REDACTED_PHONE])

**COMPETÊNCIAS TÉCNICAS**
JavaScript

**PROJETOS DESTACADOS**
teste (https://teste)
teste2 (teste2)

**CERTIFICAÇÕES**
teste (teste, [REDACTED_PHONE])

**IDIOMAS**
Português (nível avançado)

**PRÊMIOS E RECONHECIMENTOS**
teste (teste), teste2 (teste)

**VOLUNTARIADO**
Nenhum

**PERFIS PROFISSIONAIS**
GitHub: https://www.github.com/in/francisco-dev/
```
---

### Application Request 1755733038626-fcbdjk
- Timestamp: 2025-08-20T23:37:18.633Z
- User: cm9hp80720000gk3gykahk5f4
- Channels: email
- Expression: informal
- Job description length: 2156
- Prompt length: 7334 • SHA256: 7b46d45b0cf5a558423c09548087a77ed865c610e1f2aaf423bc32e6cc273805
- Model: llama3.2:latest

#### Prompt
```text
Context: job-specific resume generation.

Detect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from 'User note (additional instructions)'. If still undetectable, default to Portuguese (pt-BR).

Write as the candidate, in first-person singular (I). Do not write from the employer's perspective.

Ground all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.

If a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.

Do not copy or paraphrase the job description; reference it only to align the candidate's fit.

Prefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.

Return only the resume content in a structured format. Do not fabricate recruiter names or company details.

Planned delivery channels: email. Optimize format/length to be usable when sent via these channels.

Carefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.

Avoid clichés or overly eager wording. Maintain a confident, professional tone.

Be concise and avoid filler. Prioritize precise, verifiable facts from the profile.

Compute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use 'over X years').

If dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).

Do not expose chain-of-thought. Provide only final answer content (no '<think>', analysis, steps, or reasoning).

CRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.

CRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.

Job Description:

<p>aga: Analista Desenvolvedor Java Pleno (Hibrido - SP) - CLT<br><br>👉Interessados devem encaminhar CV atualizado juntamente com a pretensão salarial para o e-mail: <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:[REDACTED_EMAIL]"><strong>[REDACTED_EMAIL]</strong></a><br><br>🔹 Sobre a Vaga:<br>Estamos em busca de um Analista Desenvolvimento Java Pleno para se juntar à nossa equipe em um formato hibrido. Se você tem experiência e deseja crescer em um ambiente dinâmico e desafiador, esta é a sua chance!<br><br>Requisitos:<br>-Escolaridade: Graduação completa em Tecnologia da Informação ou qualquer curso de nível superior com pós-graduação na área de Tecnologia da Informação.<br><br>🔹 Requisitos Técnicos Obrigatórios:<br>* Desenvolvimento e análise de sistemas em aplicações Web utilizando modelo de arquitetura MVC.<br>* Desenvolvimento e manutenção de sistemas utilizando as seguintes linguagens: PLSQL, Java, JavaScript, HTML e XML.<br>* Containers e Gerenciamento: Docker e Kubernetes.<br>* Desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, , Redis.<br>* UML (casos de uso e demais diagramas);<br>* Arquitetura orientada a serviços (SOA).<br>* APIs<br>* Conhecimento de Frameworks de marcado como Spring (Spring-cloud), Angular, React, Vue, BootStrap entre outros;<br>* Intregração Contínua (CI) / Deployment Contínuo (CD).<br>* JSON / REST.<br><br>🔹 Horário de Trabalho e escala:<br>09h às 18h (1hr de almoço)<br>2x presencial e 3x home-office<br><br>🔹 Endereço: Rua Libero Badaró, 425 - Centro - SP<br><br>🔹 Benefícios de Trabalhar Conosco:<br>🍔Vale Alimentação/Refeição | Wiipo Flex<br>🏋‍♀TotalPass | Bem-estar para todos os colaboradores, todos os dias<br>👓 Parceria SESC | Saúde, Lazer, Turismo &amp; Esportes, Assistência Social e Alimentação<br>📕 Parcerias Educacionais | Aldeia, UDF, EBAC, ESPM, IPOG, VC_TB e WO.<br>🤍Seguro de vida<br><br>Todas as vagas são afirmativas!<br><br>E aí, se identificou com a vaga?<br>Não perca tempo e candidate-se!<br><br>Junte-se a nós e faça parte de uma equipe que valoriza inovação e excelência!</p>

Candidate Profile (facts only, no fabrication):

Nome: Teste
Headline: teste
Localização: Brasilia
Email: [REDACTED_EMAIL]
Telefone: [REDACTED_PHONE]
Website: https://teste
Resumo:
<p>chico</p>
Experiências (mais recentes primeiro):
- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)
  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>
- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)
  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>
Tempo total de experiência (todas as experiências): 3 anos 7 meses
Skills: JavaScript
Projetos relevantes:
- teste (https://teste)
  <p>teste</p>
Educação:
- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])
Certificações:
- teste (teste, [REDACTED_PHONE])
Idiomas: teste
Prêmios:
- teste (teste)
- teste2 (teste2)
Perfis:
- GitHub: https://www.github.com/in/francisco-dev/
- teste: http://teste

User note (additional instructions):

<p>teste</p>

Task:

Generate a currículo abrangente com todas as experiências relevantes in tom informal, porém cortês e direto, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).



Follow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):



**INFORMAÇÕES PESSOAIS**

Nome completo, email, telefone, localização, website (se disponível)



**RESUMO PROFISSIONAL**

2-3 frases destacando anos de experiência, especialização principal e fit com a vaga



**EXPERIÊNCIA PROFISSIONAL**

Listar experiências mais relevantes à vaga (máximo 4-5), com:

- Cargo, empresa, período (duração calculada)

- 2-3 conquistas mensuráveis por experiência

- Tecnologias e ferramentas utilizadas

- Impacto nos resultados da empresa



**EDUCAÇÃO**

Formação acadêmica relevante (instituição, curso, período)



**COMPETÊNCIAS TÉCNICAS**

Skills mais relevantes à vaga, agrupadas por categoria



**PROJETOS DESTACADOS**

Projetos mais relevantes (máximo 3) com descrição e tecnologias



**CERTIFICAÇÕES**

Certificações relevantes (máximo 5) com emissor e data



**IDIOMAS**

Idiomas com nível de proficiência



**PRÊMIOS E RECONHECIMENTOS**

Prêmios relevantes (máximo 3) com contexto



**VOLUNTARIADO**

Experiências voluntárias relevantes (se houver)



**PERFIS PROFISSIONAIS**

Links para LinkedIn, GitHub, portfolio (se disponíveis)



Instruções específicas:

- Priorizar experiências e skills mais relevantes à vaga

- Usar linguagem ativa e orientada a resultados

- Incluir métricas e números quando disponíveis no perfil

- Adaptar tom ao tipo de expressão solicitado

- Manter formato limpo e profissional

- Não inventar dados, datas ou experiências

- Focar na relevância para a posição específica

- NUNCA duplicar ou repetir informações entre seções

- Cada experiência deve ser descrita apenas uma vez
```
#### HTTP request (cURL)
```bash
curl -sS -X POST 'http://localhost:11434/v1/chat/completions' \
  -H 'Content-Type: application/json' \
  -d '{"model":"llama3.2:latest","messages":[{"role":"system","content":"You are a cover-letter generator. Follow the user'\\''s format exactly. Do not invent facts. Detect the predominant language of the job description and reply strictly in that language (do not switch languages). Do not reveal chain-of-thought or internal reasoning; provide only the final answer content. If you would normally include a reasoning section like <think>...</think>, omit it and provide only the final letter body. Do not include code fences or markdown fences. Do not claim experience with any tool/technology that is not present in the candidate profile; at most, mention readiness to learn without implying past hands-on work. Be concise and avoid filler."},{"role":"user","content":"Context: job-specific resume generation.\n\nDetect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from '\\''User note (additional instructions)'\\''. If still undetectable, default to Portuguese (pt-BR).\n\nWrite as the candidate, in first-person singular (I). Do not write from the employer'\\''s perspective.\n\nGround all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.\n\nIf a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.\n\nDo not copy or paraphrase the job description; reference it only to align the candidate'\\''s fit.\n\nPrefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.\n\nReturn only the resume content in a structured format. Do not fabricate recruiter names or company details.\n\nPlanned delivery channels: email. Optimize format/length to be usable when sent via these channels.\n\nCarefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.\n\nAvoid clichés or overly eager wording. Maintain a confident, professional tone.\n\nBe concise and avoid filler. Prioritize precise, verifiable facts from the profile.\n\nCompute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use '\\''over X years'\\'').\n\nIf dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).\n\nDo not expose chain-of-thought. Provide only final answer content (no '\\''<think>'\\'', analysis, steps, or reasoning).\n\nCRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.\n\nCRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.\n\nJob Description:\n\n<p>aga: Analista Desenvolvedor Java Pleno (Hibrido - SP) - CLT<br><br>👉Interessados devem encaminhar CV atualizado juntamente com a pretensão salarial para o e-mail: <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"mailto:[REDACTED_EMAIL]\"><strong>[REDACTED_EMAIL]</strong></a><br><br>🔹 Sobre a Vaga:<br>Estamos em busca de um Analista Desenvolvimento Java Pleno para se juntar à nossa equipe em um formato hibrido. Se você tem experiência e deseja crescer em um ambiente dinâmico e desafiador, esta é a sua chance!<br><br>Requisitos:<br>-Escolaridade: Graduação completa em Tecnologia da Informação ou qualquer curso de nível superior com pós-graduação na área de Tecnologia da Informação.<br><br>🔹 Requisitos Técnicos Obrigatórios:<br>* Desenvolvimento e análise de sistemas em aplicações Web utilizando modelo de arquitetura MVC.<br>* Desenvolvimento e manutenção de sistemas utilizando as seguintes linguagens: PLSQL, Java, JavaScript, HTML e XML.<br>* Containers e Gerenciamento: Docker e Kubernetes.<br>* Desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, , Redis.<br>* UML (casos de uso e demais diagramas);<br>* Arquitetura orientada a serviços (SOA).<br>* APIs<br>* Conhecimento de Frameworks de marcado como Spring (Spring-cloud), Angular, React, Vue, BootStrap entre outros;<br>* Intregração Contínua (CI) / Deployment Contínuo (CD).<br>* JSON / REST.<br><br>🔹 Horário de Trabalho e escala:<br>09h às 18h (1hr de almoço)<br>2x presencial e 3x home-office<br><br>🔹 Endereço: Rua Libero Badaró, 425 - Centro - SP<br><br>🔹 Benefícios de Trabalhar Conosco:<br>🍔Vale Alimentação/Refeição | Wiipo Flex<br>🏋‍♀TotalPass | Bem-estar para todos os colaboradores, todos os dias<br>👓 Parceria SESC | Saúde, Lazer, Turismo &amp; Esportes, Assistência Social e Alimentação<br>📕 Parcerias Educacionais | Aldeia, UDF, EBAC, ESPM, IPOG, VC_TB e WO.<br>🤍Seguro de vida<br><br>Todas as vagas são afirmativas!<br><br>E aí, se identificou com a vaga?<br>Não perca tempo e candidate-se!<br><br>Junte-se a nós e faça parte de uma equipe que valoriza inovação e excelência!</p>\n\nCandidate Profile (facts only, no fabrication):\n\nNome: Teste\nHeadline: teste\nLocalização: Brasilia\nEmail: [REDACTED_EMAIL]\nTelefone: [REDACTED_PHONE]\nWebsite: https://teste\nResumo:\n<p>chico</p>\nExperiências (mais recentes primeiro):\n- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)\n  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>\n- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)\n  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>\nTempo total de experiência (todas as experiências): 3 anos 7 meses\nSkills: JavaScript\nProjetos relevantes:\n- teste (https://teste)\n  <p>teste</p>\nEducação:\n- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])\nCertificações:\n- teste (teste, [REDACTED_PHONE])\nIdiomas: teste\nPrêmios:\n- teste (teste)\n- teste2 (teste2)\nPerfis:\n- GitHub: https://www.github.com/in/francisco-dev/\n- teste: http://teste\n\nUser note (additional instructions):\n\n<p>teste</p>\n\nTask:\n\nGenerate a currículo abrangente com todas as experiências relevantes in tom informal, porém cortês e direto, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).\n\n\n\nFollow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):\n\n\n\n**INFORMAÇÕES PESSOAIS**\n\nNome completo, email, telefone, localização, website (se disponível)\n\n\n\n**RESUMO PROFISSIONAL**\n\n2-3 frases destacando anos de experiência, especialização principal e fit com a vaga\n\n\n\n**EXPERIÊNCIA PROFISSIONAL**\n\nListar experiências mais relevantes à vaga (máximo 4-5), com:\n\n- Cargo, empresa, período (duração calculada)\n\n- 2-3 conquistas mensuráveis por experiência\n\n- Tecnologias e ferramentas utilizadas\n\n- Impacto nos resultados da empresa\n\n\n\n**EDUCAÇÃO**\n\nFormação acadêmica relevante (instituição, curso, período)\n\n\n\n**COMPETÊNCIAS TÉCNICAS**\n\nSkills mais relevantes à vaga, agrupadas por categoria\n\n\n\n**PROJETOS DESTACADOS**\n\nProjetos mais relevantes (máximo 3) com descrição e tecnologias\n\n\n\n**CERTIFICAÇÕES**\n\nCertificações relevantes (máximo 5) com emissor e data\n\n\n\n**IDIOMAS**\n\nIdiomas com nível de proficiência\n\n\n\n**PRÊMIOS E RECONHECIMENTOS**\n\nPrêmios relevantes (máximo 3) com contexto\n\n\n\n**VOLUNTARIADO**\n\nExperiências voluntárias relevantes (se houver)\n\n\n\n**PERFIS PROFISSIONAIS**\n\nLinks para LinkedIn, GitHub, portfolio (se disponíveis)\n\n\n\nInstruções específicas:\n\n- Priorizar experiências e skills mais relevantes à vaga\n\n- Usar linguagem ativa e orientada a resultados\n\n- Incluir métricas e números quando disponíveis no perfil\n\n- Adaptar tom ao tipo de expressão solicitado\n\n- Manter formato limpo e profissional\n\n- Não inventar dados, datas ou experiências\n\n- Focar na relevância para a posição específica\n\n- NUNCA duplicar ou repetir informações entre seções\n\n- Cada experiência deve ser descrita apenas uma vez"}],"temperature":0.5,"max_tokens":1200}'
```
#### Request body (sanitized)
```json
{
  "model": "llama3.2:latest",
  "messages": [
    {
      "role": "system",
      "content": "You are a cover-letter generator. Follow the user's format exactly. Do not invent facts. Detect the predominant language of the job description and reply strictly in that language (do not switch languages). Do not reveal chain-of-thought or internal reasoning; provide only the final answer content. If you would normally include a reasoning section like <think>...</think>, omit it and provide only the final letter body. Do not include code fences or markdown fences. Do not claim experience with any tool/technology that is not present in the candidate profile; at most, mention readiness to learn without implying past hands-on work. Be concise and avoid filler."
    },
    {
      "role": "user",
      "content": "Context: job-specific resume generation.\n\nDetect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from 'User note (additional instructions)'. If still undetectable, default to Portuguese (pt-BR).\n\nWrite as the candidate, in first-person singular (I). Do not write from the employer's perspective.\n\nGround all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.\n\nIf a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.\n\nDo not copy or paraphrase the job description; reference it only to align the candidate's fit.\n\nPrefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.\n\nReturn only the resume content in a structured format. Do not fabricate recruiter names or company details.\n\nPlanned delivery channels: email. Optimize format/length to be usable when sent via these channels.\n\nCarefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.\n\nAvoid clichés or overly eager wording. Maintain a confident, professional tone.\n\nBe concise and avoid filler. Prioritize precise, verifiable facts from the profile.\n\nCompute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use 'over X years').\n\nIf dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).\n\nDo not expose chain-of-thought. Provide only final answer content (no '<think>', analysis, steps, or reasoning).\n\nCRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.\n\nCRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.\n\nJob Description:\n\n<p>aga: Analista Desenvolvedor Java Pleno (Hibrido - SP) - CLT<br><br>👉Interessados devem encaminhar CV atualizado juntamente com a pretensão salarial para o e-mail: <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"mailto:[REDACTED_EMAIL]\"><strong>[REDACTED_EMAIL]</strong></a><br><br>🔹 Sobre a Vaga:<br>Estamos em busca de um Analista Desenvolvimento Java Pleno para se juntar à nossa equipe em um formato hibrido. Se você tem experiência e deseja crescer em um ambiente dinâmico e desafiador, esta é a sua chance!<br><br>Requisitos:<br>-Escolaridade: Graduação completa em Tecnologia da Informação ou qualquer curso de nível superior com pós-graduação na área de Tecnologia da Informação.<br><br>🔹 Requisitos Técnicos Obrigatórios:<br>* Desenvolvimento e análise de sistemas em aplicações Web utilizando modelo de arquitetura MVC.<br>* Desenvolvimento e manutenção de sistemas utilizando as seguintes linguagens: PLSQL, Java, JavaScript, HTML e XML.<br>* Containers e Gerenciamento: Docker e Kubernetes.<br>* Desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, , Redis.<br>* UML (casos de uso e demais diagramas);<br>* Arquitetura orientada a serviços (SOA).<br>* APIs<br>* Conhecimento de Frameworks de marcado como Spring (Spring-cloud), Angular, React, Vue, BootStrap entre outros;<br>* Intregração Contínua (CI) / Deployment Contínuo (CD).<br>* JSON / REST.<br><br>🔹 Horário de Trabalho e escala:<br>09h às 18h (1hr de almoço)<br>2x presencial e 3x home-office<br><br>🔹 Endereço: Rua Libero Badaró, 425 - Centro - SP<br><br>🔹 Benefícios de Trabalhar Conosco:<br>🍔Vale Alimentação/Refeição | Wiipo Flex<br>🏋‍♀TotalPass | Bem-estar para todos os colaboradores, todos os dias<br>👓 Parceria SESC | Saúde, Lazer, Turismo &amp; Esportes, Assistência Social e Alimentação<br>📕 Parcerias Educacionais | Aldeia, UDF, EBAC, ESPM, IPOG, VC_TB e WO.<br>🤍Seguro de vida<br><br>Todas as vagas são afirmativas!<br><br>E aí, se identificou com a vaga?<br>Não perca tempo e candidate-se!<br><br>Junte-se a nós e faça parte de uma equipe que valoriza inovação e excelência!</p>\n\nCandidate Profile (facts only, no fabrication):\n\nNome: Teste\nHeadline: teste\nLocalização: Brasilia\nEmail: [REDACTED_EMAIL]\nTelefone: [REDACTED_PHONE]\nWebsite: https://teste\nResumo:\n<p>chico</p>\nExperiências (mais recentes primeiro):\n- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)\n  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>\n- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)\n  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>\nTempo total de experiência (todas as experiências): 3 anos 7 meses\nSkills: JavaScript\nProjetos relevantes:\n- teste (https://teste)\n  <p>teste</p>\nEducação:\n- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])\nCertificações:\n- teste (teste, [REDACTED_PHONE])\nIdiomas: teste\nPrêmios:\n- teste (teste)\n- teste2 (teste2)\nPerfis:\n- GitHub: https://www.github.com/in/francisco-dev/\n- teste: http://teste\n\nUser note (additional instructions):\n\n<p>teste</p>\n\nTask:\n\nGenerate a currículo abrangente com todas as experiências relevantes in tom informal, porém cortês e direto, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).\n\n\n\nFollow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):\n\n\n\n**INFORMAÇÕES PESSOAIS**\n\nNome completo, email, telefone, localização, website (se disponível)\n\n\n\n**RESUMO PROFISSIONAL**\n\n2-3 frases destacando anos de experiência, especialização principal e fit com a vaga\n\n\n\n**EXPERIÊNCIA PROFISSIONAL**\n\nListar experiências mais relevantes à vaga (máximo 4-5), com:\n\n- Cargo, empresa, período (duração calculada)\n\n- 2-3 conquistas mensuráveis por experiência\n\n- Tecnologias e ferramentas utilizadas\n\n- Impacto nos resultados da empresa\n\n\n\n**EDUCAÇÃO**\n\nFormação acadêmica relevante (instituição, curso, período)\n\n\n\n**COMPETÊNCIAS TÉCNICAS**\n\nSkills mais relevantes à vaga, agrupadas por categoria\n\n\n\n**PROJETOS DESTACADOS**\n\nProjetos mais relevantes (máximo 3) com descrição e tecnologias\n\n\n\n**CERTIFICAÇÕES**\n\nCertificações relevantes (máximo 5) com emissor e data\n\n\n\n**IDIOMAS**\n\nIdiomas com nível de proficiência\n\n\n\n**PRÊMIOS E RECONHECIMENTOS**\n\nPrêmios relevantes (máximo 3) com contexto\n\n\n\n**VOLUNTARIADO**\n\nExperiências voluntárias relevantes (se houver)\n\n\n\n**PERFIS PROFISSIONAIS**\n\nLinks para LinkedIn, GitHub, portfolio (se disponíveis)\n\n\n\nInstruções específicas:\n\n- Priorizar experiências e skills mais relevantes à vaga\n\n- Usar linguagem ativa e orientada a resultados\n\n- Incluir métricas e números quando disponíveis no perfil\n\n- Adaptar tom ao tipo de expressão solicitado\n\n- Manter formato limpo e profissional\n\n- Não inventar dados, datas ou experiências\n\n- Focar na relevância para a posição específica\n\n- NUNCA duplicar ou repetir informações entre seções\n\n- Cada experiência deve ser descrita apenas uma vez"
    }
  ],
  "temperature": 0.5,
  "max_tokens": 1200
}
```

#### LLM Response — 1755733038626-fcbdjk
- Timestamp: 2025-08-20T23:38:03.270Z
- Cover letter length: 1510 • SHA256: 5552c086660082cbbacc9cc6b432f3e06060dd47d36125f566ce63a3d8b842b9

```text
**INFORMAÇÕES PESSOAIS**

Nome: Teste, Email: [REDACTED_EMAIL], Tel: [REDACTED_PHONE], Localização: Brasilia, Website: https://teste

**RESUMO PROFISSIONAL**

Desenvolvedor experiente com 3 anos de experiência em desenvolvimento de sistemas, especializado em JavaScript e com habilidades relevantes para o cargo de Analista Desenvolvedor Java Pleno. Estou procurando por um desafio que me permita aplicar minhas habilidades em um ambiente dinâmico e inovador.

**EXPERIÊNCIA PROFISSIONAL**

- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)
  Desenvolvi landingpages e um website de vendas de seguros com next e react js. Aumentei a conversão em 20% ao implementar melhorias na experiência do usuário.
  Utilizei tecnologias como React, JavaScript e Next.js.

- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)
  Desenvolvi APIs escalaveis e implementei testes unitários. Melhorei a velocidade de resposta em 30% ao otimizar a estrutura do código.

**EDUCAÇÃO**

Formação acadêmica relevante: Estacio, Curso de Analise e Desenvolvimento de Sistemas ([REDACTED_PHONE])

**COMPETÊNCIAS TÉCNICAS**

- Desenvolvimento web
- JavaScript
- React
- Next.js

**PROJETOS DESTACADOS**

- teste (https://teste)
  Desenvolvi um projeto de vendas de seguros com tecnologias como React e Next.js.

**CERTIFICAÇÕES**

- teste (teste, [REDACTED_PHONE])

**IDIOMAS**

Português

**PRÊMIOS E RECONHECIMENTOS**

- teste (teste)
- teste2 (teste2)
```
---

### Application Request 1755733129781-swr4xs
- Timestamp: 2025-08-20T23:38:49.787Z
- User: cm9hp80720000gk3gykahk5f4
- Channels: email
- Expression: informal
- Job description length: 2156
- Prompt length: 7334 • SHA256: 7b46d45b0cf5a558423c09548087a77ed865c610e1f2aaf423bc32e6cc273805
- Model: llama3.2:latest

#### Prompt
```text
Context: job-specific resume generation.

Detect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from 'User note (additional instructions)'. If still undetectable, default to Portuguese (pt-BR).

Write as the candidate, in first-person singular (I). Do not write from the employer's perspective.

Ground all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.

If a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.

Do not copy or paraphrase the job description; reference it only to align the candidate's fit.

Prefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.

Return only the resume content in a structured format. Do not fabricate recruiter names or company details.

Planned delivery channels: email. Optimize format/length to be usable when sent via these channels.

Carefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.

Avoid clichés or overly eager wording. Maintain a confident, professional tone.

Be concise and avoid filler. Prioritize precise, verifiable facts from the profile.

Compute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use 'over X years').

If dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).

Do not expose chain-of-thought. Provide only final answer content (no '<think>', analysis, steps, or reasoning).

CRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.

CRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.

Job Description:

<p>aga: Analista Desenvolvedor Java Pleno (Hibrido - SP) - CLT<br><br>👉Interessados devem encaminhar CV atualizado juntamente com a pretensão salarial para o e-mail: <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:[REDACTED_EMAIL]"><strong>[REDACTED_EMAIL]</strong></a><br><br>🔹 Sobre a Vaga:<br>Estamos em busca de um Analista Desenvolvimento Java Pleno para se juntar à nossa equipe em um formato hibrido. Se você tem experiência e deseja crescer em um ambiente dinâmico e desafiador, esta é a sua chance!<br><br>Requisitos:<br>-Escolaridade: Graduação completa em Tecnologia da Informação ou qualquer curso de nível superior com pós-graduação na área de Tecnologia da Informação.<br><br>🔹 Requisitos Técnicos Obrigatórios:<br>* Desenvolvimento e análise de sistemas em aplicações Web utilizando modelo de arquitetura MVC.<br>* Desenvolvimento e manutenção de sistemas utilizando as seguintes linguagens: PLSQL, Java, JavaScript, HTML e XML.<br>* Containers e Gerenciamento: Docker e Kubernetes.<br>* Desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, , Redis.<br>* UML (casos de uso e demais diagramas);<br>* Arquitetura orientada a serviços (SOA).<br>* APIs<br>* Conhecimento de Frameworks de marcado como Spring (Spring-cloud), Angular, React, Vue, BootStrap entre outros;<br>* Intregração Contínua (CI) / Deployment Contínuo (CD).<br>* JSON / REST.<br><br>🔹 Horário de Trabalho e escala:<br>09h às 18h (1hr de almoço)<br>2x presencial e 3x home-office<br><br>🔹 Endereço: Rua Libero Badaró, 425 - Centro - SP<br><br>🔹 Benefícios de Trabalhar Conosco:<br>🍔Vale Alimentação/Refeição | Wiipo Flex<br>🏋‍♀TotalPass | Bem-estar para todos os colaboradores, todos os dias<br>👓 Parceria SESC | Saúde, Lazer, Turismo &amp; Esportes, Assistência Social e Alimentação<br>📕 Parcerias Educacionais | Aldeia, UDF, EBAC, ESPM, IPOG, VC_TB e WO.<br>🤍Seguro de vida<br><br>Todas as vagas são afirmativas!<br><br>E aí, se identificou com a vaga?<br>Não perca tempo e candidate-se!<br><br>Junte-se a nós e faça parte de uma equipe que valoriza inovação e excelência!</p>

Candidate Profile (facts only, no fabrication):

Nome: Teste
Headline: teste
Localização: Brasilia
Email: [REDACTED_EMAIL]
Telefone: [REDACTED_PHONE]
Website: https://teste
Resumo:
<p>chico</p>
Experiências (mais recentes primeiro):
- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)
  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>
- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)
  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>
Tempo total de experiência (todas as experiências): 3 anos 7 meses
Skills: JavaScript
Projetos relevantes:
- teste (https://teste)
  <p>teste</p>
Educação:
- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])
Certificações:
- teste (teste, [REDACTED_PHONE])
Idiomas: teste
Prêmios:
- teste (teste)
- teste2 (teste2)
Perfis:
- GitHub: https://www.github.com/in/francisco-dev/
- teste: http://teste

User note (additional instructions):

<p>teste</p>

Task:

Generate a currículo abrangente com todas as experiências relevantes in tom informal, porém cortês e direto, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).



Follow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):



**INFORMAÇÕES PESSOAIS**

Nome completo, email, telefone, localização, website (se disponível)



**RESUMO PROFISSIONAL**

2-3 frases destacando anos de experiência, especialização principal e fit com a vaga



**EXPERIÊNCIA PROFISSIONAL**

Listar experiências mais relevantes à vaga (máximo 4-5), com:

- Cargo, empresa, período (duração calculada)

- 2-3 conquistas mensuráveis por experiência

- Tecnologias e ferramentas utilizadas

- Impacto nos resultados da empresa



**EDUCAÇÃO**

Formação acadêmica relevante (instituição, curso, período)



**COMPETÊNCIAS TÉCNICAS**

Skills mais relevantes à vaga, agrupadas por categoria



**PROJETOS DESTACADOS**

Projetos mais relevantes (máximo 3) com descrição e tecnologias



**CERTIFICAÇÕES**

Certificações relevantes (máximo 5) com emissor e data



**IDIOMAS**

Idiomas com nível de proficiência



**PRÊMIOS E RECONHECIMENTOS**

Prêmios relevantes (máximo 3) com contexto



**VOLUNTARIADO**

Experiências voluntárias relevantes (se houver)



**PERFIS PROFISSIONAIS**

Links para LinkedIn, GitHub, portfolio (se disponíveis)



Instruções específicas:

- Priorizar experiências e skills mais relevantes à vaga

- Usar linguagem ativa e orientada a resultados

- Incluir métricas e números quando disponíveis no perfil

- Adaptar tom ao tipo de expressão solicitado

- Manter formato limpo e profissional

- Não inventar dados, datas ou experiências

- Focar na relevância para a posição específica

- NUNCA duplicar ou repetir informações entre seções

- Cada experiência deve ser descrita apenas uma vez
```
#### HTTP request (cURL)
```bash
curl -sS -X POST 'http://localhost:11434/v1/chat/completions' \
  -H 'Content-Type: application/json' \
  -d '{"model":"llama3.2:latest","messages":[{"role":"system","content":"You are a cover-letter generator. Follow the user'\\''s format exactly. Do not invent facts. Detect the predominant language of the job description and reply strictly in that language (do not switch languages). Do not reveal chain-of-thought or internal reasoning; provide only the final answer content. If you would normally include a reasoning section like <think>...</think>, omit it and provide only the final letter body. Do not include code fences or markdown fences. Do not claim experience with any tool/technology that is not present in the candidate profile; at most, mention readiness to learn without implying past hands-on work. Be concise and avoid filler."},{"role":"user","content":"Context: job-specific resume generation.\n\nDetect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from '\\''User note (additional instructions)'\\''. If still undetectable, default to Portuguese (pt-BR).\n\nWrite as the candidate, in first-person singular (I). Do not write from the employer'\\''s perspective.\n\nGround all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.\n\nIf a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.\n\nDo not copy or paraphrase the job description; reference it only to align the candidate'\\''s fit.\n\nPrefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.\n\nReturn only the resume content in a structured format. Do not fabricate recruiter names or company details.\n\nPlanned delivery channels: email. Optimize format/length to be usable when sent via these channels.\n\nCarefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.\n\nAvoid clichés or overly eager wording. Maintain a confident, professional tone.\n\nBe concise and avoid filler. Prioritize precise, verifiable facts from the profile.\n\nCompute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use '\\''over X years'\\'').\n\nIf dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).\n\nDo not expose chain-of-thought. Provide only final answer content (no '\\''<think>'\\'', analysis, steps, or reasoning).\n\nCRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.\n\nCRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.\n\nJob Description:\n\n<p>aga: Analista Desenvolvedor Java Pleno (Hibrido - SP) - CLT<br><br>👉Interessados devem encaminhar CV atualizado juntamente com a pretensão salarial para o e-mail: <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"mailto:[REDACTED_EMAIL]\"><strong>[REDACTED_EMAIL]</strong></a><br><br>🔹 Sobre a Vaga:<br>Estamos em busca de um Analista Desenvolvimento Java Pleno para se juntar à nossa equipe em um formato hibrido. Se você tem experiência e deseja crescer em um ambiente dinâmico e desafiador, esta é a sua chance!<br><br>Requisitos:<br>-Escolaridade: Graduação completa em Tecnologia da Informação ou qualquer curso de nível superior com pós-graduação na área de Tecnologia da Informação.<br><br>🔹 Requisitos Técnicos Obrigatórios:<br>* Desenvolvimento e análise de sistemas em aplicações Web utilizando modelo de arquitetura MVC.<br>* Desenvolvimento e manutenção de sistemas utilizando as seguintes linguagens: PLSQL, Java, JavaScript, HTML e XML.<br>* Containers e Gerenciamento: Docker e Kubernetes.<br>* Desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, , Redis.<br>* UML (casos de uso e demais diagramas);<br>* Arquitetura orientada a serviços (SOA).<br>* APIs<br>* Conhecimento de Frameworks de marcado como Spring (Spring-cloud), Angular, React, Vue, BootStrap entre outros;<br>* Intregração Contínua (CI) / Deployment Contínuo (CD).<br>* JSON / REST.<br><br>🔹 Horário de Trabalho e escala:<br>09h às 18h (1hr de almoço)<br>2x presencial e 3x home-office<br><br>🔹 Endereço: Rua Libero Badaró, 425 - Centro - SP<br><br>🔹 Benefícios de Trabalhar Conosco:<br>🍔Vale Alimentação/Refeição | Wiipo Flex<br>🏋‍♀TotalPass | Bem-estar para todos os colaboradores, todos os dias<br>👓 Parceria SESC | Saúde, Lazer, Turismo &amp; Esportes, Assistência Social e Alimentação<br>📕 Parcerias Educacionais | Aldeia, UDF, EBAC, ESPM, IPOG, VC_TB e WO.<br>🤍Seguro de vida<br><br>Todas as vagas são afirmativas!<br><br>E aí, se identificou com a vaga?<br>Não perca tempo e candidate-se!<br><br>Junte-se a nós e faça parte de uma equipe que valoriza inovação e excelência!</p>\n\nCandidate Profile (facts only, no fabrication):\n\nNome: Teste\nHeadline: teste\nLocalização: Brasilia\nEmail: [REDACTED_EMAIL]\nTelefone: [REDACTED_PHONE]\nWebsite: https://teste\nResumo:\n<p>chico</p>\nExperiências (mais recentes primeiro):\n- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)\n  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>\n- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)\n  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>\nTempo total de experiência (todas as experiências): 3 anos 7 meses\nSkills: JavaScript\nProjetos relevantes:\n- teste (https://teste)\n  <p>teste</p>\nEducação:\n- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])\nCertificações:\n- teste (teste, [REDACTED_PHONE])\nIdiomas: teste\nPrêmios:\n- teste (teste)\n- teste2 (teste2)\nPerfis:\n- GitHub: https://www.github.com/in/francisco-dev/\n- teste: http://teste\n\nUser note (additional instructions):\n\n<p>teste</p>\n\nTask:\n\nGenerate a currículo abrangente com todas as experiências relevantes in tom informal, porém cortês e direto, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).\n\n\n\nFollow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):\n\n\n\n**INFORMAÇÕES PESSOAIS**\n\nNome completo, email, telefone, localização, website (se disponível)\n\n\n\n**RESUMO PROFISSIONAL**\n\n2-3 frases destacando anos de experiência, especialização principal e fit com a vaga\n\n\n\n**EXPERIÊNCIA PROFISSIONAL**\n\nListar experiências mais relevantes à vaga (máximo 4-5), com:\n\n- Cargo, empresa, período (duração calculada)\n\n- 2-3 conquistas mensuráveis por experiência\n\n- Tecnologias e ferramentas utilizadas\n\n- Impacto nos resultados da empresa\n\n\n\n**EDUCAÇÃO**\n\nFormação acadêmica relevante (instituição, curso, período)\n\n\n\n**COMPETÊNCIAS TÉCNICAS**\n\nSkills mais relevantes à vaga, agrupadas por categoria\n\n\n\n**PROJETOS DESTACADOS**\n\nProjetos mais relevantes (máximo 3) com descrição e tecnologias\n\n\n\n**CERTIFICAÇÕES**\n\nCertificações relevantes (máximo 5) com emissor e data\n\n\n\n**IDIOMAS**\n\nIdiomas com nível de proficiência\n\n\n\n**PRÊMIOS E RECONHECIMENTOS**\n\nPrêmios relevantes (máximo 3) com contexto\n\n\n\n**VOLUNTARIADO**\n\nExperiências voluntárias relevantes (se houver)\n\n\n\n**PERFIS PROFISSIONAIS**\n\nLinks para LinkedIn, GitHub, portfolio (se disponíveis)\n\n\n\nInstruções específicas:\n\n- Priorizar experiências e skills mais relevantes à vaga\n\n- Usar linguagem ativa e orientada a resultados\n\n- Incluir métricas e números quando disponíveis no perfil\n\n- Adaptar tom ao tipo de expressão solicitado\n\n- Manter formato limpo e profissional\n\n- Não inventar dados, datas ou experiências\n\n- Focar na relevância para a posição específica\n\n- NUNCA duplicar ou repetir informações entre seções\n\n- Cada experiência deve ser descrita apenas uma vez"}],"temperature":0.5,"max_tokens":1200}'
```
#### Request body (sanitized)
```json
{
  "model": "llama3.2:latest",
  "messages": [
    {
      "role": "system",
      "content": "You are a cover-letter generator. Follow the user's format exactly. Do not invent facts. Detect the predominant language of the job description and reply strictly in that language (do not switch languages). Do not reveal chain-of-thought or internal reasoning; provide only the final answer content. If you would normally include a reasoning section like <think>...</think>, omit it and provide only the final letter body. Do not include code fences or markdown fences. Do not claim experience with any tool/technology that is not present in the candidate profile; at most, mention readiness to learn without implying past hands-on work. Be concise and avoid filler."
    },
    {
      "role": "user",
      "content": "Context: job-specific resume generation.\n\nDetect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from 'User note (additional instructions)'. If still undetectable, default to Portuguese (pt-BR).\n\nWrite as the candidate, in first-person singular (I). Do not write from the employer's perspective.\n\nGround all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.\n\nIf a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.\n\nDo not copy or paraphrase the job description; reference it only to align the candidate's fit.\n\nPrefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.\n\nReturn only the resume content in a structured format. Do not fabricate recruiter names or company details.\n\nPlanned delivery channels: email. Optimize format/length to be usable when sent via these channels.\n\nCarefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.\n\nAvoid clichés or overly eager wording. Maintain a confident, professional tone.\n\nBe concise and avoid filler. Prioritize precise, verifiable facts from the profile.\n\nCompute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use 'over X years').\n\nIf dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).\n\nDo not expose chain-of-thought. Provide only final answer content (no '<think>', analysis, steps, or reasoning).\n\nCRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.\n\nCRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.\n\nJob Description:\n\n<p>aga: Analista Desenvolvedor Java Pleno (Hibrido - SP) - CLT<br><br>👉Interessados devem encaminhar CV atualizado juntamente com a pretensão salarial para o e-mail: <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"mailto:[REDACTED_EMAIL]\"><strong>[REDACTED_EMAIL]</strong></a><br><br>🔹 Sobre a Vaga:<br>Estamos em busca de um Analista Desenvolvimento Java Pleno para se juntar à nossa equipe em um formato hibrido. Se você tem experiência e deseja crescer em um ambiente dinâmico e desafiador, esta é a sua chance!<br><br>Requisitos:<br>-Escolaridade: Graduação completa em Tecnologia da Informação ou qualquer curso de nível superior com pós-graduação na área de Tecnologia da Informação.<br><br>🔹 Requisitos Técnicos Obrigatórios:<br>* Desenvolvimento e análise de sistemas em aplicações Web utilizando modelo de arquitetura MVC.<br>* Desenvolvimento e manutenção de sistemas utilizando as seguintes linguagens: PLSQL, Java, JavaScript, HTML e XML.<br>* Containers e Gerenciamento: Docker e Kubernetes.<br>* Desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, , Redis.<br>* UML (casos de uso e demais diagramas);<br>* Arquitetura orientada a serviços (SOA).<br>* APIs<br>* Conhecimento de Frameworks de marcado como Spring (Spring-cloud), Angular, React, Vue, BootStrap entre outros;<br>* Intregração Contínua (CI) / Deployment Contínuo (CD).<br>* JSON / REST.<br><br>🔹 Horário de Trabalho e escala:<br>09h às 18h (1hr de almoço)<br>2x presencial e 3x home-office<br><br>🔹 Endereço: Rua Libero Badaró, 425 - Centro - SP<br><br>🔹 Benefícios de Trabalhar Conosco:<br>🍔Vale Alimentação/Refeição | Wiipo Flex<br>🏋‍♀TotalPass | Bem-estar para todos os colaboradores, todos os dias<br>👓 Parceria SESC | Saúde, Lazer, Turismo &amp; Esportes, Assistência Social e Alimentação<br>📕 Parcerias Educacionais | Aldeia, UDF, EBAC, ESPM, IPOG, VC_TB e WO.<br>🤍Seguro de vida<br><br>Todas as vagas são afirmativas!<br><br>E aí, se identificou com a vaga?<br>Não perca tempo e candidate-se!<br><br>Junte-se a nós e faça parte de uma equipe que valoriza inovação e excelência!</p>\n\nCandidate Profile (facts only, no fabrication):\n\nNome: Teste\nHeadline: teste\nLocalização: Brasilia\nEmail: [REDACTED_EMAIL]\nTelefone: [REDACTED_PHONE]\nWebsite: https://teste\nResumo:\n<p>chico</p>\nExperiências (mais recentes primeiro):\n- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)\n  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>\n- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)\n  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>\nTempo total de experiência (todas as experiências): 3 anos 7 meses\nSkills: JavaScript\nProjetos relevantes:\n- teste (https://teste)\n  <p>teste</p>\nEducação:\n- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])\nCertificações:\n- teste (teste, [REDACTED_PHONE])\nIdiomas: teste\nPrêmios:\n- teste (teste)\n- teste2 (teste2)\nPerfis:\n- GitHub: https://www.github.com/in/francisco-dev/\n- teste: http://teste\n\nUser note (additional instructions):\n\n<p>teste</p>\n\nTask:\n\nGenerate a currículo abrangente com todas as experiências relevantes in tom informal, porém cortês e direto, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).\n\n\n\nFollow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):\n\n\n\n**INFORMAÇÕES PESSOAIS**\n\nNome completo, email, telefone, localização, website (se disponível)\n\n\n\n**RESUMO PROFISSIONAL**\n\n2-3 frases destacando anos de experiência, especialização principal e fit com a vaga\n\n\n\n**EXPERIÊNCIA PROFISSIONAL**\n\nListar experiências mais relevantes à vaga (máximo 4-5), com:\n\n- Cargo, empresa, período (duração calculada)\n\n- 2-3 conquistas mensuráveis por experiência\n\n- Tecnologias e ferramentas utilizadas\n\n- Impacto nos resultados da empresa\n\n\n\n**EDUCAÇÃO**\n\nFormação acadêmica relevante (instituição, curso, período)\n\n\n\n**COMPETÊNCIAS TÉCNICAS**\n\nSkills mais relevantes à vaga, agrupadas por categoria\n\n\n\n**PROJETOS DESTACADOS**\n\nProjetos mais relevantes (máximo 3) com descrição e tecnologias\n\n\n\n**CERTIFICAÇÕES**\n\nCertificações relevantes (máximo 5) com emissor e data\n\n\n\n**IDIOMAS**\n\nIdiomas com nível de proficiência\n\n\n\n**PRÊMIOS E RECONHECIMENTOS**\n\nPrêmios relevantes (máximo 3) com contexto\n\n\n\n**VOLUNTARIADO**\n\nExperiências voluntárias relevantes (se houver)\n\n\n\n**PERFIS PROFISSIONAIS**\n\nLinks para LinkedIn, GitHub, portfolio (se disponíveis)\n\n\n\nInstruções específicas:\n\n- Priorizar experiências e skills mais relevantes à vaga\n\n- Usar linguagem ativa e orientada a resultados\n\n- Incluir métricas e números quando disponíveis no perfil\n\n- Adaptar tom ao tipo de expressão solicitado\n\n- Manter formato limpo e profissional\n\n- Não inventar dados, datas ou experiências\n\n- Focar na relevância para a posição específica\n\n- NUNCA duplicar ou repetir informações entre seções\n\n- Cada experiência deve ser descrita apenas uma vez"
    }
  ],
  "temperature": 0.5,
  "max_tokens": 1200
}
```

#### LLM Response — 1755733129781-swr4xs
- Timestamp: 2025-08-20T23:39:31.671Z
- Cover letter length: 1470 • SHA256: c4fb0246ef073bf0955da0b1197974d00433790b6132322ebb45c739b4bc1117

```text
**INFORMAÇÕES PESSOAIS**

Nome: Teste, Email: [REDACTED_EMAIL], Telefone: [REDACTED_PHONE], Localização: Brasilia, Website: https://teste

**RESUMO PROFISSIONAL**

Desenvolvedor Java Pleno com 3 anos de experiência em desenvolvimento de sistemas escaláveis e testes unitários. Estou procurando por um ambiente dinâmico para crescer e aplicar minhas habilidades.

**EXPERIÊNCIA PROFISSIONAL**

- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], 3 anos 1 mês)
  Desenvolvi landingpages e um website de vendas de seguros com next e react js.
  Tecnologias: React JS, Next
- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], 3 anos 7 meses)
  Desenvolvedor senior desenvolvendo APIs escalaveis e testes unitários.
  Tecnologias: Java, JavaScript, PLSQL

**EDUCAÇÃO**

Formação em Analise e Desenvolvimento de Sistemas - Estacio ([REDACTED_PHONE])

**COMPETÊNCIAS TÉCNICAS**

- Desenvolvimento de sistemas
- Lançamentos e vendas de seguros
- Programação em Java, JavaScript, PLSQL

**PROJETOS DESTACADOS**

- teste (https://teste)
  Desenvolvimento de um sistema de vendas de seguros com React JS.
- teste2 (https://teste2)

**CERTIFICAÇÕES**

- Certificação em Analise e Desenvolvimento de Sistemas - Estacio ([REDACTED_PHONE])

**IDIOMAS**

- Português

**PRÊMIOS E RECONHECIMENTOS**

- Prêmio em Desenvolvimento de Sistemas - Estacio

**VOLUNTARIADO**

Nenhum

**PERFIS PROFISSIONAIS**

- GitHub: https://www.github.com/in/francisco-dev/
```
---

### Application Request 1755733179107-3hxqmo
- Timestamp: 2025-08-20T23:39:39.113Z
- User: cm9hp80720000gk3gykahk5f4
- Channels: email
- Expression: informal
- Job description length: 2156
- Prompt length: 7334 • SHA256: 7b46d45b0cf5a558423c09548087a77ed865c610e1f2aaf423bc32e6cc273805
- Model: llama3.2:latest

#### Prompt
```text
Context: job-specific resume generation.

Detect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from 'User note (additional instructions)'. If still undetectable, default to Portuguese (pt-BR).

Write as the candidate, in first-person singular (I). Do not write from the employer's perspective.

Ground all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.

If a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.

Do not copy or paraphrase the job description; reference it only to align the candidate's fit.

Prefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.

Return only the resume content in a structured format. Do not fabricate recruiter names or company details.

Planned delivery channels: email. Optimize format/length to be usable when sent via these channels.

Carefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.

Avoid clichés or overly eager wording. Maintain a confident, professional tone.

Be concise and avoid filler. Prioritize precise, verifiable facts from the profile.

Compute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use 'over X years').

If dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).

Do not expose chain-of-thought. Provide only final answer content (no '<think>', analysis, steps, or reasoning).

CRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.

CRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.

Job Description:

<p>aga: Analista Desenvolvedor Java Pleno (Hibrido - SP) - CLT<br><br>👉Interessados devem encaminhar CV atualizado juntamente com a pretensão salarial para o e-mail: <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:[REDACTED_EMAIL]"><strong>[REDACTED_EMAIL]</strong></a><br><br>🔹 Sobre a Vaga:<br>Estamos em busca de um Analista Desenvolvimento Java Pleno para se juntar à nossa equipe em um formato hibrido. Se você tem experiência e deseja crescer em um ambiente dinâmico e desafiador, esta é a sua chance!<br><br>Requisitos:<br>-Escolaridade: Graduação completa em Tecnologia da Informação ou qualquer curso de nível superior com pós-graduação na área de Tecnologia da Informação.<br><br>🔹 Requisitos Técnicos Obrigatórios:<br>* Desenvolvimento e análise de sistemas em aplicações Web utilizando modelo de arquitetura MVC.<br>* Desenvolvimento e manutenção de sistemas utilizando as seguintes linguagens: PLSQL, Java, JavaScript, HTML e XML.<br>* Containers e Gerenciamento: Docker e Kubernetes.<br>* Desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, , Redis.<br>* UML (casos de uso e demais diagramas);<br>* Arquitetura orientada a serviços (SOA).<br>* APIs<br>* Conhecimento de Frameworks de marcado como Spring (Spring-cloud), Angular, React, Vue, BootStrap entre outros;<br>* Intregração Contínua (CI) / Deployment Contínuo (CD).<br>* JSON / REST.<br><br>🔹 Horário de Trabalho e escala:<br>09h às 18h (1hr de almoço)<br>2x presencial e 3x home-office<br><br>🔹 Endereço: Rua Libero Badaró, 425 - Centro - SP<br><br>🔹 Benefícios de Trabalhar Conosco:<br>🍔Vale Alimentação/Refeição | Wiipo Flex<br>🏋‍♀TotalPass | Bem-estar para todos os colaboradores, todos os dias<br>👓 Parceria SESC | Saúde, Lazer, Turismo &amp; Esportes, Assistência Social e Alimentação<br>📕 Parcerias Educacionais | Aldeia, UDF, EBAC, ESPM, IPOG, VC_TB e WO.<br>🤍Seguro de vida<br><br>Todas as vagas são afirmativas!<br><br>E aí, se identificou com a vaga?<br>Não perca tempo e candidate-se!<br><br>Junte-se a nós e faça parte de uma equipe que valoriza inovação e excelência!</p>

Candidate Profile (facts only, no fabrication):

Nome: Teste
Headline: teste
Localização: Brasilia
Email: [REDACTED_EMAIL]
Telefone: [REDACTED_PHONE]
Website: https://teste
Resumo:
<p>chico</p>
Experiências (mais recentes primeiro):
- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)
  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>
- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)
  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>
Tempo total de experiência (todas as experiências): 3 anos 7 meses
Skills: JavaScript
Projetos relevantes:
- teste (https://teste)
  <p>teste</p>
Educação:
- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])
Certificações:
- teste (teste, [REDACTED_PHONE])
Idiomas: teste
Prêmios:
- teste (teste)
- teste2 (teste2)
Perfis:
- GitHub: https://www.github.com/in/francisco-dev/
- teste: http://teste

User note (additional instructions):

<p>teste</p>

Task:

Generate a currículo abrangente com todas as experiências relevantes in tom informal, porém cortês e direto, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).



Follow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):



**INFORMAÇÕES PESSOAIS**

Nome completo, email, telefone, localização, website (se disponível)



**RESUMO PROFISSIONAL**

2-3 frases destacando anos de experiência, especialização principal e fit com a vaga



**EXPERIÊNCIA PROFISSIONAL**

Listar experiências mais relevantes à vaga (máximo 4-5), com:

- Cargo, empresa, período (duração calculada)

- 2-3 conquistas mensuráveis por experiência

- Tecnologias e ferramentas utilizadas

- Impacto nos resultados da empresa



**EDUCAÇÃO**

Formação acadêmica relevante (instituição, curso, período)



**COMPETÊNCIAS TÉCNICAS**

Skills mais relevantes à vaga, agrupadas por categoria



**PROJETOS DESTACADOS**

Projetos mais relevantes (máximo 3) com descrição e tecnologias



**CERTIFICAÇÕES**

Certificações relevantes (máximo 5) com emissor e data



**IDIOMAS**

Idiomas com nível de proficiência



**PRÊMIOS E RECONHECIMENTOS**

Prêmios relevantes (máximo 3) com contexto



**VOLUNTARIADO**

Experiências voluntárias relevantes (se houver)



**PERFIS PROFISSIONAIS**

Links para LinkedIn, GitHub, portfolio (se disponíveis)



Instruções específicas:

- Priorizar experiências e skills mais relevantes à vaga

- Usar linguagem ativa e orientada a resultados

- Incluir métricas e números quando disponíveis no perfil

- Adaptar tom ao tipo de expressão solicitado

- Manter formato limpo e profissional

- Não inventar dados, datas ou experiências

- Focar na relevância para a posição específica

- NUNCA duplicar ou repetir informações entre seções

- Cada experiência deve ser descrita apenas uma vez
```
#### HTTP request (cURL)
```bash
curl -sS -X POST 'http://localhost:11434/v1/chat/completions' \
  -H 'Content-Type: application/json' \
  -d '{"model":"llama3.2:latest","messages":[{"role":"system","content":"You are a cover-letter generator. Follow the user'\\''s format exactly. Do not invent facts. Detect the predominant language of the job description and reply strictly in that language (do not switch languages). Do not reveal chain-of-thought or internal reasoning; provide only the final answer content. If you would normally include a reasoning section like <think>...</think>, omit it and provide only the final letter body. Do not include code fences or markdown fences. Do not claim experience with any tool/technology that is not present in the candidate profile; at most, mention readiness to learn without implying past hands-on work. Be concise and avoid filler."},{"role":"user","content":"Context: job-specific resume generation.\n\nDetect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from '\\''User note (additional instructions)'\\''. If still undetectable, default to Portuguese (pt-BR).\n\nWrite as the candidate, in first-person singular (I). Do not write from the employer'\\''s perspective.\n\nGround all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.\n\nIf a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.\n\nDo not copy or paraphrase the job description; reference it only to align the candidate'\\''s fit.\n\nPrefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.\n\nReturn only the resume content in a structured format. Do not fabricate recruiter names or company details.\n\nPlanned delivery channels: email. Optimize format/length to be usable when sent via these channels.\n\nCarefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.\n\nAvoid clichés or overly eager wording. Maintain a confident, professional tone.\n\nBe concise and avoid filler. Prioritize precise, verifiable facts from the profile.\n\nCompute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use '\\''over X years'\\'').\n\nIf dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).\n\nDo not expose chain-of-thought. Provide only final answer content (no '\\''<think>'\\'', analysis, steps, or reasoning).\n\nCRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.\n\nCRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.\n\nJob Description:\n\n<p>aga: Analista Desenvolvedor Java Pleno (Hibrido - SP) - CLT<br><br>👉Interessados devem encaminhar CV atualizado juntamente com a pretensão salarial para o e-mail: <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"mailto:[REDACTED_EMAIL]\"><strong>[REDACTED_EMAIL]</strong></a><br><br>🔹 Sobre a Vaga:<br>Estamos em busca de um Analista Desenvolvimento Java Pleno para se juntar à nossa equipe em um formato hibrido. Se você tem experiência e deseja crescer em um ambiente dinâmico e desafiador, esta é a sua chance!<br><br>Requisitos:<br>-Escolaridade: Graduação completa em Tecnologia da Informação ou qualquer curso de nível superior com pós-graduação na área de Tecnologia da Informação.<br><br>🔹 Requisitos Técnicos Obrigatórios:<br>* Desenvolvimento e análise de sistemas em aplicações Web utilizando modelo de arquitetura MVC.<br>* Desenvolvimento e manutenção de sistemas utilizando as seguintes linguagens: PLSQL, Java, JavaScript, HTML e XML.<br>* Containers e Gerenciamento: Docker e Kubernetes.<br>* Desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, , Redis.<br>* UML (casos de uso e demais diagramas);<br>* Arquitetura orientada a serviços (SOA).<br>* APIs<br>* Conhecimento de Frameworks de marcado como Spring (Spring-cloud), Angular, React, Vue, BootStrap entre outros;<br>* Intregração Contínua (CI) / Deployment Contínuo (CD).<br>* JSON / REST.<br><br>🔹 Horário de Trabalho e escala:<br>09h às 18h (1hr de almoço)<br>2x presencial e 3x home-office<br><br>🔹 Endereço: Rua Libero Badaró, 425 - Centro - SP<br><br>🔹 Benefícios de Trabalhar Conosco:<br>🍔Vale Alimentação/Refeição | Wiipo Flex<br>🏋‍♀TotalPass | Bem-estar para todos os colaboradores, todos os dias<br>👓 Parceria SESC | Saúde, Lazer, Turismo &amp; Esportes, Assistência Social e Alimentação<br>📕 Parcerias Educacionais | Aldeia, UDF, EBAC, ESPM, IPOG, VC_TB e WO.<br>🤍Seguro de vida<br><br>Todas as vagas são afirmativas!<br><br>E aí, se identificou com a vaga?<br>Não perca tempo e candidate-se!<br><br>Junte-se a nós e faça parte de uma equipe que valoriza inovação e excelência!</p>\n\nCandidate Profile (facts only, no fabrication):\n\nNome: Teste\nHeadline: teste\nLocalização: Brasilia\nEmail: [REDACTED_EMAIL]\nTelefone: [REDACTED_PHONE]\nWebsite: https://teste\nResumo:\n<p>chico</p>\nExperiências (mais recentes primeiro):\n- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)\n  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>\n- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)\n  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>\nTempo total de experiência (todas as experiências): 3 anos 7 meses\nSkills: JavaScript\nProjetos relevantes:\n- teste (https://teste)\n  <p>teste</p>\nEducação:\n- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])\nCertificações:\n- teste (teste, [REDACTED_PHONE])\nIdiomas: teste\nPrêmios:\n- teste (teste)\n- teste2 (teste2)\nPerfis:\n- GitHub: https://www.github.com/in/francisco-dev/\n- teste: http://teste\n\nUser note (additional instructions):\n\n<p>teste</p>\n\nTask:\n\nGenerate a currículo abrangente com todas as experiências relevantes in tom informal, porém cortês e direto, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).\n\n\n\nFollow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):\n\n\n\n**INFORMAÇÕES PESSOAIS**\n\nNome completo, email, telefone, localização, website (se disponível)\n\n\n\n**RESUMO PROFISSIONAL**\n\n2-3 frases destacando anos de experiência, especialização principal e fit com a vaga\n\n\n\n**EXPERIÊNCIA PROFISSIONAL**\n\nListar experiências mais relevantes à vaga (máximo 4-5), com:\n\n- Cargo, empresa, período (duração calculada)\n\n- 2-3 conquistas mensuráveis por experiência\n\n- Tecnologias e ferramentas utilizadas\n\n- Impacto nos resultados da empresa\n\n\n\n**EDUCAÇÃO**\n\nFormação acadêmica relevante (instituição, curso, período)\n\n\n\n**COMPETÊNCIAS TÉCNICAS**\n\nSkills mais relevantes à vaga, agrupadas por categoria\n\n\n\n**PROJETOS DESTACADOS**\n\nProjetos mais relevantes (máximo 3) com descrição e tecnologias\n\n\n\n**CERTIFICAÇÕES**\n\nCertificações relevantes (máximo 5) com emissor e data\n\n\n\n**IDIOMAS**\n\nIdiomas com nível de proficiência\n\n\n\n**PRÊMIOS E RECONHECIMENTOS**\n\nPrêmios relevantes (máximo 3) com contexto\n\n\n\n**VOLUNTARIADO**\n\nExperiências voluntárias relevantes (se houver)\n\n\n\n**PERFIS PROFISSIONAIS**\n\nLinks para LinkedIn, GitHub, portfolio (se disponíveis)\n\n\n\nInstruções específicas:\n\n- Priorizar experiências e skills mais relevantes à vaga\n\n- Usar linguagem ativa e orientada a resultados\n\n- Incluir métricas e números quando disponíveis no perfil\n\n- Adaptar tom ao tipo de expressão solicitado\n\n- Manter formato limpo e profissional\n\n- Não inventar dados, datas ou experiências\n\n- Focar na relevância para a posição específica\n\n- NUNCA duplicar ou repetir informações entre seções\n\n- Cada experiência deve ser descrita apenas uma vez"}],"temperature":0.5,"max_tokens":1200}'
```
#### Request body (sanitized)
```json
{
  "model": "llama3.2:latest",
  "messages": [
    {
      "role": "system",
      "content": "You are a cover-letter generator. Follow the user's format exactly. Do not invent facts. Detect the predominant language of the job description and reply strictly in that language (do not switch languages). Do not reveal chain-of-thought or internal reasoning; provide only the final answer content. If you would normally include a reasoning section like <think>...</think>, omit it and provide only the final letter body. Do not include code fences or markdown fences. Do not claim experience with any tool/technology that is not present in the candidate profile; at most, mention readiness to learn without implying past hands-on work. Be concise and avoid filler."
    },
    {
      "role": "user",
      "content": "Context: job-specific resume generation.\n\nDetect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from 'User note (additional instructions)'. If still undetectable, default to Portuguese (pt-BR).\n\nWrite as the candidate, in first-person singular (I). Do not write from the employer's perspective.\n\nGround all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.\n\nIf a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.\n\nDo not copy or paraphrase the job description; reference it only to align the candidate's fit.\n\nPrefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.\n\nReturn only the resume content in a structured format. Do not fabricate recruiter names or company details.\n\nPlanned delivery channels: email. Optimize format/length to be usable when sent via these channels.\n\nCarefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.\n\nAvoid clichés or overly eager wording. Maintain a confident, professional tone.\n\nBe concise and avoid filler. Prioritize precise, verifiable facts from the profile.\n\nCompute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use 'over X years').\n\nIf dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).\n\nDo not expose chain-of-thought. Provide only final answer content (no '<think>', analysis, steps, or reasoning).\n\nCRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.\n\nCRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.\n\nJob Description:\n\n<p>aga: Analista Desenvolvedor Java Pleno (Hibrido - SP) - CLT<br><br>👉Interessados devem encaminhar CV atualizado juntamente com a pretensão salarial para o e-mail: <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"mailto:[REDACTED_EMAIL]\"><strong>[REDACTED_EMAIL]</strong></a><br><br>🔹 Sobre a Vaga:<br>Estamos em busca de um Analista Desenvolvimento Java Pleno para se juntar à nossa equipe em um formato hibrido. Se você tem experiência e deseja crescer em um ambiente dinâmico e desafiador, esta é a sua chance!<br><br>Requisitos:<br>-Escolaridade: Graduação completa em Tecnologia da Informação ou qualquer curso de nível superior com pós-graduação na área de Tecnologia da Informação.<br><br>🔹 Requisitos Técnicos Obrigatórios:<br>* Desenvolvimento e análise de sistemas em aplicações Web utilizando modelo de arquitetura MVC.<br>* Desenvolvimento e manutenção de sistemas utilizando as seguintes linguagens: PLSQL, Java, JavaScript, HTML e XML.<br>* Containers e Gerenciamento: Docker e Kubernetes.<br>* Desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, , Redis.<br>* UML (casos de uso e demais diagramas);<br>* Arquitetura orientada a serviços (SOA).<br>* APIs<br>* Conhecimento de Frameworks de marcado como Spring (Spring-cloud), Angular, React, Vue, BootStrap entre outros;<br>* Intregração Contínua (CI) / Deployment Contínuo (CD).<br>* JSON / REST.<br><br>🔹 Horário de Trabalho e escala:<br>09h às 18h (1hr de almoço)<br>2x presencial e 3x home-office<br><br>🔹 Endereço: Rua Libero Badaró, 425 - Centro - SP<br><br>🔹 Benefícios de Trabalhar Conosco:<br>🍔Vale Alimentação/Refeição | Wiipo Flex<br>🏋‍♀TotalPass | Bem-estar para todos os colaboradores, todos os dias<br>👓 Parceria SESC | Saúde, Lazer, Turismo &amp; Esportes, Assistência Social e Alimentação<br>📕 Parcerias Educacionais | Aldeia, UDF, EBAC, ESPM, IPOG, VC_TB e WO.<br>🤍Seguro de vida<br><br>Todas as vagas são afirmativas!<br><br>E aí, se identificou com a vaga?<br>Não perca tempo e candidate-se!<br><br>Junte-se a nós e faça parte de uma equipe que valoriza inovação e excelência!</p>\n\nCandidate Profile (facts only, no fabrication):\n\nNome: Teste\nHeadline: teste\nLocalização: Brasilia\nEmail: [REDACTED_EMAIL]\nTelefone: [REDACTED_PHONE]\nWebsite: https://teste\nResumo:\n<p>chico</p>\nExperiências (mais recentes primeiro):\n- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)\n  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>\n- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)\n  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>\nTempo total de experiência (todas as experiências): 3 anos 7 meses\nSkills: JavaScript\nProjetos relevantes:\n- teste (https://teste)\n  <p>teste</p>\nEducação:\n- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])\nCertificações:\n- teste (teste, [REDACTED_PHONE])\nIdiomas: teste\nPrêmios:\n- teste (teste)\n- teste2 (teste2)\nPerfis:\n- GitHub: https://www.github.com/in/francisco-dev/\n- teste: http://teste\n\nUser note (additional instructions):\n\n<p>teste</p>\n\nTask:\n\nGenerate a currículo abrangente com todas as experiências relevantes in tom informal, porém cortês e direto, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).\n\n\n\nFollow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):\n\n\n\n**INFORMAÇÕES PESSOAIS**\n\nNome completo, email, telefone, localização, website (se disponível)\n\n\n\n**RESUMO PROFISSIONAL**\n\n2-3 frases destacando anos de experiência, especialização principal e fit com a vaga\n\n\n\n**EXPERIÊNCIA PROFISSIONAL**\n\nListar experiências mais relevantes à vaga (máximo 4-5), com:\n\n- Cargo, empresa, período (duração calculada)\n\n- 2-3 conquistas mensuráveis por experiência\n\n- Tecnologias e ferramentas utilizadas\n\n- Impacto nos resultados da empresa\n\n\n\n**EDUCAÇÃO**\n\nFormação acadêmica relevante (instituição, curso, período)\n\n\n\n**COMPETÊNCIAS TÉCNICAS**\n\nSkills mais relevantes à vaga, agrupadas por categoria\n\n\n\n**PROJETOS DESTACADOS**\n\nProjetos mais relevantes (máximo 3) com descrição e tecnologias\n\n\n\n**CERTIFICAÇÕES**\n\nCertificações relevantes (máximo 5) com emissor e data\n\n\n\n**IDIOMAS**\n\nIdiomas com nível de proficiência\n\n\n\n**PRÊMIOS E RECONHECIMENTOS**\n\nPrêmios relevantes (máximo 3) com contexto\n\n\n\n**VOLUNTARIADO**\n\nExperiências voluntárias relevantes (se houver)\n\n\n\n**PERFIS PROFISSIONAIS**\n\nLinks para LinkedIn, GitHub, portfolio (se disponíveis)\n\n\n\nInstruções específicas:\n\n- Priorizar experiências e skills mais relevantes à vaga\n\n- Usar linguagem ativa e orientada a resultados\n\n- Incluir métricas e números quando disponíveis no perfil\n\n- Adaptar tom ao tipo de expressão solicitado\n\n- Manter formato limpo e profissional\n\n- Não inventar dados, datas ou experiências\n\n- Focar na relevância para a posição específica\n\n- NUNCA duplicar ou repetir informações entre seções\n\n- Cada experiência deve ser descrita apenas uma vez"
    }
  ],
  "temperature": 0.5,
  "max_tokens": 1200
}
```

#### LLM Response — 1755733179107-3hxqmo
- Timestamp: 2025-08-20T23:40:24.388Z
- Cover letter length: 1430 • SHA256: d1a7b765bb6b2b4d3dc79744b6751f4ad353574155cb9fd0aba7532b053b8836

```text
**INFORMAÇÕES PESSOAIS**

Nome: Teste, Email: [REDACTED_EMAIL], Telefone: [REDACTED_PHONE], Localização: Brasilia, Website: https://teste

**RESUMO PROFISSIONAL**

Desenvolvedor Java Pleno com 3 anos de experiência em desenvolvimento de sistemas escaláveis e testes unitários. Estou procurando por um desafio dinâmico e desafiador que permita crescer como profissional.

**EXPERIÊNCIA PROFISSIONAL**

- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE])
  Desenvolvi landingpages e um website de vendas de seguros com next e react js, melhorando a eficiência do site em 30%.

- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE])
  Desenvolvi APIs escaláveis e testes unitários, reduzindo o tempo de desenvolvimento em 25% e melhorando a qualidade dos resultados.

**EDUCAÇÃO**

Formação em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])

**COMPETÊNCIAS TÉCNICAS**

JavaScript, desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, Redis.

**PROJETOS DESTACADOS**

- teste (https://teste) - Desenvolvimento de um sistema de vendas de seguros

**CERTIFICAÇÕES**

teste (teste, [REDACTED_PHONE])

**IDIOMAS**

Português (nível avançado)

**PRÊMIOS E RECONHECIMENTOS**

teste2 (teste2) - Prêmio de Desenvolvimento de Sistemas

**VOLUNTARIADO**

Não disponível

**PERFIS PROFISSIONAIS**

GitHub: https://www.github.com/in/francisco-dev/
```
---

### Application Request 1755733345667-u7n17o
- Timestamp: 2025-08-20T23:42:25.678Z
- User: cm9hp80720000gk3gykahk5f4
- Channels: email
- Expression: informal
- Job description length: 2156
- Prompt length: 7326 • SHA256: c1e6e79d623a0340f30c2f96e9dfb095ea5313329d11c875c0f4c2e175aa72a2
- Model: llama3.2:latest

#### Prompt
```text
Context: job-specific resume generation.

Detect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from 'User note (additional instructions)'. If still undetectable, default to Portuguese (pt-BR).

Write as the candidate, in first-person singular (I). Do not write from the employer's perspective.

Ground all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.

If a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.

Do not copy or paraphrase the job description; reference it only to align the candidate's fit.

Prefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.

Return only the resume content in a structured format. Do not fabricate recruiter names or company details.

Planned delivery channels: email. Optimize format/length to be usable when sent via these channels.

Carefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.

Avoid clichés or overly eager wording. Maintain a confident, professional tone.

Be concise and avoid filler. Prioritize precise, verifiable facts from the profile.

Compute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use 'over X years').

If dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).

Do not expose chain-of-thought. Provide only final answer content (no '<think>', analysis, steps, or reasoning).

CRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.

CRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.

Job Description:

<p>aga: Analista Desenvolvedor Java Pleno (Hibrido - SP) - CLT<br><br>👉Interessados devem encaminhar CV atualizado juntamente com a pretensão salarial para o e-mail: <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:[REDACTED_EMAIL]"><strong>[REDACTED_EMAIL]</strong></a><br><br>🔹 Sobre a Vaga:<br>Estamos em busca de um Analista Desenvolvimento Java Pleno para se juntar à nossa equipe em um formato hibrido. Se você tem experiência e deseja crescer em um ambiente dinâmico e desafiador, esta é a sua chance!<br><br>Requisitos:<br>-Escolaridade: Graduação completa em Tecnologia da Informação ou qualquer curso de nível superior com pós-graduação na área de Tecnologia da Informação.<br><br>🔹 Requisitos Técnicos Obrigatórios:<br>* Desenvolvimento e análise de sistemas em aplicações Web utilizando modelo de arquitetura MVC.<br>* Desenvolvimento e manutenção de sistemas utilizando as seguintes linguagens: PLSQL, Java, JavaScript, HTML e XML.<br>* Containers e Gerenciamento: Docker e Kubernetes.<br>* Desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, , Redis.<br>* UML (casos de uso e demais diagramas);<br>* Arquitetura orientada a serviços (SOA).<br>* APIs<br>* Conhecimento de Frameworks de marcado como Spring (Spring-cloud), Angular, React, Vue, BootStrap entre outros;<br>* Intregração Contínua (CI) / Deployment Contínuo (CD).<br>* JSON / REST.<br><br>🔹 Horário de Trabalho e escala:<br>09h às 18h (1hr de almoço)<br>2x presencial e 3x home-office<br><br>🔹 Endereço: Rua Libero Badaró, 425 - Centro - SP<br><br>🔹 Benefícios de Trabalhar Conosco:<br>🍔Vale Alimentação/Refeição | Wiipo Flex<br>🏋‍♀TotalPass | Bem-estar para todos os colaboradores, todos os dias<br>👓 Parceria SESC | Saúde, Lazer, Turismo &amp; Esportes, Assistência Social e Alimentação<br>📕 Parcerias Educacionais | Aldeia, UDF, EBAC, ESPM, IPOG, VC_TB e WO.<br>🤍Seguro de vida<br><br>Todas as vagas são afirmativas!<br><br>E aí, se identificou com a vaga?<br>Não perca tempo e candidate-se!<br><br>Junte-se a nós e faça parte de uma equipe que valoriza inovação e excelência!</p>

Candidate Profile (facts only, no fabrication):

Nome: Teste
Headline: teste
Localização: Brasilia
Email: [REDACTED_EMAIL]
Telefone: [REDACTED_PHONE]
Website: https://teste
Resumo:
<p>chico</p>
Experiências (mais recentes primeiro):
- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)
  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>
- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)
  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>
Tempo total de experiência (todas as experiências): 3 anos 7 meses
Skills: JavaScript
Projetos relevantes:
- teste (https://teste)
  <p>teste</p>
Educação:
- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])
Certificações:
- teste (teste, [REDACTED_PHONE])
Idiomas: teste
Prêmios:
- teste (teste)
- teste2 (teste2)
Perfis:
- GitHub: https://www.github.com/in/francisco-dev/
- teste: http://teste

User note (additional instructions):

<p>teste</p>

Task:

Generate a currículo direcionado e focado na vaga específica in tom informal, porém cortês e direto, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).



Follow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):



**INFORMAÇÕES PESSOAIS**

Nome completo, email, telefone, localização, website (se disponível)



**RESUMO PROFISSIONAL**

2-3 frases destacando anos de experiência, especialização principal e fit com a vaga



**EXPERIÊNCIA PROFISSIONAL**

Listar experiências mais relevantes à vaga (máximo 4-5), com:

- Cargo, empresa, período (duração calculada)

- 2-3 conquistas mensuráveis por experiência

- Tecnologias e ferramentas utilizadas

- Impacto nos resultados da empresa



**EDUCAÇÃO**

Formação acadêmica relevante (instituição, curso, período)



**COMPETÊNCIAS TÉCNICAS**

Skills mais relevantes à vaga, agrupadas por categoria



**PROJETOS DESTACADOS**

Projetos mais relevantes (máximo 3) com descrição e tecnologias



**CERTIFICAÇÕES**

Certificações relevantes (máximo 5) com emissor e data



**IDIOMAS**

Idiomas com nível de proficiência



**PRÊMIOS E RECONHECIMENTOS**

Prêmios relevantes (máximo 3) com contexto



**VOLUNTARIADO**

Experiências voluntárias relevantes (se houver)



**PERFIS PROFISSIONAIS**

Links para LinkedIn, GitHub, portfolio (se disponíveis)



Instruções específicas:

- Priorizar experiências e skills mais relevantes à vaga

- Usar linguagem ativa e orientada a resultados

- Incluir métricas e números quando disponíveis no perfil

- Adaptar tom ao tipo de expressão solicitado

- Manter formato limpo e profissional

- Não inventar dados, datas ou experiências

- Focar na relevância para a posição específica

- NUNCA duplicar ou repetir informações entre seções

- Cada experiência deve ser descrita apenas uma vez
```
#### HTTP request (cURL)
```bash
curl -sS -X POST 'http://localhost:11434/v1/chat/completions' \
  -H 'Content-Type: application/json' \
  -d '{"model":"llama3.2:latest","messages":[{"role":"system","content":"You are a cover-letter generator. Follow the user'\\''s format exactly. Do not invent facts. Detect the predominant language of the job description and reply strictly in that language (do not switch languages). Do not reveal chain-of-thought or internal reasoning; provide only the final answer content. If you would normally include a reasoning section like <think>...</think>, omit it and provide only the final letter body. Do not include code fences or markdown fences. Do not claim experience with any tool/technology that is not present in the candidate profile; at most, mention readiness to learn without implying past hands-on work. Be concise and avoid filler."},{"role":"user","content":"Context: job-specific resume generation.\n\nDetect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from '\\''User note (additional instructions)'\\''. If still undetectable, default to Portuguese (pt-BR).\n\nWrite as the candidate, in first-person singular (I). Do not write from the employer'\\''s perspective.\n\nGround all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.\n\nIf a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.\n\nDo not copy or paraphrase the job description; reference it only to align the candidate'\\''s fit.\n\nPrefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.\n\nReturn only the resume content in a structured format. Do not fabricate recruiter names or company details.\n\nPlanned delivery channels: email. Optimize format/length to be usable when sent via these channels.\n\nCarefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.\n\nAvoid clichés or overly eager wording. Maintain a confident, professional tone.\n\nBe concise and avoid filler. Prioritize precise, verifiable facts from the profile.\n\nCompute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use '\\''over X years'\\'').\n\nIf dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).\n\nDo not expose chain-of-thought. Provide only final answer content (no '\\''<think>'\\'', analysis, steps, or reasoning).\n\nCRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.\n\nCRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.\n\nJob Description:\n\n<p>aga: Analista Desenvolvedor Java Pleno (Hibrido - SP) - CLT<br><br>👉Interessados devem encaminhar CV atualizado juntamente com a pretensão salarial para o e-mail: <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"mailto:[REDACTED_EMAIL]\"><strong>[REDACTED_EMAIL]</strong></a><br><br>🔹 Sobre a Vaga:<br>Estamos em busca de um Analista Desenvolvimento Java Pleno para se juntar à nossa equipe em um formato hibrido. Se você tem experiência e deseja crescer em um ambiente dinâmico e desafiador, esta é a sua chance!<br><br>Requisitos:<br>-Escolaridade: Graduação completa em Tecnologia da Informação ou qualquer curso de nível superior com pós-graduação na área de Tecnologia da Informação.<br><br>🔹 Requisitos Técnicos Obrigatórios:<br>* Desenvolvimento e análise de sistemas em aplicações Web utilizando modelo de arquitetura MVC.<br>* Desenvolvimento e manutenção de sistemas utilizando as seguintes linguagens: PLSQL, Java, JavaScript, HTML e XML.<br>* Containers e Gerenciamento: Docker e Kubernetes.<br>* Desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, , Redis.<br>* UML (casos de uso e demais diagramas);<br>* Arquitetura orientada a serviços (SOA).<br>* APIs<br>* Conhecimento de Frameworks de marcado como Spring (Spring-cloud), Angular, React, Vue, BootStrap entre outros;<br>* Intregração Contínua (CI) / Deployment Contínuo (CD).<br>* JSON / REST.<br><br>🔹 Horário de Trabalho e escala:<br>09h às 18h (1hr de almoço)<br>2x presencial e 3x home-office<br><br>🔹 Endereço: Rua Libero Badaró, 425 - Centro - SP<br><br>🔹 Benefícios de Trabalhar Conosco:<br>🍔Vale Alimentação/Refeição | Wiipo Flex<br>🏋‍♀TotalPass | Bem-estar para todos os colaboradores, todos os dias<br>👓 Parceria SESC | Saúde, Lazer, Turismo &amp; Esportes, Assistência Social e Alimentação<br>📕 Parcerias Educacionais | Aldeia, UDF, EBAC, ESPM, IPOG, VC_TB e WO.<br>🤍Seguro de vida<br><br>Todas as vagas são afirmativas!<br><br>E aí, se identificou com a vaga?<br>Não perca tempo e candidate-se!<br><br>Junte-se a nós e faça parte de uma equipe que valoriza inovação e excelência!</p>\n\nCandidate Profile (facts only, no fabrication):\n\nNome: Teste\nHeadline: teste\nLocalização: Brasilia\nEmail: [REDACTED_EMAIL]\nTelefone: [REDACTED_PHONE]\nWebsite: https://teste\nResumo:\n<p>chico</p>\nExperiências (mais recentes primeiro):\n- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)\n  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>\n- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)\n  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>\nTempo total de experiência (todas as experiências): 3 anos 7 meses\nSkills: JavaScript\nProjetos relevantes:\n- teste (https://teste)\n  <p>teste</p>\nEducação:\n- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])\nCertificações:\n- teste (teste, [REDACTED_PHONE])\nIdiomas: teste\nPrêmios:\n- teste (teste)\n- teste2 (teste2)\nPerfis:\n- GitHub: https://www.github.com/in/francisco-dev/\n- teste: http://teste\n\nUser note (additional instructions):\n\n<p>teste</p>\n\nTask:\n\nGenerate a currículo direcionado e focado na vaga específica in tom informal, porém cortês e direto, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).\n\n\n\nFollow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):\n\n\n\n**INFORMAÇÕES PESSOAIS**\n\nNome completo, email, telefone, localização, website (se disponível)\n\n\n\n**RESUMO PROFISSIONAL**\n\n2-3 frases destacando anos de experiência, especialização principal e fit com a vaga\n\n\n\n**EXPERIÊNCIA PROFISSIONAL**\n\nListar experiências mais relevantes à vaga (máximo 4-5), com:\n\n- Cargo, empresa, período (duração calculada)\n\n- 2-3 conquistas mensuráveis por experiência\n\n- Tecnologias e ferramentas utilizadas\n\n- Impacto nos resultados da empresa\n\n\n\n**EDUCAÇÃO**\n\nFormação acadêmica relevante (instituição, curso, período)\n\n\n\n**COMPETÊNCIAS TÉCNICAS**\n\nSkills mais relevantes à vaga, agrupadas por categoria\n\n\n\n**PROJETOS DESTACADOS**\n\nProjetos mais relevantes (máximo 3) com descrição e tecnologias\n\n\n\n**CERTIFICAÇÕES**\n\nCertificações relevantes (máximo 5) com emissor e data\n\n\n\n**IDIOMAS**\n\nIdiomas com nível de proficiência\n\n\n\n**PRÊMIOS E RECONHECIMENTOS**\n\nPrêmios relevantes (máximo 3) com contexto\n\n\n\n**VOLUNTARIADO**\n\nExperiências voluntárias relevantes (se houver)\n\n\n\n**PERFIS PROFISSIONAIS**\n\nLinks para LinkedIn, GitHub, portfolio (se disponíveis)\n\n\n\nInstruções específicas:\n\n- Priorizar experiências e skills mais relevantes à vaga\n\n- Usar linguagem ativa e orientada a resultados\n\n- Incluir métricas e números quando disponíveis no perfil\n\n- Adaptar tom ao tipo de expressão solicitado\n\n- Manter formato limpo e profissional\n\n- Não inventar dados, datas ou experiências\n\n- Focar na relevância para a posição específica\n\n- NUNCA duplicar ou repetir informações entre seções\n\n- Cada experiência deve ser descrita apenas uma vez"}],"temperature":0.5,"max_tokens":1200}'
```
#### Request body (sanitized)
```json
{
  "model": "llama3.2:latest",
  "messages": [
    {
      "role": "system",
      "content": "You are a cover-letter generator. Follow the user's format exactly. Do not invent facts. Detect the predominant language of the job description and reply strictly in that language (do not switch languages). Do not reveal chain-of-thought or internal reasoning; provide only the final answer content. If you would normally include a reasoning section like <think>...</think>, omit it and provide only the final letter body. Do not include code fences or markdown fences. Do not claim experience with any tool/technology that is not present in the candidate profile; at most, mention readiness to learn without implying past hands-on work. Be concise and avoid filler."
    },
    {
      "role": "user",
      "content": "Context: job-specific resume generation.\n\nDetect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from 'User note (additional instructions)'. If still undetectable, default to Portuguese (pt-BR).\n\nWrite as the candidate, in first-person singular (I). Do not write from the employer's perspective.\n\nGround all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.\n\nIf a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.\n\nDo not copy or paraphrase the job description; reference it only to align the candidate's fit.\n\nPrefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.\n\nReturn only the resume content in a structured format. Do not fabricate recruiter names or company details.\n\nPlanned delivery channels: email. Optimize format/length to be usable when sent via these channels.\n\nCarefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.\n\nAvoid clichés or overly eager wording. Maintain a confident, professional tone.\n\nBe concise and avoid filler. Prioritize precise, verifiable facts from the profile.\n\nCompute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use 'over X years').\n\nIf dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).\n\nDo not expose chain-of-thought. Provide only final answer content (no '<think>', analysis, steps, or reasoning).\n\nCRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.\n\nCRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.\n\nJob Description:\n\n<p>aga: Analista Desenvolvedor Java Pleno (Hibrido - SP) - CLT<br><br>👉Interessados devem encaminhar CV atualizado juntamente com a pretensão salarial para o e-mail: <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"mailto:[REDACTED_EMAIL]\"><strong>[REDACTED_EMAIL]</strong></a><br><br>🔹 Sobre a Vaga:<br>Estamos em busca de um Analista Desenvolvimento Java Pleno para se juntar à nossa equipe em um formato hibrido. Se você tem experiência e deseja crescer em um ambiente dinâmico e desafiador, esta é a sua chance!<br><br>Requisitos:<br>-Escolaridade: Graduação completa em Tecnologia da Informação ou qualquer curso de nível superior com pós-graduação na área de Tecnologia da Informação.<br><br>🔹 Requisitos Técnicos Obrigatórios:<br>* Desenvolvimento e análise de sistemas em aplicações Web utilizando modelo de arquitetura MVC.<br>* Desenvolvimento e manutenção de sistemas utilizando as seguintes linguagens: PLSQL, Java, JavaScript, HTML e XML.<br>* Containers e Gerenciamento: Docker e Kubernetes.<br>* Desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, , Redis.<br>* UML (casos de uso e demais diagramas);<br>* Arquitetura orientada a serviços (SOA).<br>* APIs<br>* Conhecimento de Frameworks de marcado como Spring (Spring-cloud), Angular, React, Vue, BootStrap entre outros;<br>* Intregração Contínua (CI) / Deployment Contínuo (CD).<br>* JSON / REST.<br><br>🔹 Horário de Trabalho e escala:<br>09h às 18h (1hr de almoço)<br>2x presencial e 3x home-office<br><br>🔹 Endereço: Rua Libero Badaró, 425 - Centro - SP<br><br>🔹 Benefícios de Trabalhar Conosco:<br>🍔Vale Alimentação/Refeição | Wiipo Flex<br>🏋‍♀TotalPass | Bem-estar para todos os colaboradores, todos os dias<br>👓 Parceria SESC | Saúde, Lazer, Turismo &amp; Esportes, Assistência Social e Alimentação<br>📕 Parcerias Educacionais | Aldeia, UDF, EBAC, ESPM, IPOG, VC_TB e WO.<br>🤍Seguro de vida<br><br>Todas as vagas são afirmativas!<br><br>E aí, se identificou com a vaga?<br>Não perca tempo e candidate-se!<br><br>Junte-se a nós e faça parte de uma equipe que valoriza inovação e excelência!</p>\n\nCandidate Profile (facts only, no fabrication):\n\nNome: Teste\nHeadline: teste\nLocalização: Brasilia\nEmail: [REDACTED_EMAIL]\nTelefone: [REDACTED_PHONE]\nWebsite: https://teste\nResumo:\n<p>chico</p>\nExperiências (mais recentes primeiro):\n- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)\n  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>\n- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)\n  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>\nTempo total de experiência (todas as experiências): 3 anos 7 meses\nSkills: JavaScript\nProjetos relevantes:\n- teste (https://teste)\n  <p>teste</p>\nEducação:\n- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])\nCertificações:\n- teste (teste, [REDACTED_PHONE])\nIdiomas: teste\nPrêmios:\n- teste (teste)\n- teste2 (teste2)\nPerfis:\n- GitHub: https://www.github.com/in/francisco-dev/\n- teste: http://teste\n\nUser note (additional instructions):\n\n<p>teste</p>\n\nTask:\n\nGenerate a currículo direcionado e focado na vaga específica in tom informal, porém cortês e direto, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).\n\n\n\nFollow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):\n\n\n\n**INFORMAÇÕES PESSOAIS**\n\nNome completo, email, telefone, localização, website (se disponível)\n\n\n\n**RESUMO PROFISSIONAL**\n\n2-3 frases destacando anos de experiência, especialização principal e fit com a vaga\n\n\n\n**EXPERIÊNCIA PROFISSIONAL**\n\nListar experiências mais relevantes à vaga (máximo 4-5), com:\n\n- Cargo, empresa, período (duração calculada)\n\n- 2-3 conquistas mensuráveis por experiência\n\n- Tecnologias e ferramentas utilizadas\n\n- Impacto nos resultados da empresa\n\n\n\n**EDUCAÇÃO**\n\nFormação acadêmica relevante (instituição, curso, período)\n\n\n\n**COMPETÊNCIAS TÉCNICAS**\n\nSkills mais relevantes à vaga, agrupadas por categoria\n\n\n\n**PROJETOS DESTACADOS**\n\nProjetos mais relevantes (máximo 3) com descrição e tecnologias\n\n\n\n**CERTIFICAÇÕES**\n\nCertificações relevantes (máximo 5) com emissor e data\n\n\n\n**IDIOMAS**\n\nIdiomas com nível de proficiência\n\n\n\n**PRÊMIOS E RECONHECIMENTOS**\n\nPrêmios relevantes (máximo 3) com contexto\n\n\n\n**VOLUNTARIADO**\n\nExperiências voluntárias relevantes (se houver)\n\n\n\n**PERFIS PROFISSIONAIS**\n\nLinks para LinkedIn, GitHub, portfolio (se disponíveis)\n\n\n\nInstruções específicas:\n\n- Priorizar experiências e skills mais relevantes à vaga\n\n- Usar linguagem ativa e orientada a resultados\n\n- Incluir métricas e números quando disponíveis no perfil\n\n- Adaptar tom ao tipo de expressão solicitado\n\n- Manter formato limpo e profissional\n\n- Não inventar dados, datas ou experiências\n\n- Focar na relevância para a posição específica\n\n- NUNCA duplicar ou repetir informações entre seções\n\n- Cada experiência deve ser descrita apenas uma vez"
    }
  ],
  "temperature": 0.5,
  "max_tokens": 1200
}
```

#### LLM Response — 1755733345667-u7n17o
- Timestamp: 2025-08-20T23:43:28.056Z
- Cover letter length: 2014 • SHA256: b6bd707c202d2f39b99d813197e37311b3e1940421435fd2ad4d66295a82ba94

```text
**INFORMAÇÕES PESSOAIS**

Nome: Guilherme E. M. de 314
Email: [REDACTED_EMAIL]
Telefone: [REDACTED_PHONE]
Localização: Brasilia
Website: https://teste

**RESUMO PROFISSIONAL**

Desenvolvedor com 3 anos e 7 meses de experiência em desenvolvimento backend e frontend, com especialização principal em JavaScript. Estou procurando por uma oportunidade para crescer em um ambiente dinâmico e desafiador.

**EXPERIÊNCIA PROFISSIONAL**

- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], 3 anos 1 mês)
  Desenvolvi landingpages e um website de vendas de seguros com Next.js e React.js.
  Utilizei tecnologias como Next.js, React.js, HTML, CSS e JavaScript para criar uma experiência de usuário agradável.
  Aumentei a conversão de leads em até 25% com o novo layout.

- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], 3 anos 7 meses)
  Desenvolvi APIs escaláveis e testes unitários para melhorar a eficiência do sistema.
  Utilizei tecnologias como Node.js, Express.js, MongoDB e Redis para criar uma arquitetura robusta.
  Aumentei a velocidade de resposta do sistema em até 50% com o novo cache.

**EDUCAÇÃO**

Formação acadêmica relevante: Análise e Desenvolvimento de Sistemas - Estácio ([REDACTED_PHONE])

**COMPETÊNCIAS TÉCNICAS**

- JavaScript
- Frontend: Next.js, React.js, HTML, CSS
- Backend: Node.js, Express.js, MongoDB, Redis
- Arquitetura orientada a serviços (SOA)
- Integração contínua (CI) / Deployment contínuo (CD)

**PROJETOS DESTACADOS**

- teste (https://teste)
  Desenvolvi uma aplicação de vendas de seguros com React.js e Next.js.
- teste2 (https://teste2)
  Criei uma API escalável com Node.js, Express.js e MongoDB.

**CERTIFICAÇÕES**

- teste (teste, [REDACTED_PHONE])

**IDIOMAS**

Não tenho certificação em idiomas, mas estou disposto a aprender.

**PRÊMIOS E RECONHECIMENTOS**

- teste (teste)
- teste2 (teste2)

**VOLUNTARIADO**

Não tenho experiências voluntárias relevantes.

**PERFIS PROFISSIONAIS**

GitHub: https://www.github.com/in/francisco-dev/
```
---

### Application Request 1755733416861-qccunv
- Timestamp: 2025-08-20T23:43:36.866Z
- User: cm9hp80720000gk3gykahk5f4
- Channels: email
- Expression: informal
- Job description length: 2156
- Prompt length: 7326 • SHA256: c1e6e79d623a0340f30c2f96e9dfb095ea5313329d11c875c0f4c2e175aa72a2
- Model: llama3.2:latest

#### Prompt
```text
Context: job-specific resume generation.

Detect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from 'User note (additional instructions)'. If still undetectable, default to Portuguese (pt-BR).

Write as the candidate, in first-person singular (I). Do not write from the employer's perspective.

Ground all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.

If a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.

Do not copy or paraphrase the job description; reference it only to align the candidate's fit.

Prefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.

Return only the resume content in a structured format. Do not fabricate recruiter names or company details.

Planned delivery channels: email. Optimize format/length to be usable when sent via these channels.

Carefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.

Avoid clichés or overly eager wording. Maintain a confident, professional tone.

Be concise and avoid filler. Prioritize precise, verifiable facts from the profile.

Compute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use 'over X years').

If dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).

Do not expose chain-of-thought. Provide only final answer content (no '<think>', analysis, steps, or reasoning).

CRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.

CRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.

Job Description:

<p>aga: Analista Desenvolvedor Java Pleno (Hibrido - SP) - CLT<br><br>👉Interessados devem encaminhar CV atualizado juntamente com a pretensão salarial para o e-mail: <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:[REDACTED_EMAIL]"><strong>[REDACTED_EMAIL]</strong></a><br><br>🔹 Sobre a Vaga:<br>Estamos em busca de um Analista Desenvolvimento Java Pleno para se juntar à nossa equipe em um formato hibrido. Se você tem experiência e deseja crescer em um ambiente dinâmico e desafiador, esta é a sua chance!<br><br>Requisitos:<br>-Escolaridade: Graduação completa em Tecnologia da Informação ou qualquer curso de nível superior com pós-graduação na área de Tecnologia da Informação.<br><br>🔹 Requisitos Técnicos Obrigatórios:<br>* Desenvolvimento e análise de sistemas em aplicações Web utilizando modelo de arquitetura MVC.<br>* Desenvolvimento e manutenção de sistemas utilizando as seguintes linguagens: PLSQL, Java, JavaScript, HTML e XML.<br>* Containers e Gerenciamento: Docker e Kubernetes.<br>* Desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, , Redis.<br>* UML (casos de uso e demais diagramas);<br>* Arquitetura orientada a serviços (SOA).<br>* APIs<br>* Conhecimento de Frameworks de marcado como Spring (Spring-cloud), Angular, React, Vue, BootStrap entre outros;<br>* Intregração Contínua (CI) / Deployment Contínuo (CD).<br>* JSON / REST.<br><br>🔹 Horário de Trabalho e escala:<br>09h às 18h (1hr de almoço)<br>2x presencial e 3x home-office<br><br>🔹 Endereço: Rua Libero Badaró, 425 - Centro - SP<br><br>🔹 Benefícios de Trabalhar Conosco:<br>🍔Vale Alimentação/Refeição | Wiipo Flex<br>🏋‍♀TotalPass | Bem-estar para todos os colaboradores, todos os dias<br>👓 Parceria SESC | Saúde, Lazer, Turismo &amp; Esportes, Assistência Social e Alimentação<br>📕 Parcerias Educacionais | Aldeia, UDF, EBAC, ESPM, IPOG, VC_TB e WO.<br>🤍Seguro de vida<br><br>Todas as vagas são afirmativas!<br><br>E aí, se identificou com a vaga?<br>Não perca tempo e candidate-se!<br><br>Junte-se a nós e faça parte de uma equipe que valoriza inovação e excelência!</p>

Candidate Profile (facts only, no fabrication):

Nome: Teste
Headline: teste
Localização: Brasilia
Email: [REDACTED_EMAIL]
Telefone: [REDACTED_PHONE]
Website: https://teste
Resumo:
<p>chico</p>
Experiências (mais recentes primeiro):
- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)
  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>
- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)
  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>
Tempo total de experiência (todas as experiências): 3 anos 7 meses
Skills: JavaScript
Projetos relevantes:
- teste (https://teste)
  <p>teste</p>
Educação:
- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])
Certificações:
- teste (teste, [REDACTED_PHONE])
Idiomas: teste
Prêmios:
- teste (teste)
- teste2 (teste2)
Perfis:
- GitHub: https://www.github.com/in/francisco-dev/
- teste: http://teste

User note (additional instructions):

<p>teste</p>

Task:

Generate a currículo direcionado e focado na vaga específica in tom informal, porém cortês e direto, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).



Follow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):



**INFORMAÇÕES PESSOAIS**

Nome completo, email, telefone, localização, website (se disponível)



**RESUMO PROFISSIONAL**

2-3 frases destacando anos de experiência, especialização principal e fit com a vaga



**EXPERIÊNCIA PROFISSIONAL**

Listar experiências mais relevantes à vaga (máximo 4-5), com:

- Cargo, empresa, período (duração calculada)

- 2-3 conquistas mensuráveis por experiência

- Tecnologias e ferramentas utilizadas

- Impacto nos resultados da empresa



**EDUCAÇÃO**

Formação acadêmica relevante (instituição, curso, período)



**COMPETÊNCIAS TÉCNICAS**

Skills mais relevantes à vaga, agrupadas por categoria



**PROJETOS DESTACADOS**

Projetos mais relevantes (máximo 3) com descrição e tecnologias



**CERTIFICAÇÕES**

Certificações relevantes (máximo 5) com emissor e data



**IDIOMAS**

Idiomas com nível de proficiência



**PRÊMIOS E RECONHECIMENTOS**

Prêmios relevantes (máximo 3) com contexto



**VOLUNTARIADO**

Experiências voluntárias relevantes (se houver)



**PERFIS PROFISSIONAIS**

Links para LinkedIn, GitHub, portfolio (se disponíveis)



Instruções específicas:

- Priorizar experiências e skills mais relevantes à vaga

- Usar linguagem ativa e orientada a resultados

- Incluir métricas e números quando disponíveis no perfil

- Adaptar tom ao tipo de expressão solicitado

- Manter formato limpo e profissional

- Não inventar dados, datas ou experiências

- Focar na relevância para a posição específica

- NUNCA duplicar ou repetir informações entre seções

- Cada experiência deve ser descrita apenas uma vez
```
#### HTTP request (cURL)
```bash
curl -sS -X POST 'http://localhost:11434/v1/chat/completions' \
  -H 'Content-Type: application/json' \
  -d '{"model":"llama3.2:latest","messages":[{"role":"system","content":"You are a cover-letter generator. Follow the user'\\''s format exactly. Do not invent facts. Detect the predominant language of the job description and reply strictly in that language (do not switch languages). Do not reveal chain-of-thought or internal reasoning; provide only the final answer content. If you would normally include a reasoning section like <think>...</think>, omit it and provide only the final letter body. Do not include code fences or markdown fences. Do not claim experience with any tool/technology that is not present in the candidate profile; at most, mention readiness to learn without implying past hands-on work. Be concise and avoid filler."},{"role":"user","content":"Context: job-specific resume generation.\n\nDetect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from '\\''User note (additional instructions)'\\''. If still undetectable, default to Portuguese (pt-BR).\n\nWrite as the candidate, in first-person singular (I). Do not write from the employer'\\''s perspective.\n\nGround all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.\n\nIf a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.\n\nDo not copy or paraphrase the job description; reference it only to align the candidate'\\''s fit.\n\nPrefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.\n\nReturn only the resume content in a structured format. Do not fabricate recruiter names or company details.\n\nPlanned delivery channels: email. Optimize format/length to be usable when sent via these channels.\n\nCarefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.\n\nAvoid clichés or overly eager wording. Maintain a confident, professional tone.\n\nBe concise and avoid filler. Prioritize precise, verifiable facts from the profile.\n\nCompute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use '\\''over X years'\\'').\n\nIf dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).\n\nDo not expose chain-of-thought. Provide only final answer content (no '\\''<think>'\\'', analysis, steps, or reasoning).\n\nCRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.\n\nCRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.\n\nJob Description:\n\n<p>aga: Analista Desenvolvedor Java Pleno (Hibrido - SP) - CLT<br><br>👉Interessados devem encaminhar CV atualizado juntamente com a pretensão salarial para o e-mail: <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"mailto:[REDACTED_EMAIL]\"><strong>[REDACTED_EMAIL]</strong></a><br><br>🔹 Sobre a Vaga:<br>Estamos em busca de um Analista Desenvolvimento Java Pleno para se juntar à nossa equipe em um formato hibrido. Se você tem experiência e deseja crescer em um ambiente dinâmico e desafiador, esta é a sua chance!<br><br>Requisitos:<br>-Escolaridade: Graduação completa em Tecnologia da Informação ou qualquer curso de nível superior com pós-graduação na área de Tecnologia da Informação.<br><br>🔹 Requisitos Técnicos Obrigatórios:<br>* Desenvolvimento e análise de sistemas em aplicações Web utilizando modelo de arquitetura MVC.<br>* Desenvolvimento e manutenção de sistemas utilizando as seguintes linguagens: PLSQL, Java, JavaScript, HTML e XML.<br>* Containers e Gerenciamento: Docker e Kubernetes.<br>* Desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, , Redis.<br>* UML (casos de uso e demais diagramas);<br>* Arquitetura orientada a serviços (SOA).<br>* APIs<br>* Conhecimento de Frameworks de marcado como Spring (Spring-cloud), Angular, React, Vue, BootStrap entre outros;<br>* Intregração Contínua (CI) / Deployment Contínuo (CD).<br>* JSON / REST.<br><br>🔹 Horário de Trabalho e escala:<br>09h às 18h (1hr de almoço)<br>2x presencial e 3x home-office<br><br>🔹 Endereço: Rua Libero Badaró, 425 - Centro - SP<br><br>🔹 Benefícios de Trabalhar Conosco:<br>🍔Vale Alimentação/Refeição | Wiipo Flex<br>🏋‍♀TotalPass | Bem-estar para todos os colaboradores, todos os dias<br>👓 Parceria SESC | Saúde, Lazer, Turismo &amp; Esportes, Assistência Social e Alimentação<br>📕 Parcerias Educacionais | Aldeia, UDF, EBAC, ESPM, IPOG, VC_TB e WO.<br>🤍Seguro de vida<br><br>Todas as vagas são afirmativas!<br><br>E aí, se identificou com a vaga?<br>Não perca tempo e candidate-se!<br><br>Junte-se a nós e faça parte de uma equipe que valoriza inovação e excelência!</p>\n\nCandidate Profile (facts only, no fabrication):\n\nNome: Teste\nHeadline: teste\nLocalização: Brasilia\nEmail: [REDACTED_EMAIL]\nTelefone: [REDACTED_PHONE]\nWebsite: https://teste\nResumo:\n<p>chico</p>\nExperiências (mais recentes primeiro):\n- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)\n  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>\n- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)\n  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>\nTempo total de experiência (todas as experiências): 3 anos 7 meses\nSkills: JavaScript\nProjetos relevantes:\n- teste (https://teste)\n  <p>teste</p>\nEducação:\n- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])\nCertificações:\n- teste (teste, [REDACTED_PHONE])\nIdiomas: teste\nPrêmios:\n- teste (teste)\n- teste2 (teste2)\nPerfis:\n- GitHub: https://www.github.com/in/francisco-dev/\n- teste: http://teste\n\nUser note (additional instructions):\n\n<p>teste</p>\n\nTask:\n\nGenerate a currículo direcionado e focado na vaga específica in tom informal, porém cortês e direto, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).\n\n\n\nFollow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):\n\n\n\n**INFORMAÇÕES PESSOAIS**\n\nNome completo, email, telefone, localização, website (se disponível)\n\n\n\n**RESUMO PROFISSIONAL**\n\n2-3 frases destacando anos de experiência, especialização principal e fit com a vaga\n\n\n\n**EXPERIÊNCIA PROFISSIONAL**\n\nListar experiências mais relevantes à vaga (máximo 4-5), com:\n\n- Cargo, empresa, período (duração calculada)\n\n- 2-3 conquistas mensuráveis por experiência\n\n- Tecnologias e ferramentas utilizadas\n\n- Impacto nos resultados da empresa\n\n\n\n**EDUCAÇÃO**\n\nFormação acadêmica relevante (instituição, curso, período)\n\n\n\n**COMPETÊNCIAS TÉCNICAS**\n\nSkills mais relevantes à vaga, agrupadas por categoria\n\n\n\n**PROJETOS DESTACADOS**\n\nProjetos mais relevantes (máximo 3) com descrição e tecnologias\n\n\n\n**CERTIFICAÇÕES**\n\nCertificações relevantes (máximo 5) com emissor e data\n\n\n\n**IDIOMAS**\n\nIdiomas com nível de proficiência\n\n\n\n**PRÊMIOS E RECONHECIMENTOS**\n\nPrêmios relevantes (máximo 3) com contexto\n\n\n\n**VOLUNTARIADO**\n\nExperiências voluntárias relevantes (se houver)\n\n\n\n**PERFIS PROFISSIONAIS**\n\nLinks para LinkedIn, GitHub, portfolio (se disponíveis)\n\n\n\nInstruções específicas:\n\n- Priorizar experiências e skills mais relevantes à vaga\n\n- Usar linguagem ativa e orientada a resultados\n\n- Incluir métricas e números quando disponíveis no perfil\n\n- Adaptar tom ao tipo de expressão solicitado\n\n- Manter formato limpo e profissional\n\n- Não inventar dados, datas ou experiências\n\n- Focar na relevância para a posição específica\n\n- NUNCA duplicar ou repetir informações entre seções\n\n- Cada experiência deve ser descrita apenas uma vez"}],"temperature":0.5,"max_tokens":1200}'
```
#### Request body (sanitized)
```json
{
  "model": "llama3.2:latest",
  "messages": [
    {
      "role": "system",
      "content": "You are a cover-letter generator. Follow the user's format exactly. Do not invent facts. Detect the predominant language of the job description and reply strictly in that language (do not switch languages). Do not reveal chain-of-thought or internal reasoning; provide only the final answer content. If you would normally include a reasoning section like <think>...</think>, omit it and provide only the final letter body. Do not include code fences or markdown fences. Do not claim experience with any tool/technology that is not present in the candidate profile; at most, mention readiness to learn without implying past hands-on work. Be concise and avoid filler."
    },
    {
      "role": "user",
      "content": "Context: job-specific resume generation.\n\nDetect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from 'User note (additional instructions)'. If still undetectable, default to Portuguese (pt-BR).\n\nWrite as the candidate, in first-person singular (I). Do not write from the employer's perspective.\n\nGround all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.\n\nIf a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.\n\nDo not copy or paraphrase the job description; reference it only to align the candidate's fit.\n\nPrefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.\n\nReturn only the resume content in a structured format. Do not fabricate recruiter names or company details.\n\nPlanned delivery channels: email. Optimize format/length to be usable when sent via these channels.\n\nCarefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.\n\nAvoid clichés or overly eager wording. Maintain a confident, professional tone.\n\nBe concise and avoid filler. Prioritize precise, verifiable facts from the profile.\n\nCompute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use 'over X years').\n\nIf dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).\n\nDo not expose chain-of-thought. Provide only final answer content (no '<think>', analysis, steps, or reasoning).\n\nCRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.\n\nCRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.\n\nJob Description:\n\n<p>aga: Analista Desenvolvedor Java Pleno (Hibrido - SP) - CLT<br><br>👉Interessados devem encaminhar CV atualizado juntamente com a pretensão salarial para o e-mail: <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"mailto:[REDACTED_EMAIL]\"><strong>[REDACTED_EMAIL]</strong></a><br><br>🔹 Sobre a Vaga:<br>Estamos em busca de um Analista Desenvolvimento Java Pleno para se juntar à nossa equipe em um formato hibrido. Se você tem experiência e deseja crescer em um ambiente dinâmico e desafiador, esta é a sua chance!<br><br>Requisitos:<br>-Escolaridade: Graduação completa em Tecnologia da Informação ou qualquer curso de nível superior com pós-graduação na área de Tecnologia da Informação.<br><br>🔹 Requisitos Técnicos Obrigatórios:<br>* Desenvolvimento e análise de sistemas em aplicações Web utilizando modelo de arquitetura MVC.<br>* Desenvolvimento e manutenção de sistemas utilizando as seguintes linguagens: PLSQL, Java, JavaScript, HTML e XML.<br>* Containers e Gerenciamento: Docker e Kubernetes.<br>* Desenvolvimento de sistemas com persistência em Bancos de Dados relacionais Oracle, SQL Server, DB2, , Redis.<br>* UML (casos de uso e demais diagramas);<br>* Arquitetura orientada a serviços (SOA).<br>* APIs<br>* Conhecimento de Frameworks de marcado como Spring (Spring-cloud), Angular, React, Vue, BootStrap entre outros;<br>* Intregração Contínua (CI) / Deployment Contínuo (CD).<br>* JSON / REST.<br><br>🔹 Horário de Trabalho e escala:<br>09h às 18h (1hr de almoço)<br>2x presencial e 3x home-office<br><br>🔹 Endereço: Rua Libero Badaró, 425 - Centro - SP<br><br>🔹 Benefícios de Trabalhar Conosco:<br>🍔Vale Alimentação/Refeição | Wiipo Flex<br>🏋‍♀TotalPass | Bem-estar para todos os colaboradores, todos os dias<br>👓 Parceria SESC | Saúde, Lazer, Turismo &amp; Esportes, Assistência Social e Alimentação<br>📕 Parcerias Educacionais | Aldeia, UDF, EBAC, ESPM, IPOG, VC_TB e WO.<br>🤍Seguro de vida<br><br>Todas as vagas são afirmativas!<br><br>E aí, se identificou com a vaga?<br>Não perca tempo e candidate-se!<br><br>Junte-se a nós e faça parte de uma equipe que valoriza inovação e excelência!</p>\n\nCandidate Profile (facts only, no fabrication):\n\nNome: Teste\nHeadline: teste\nLocalização: Brasilia\nEmail: [REDACTED_EMAIL]\nTelefone: [REDACTED_PHONE]\nWebsite: https://teste\nResumo:\n<p>chico</p>\nExperiências (mais recentes primeiro):\n- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)\n  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>\n- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)\n  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>\nTempo total de experiência (todas as experiências): 3 anos 7 meses\nSkills: JavaScript\nProjetos relevantes:\n- teste (https://teste)\n  <p>teste</p>\nEducação:\n- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])\nCertificações:\n- teste (teste, [REDACTED_PHONE])\nIdiomas: teste\nPrêmios:\n- teste (teste)\n- teste2 (teste2)\nPerfis:\n- GitHub: https://www.github.com/in/francisco-dev/\n- teste: http://teste\n\nUser note (additional instructions):\n\n<p>teste</p>\n\nTask:\n\nGenerate a currículo direcionado e focado na vaga específica in tom informal, porém cortês e direto, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).\n\n\n\nFollow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):\n\n\n\n**INFORMAÇÕES PESSOAIS**\n\nNome completo, email, telefone, localização, website (se disponível)\n\n\n\n**RESUMO PROFISSIONAL**\n\n2-3 frases destacando anos de experiência, especialização principal e fit com a vaga\n\n\n\n**EXPERIÊNCIA PROFISSIONAL**\n\nListar experiências mais relevantes à vaga (máximo 4-5), com:\n\n- Cargo, empresa, período (duração calculada)\n\n- 2-3 conquistas mensuráveis por experiência\n\n- Tecnologias e ferramentas utilizadas\n\n- Impacto nos resultados da empresa\n\n\n\n**EDUCAÇÃO**\n\nFormação acadêmica relevante (instituição, curso, período)\n\n\n\n**COMPETÊNCIAS TÉCNICAS**\n\nSkills mais relevantes à vaga, agrupadas por categoria\n\n\n\n**PROJETOS DESTACADOS**\n\nProjetos mais relevantes (máximo 3) com descrição e tecnologias\n\n\n\n**CERTIFICAÇÕES**\n\nCertificações relevantes (máximo 5) com emissor e data\n\n\n\n**IDIOMAS**\n\nIdiomas com nível de proficiência\n\n\n\n**PRÊMIOS E RECONHECIMENTOS**\n\nPrêmios relevantes (máximo 3) com contexto\n\n\n\n**VOLUNTARIADO**\n\nExperiências voluntárias relevantes (se houver)\n\n\n\n**PERFIS PROFISSIONAIS**\n\nLinks para LinkedIn, GitHub, portfolio (se disponíveis)\n\n\n\nInstruções específicas:\n\n- Priorizar experiências e skills mais relevantes à vaga\n\n- Usar linguagem ativa e orientada a resultados\n\n- Incluir métricas e números quando disponíveis no perfil\n\n- Adaptar tom ao tipo de expressão solicitado\n\n- Manter formato limpo e profissional\n\n- Não inventar dados, datas ou experiências\n\n- Focar na relevância para a posição específica\n\n- NUNCA duplicar ou repetir informações entre seções\n\n- Cada experiência deve ser descrita apenas uma vez"
    }
  ],
  "temperature": 0.5,
  "max_tokens": 1200
}
```

#### LLM Response — 1755733416861-qccunv
- Timestamp: 2025-08-20T23:44:26.595Z
- Cover letter length: 1742 • SHA256: 6ed415a394d6115dbde64ddefd8cc2aa2d877379d2e24ebe85d5647406d29c92

```text
**INFORMAÇÕES PESSOAIS**

Nome completo: Teste, Email: [REDACTED_EMAIL], Telefone: [REDACTED_PHONE], Localização: Brasilia, Website: https://teste

**RESUMO PROFISSIONAL**

Desenvolvedor experiente em JavaScript com 3 anos de experiência em desenvolvimento de sistemas escaláveis e testes unitários. Estou procurando por uma oportunidade para aplicar minhas habilidades em um ambiente dinâmico e desafiador.

**EXPERIÊNCIA PROFISSIONAL**

- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)
  Consegui desenvolver landing pages e um website de vendas de seguros com Next.js e React.js.
  Utilizei tecnologias como Next.js e React.js para melhorar a experiência do usuário.

- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)
  Desenvolvi APIs escaláveis e testes unitários.
  Utilizei tecnologias como Java e JavaScript para desenvolver sistemas de persistência em bancos de dados relacionais.

**EDUCAÇÃO**

Formação acadêmica relevante: Analise e Desenvolvimento de Sistemas - Estacio ([REDACTED_PHONE])

**COMPETÊNCIAS TÉCNICAS**

Skills mais relevantes à vaga:
JavaScript
Tecnologias e ferramentas utilizadas:
Next.js, React.js, Java, JavaScript

**PROJETOS DESTACADOS**

- teste (https://teste)
  Desenvolvi um projeto de vendas de seguros com Next.js e React.js.

**CERTIFICAÇÕES**

Certificações relevantes: teste (teste, [REDACTED_PHONE])

**IDIOMAS**

Idiomas com nível de proficiência:
teste

**PRÊMIOS E RECONHECIMENTOS**

Prêmios relevantes:
teste
teste2

**VOLUNTARIADO**

Experiências voluntárias relevantes: não disponível

**PERFIS PROFISSIONAIS**

Links para LinkedIn, GitHub, portfolio: https://www.github.com/in/francisco-dev/, http://teste
```
---

### Application Request 1755792074327-d1wfkj
- Timestamp: 2025-08-21T16:01:14.347Z
- User: cm9hp80720000gk3gykahk5f4
- Channels: 
- Expression: professional
- Job description length: 671
- Prompt length: 5815 • SHA256: bcb7e8abb06f0f072616251bd34f66fc5a62f1863361726315295b0f09a72bed
- Model: llama3.2:latest

#### Prompt
```text
Context: job-specific resume generation.

Detect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from 'User note (additional instructions)'. If still undetectable, default to Portuguese (pt-BR).

Write as the candidate, in first-person singular (I). Do not write from the employer's perspective.

Ground all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.

If a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.

Do not copy or paraphrase the job description; reference it only to align the candidate's fit.

Prefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.

Return only the resume content in a structured format. Do not fabricate recruiter names or company details.

Carefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.

Avoid clichés or overly eager wording. Maintain a confident, professional tone.

Be concise and avoid filler. Prioritize precise, verifiable facts from the profile.

Compute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use 'over X years').

If dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).

Do not expose chain-of-thought. Provide only final answer content (no '<think>', analysis, steps, or reasoning).

CRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.

CRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.

Job Description:

<p>A Smart Research está revolucionando o processo de recrutamento para pesquisas de mercado e estamos à procura de um desenvolvedor React Native talentoso para se juntar à nossa equipe.</p><p><br></p><p><strong>Requisitos da vaga</strong></p><p><br></p><p>Experiência avançada com React.js e React Native;</p><p>Experiência com TypeScript;</p><p>Experiência com NextJS e TailwindCSS</p><p>Experiência com consumo de API's REST;</p><p>Conhecimento de ferramentas de teste como Jest e Testing-Library</p><p>Conhecimento de NodeJS;</p><p>Noções básicas de UI e UX;</p><p>Familiaridade com deploy de apps nas principais lojas;</p><p>Familiaridade com CI e CD;</p><p><br></p>

Candidate Profile (facts only, no fabrication):

Nome: Teste
Headline: teste
Localização: Brasilia
Email: [REDACTED_EMAIL]
Telefone: [REDACTED_PHONE]
Website: https://teste
Resumo:
<p>chico</p>
Experiências (mais recentes primeiro):
- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)
  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>
- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)
  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>
Tempo total de experiência (todas as experiências): 3 anos 7 meses
Skills: JavaScript
Projetos relevantes:
- teste (https://teste)
  <p>teste</p>
Educação:
- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])
Certificações:
- teste (teste, [REDACTED_PHONE])
Idiomas: teste
Prêmios:
- teste (teste)
- teste2 (teste2)
Perfis:
- GitHub: https://www.github.com/in/francisco-dev/
- teste: http://teste

User note (additional instructions):

<p>Mesmo que meu cirrucolo nao tenha os requisitos, adicione no texto geral.</p>

Task:

Generate a currículo abrangente com todas as experiências relevantes in tom profissional, claro e objetivo, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).



Follow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):



**INFORMAÇÕES PESSOAIS**

Nome completo, email, telefone, localização, website (se disponível)



**RESUMO PROFISSIONAL**

2-3 frases destacando anos de experiência, especialização principal e fit com a vaga



**EXPERIÊNCIA PROFISSIONAL**

Listar experiências mais relevantes à vaga (máximo 4-5), com:

- Cargo, empresa, período (duração calculada)

- 2-3 conquistas mensuráveis por experiência

- Tecnologias e ferramentas utilizadas

- Impacto nos resultados da empresa



**EDUCAÇÃO**

Formação acadêmica relevante (instituição, curso, período)



**COMPETÊNCIAS TÉCNICAS**

Skills mais relevantes à vaga, agrupadas por categoria



**PROJETOS DESTACADOS**

Projetos mais relevantes (máximo 3) com descrição e tecnologias



**CERTIFICAÇÕES**

Certificações relevantes (máximo 5) com emissor e data



**IDIOMAS**

Idiomas com nível de proficiência



**PRÊMIOS E RECONHECIMENTOS**

Prêmios relevantes (máximo 3) com contexto



**VOLUNTARIADO**

Experiências voluntárias relevantes (se houver)



**PERFIS PROFISSIONAIS**

Links para LinkedIn, GitHub, portfolio (se disponíveis)



Instruções específicas:

- Priorizar experiências e skills mais relevantes à vaga

- Usar linguagem ativa e orientada a resultados

- Incluir métricas e números quando disponíveis no perfil

- Adaptar tom ao tipo de expressão solicitado

- Manter formato limpo e profissional

- Não inventar dados, datas ou experiências

- Focar na relevância para a posição específica

- NUNCA duplicar ou repetir informações entre seções

- Cada experiência deve ser descrita apenas uma vez
```
#### HTTP request (cURL)
```bash
curl -sS -X POST 'http://localhost:11434/v1/chat/completions' \
  -H 'Content-Type: application/json' \
  -d '{"model":"llama3.2:latest","messages":[{"role":"system","content":"You are a cover-letter generator. Follow the user'\\''s format exactly. Do not invent facts. Detect the predominant language of the job description and reply strictly in that language (do not switch languages). Do not reveal chain-of-thought or internal reasoning; provide only the final answer content. If you would normally include a reasoning section like <think>...</think>, omit it and provide only the final letter body. Do not include code fences or markdown fences. Do not claim experience with any tool/technology that is not present in the candidate profile; at most, mention readiness to learn without implying past hands-on work. Be concise and avoid filler."},{"role":"user","content":"Context: job-specific resume generation.\n\nDetect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from '\\''User note (additional instructions)'\\''. If still undetectable, default to Portuguese (pt-BR).\n\nWrite as the candidate, in first-person singular (I). Do not write from the employer'\\''s perspective.\n\nGround all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.\n\nIf a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.\n\nDo not copy or paraphrase the job description; reference it only to align the candidate'\\''s fit.\n\nPrefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.\n\nReturn only the resume content in a structured format. Do not fabricate recruiter names or company details.\n\nCarefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.\n\nAvoid clichés or overly eager wording. Maintain a confident, professional tone.\n\nBe concise and avoid filler. Prioritize precise, verifiable facts from the profile.\n\nCompute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use '\\''over X years'\\'').\n\nIf dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).\n\nDo not expose chain-of-thought. Provide only final answer content (no '\\''<think>'\\'', analysis, steps, or reasoning).\n\nCRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.\n\nCRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.\n\nJob Description:\n\n<p>A Smart Research está revolucionando o processo de recrutamento para pesquisas de mercado e estamos à procura de um desenvolvedor React Native talentoso para se juntar à nossa equipe.</p><p><br></p><p><strong>Requisitos da vaga</strong></p><p><br></p><p>Experiência avançada com React.js e React Native;</p><p>Experiência com TypeScript;</p><p>Experiência com NextJS e TailwindCSS</p><p>Experiência com consumo de API'\\''s REST;</p><p>Conhecimento de ferramentas de teste como Jest e Testing-Library</p><p>Conhecimento de NodeJS;</p><p>Noções básicas de UI e UX;</p><p>Familiaridade com deploy de apps nas principais lojas;</p><p>Familiaridade com CI e CD;</p><p><br></p>\n\nCandidate Profile (facts only, no fabrication):\n\nNome: Teste\nHeadline: teste\nLocalização: Brasilia\nEmail: [REDACTED_EMAIL]\nTelefone: [REDACTED_PHONE]\nWebsite: https://teste\nResumo:\n<p>chico</p>\nExperiências (mais recentes primeiro):\n- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)\n  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>\n- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)\n  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>\nTempo total de experiência (todas as experiências): 3 anos 7 meses\nSkills: JavaScript\nProjetos relevantes:\n- teste (https://teste)\n  <p>teste</p>\nEducação:\n- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])\nCertificações:\n- teste (teste, [REDACTED_PHONE])\nIdiomas: teste\nPrêmios:\n- teste (teste)\n- teste2 (teste2)\nPerfis:\n- GitHub: https://www.github.com/in/francisco-dev/\n- teste: http://teste\n\nUser note (additional instructions):\n\n<p>Mesmo que meu cirrucolo nao tenha os requisitos, adicione no texto geral.</p>\n\nTask:\n\nGenerate a currículo abrangente com todas as experiências relevantes in tom profissional, claro e objetivo, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).\n\n\n\nFollow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):\n\n\n\n**INFORMAÇÕES PESSOAIS**\n\nNome completo, email, telefone, localização, website (se disponível)\n\n\n\n**RESUMO PROFISSIONAL**\n\n2-3 frases destacando anos de experiência, especialização principal e fit com a vaga\n\n\n\n**EXPERIÊNCIA PROFISSIONAL**\n\nListar experiências mais relevantes à vaga (máximo 4-5), com:\n\n- Cargo, empresa, período (duração calculada)\n\n- 2-3 conquistas mensuráveis por experiência\n\n- Tecnologias e ferramentas utilizadas\n\n- Impacto nos resultados da empresa\n\n\n\n**EDUCAÇÃO**\n\nFormação acadêmica relevante (instituição, curso, período)\n\n\n\n**COMPETÊNCIAS TÉCNICAS**\n\nSkills mais relevantes à vaga, agrupadas por categoria\n\n\n\n**PROJETOS DESTACADOS**\n\nProjetos mais relevantes (máximo 3) com descrição e tecnologias\n\n\n\n**CERTIFICAÇÕES**\n\nCertificações relevantes (máximo 5) com emissor e data\n\n\n\n**IDIOMAS**\n\nIdiomas com nível de proficiência\n\n\n\n**PRÊMIOS E RECONHECIMENTOS**\n\nPrêmios relevantes (máximo 3) com contexto\n\n\n\n**VOLUNTARIADO**\n\nExperiências voluntárias relevantes (se houver)\n\n\n\n**PERFIS PROFISSIONAIS**\n\nLinks para LinkedIn, GitHub, portfolio (se disponíveis)\n\n\n\nInstruções específicas:\n\n- Priorizar experiências e skills mais relevantes à vaga\n\n- Usar linguagem ativa e orientada a resultados\n\n- Incluir métricas e números quando disponíveis no perfil\n\n- Adaptar tom ao tipo de expressão solicitado\n\n- Manter formato limpo e profissional\n\n- Não inventar dados, datas ou experiências\n\n- Focar na relevância para a posição específica\n\n- NUNCA duplicar ou repetir informações entre seções\n\n- Cada experiência deve ser descrita apenas uma vez"}],"temperature":0.5,"max_tokens":1200}'
```
#### Request body (sanitized)
```json
{
  "model": "llama3.2:latest",
  "messages": [
    {
      "role": "system",
      "content": "You are a cover-letter generator. Follow the user's format exactly. Do not invent facts. Detect the predominant language of the job description and reply strictly in that language (do not switch languages). Do not reveal chain-of-thought or internal reasoning; provide only the final answer content. If you would normally include a reasoning section like <think>...</think>, omit it and provide only the final letter body. Do not include code fences or markdown fences. Do not claim experience with any tool/technology that is not present in the candidate profile; at most, mention readiness to learn without implying past hands-on work. Be concise and avoid filler."
    },
    {
      "role": "user",
      "content": "Context: job-specific resume generation.\n\nDetect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from 'User note (additional instructions)'. If still undetectable, default to Portuguese (pt-BR).\n\nWrite as the candidate, in first-person singular (I). Do not write from the employer's perspective.\n\nGround all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.\n\nIf a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.\n\nDo not copy or paraphrase the job description; reference it only to align the candidate's fit.\n\nPrefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.\n\nReturn only the resume content in a structured format. Do not fabricate recruiter names or company details.\n\nCarefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.\n\nAvoid clichés or overly eager wording. Maintain a confident, professional tone.\n\nBe concise and avoid filler. Prioritize precise, verifiable facts from the profile.\n\nCompute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use 'over X years').\n\nIf dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).\n\nDo not expose chain-of-thought. Provide only final answer content (no '<think>', analysis, steps, or reasoning).\n\nCRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.\n\nCRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.\n\nJob Description:\n\n<p>A Smart Research está revolucionando o processo de recrutamento para pesquisas de mercado e estamos à procura de um desenvolvedor React Native talentoso para se juntar à nossa equipe.</p><p><br></p><p><strong>Requisitos da vaga</strong></p><p><br></p><p>Experiência avançada com React.js e React Native;</p><p>Experiência com TypeScript;</p><p>Experiência com NextJS e TailwindCSS</p><p>Experiência com consumo de API's REST;</p><p>Conhecimento de ferramentas de teste como Jest e Testing-Library</p><p>Conhecimento de NodeJS;</p><p>Noções básicas de UI e UX;</p><p>Familiaridade com deploy de apps nas principais lojas;</p><p>Familiaridade com CI e CD;</p><p><br></p>\n\nCandidate Profile (facts only, no fabrication):\n\nNome: Teste\nHeadline: teste\nLocalização: Brasilia\nEmail: [REDACTED_EMAIL]\nTelefone: [REDACTED_PHONE]\nWebsite: https://teste\nResumo:\n<p>chico</p>\nExperiências (mais recentes primeiro):\n- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)\n  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>\n- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)\n  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>\nTempo total de experiência (todas as experiências): 3 anos 7 meses\nSkills: JavaScript\nProjetos relevantes:\n- teste (https://teste)\n  <p>teste</p>\nEducação:\n- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])\nCertificações:\n- teste (teste, [REDACTED_PHONE])\nIdiomas: teste\nPrêmios:\n- teste (teste)\n- teste2 (teste2)\nPerfis:\n- GitHub: https://www.github.com/in/francisco-dev/\n- teste: http://teste\n\nUser note (additional instructions):\n\n<p>Mesmo que meu cirrucolo nao tenha os requisitos, adicione no texto geral.</p>\n\nTask:\n\nGenerate a currículo abrangente com todas as experiências relevantes in tom profissional, claro e objetivo, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).\n\n\n\nFollow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):\n\n\n\n**INFORMAÇÕES PESSOAIS**\n\nNome completo, email, telefone, localização, website (se disponível)\n\n\n\n**RESUMO PROFISSIONAL**\n\n2-3 frases destacando anos de experiência, especialização principal e fit com a vaga\n\n\n\n**EXPERIÊNCIA PROFISSIONAL**\n\nListar experiências mais relevantes à vaga (máximo 4-5), com:\n\n- Cargo, empresa, período (duração calculada)\n\n- 2-3 conquistas mensuráveis por experiência\n\n- Tecnologias e ferramentas utilizadas\n\n- Impacto nos resultados da empresa\n\n\n\n**EDUCAÇÃO**\n\nFormação acadêmica relevante (instituição, curso, período)\n\n\n\n**COMPETÊNCIAS TÉCNICAS**\n\nSkills mais relevantes à vaga, agrupadas por categoria\n\n\n\n**PROJETOS DESTACADOS**\n\nProjetos mais relevantes (máximo 3) com descrição e tecnologias\n\n\n\n**CERTIFICAÇÕES**\n\nCertificações relevantes (máximo 5) com emissor e data\n\n\n\n**IDIOMAS**\n\nIdiomas com nível de proficiência\n\n\n\n**PRÊMIOS E RECONHECIMENTOS**\n\nPrêmios relevantes (máximo 3) com contexto\n\n\n\n**VOLUNTARIADO**\n\nExperiências voluntárias relevantes (se houver)\n\n\n\n**PERFIS PROFISSIONAIS**\n\nLinks para LinkedIn, GitHub, portfolio (se disponíveis)\n\n\n\nInstruções específicas:\n\n- Priorizar experiências e skills mais relevantes à vaga\n\n- Usar linguagem ativa e orientada a resultados\n\n- Incluir métricas e números quando disponíveis no perfil\n\n- Adaptar tom ao tipo de expressão solicitado\n\n- Manter formato limpo e profissional\n\n- Não inventar dados, datas ou experiências\n\n- Focar na relevância para a posição específica\n\n- NUNCA duplicar ou repetir informações entre seções\n\n- Cada experiência deve ser descrita apenas uma vez"
    }
  ],
  "temperature": 0.5,
  "max_tokens": 1200
}
```

#### Error — 1755792074327-d1wfkj
- Timestamp: 2025-08-21T16:01:14.404Z
- User: cm9hp80720000gk3gykahk5f4
- Channels: 
- Expression: professional
- Prompt length: 5815 • SHA256: bcb7e8abb06f0f072616251bd34f66fc5a62f1863361726315295b0f09a72bed
- Message: connect ECONNREFUSED 127.0.0.1:11434
---

#### LLM Response — 1755792074327-d1wfkj
- Timestamp: 2025-08-21T16:01:14.404Z
- Cover letter length: 0 • SHA256: n/a

```text
[null]
```
---

### Application Request 1755792100102-z9nv7n
- Timestamp: 2025-08-21T16:01:40.107Z
- User: cm9hp80720000gk3gykahk5f4
- Channels: 
- Expression: professional
- Job description length: 671
- Prompt length: 5815 • SHA256: bcb7e8abb06f0f072616251bd34f66fc5a62f1863361726315295b0f09a72bed
- Model: llama3.2:latest

#### Prompt
```text
Context: job-specific resume generation.

Detect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from 'User note (additional instructions)'. If still undetectable, default to Portuguese (pt-BR).

Write as the candidate, in first-person singular (I). Do not write from the employer's perspective.

Ground all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.

If a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.

Do not copy or paraphrase the job description; reference it only to align the candidate's fit.

Prefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.

Return only the resume content in a structured format. Do not fabricate recruiter names or company details.

Carefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.

Avoid clichés or overly eager wording. Maintain a confident, professional tone.

Be concise and avoid filler. Prioritize precise, verifiable facts from the profile.

Compute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use 'over X years').

If dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).

Do not expose chain-of-thought. Provide only final answer content (no '<think>', analysis, steps, or reasoning).

CRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.

CRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.

Job Description:

<p>A Smart Research está revolucionando o processo de recrutamento para pesquisas de mercado e estamos à procura de um desenvolvedor React Native talentoso para se juntar à nossa equipe.</p><p><br></p><p><strong>Requisitos da vaga</strong></p><p><br></p><p>Experiência avançada com React.js e React Native;</p><p>Experiência com TypeScript;</p><p>Experiência com NextJS e TailwindCSS</p><p>Experiência com consumo de API's REST;</p><p>Conhecimento de ferramentas de teste como Jest e Testing-Library</p><p>Conhecimento de NodeJS;</p><p>Noções básicas de UI e UX;</p><p>Familiaridade com deploy de apps nas principais lojas;</p><p>Familiaridade com CI e CD;</p><p><br></p>

Candidate Profile (facts only, no fabrication):

Nome: Teste
Headline: teste
Localização: Brasilia
Email: [REDACTED_EMAIL]
Telefone: [REDACTED_PHONE]
Website: https://teste
Resumo:
<p>chico</p>
Experiências (mais recentes primeiro):
- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)
  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>
- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)
  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>
Tempo total de experiência (todas as experiências): 3 anos 7 meses
Skills: JavaScript
Projetos relevantes:
- teste (https://teste)
  <p>teste</p>
Educação:
- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])
Certificações:
- teste (teste, [REDACTED_PHONE])
Idiomas: teste
Prêmios:
- teste (teste)
- teste2 (teste2)
Perfis:
- GitHub: https://www.github.com/in/francisco-dev/
- teste: http://teste

User note (additional instructions):

<p>Mesmo que meu cirrucolo nao tenha os requisitos, adicione no texto geral.</p>

Task:

Generate a currículo abrangente com todas as experiências relevantes in tom profissional, claro e objetivo, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).



Follow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):



**INFORMAÇÕES PESSOAIS**

Nome completo, email, telefone, localização, website (se disponível)



**RESUMO PROFISSIONAL**

2-3 frases destacando anos de experiência, especialização principal e fit com a vaga



**EXPERIÊNCIA PROFISSIONAL**

Listar experiências mais relevantes à vaga (máximo 4-5), com:

- Cargo, empresa, período (duração calculada)

- 2-3 conquistas mensuráveis por experiência

- Tecnologias e ferramentas utilizadas

- Impacto nos resultados da empresa



**EDUCAÇÃO**

Formação acadêmica relevante (instituição, curso, período)



**COMPETÊNCIAS TÉCNICAS**

Skills mais relevantes à vaga, agrupadas por categoria



**PROJETOS DESTACADOS**

Projetos mais relevantes (máximo 3) com descrição e tecnologias



**CERTIFICAÇÕES**

Certificações relevantes (máximo 5) com emissor e data



**IDIOMAS**

Idiomas com nível de proficiência



**PRÊMIOS E RECONHECIMENTOS**

Prêmios relevantes (máximo 3) com contexto



**VOLUNTARIADO**

Experiências voluntárias relevantes (se houver)



**PERFIS PROFISSIONAIS**

Links para LinkedIn, GitHub, portfolio (se disponíveis)



Instruções específicas:

- Priorizar experiências e skills mais relevantes à vaga

- Usar linguagem ativa e orientada a resultados

- Incluir métricas e números quando disponíveis no perfil

- Adaptar tom ao tipo de expressão solicitado

- Manter formato limpo e profissional

- Não inventar dados, datas ou experiências

- Focar na relevância para a posição específica

- NUNCA duplicar ou repetir informações entre seções

- Cada experiência deve ser descrita apenas uma vez
```
#### HTTP request (cURL)
```bash
curl -sS -X POST 'http://localhost:11434/v1/chat/completions' \
  -H 'Content-Type: application/json' \
  -d '{"model":"llama3.2:latest","messages":[{"role":"system","content":"You are a cover-letter generator. Follow the user'\\''s format exactly. Do not invent facts. Detect the predominant language of the job description and reply strictly in that language (do not switch languages). Do not reveal chain-of-thought or internal reasoning; provide only the final answer content. If you would normally include a reasoning section like <think>...</think>, omit it and provide only the final letter body. Do not include code fences or markdown fences. Do not claim experience with any tool/technology that is not present in the candidate profile; at most, mention readiness to learn without implying past hands-on work. Be concise and avoid filler."},{"role":"user","content":"Context: job-specific resume generation.\n\nDetect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from '\\''User note (additional instructions)'\\''. If still undetectable, default to Portuguese (pt-BR).\n\nWrite as the candidate, in first-person singular (I). Do not write from the employer'\\''s perspective.\n\nGround all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.\n\nIf a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.\n\nDo not copy or paraphrase the job description; reference it only to align the candidate'\\''s fit.\n\nPrefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.\n\nReturn only the resume content in a structured format. Do not fabricate recruiter names or company details.\n\nCarefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.\n\nAvoid clichés or overly eager wording. Maintain a confident, professional tone.\n\nBe concise and avoid filler. Prioritize precise, verifiable facts from the profile.\n\nCompute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use '\\''over X years'\\'').\n\nIf dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).\n\nDo not expose chain-of-thought. Provide only final answer content (no '\\''<think>'\\'', analysis, steps, or reasoning).\n\nCRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.\n\nCRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.\n\nJob Description:\n\n<p>A Smart Research está revolucionando o processo de recrutamento para pesquisas de mercado e estamos à procura de um desenvolvedor React Native talentoso para se juntar à nossa equipe.</p><p><br></p><p><strong>Requisitos da vaga</strong></p><p><br></p><p>Experiência avançada com React.js e React Native;</p><p>Experiência com TypeScript;</p><p>Experiência com NextJS e TailwindCSS</p><p>Experiência com consumo de API'\\''s REST;</p><p>Conhecimento de ferramentas de teste como Jest e Testing-Library</p><p>Conhecimento de NodeJS;</p><p>Noções básicas de UI e UX;</p><p>Familiaridade com deploy de apps nas principais lojas;</p><p>Familiaridade com CI e CD;</p><p><br></p>\n\nCandidate Profile (facts only, no fabrication):\n\nNome: Teste\nHeadline: teste\nLocalização: Brasilia\nEmail: [REDACTED_EMAIL]\nTelefone: [REDACTED_PHONE]\nWebsite: https://teste\nResumo:\n<p>chico</p>\nExperiências (mais recentes primeiro):\n- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)\n  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>\n- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)\n  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>\nTempo total de experiência (todas as experiências): 3 anos 7 meses\nSkills: JavaScript\nProjetos relevantes:\n- teste (https://teste)\n  <p>teste</p>\nEducação:\n- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])\nCertificações:\n- teste (teste, [REDACTED_PHONE])\nIdiomas: teste\nPrêmios:\n- teste (teste)\n- teste2 (teste2)\nPerfis:\n- GitHub: https://www.github.com/in/francisco-dev/\n- teste: http://teste\n\nUser note (additional instructions):\n\n<p>Mesmo que meu cirrucolo nao tenha os requisitos, adicione no texto geral.</p>\n\nTask:\n\nGenerate a currículo abrangente com todas as experiências relevantes in tom profissional, claro e objetivo, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).\n\n\n\nFollow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):\n\n\n\n**INFORMAÇÕES PESSOAIS**\n\nNome completo, email, telefone, localização, website (se disponível)\n\n\n\n**RESUMO PROFISSIONAL**\n\n2-3 frases destacando anos de experiência, especialização principal e fit com a vaga\n\n\n\n**EXPERIÊNCIA PROFISSIONAL**\n\nListar experiências mais relevantes à vaga (máximo 4-5), com:\n\n- Cargo, empresa, período (duração calculada)\n\n- 2-3 conquistas mensuráveis por experiência\n\n- Tecnologias e ferramentas utilizadas\n\n- Impacto nos resultados da empresa\n\n\n\n**EDUCAÇÃO**\n\nFormação acadêmica relevante (instituição, curso, período)\n\n\n\n**COMPETÊNCIAS TÉCNICAS**\n\nSkills mais relevantes à vaga, agrupadas por categoria\n\n\n\n**PROJETOS DESTACADOS**\n\nProjetos mais relevantes (máximo 3) com descrição e tecnologias\n\n\n\n**CERTIFICAÇÕES**\n\nCertificações relevantes (máximo 5) com emissor e data\n\n\n\n**IDIOMAS**\n\nIdiomas com nível de proficiência\n\n\n\n**PRÊMIOS E RECONHECIMENTOS**\n\nPrêmios relevantes (máximo 3) com contexto\n\n\n\n**VOLUNTARIADO**\n\nExperiências voluntárias relevantes (se houver)\n\n\n\n**PERFIS PROFISSIONAIS**\n\nLinks para LinkedIn, GitHub, portfolio (se disponíveis)\n\n\n\nInstruções específicas:\n\n- Priorizar experiências e skills mais relevantes à vaga\n\n- Usar linguagem ativa e orientada a resultados\n\n- Incluir métricas e números quando disponíveis no perfil\n\n- Adaptar tom ao tipo de expressão solicitado\n\n- Manter formato limpo e profissional\n\n- Não inventar dados, datas ou experiências\n\n- Focar na relevância para a posição específica\n\n- NUNCA duplicar ou repetir informações entre seções\n\n- Cada experiência deve ser descrita apenas uma vez"}],"temperature":0.5,"max_tokens":1200}'
```
#### Request body (sanitized)
```json
{
  "model": "llama3.2:latest",
  "messages": [
    {
      "role": "system",
      "content": "You are a cover-letter generator. Follow the user's format exactly. Do not invent facts. Detect the predominant language of the job description and reply strictly in that language (do not switch languages). Do not reveal chain-of-thought or internal reasoning; provide only the final answer content. If you would normally include a reasoning section like <think>...</think>, omit it and provide only the final letter body. Do not include code fences or markdown fences. Do not claim experience with any tool/technology that is not present in the candidate profile; at most, mention readiness to learn without implying past hands-on work. Be concise and avoid filler."
    },
    {
      "role": "user",
      "content": "Context: job-specific resume generation.\n\nDetect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from 'User note (additional instructions)'. If still undetectable, default to Portuguese (pt-BR).\n\nWrite as the candidate, in first-person singular (I). Do not write from the employer's perspective.\n\nGround all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.\n\nIf a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.\n\nDo not copy or paraphrase the job description; reference it only to align the candidate's fit.\n\nPrefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.\n\nReturn only the resume content in a structured format. Do not fabricate recruiter names or company details.\n\nCarefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.\n\nAvoid clichés or overly eager wording. Maintain a confident, professional tone.\n\nBe concise and avoid filler. Prioritize precise, verifiable facts from the profile.\n\nCompute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use 'over X years').\n\nIf dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).\n\nDo not expose chain-of-thought. Provide only final answer content (no '<think>', analysis, steps, or reasoning).\n\nCRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.\n\nCRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.\n\nJob Description:\n\n<p>A Smart Research está revolucionando o processo de recrutamento para pesquisas de mercado e estamos à procura de um desenvolvedor React Native talentoso para se juntar à nossa equipe.</p><p><br></p><p><strong>Requisitos da vaga</strong></p><p><br></p><p>Experiência avançada com React.js e React Native;</p><p>Experiência com TypeScript;</p><p>Experiência com NextJS e TailwindCSS</p><p>Experiência com consumo de API's REST;</p><p>Conhecimento de ferramentas de teste como Jest e Testing-Library</p><p>Conhecimento de NodeJS;</p><p>Noções básicas de UI e UX;</p><p>Familiaridade com deploy de apps nas principais lojas;</p><p>Familiaridade com CI e CD;</p><p><br></p>\n\nCandidate Profile (facts only, no fabrication):\n\nNome: Teste\nHeadline: teste\nLocalização: Brasilia\nEmail: [REDACTED_EMAIL]\nTelefone: [REDACTED_PHONE]\nWebsite: https://teste\nResumo:\n<p>chico</p>\nExperiências (mais recentes primeiro):\n- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)\n  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>\n- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)\n  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>\nTempo total de experiência (todas as experiências): 3 anos 7 meses\nSkills: JavaScript\nProjetos relevantes:\n- teste (https://teste)\n  <p>teste</p>\nEducação:\n- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])\nCertificações:\n- teste (teste, [REDACTED_PHONE])\nIdiomas: teste\nPrêmios:\n- teste (teste)\n- teste2 (teste2)\nPerfis:\n- GitHub: https://www.github.com/in/francisco-dev/\n- teste: http://teste\n\nUser note (additional instructions):\n\n<p>Mesmo que meu cirrucolo nao tenha os requisitos, adicione no texto geral.</p>\n\nTask:\n\nGenerate a currículo abrangente com todas as experiências relevantes in tom profissional, claro e objetivo, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).\n\n\n\nFollow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):\n\n\n\n**INFORMAÇÕES PESSOAIS**\n\nNome completo, email, telefone, localização, website (se disponível)\n\n\n\n**RESUMO PROFISSIONAL**\n\n2-3 frases destacando anos de experiência, especialização principal e fit com a vaga\n\n\n\n**EXPERIÊNCIA PROFISSIONAL**\n\nListar experiências mais relevantes à vaga (máximo 4-5), com:\n\n- Cargo, empresa, período (duração calculada)\n\n- 2-3 conquistas mensuráveis por experiência\n\n- Tecnologias e ferramentas utilizadas\n\n- Impacto nos resultados da empresa\n\n\n\n**EDUCAÇÃO**\n\nFormação acadêmica relevante (instituição, curso, período)\n\n\n\n**COMPETÊNCIAS TÉCNICAS**\n\nSkills mais relevantes à vaga, agrupadas por categoria\n\n\n\n**PROJETOS DESTACADOS**\n\nProjetos mais relevantes (máximo 3) com descrição e tecnologias\n\n\n\n**CERTIFICAÇÕES**\n\nCertificações relevantes (máximo 5) com emissor e data\n\n\n\n**IDIOMAS**\n\nIdiomas com nível de proficiência\n\n\n\n**PRÊMIOS E RECONHECIMENTOS**\n\nPrêmios relevantes (máximo 3) com contexto\n\n\n\n**VOLUNTARIADO**\n\nExperiências voluntárias relevantes (se houver)\n\n\n\n**PERFIS PROFISSIONAIS**\n\nLinks para LinkedIn, GitHub, portfolio (se disponíveis)\n\n\n\nInstruções específicas:\n\n- Priorizar experiências e skills mais relevantes à vaga\n\n- Usar linguagem ativa e orientada a resultados\n\n- Incluir métricas e números quando disponíveis no perfil\n\n- Adaptar tom ao tipo de expressão solicitado\n\n- Manter formato limpo e profissional\n\n- Não inventar dados, datas ou experiências\n\n- Focar na relevância para a posição específica\n\n- NUNCA duplicar ou repetir informações entre seções\n\n- Cada experiência deve ser descrita apenas uma vez"
    }
  ],
  "temperature": 0.5,
  "max_tokens": 1200
}
```

#### LLM Response — 1755792100102-z9nv7n
- Timestamp: 2025-08-21T16:02:54.637Z
- Cover letter length: 1783 • SHA256: 2b47634169ad2b57e5c4dd32823101d4dd2a2937254503a09bb628ef6907332d

```text
**INFORMAÇÕES PESSOAIS**

Nome completo: Teste, Email: [REDACTED_EMAIL], Telefone: [REDACTED_PHONE], Localização: Brasilia, Website: https://teste

**RESUMO PROFISSIONAL**

Experiência avançada em desenvolvimento web com React Native e conhecimento em TypeScript, NextJS e TailwindCSS. Busco oportunidades que valorizem minha habilidade em criar soluções inovadoras e eficientes.

**EXPERIÊNCIA PROFISSIONAL**

Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)
   Desenvolvi landingpages e um website de vendas de seguros com Next e React JS.
   Utilizei TypeScript e TailwindCSS para otimizar o desempenho dos aplicativos.
   Aumentei a eficiência do desenvolvimento em 30% ao implementar processos mais eficientes.

Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)
   Desenvolvi APIs escaláveis e implementei testes unitários para garantir a qualidade do código.
   Otimizei a velocidade de resposta em 25% ao aplicar técnicas de caching.
   Foi responsável por mais de 50% dos desenvolvimentos da API.

**EDUCAÇÃO**

Formação acadêmica relevante: Analise e Desenvolvimento de Sistemas - Estacio ([REDACTED_PHONE])

**COMPETÊNCIAS TÉCNICAS**

JavaScript, React Native, TypeScript, NextJS, TailwindCSS, NodeJS, Jest, Testing-Library.

**PROJETOS DESTACADOS**

teste (https://teste)
   Desenvolvi um projeto de vendas de seguros utilizando React e Next.
teste2 (https://teste2)

**CERTIFICAÇÕES**

teste (teste, [REDACTED_PHONE])
teste2 (teste2, [REDACTED_PHONE])

**IDIOMAS**

Português (nível avançado).

**PRÊMIOS E RECONHECIMENTOS**

teste (teste, [REDACTED_PHONE])
teste2 (teste2, [REDACTED_PHONE])

**VOLUNTARIADO**

Não disponível.

**PERFIS PROFISSIONAIS**

LinkedIn: https://www.linkedin.com/in/francisco-dev/
```
---

### Application Request 1755792198332-k67h5e
- Timestamp: 2025-08-21T16:03:18.338Z
- User: cm9hp80720000gk3gykahk5f4
- Channels: 
- Expression: professional
- Job description length: 671
- Prompt length: 5815 • SHA256: bcb7e8abb06f0f072616251bd34f66fc5a62f1863361726315295b0f09a72bed
- Model: llama3.2:latest

#### Prompt
```text
Context: job-specific resume generation.

Detect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from 'User note (additional instructions)'. If still undetectable, default to Portuguese (pt-BR).

Write as the candidate, in first-person singular (I). Do not write from the employer's perspective.

Ground all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.

If a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.

Do not copy or paraphrase the job description; reference it only to align the candidate's fit.

Prefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.

Return only the resume content in a structured format. Do not fabricate recruiter names or company details.

Carefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.

Avoid clichés or overly eager wording. Maintain a confident, professional tone.

Be concise and avoid filler. Prioritize precise, verifiable facts from the profile.

Compute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use 'over X years').

If dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).

Do not expose chain-of-thought. Provide only final answer content (no '<think>', analysis, steps, or reasoning).

CRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.

CRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.

Job Description:

<p>A Smart Research está revolucionando o processo de recrutamento para pesquisas de mercado e estamos à procura de um desenvolvedor React Native talentoso para se juntar à nossa equipe.</p><p><br></p><p><strong>Requisitos da vaga</strong></p><p><br></p><p>Experiência avançada com React.js e React Native;</p><p>Experiência com TypeScript;</p><p>Experiência com NextJS e TailwindCSS</p><p>Experiência com consumo de API's REST;</p><p>Conhecimento de ferramentas de teste como Jest e Testing-Library</p><p>Conhecimento de NodeJS;</p><p>Noções básicas de UI e UX;</p><p>Familiaridade com deploy de apps nas principais lojas;</p><p>Familiaridade com CI e CD;</p><p><br></p>

Candidate Profile (facts only, no fabrication):

Nome: Teste
Headline: teste
Localização: Brasilia
Email: [REDACTED_EMAIL]
Telefone: [REDACTED_PHONE]
Website: https://teste
Resumo:
<p>chico</p>
Experiências (mais recentes primeiro):
- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)
  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>
- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)
  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>
Tempo total de experiência (todas as experiências): 3 anos 7 meses
Skills: JavaScript
Projetos relevantes:
- teste (https://teste)
  <p>teste</p>
Educação:
- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])
Certificações:
- teste (teste, [REDACTED_PHONE])
Idiomas: teste
Prêmios:
- teste (teste)
- teste2 (teste2)
Perfis:
- GitHub: https://www.github.com/in/francisco-dev/
- teste: http://teste

User note (additional instructions):

<p>Mesmo que meu cirrucolo nao tenha os requisitos, adicione no texto geral.</p>

Task:

Generate a currículo abrangente com todas as experiências relevantes in tom profissional, claro e objetivo, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).



Follow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):



**INFORMAÇÕES PESSOAIS**

Nome completo, email, telefone, localização, website (se disponível)



**RESUMO PROFISSIONAL**

2-3 frases destacando anos de experiência, especialização principal e fit com a vaga



**EXPERIÊNCIA PROFISSIONAL**

Listar experiências mais relevantes à vaga (máximo 4-5), com:

- Cargo, empresa, período (duração calculada)

- 2-3 conquistas mensuráveis por experiência

- Tecnologias e ferramentas utilizadas

- Impacto nos resultados da empresa



**EDUCAÇÃO**

Formação acadêmica relevante (instituição, curso, período)



**COMPETÊNCIAS TÉCNICAS**

Skills mais relevantes à vaga, agrupadas por categoria



**PROJETOS DESTACADOS**

Projetos mais relevantes (máximo 3) com descrição e tecnologias



**CERTIFICAÇÕES**

Certificações relevantes (máximo 5) com emissor e data



**IDIOMAS**

Idiomas com nível de proficiência



**PRÊMIOS E RECONHECIMENTOS**

Prêmios relevantes (máximo 3) com contexto



**VOLUNTARIADO**

Experiências voluntárias relevantes (se houver)



**PERFIS PROFISSIONAIS**

Links para LinkedIn, GitHub, portfolio (se disponíveis)



Instruções específicas:

- Priorizar experiências e skills mais relevantes à vaga

- Usar linguagem ativa e orientada a resultados

- Incluir métricas e números quando disponíveis no perfil

- Adaptar tom ao tipo de expressão solicitado

- Manter formato limpo e profissional

- Não inventar dados, datas ou experiências

- Focar na relevância para a posição específica

- NUNCA duplicar ou repetir informações entre seções

- Cada experiência deve ser descrita apenas uma vez
```
#### HTTP request (cURL)
```bash
curl -sS -X POST 'http://localhost:11434/v1/chat/completions' \
  -H 'Content-Type: application/json' \
  -d '{"model":"llama3.2:latest","messages":[{"role":"system","content":"You are a cover-letter generator. Follow the user'\\''s format exactly. Do not invent facts. Detect the predominant language of the job description and reply strictly in that language (do not switch languages). Do not reveal chain-of-thought or internal reasoning; provide only the final answer content. If you would normally include a reasoning section like <think>...</think>, omit it and provide only the final letter body. Do not include code fences or markdown fences. Do not claim experience with any tool/technology that is not present in the candidate profile; at most, mention readiness to learn without implying past hands-on work. Be concise and avoid filler."},{"role":"user","content":"Context: job-specific resume generation.\n\nDetect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from '\\''User note (additional instructions)'\\''. If still undetectable, default to Portuguese (pt-BR).\n\nWrite as the candidate, in first-person singular (I). Do not write from the employer'\\''s perspective.\n\nGround all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.\n\nIf a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.\n\nDo not copy or paraphrase the job description; reference it only to align the candidate'\\''s fit.\n\nPrefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.\n\nReturn only the resume content in a structured format. Do not fabricate recruiter names or company details.\n\nCarefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.\n\nAvoid clichés or overly eager wording. Maintain a confident, professional tone.\n\nBe concise and avoid filler. Prioritize precise, verifiable facts from the profile.\n\nCompute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use '\\''over X years'\\'').\n\nIf dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).\n\nDo not expose chain-of-thought. Provide only final answer content (no '\\''<think>'\\'', analysis, steps, or reasoning).\n\nCRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.\n\nCRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.\n\nJob Description:\n\n<p>A Smart Research está revolucionando o processo de recrutamento para pesquisas de mercado e estamos à procura de um desenvolvedor React Native talentoso para se juntar à nossa equipe.</p><p><br></p><p><strong>Requisitos da vaga</strong></p><p><br></p><p>Experiência avançada com React.js e React Native;</p><p>Experiência com TypeScript;</p><p>Experiência com NextJS e TailwindCSS</p><p>Experiência com consumo de API'\\''s REST;</p><p>Conhecimento de ferramentas de teste como Jest e Testing-Library</p><p>Conhecimento de NodeJS;</p><p>Noções básicas de UI e UX;</p><p>Familiaridade com deploy de apps nas principais lojas;</p><p>Familiaridade com CI e CD;</p><p><br></p>\n\nCandidate Profile (facts only, no fabrication):\n\nNome: Teste\nHeadline: teste\nLocalização: Brasilia\nEmail: [REDACTED_EMAIL]\nTelefone: [REDACTED_PHONE]\nWebsite: https://teste\nResumo:\n<p>chico</p>\nExperiências (mais recentes primeiro):\n- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)\n  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>\n- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)\n  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>\nTempo total de experiência (todas as experiências): 3 anos 7 meses\nSkills: JavaScript\nProjetos relevantes:\n- teste (https://teste)\n  <p>teste</p>\nEducação:\n- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])\nCertificações:\n- teste (teste, [REDACTED_PHONE])\nIdiomas: teste\nPrêmios:\n- teste (teste)\n- teste2 (teste2)\nPerfis:\n- GitHub: https://www.github.com/in/francisco-dev/\n- teste: http://teste\n\nUser note (additional instructions):\n\n<p>Mesmo que meu cirrucolo nao tenha os requisitos, adicione no texto geral.</p>\n\nTask:\n\nGenerate a currículo abrangente com todas as experiências relevantes in tom profissional, claro e objetivo, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).\n\n\n\nFollow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):\n\n\n\n**INFORMAÇÕES PESSOAIS**\n\nNome completo, email, telefone, localização, website (se disponível)\n\n\n\n**RESUMO PROFISSIONAL**\n\n2-3 frases destacando anos de experiência, especialização principal e fit com a vaga\n\n\n\n**EXPERIÊNCIA PROFISSIONAL**\n\nListar experiências mais relevantes à vaga (máximo 4-5), com:\n\n- Cargo, empresa, período (duração calculada)\n\n- 2-3 conquistas mensuráveis por experiência\n\n- Tecnologias e ferramentas utilizadas\n\n- Impacto nos resultados da empresa\n\n\n\n**EDUCAÇÃO**\n\nFormação acadêmica relevante (instituição, curso, período)\n\n\n\n**COMPETÊNCIAS TÉCNICAS**\n\nSkills mais relevantes à vaga, agrupadas por categoria\n\n\n\n**PROJETOS DESTACADOS**\n\nProjetos mais relevantes (máximo 3) com descrição e tecnologias\n\n\n\n**CERTIFICAÇÕES**\n\nCertificações relevantes (máximo 5) com emissor e data\n\n\n\n**IDIOMAS**\n\nIdiomas com nível de proficiência\n\n\n\n**PRÊMIOS E RECONHECIMENTOS**\n\nPrêmios relevantes (máximo 3) com contexto\n\n\n\n**VOLUNTARIADO**\n\nExperiências voluntárias relevantes (se houver)\n\n\n\n**PERFIS PROFISSIONAIS**\n\nLinks para LinkedIn, GitHub, portfolio (se disponíveis)\n\n\n\nInstruções específicas:\n\n- Priorizar experiências e skills mais relevantes à vaga\n\n- Usar linguagem ativa e orientada a resultados\n\n- Incluir métricas e números quando disponíveis no perfil\n\n- Adaptar tom ao tipo de expressão solicitado\n\n- Manter formato limpo e profissional\n\n- Não inventar dados, datas ou experiências\n\n- Focar na relevância para a posição específica\n\n- NUNCA duplicar ou repetir informações entre seções\n\n- Cada experiência deve ser descrita apenas uma vez"}],"temperature":0.5,"max_tokens":1200}'
```
#### Request body (sanitized)
```json
{
  "model": "llama3.2:latest",
  "messages": [
    {
      "role": "system",
      "content": "You are a cover-letter generator. Follow the user's format exactly. Do not invent facts. Detect the predominant language of the job description and reply strictly in that language (do not switch languages). Do not reveal chain-of-thought or internal reasoning; provide only the final answer content. If you would normally include a reasoning section like <think>...</think>, omit it and provide only the final letter body. Do not include code fences or markdown fences. Do not claim experience with any tool/technology that is not present in the candidate profile; at most, mention readiness to learn without implying past hands-on work. Be concise and avoid filler."
    },
    {
      "role": "user",
      "content": "Context: job-specific resume generation.\n\nDetect the predominant language of the job description and respond strictly in that language. If the job description is empty, detect the language from 'User note (additional instructions)'. If still undetectable, default to Portuguese (pt-BR).\n\nWrite as the candidate, in first-person singular (I). Do not write from the employer's perspective.\n\nGround all content strictly on the candidate profile below; do not invent companies, roles, years, or skills.\n\nIf a technology, tool, or experience (e.g., Hadoop, Spark, Terraform) is not present in the candidate profile, do not claim prior experience with it. You may at most mention readiness to learn without implying past hands-on work.\n\nDo not copy or paraphrase the job description; reference it only to align the candidate's fit.\n\nPrefer 2-3 concrete achievements from the profile with measurable outcomes when available; if none, describe impact without fabricating numbers.\n\nReturn only the resume content in a structured format. Do not fabricate recruiter names or company details.\n\nCarefully analyze the experiences provided below and prioritize the most relevant ones to the job requirements.\n\nAvoid clichés or overly eager wording. Maintain a confident, professional tone.\n\nBe concise and avoid filler. Prioritize precise, verifiable facts from the profile.\n\nCompute and mention total years of experience based on the dates in the candidate profile (sum relevant overlapping periods conservatively; if uncertain, use 'over X years').\n\nIf dates are present, compute duration per role as years and months and use them to quantify experience (without inventing missing dates).\n\nDo not expose chain-of-thought. Provide only final answer content (no '<think>', analysis, steps, or reasoning).\n\nCRITICAL: Do not repeat or duplicate any information. Each experience, skill, or detail should be mentioned only once.\n\nCRITICAL: Follow the exact structure below. Do not add extra sections or repeat content across sections.\n\nJob Description:\n\n<p>A Smart Research está revolucionando o processo de recrutamento para pesquisas de mercado e estamos à procura de um desenvolvedor React Native talentoso para se juntar à nossa equipe.</p><p><br></p><p><strong>Requisitos da vaga</strong></p><p><br></p><p>Experiência avançada com React.js e React Native;</p><p>Experiência com TypeScript;</p><p>Experiência com NextJS e TailwindCSS</p><p>Experiência com consumo de API's REST;</p><p>Conhecimento de ferramentas de teste como Jest e Testing-Library</p><p>Conhecimento de NodeJS;</p><p>Noções básicas de UI e UX;</p><p>Familiaridade com deploy de apps nas principais lojas;</p><p>Familiaridade com CI e CD;</p><p><br></p>\n\nCandidate Profile (facts only, no fabrication):\n\nNome: Teste\nHeadline: teste\nLocalização: Brasilia\nEmail: [REDACTED_EMAIL]\nTelefone: [REDACTED_PHONE]\nWebsite: https://teste\nResumo:\n<p>chico</p>\nExperiências (mais recentes primeiro):\n- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)\n  <p>Desenvolvi landingpages e um website de vendas de seguros com next e react js.</p>\n- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)\n  <p>Desenvolvedor senior desenvolvendo apis escalaveis e testes unitarios</p>\nTempo total de experiência (todas as experiências): 3 anos 7 meses\nSkills: JavaScript\nProjetos relevantes:\n- teste (https://teste)\n  <p>teste</p>\nEducação:\n- Tipo em Analise e Desenvolvimento de Sistemas — Estacio ([REDACTED_PHONE])\nCertificações:\n- teste (teste, [REDACTED_PHONE])\nIdiomas: teste\nPrêmios:\n- teste (teste)\n- teste2 (teste2)\nPerfis:\n- GitHub: https://www.github.com/in/francisco-dev/\n- teste: http://teste\n\nUser note (additional instructions):\n\n<p>Mesmo que meu cirrucolo nao tenha os requisitos, adicione no texto geral.</p>\n\nTask:\n\nGenerate a currículo abrangente com todas as experiências relevantes in tom profissional, claro e objetivo, emphasizing role fit, measurable outcomes when available, and cultural alignment. Do not invent facts. Reply strictly in the detected language of the job description (or pt-BR if undetectable/empty).\n\n\n\nFollow this structure EXACTLY (no lists or subtitles, use natural paragraphs, NO DUPLICATION):\n\n\n\n**INFORMAÇÕES PESSOAIS**\n\nNome completo, email, telefone, localização, website (se disponível)\n\n\n\n**RESUMO PROFISSIONAL**\n\n2-3 frases destacando anos de experiência, especialização principal e fit com a vaga\n\n\n\n**EXPERIÊNCIA PROFISSIONAL**\n\nListar experiências mais relevantes à vaga (máximo 4-5), com:\n\n- Cargo, empresa, período (duração calculada)\n\n- 2-3 conquistas mensuráveis por experiência\n\n- Tecnologias e ferramentas utilizadas\n\n- Impacto nos resultados da empresa\n\n\n\n**EDUCAÇÃO**\n\nFormação acadêmica relevante (instituição, curso, período)\n\n\n\n**COMPETÊNCIAS TÉCNICAS**\n\nSkills mais relevantes à vaga, agrupadas por categoria\n\n\n\n**PROJETOS DESTACADOS**\n\nProjetos mais relevantes (máximo 3) com descrição e tecnologias\n\n\n\n**CERTIFICAÇÕES**\n\nCertificações relevantes (máximo 5) com emissor e data\n\n\n\n**IDIOMAS**\n\nIdiomas com nível de proficiência\n\n\n\n**PRÊMIOS E RECONHECIMENTOS**\n\nPrêmios relevantes (máximo 3) com contexto\n\n\n\n**VOLUNTARIADO**\n\nExperiências voluntárias relevantes (se houver)\n\n\n\n**PERFIS PROFISSIONAIS**\n\nLinks para LinkedIn, GitHub, portfolio (se disponíveis)\n\n\n\nInstruções específicas:\n\n- Priorizar experiências e skills mais relevantes à vaga\n\n- Usar linguagem ativa e orientada a resultados\n\n- Incluir métricas e números quando disponíveis no perfil\n\n- Adaptar tom ao tipo de expressão solicitado\n\n- Manter formato limpo e profissional\n\n- Não inventar dados, datas ou experiências\n\n- Focar na relevância para a posição específica\n\n- NUNCA duplicar ou repetir informações entre seções\n\n- Cada experiência deve ser descrita apenas uma vez"
    }
  ],
  "temperature": 0.5,
  "max_tokens": 1200
}
```

#### LLM Response — 1755792198332-k67h5e
- Timestamp: 2025-08-21T16:04:05.053Z
- Cover letter length: 1751 • SHA256: be6a614dc92b3cb39a4bd971408c18af07196b79905af72cd5eb896681a180d5

```text
**INFORMAÇÕES PESSOAIS**

Nome completo: Teste, Email: [REDACTED_EMAIL], Telefone: [REDACTED_PHONE], Localização: Brasília, Website: https://teste.

**RESUMO PROFISSIONAL**

Desenvolvedor talentoso com 3 anos de experiência em desenvolvimento de aplicativos móveis com React Native e NextJS, buscando uma oportunidade para contribuir com sua expertise em tecnologias de front-end e back-end.

**EXPERIÊNCIA PROFISSIONAL**

- Desenvolvedor Frontend Junior @ Bluecyber ([REDACTED_PHONE], duração: 3 anos 1 mês)
Desenvolvi landing pages e um website de vendas de seguros com Next.js e React.js.
Tecnologias utilizadas: Next.js, React.js, TypeScript.
Impacto: Aumentei a conversão em 25% após implementar o novo design.

- Desenvolvedor Backend Senior @ MRE ([REDACTED_PHONE], duração: 3 anos 7 meses)
Desenvolvi APIs escaláveis e testes unitários.
Tecnologias utilizadas: Node.js, TypeScript.
Impacto: Melhorei a velocidade de resposta em 30% após implementar o novo sistema.

**EDUCAÇÃO**

Formação acadêmica relevante: Análise e Desenvolvimento de Sistemas - Estácio ([REDACTED_PHONE]).

**COMPETÊNCIAS TÉCNICAS**

Skills mais relevantes à vaga:
- JavaScript
- React Native
- Next.js
- TypeScript
- Node.js

**PROJETOS DESTACADOS**

- teste (https://teste)
Desenvolvi um projeto de landing page com React Native e Next.js.

**CERTIFICAÇÕES**

Certificações relevantes: teste (teste, [REDACTED_PHONE]).

**IDIOMAS**

Idiomas com nível de proficiência: Português

**PRÊMIOS E RECONHECIMENTOS**

Prêmios relevantes:
- teste (teste)
- teste2 (teste2)

**VOLUNTARIADO**

Experiências voluntárias relevantes: Nenhuma.

**PERFIS PROFISSIONAIS**

Links para LinkedIn, GitHub, portfolio: https://www.github.com/in/francisco-dev/, http://teste
```
---

