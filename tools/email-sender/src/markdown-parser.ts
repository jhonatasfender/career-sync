import { logger } from "./logger.js";

export type CoverLetterData = {
  subject?: string;
  content: string;
  recipientEmail?: string;
  recipientName?: string;
};

export function extractCoverLetter(markdown: string): CoverLetterData | null {
  logger.debug("Iniciando extração de cover letter do markdown", {
    markdownLength: markdown.length,
  });
  const data: CoverLetterData = {
    content: "",
  };

  const sectionPatterns = [
    /^#+\s*(?:cover\s+letter|carta\s+de\s+apresentação)\s*$/im,
    /^##\s*(?:cover\s+letter|carta\s+de\s+apresentação)\s*$/im,
  ];

  for (const pattern of sectionPatterns) {
    const execResult = pattern.exec(markdown);
    if (execResult) {
      logger.debug("Encontrada seção com título", {
        pattern: pattern.toString(),
        matchIndex: execResult.index,
      });
      const matchIndex = execResult.index;
      const startIndex = matchIndex + execResult[0].length;
      const remaining = markdown.slice(startIndex);

      const nextSectionPattern = /^#+\s+/m;
      const nextSectionExec = nextSectionPattern.exec(remaining);
      const endIndex = nextSectionExec?.index ?? remaining.length;
      const content = remaining.slice(0, endIndex).trim();

      if (content) {
        logger.debug("Conteúdo extraído da seção", {
          contentLength: content.length,
        });
        return parseCoverLetterContent(content, data);
      }
    }
  }

  const codeBlockPatterns = [
    /```(?:cover-letter|carta|coverletter)\s*\n([\S\s]*?)```/i,
    /```(?:cover-letter|carta|coverletter)\s*([\S\s]*?)```/i,
  ];

  for (const pattern of codeBlockPatterns) {
    const execResult = pattern.exec(markdown);
    if (execResult?.[1]) {
      logger.debug("Encontrado bloco de código cover-letter", {
        pattern: pattern.toString(),
      });
      const content = execResult[1].trim();
      if (content) {
        logger.debug("Conteúdo extraído do bloco de código", {
          contentLength: content.length,
        });
        return parseCoverLetterContent(content, data);
      }
    }
  }

  const subjectPattern = /(?:assunto|subject):\s*(.+?)(?:\n\n|\n#|$)/is;
  const subjectExec = subjectPattern.exec(markdown);

  if (subjectExec?.[1]) {
    logger.debug("Encontrado assunto no início do markdown");
    data.subject = subjectExec[1].trim();
    const subjectIndex = markdown.indexOf(subjectExec[0]) + subjectExec[0].length;
    const remaining = markdown.slice(subjectIndex);

    const nextSectionPattern = /^#+\s+/m;
    const nextSectionExec = nextSectionPattern.exec(remaining);
    const endIndex = nextSectionExec?.index ?? remaining.length;
    const content = remaining.slice(0, endIndex).trim();

    if (content) {
      logger.debug("Conteúdo extraído após assunto", {
        contentLength: content.length,
      });
      data.content = content;
      return data;
    }
  }

  logger.debug("Tentando extrair conteúdo sem formato específico...");
  const cleaned = markdown
    .replace(/^---[\S\s]*?---\s*/m, "")
    .replace(/^#+\s+.*$/m, "")
    .trim();

  if (cleaned.length > 100) {
    logger.debug("Conteúdo limpo extraído", {
      cleanedLength: cleaned.length,
    });
    return parseCoverLetterContent(cleaned, data);
  }

  logger.warn("Não foi possível extrair cover letter do markdown", {
    originalLength: markdown.length,
    cleanedLength: cleaned.length,
  });

  return null;
}

function parseCoverLetterContent(content: string, data: CoverLetterData): CoverLetterData {
  logger.debug("Parseando conteúdo da cover letter", {
    contentLength: content.length,
  });

  const subjectPattern = /^(?:assunto|subject):\s*(.+?)$/im;
  const subjectExec = subjectPattern.exec(content);
  if (subjectExec?.[1]) {
    data.subject = subjectExec[1].trim();
    logger.debug("Assunto extraído", { subject: data.subject });
    content = content.replace(/^(?:assunto|subject):\s*.+?$/im, "").trim();
  }

  const emailPattern = /^(?:para|to|email):\s*([^\s@]+@[^\s@]+\.[^\s@]+)$/im;
  const emailExec = emailPattern.exec(content);
  if (emailExec?.[1]) {
    data.recipientEmail = emailExec[1].trim();
    logger.debug("Email destinatário extraído", { email: data.recipientEmail });
    content = content.replace(/^(?:para|to|email):\s*.+?$/im, "").trim();
  }

  const nameEmailPattern = /^(?:para|to):\s*(.+?)\s*<([^\s@]+@[^\s@]+\.[^\s@]+)>$/im;
  const nameEmailExec = nameEmailPattern.exec(content);
  if (nameEmailExec?.[1] && nameEmailExec[2]) {
    data.recipientName = nameEmailExec[1].trim();
    data.recipientEmail = nameEmailExec[2].trim();
    logger.debug("Nome e email destinatário extraídos", {
      name: data.recipientName,
      email: data.recipientEmail,
    });
    content = content.replace(/^(?:para|to):\s*.+?$/im, "").trim();
  }

  data.content = content;
  logger.debug("Parse completo", {
    hasSubject: !!data.subject,
    hasRecipientEmail: !!data.recipientEmail,
    hasRecipientName: !!data.recipientName,
    finalContentLength: data.content.length,
  });

  return data;
}
