#!/usr/bin/env node

import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

import { getAuthenticatedClient } from "./gmail-auth.js";
import { GmailService } from "./gmail-service.js";
import { logger } from "./logger.js";
import { extractCoverLetter } from "./markdown-parser.js";

function parseArgs(): {
  markdownPath: string;
  to?: string;
  from?: string;
  subject?: string;
  body?: string;
  resumePath?: string;
} {
  const args = process.argv.slice(2);
  const result: {
    markdownPath: string;
    to?: string;
    from?: string;
    subject?: string;
    body?: string;
    resumePath?: string;
  } = {
    markdownPath: "",
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--to" && args[i + 1]) {
      result.to = args[++i];
    } else if (arg === "--from" && args[i + 1]) {
      result.from = args[++i];
    } else if (arg === "--subject" && args[i + 1]) {
      result.subject = args[++i];
    } else if (arg === "--body" && args[i + 1]) {
      result.body = args[++i];
    } else if (arg === "--resume" && args[i + 1]) {
      result.resumePath = args[++i];
    } else if (!arg.startsWith("--") && !result.markdownPath) {
      result.markdownPath = arg;
    }
  }

  return result;
}

async function main() {
  logger.info("=== Iniciando email-sender ===", {
    nodeVersion: process.version,
    platform: process.platform,
    cwd: process.cwd(),
    timestamp: new Date().toISOString(),
  });

  const args = parseArgs();
  logger.debug("Argumentos parseados", {
    markdownPath: args.markdownPath,
    to: args.to ?? null,
    hasSubject: !!args.subject,
    hasBody: !!args.body,
    hasResume: !!args.resumePath,
  });

  if (!args.markdownPath) {
    logger.error("Caminho do arquivo markdown não fornecido");
    logger.info(
      'Uso: npm run dev <caminho-do-markdown> [--to email@example.com] [--from email@example.com] [--subject "Assunto"]',
    );
    logger.info(
      'Exemplo: npm run dev cover-letter.md --to recrutador@empresa.com --from seu-email@gmail.com --subject "Candidatura - Desenvolvedor"',
    );
    process.exit(1);
  }

  let markdownContent: string;
  try {
    const filePath = path.resolve(args.markdownPath);
    markdownContent = readFileSync(filePath, "utf8");
    logger.info("Arquivo lido", { path: filePath });
  } catch (error) {
    logger.error("Erro ao ler arquivo", { path: args.markdownPath, error });
    process.exit(1);
  }

  logger.debug("Extraindo cover letter do markdown...", {
    markdownLength: markdownContent.length,
  });

  const coverLetter = extractCoverLetter(markdownContent);
  if (!coverLetter?.content) {
    logger.error("Não foi possível extrair a cover letter do markdown", {
      markdownLength: markdownContent.length,
      markdownPreview: markdownContent.slice(0, 200),
    });
    logger.info(
      "Formatos suportados: seção com título, bloco de código, ou conteúdo após Assunto:",
    );
    process.exit(1);
  }

  logger.info("Cover letter extraída com sucesso", {
    subject: coverLetter.subject,
    recipientEmail: coverLetter.recipientEmail,
    recipientName: coverLetter.recipientName ?? null,
    contentLength: coverLetter.content.length,
    contentPreview: coverLetter.content.slice(0, 100) + "...",
  });

  logger.info("Iniciando autenticação com Gmail...");
  const auth = await getAuthenticatedClient();
  logger.debug("Cliente autenticado obtido");

  const gmailService = new GmailService(auth);
  logger.debug("Serviço Gmail criado");

  const fromEmail = args.from ?? "jhonatas.fender@gmail.com";

  if (args.from) {
    logger.info("Email remetente fornecido via argumento", {
      fromEmail,
    });
  } else {
    logger.info("Usando email remetente padrão", {
      fromEmail,
    });
  }

  logger.debug("Determinando email destinatário...");
  const to = args.to ?? coverLetter.recipientEmail;
  if (!to) {
    logger.error("Email do destinatário não fornecido", {
      hasArgTo: !!args.to,
      hasMarkdownTo: !!coverLetter.recipientEmail,
    });
    logger.info("Use --to email@example.com ou inclua no markdown: Para: email@example.com");
    process.exit(1);
  }

  logger.info("Email destinatário determinado", {
    to,
    source: args.to ? "argumento CLI" : "markdown",
  });

  logger.debug("Processando caminho do currículo...");
  let resumePath = args.resumePath;
  if (resumePath) {
    const resolvedResumePath = path.resolve(resumePath);
    logger.debug("Currículo especificado manualmente", {
      original: resumePath,
      resolved: resolvedResumePath,
    });
    if (!existsSync(resolvedResumePath)) {
      logger.error("Arquivo de currículo não encontrado", {
        path: resolvedResumePath,
        original: resumePath,
        cwd: process.cwd(),
      });
      process.exit(1);
    }
    resumePath = resolvedResumePath;
    logger.info("Currículo encontrado", { path: resumePath });
  } else {
    const defaultResumePath = path.join(
      process.cwd(),
      "curriculum",
      "Jônatas Rodrigues Carvalho Turibio - PT-br - PHP.pdf",
    );
    logger.debug("Verificando currículo padrão", { path: defaultResumePath });
    if (existsSync(defaultResumePath)) {
      resumePath = defaultResumePath;
      logger.info("Usando currículo padrão", { path: resumePath });
    } else {
      logger.debug("Currículo padrão não encontrado, email será enviado sem anexo", {
        searchedPath: defaultResumePath,
      });
    }
  }

  logger.info("Iniciando envio de email", {
    to,
    fromEmail,
    subject: args.subject ?? coverLetter.subject,
    hasResume: !!resumePath,
    resumePath: resumePath ?? null,
    hasCustomBody: !!args.body,
  });

  try {
    await gmailService.sendCoverLetter(coverLetter, {
      to,
      fromEmail,
      subject: args.subject ?? coverLetter.subject,
      body: args.body,
      resumePath,
    });
    logger.info("Processo concluído com sucesso");
  } catch (error) {
    logger.error("Erro ao enviar email", {
      error: error instanceof Error ? error.message : String(error),
      errorType: error instanceof Error ? error.constructor.name : typeof error,
      stack: error instanceof Error ? error.stack : undefined,
      to,
      fromEmail,
      timestamp: new Date().toISOString(),
    });
    process.exit(1);
  }
}

try {
  await main();
} catch (error: unknown) {
  logger.error("Erro fatal", { error });
  process.exit(1);
}
