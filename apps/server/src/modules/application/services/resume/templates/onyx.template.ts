import type { BuildProfileSummary } from "../../../types";

export const onyxTemplate = (resumeContent: string, profile: BuildProfileSummary): string => {
  const name = profile.basics?.name ?? "Profissional";
  const email = profile.basics?.email ?? "";
  const phone = profile.basics?.phone ?? "";
  const location = profile.basics?.location ?? "";
  const headline = profile.basics?.headline ?? "";
  const summary = profile.summary?.content ?? "";

  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Currículo - ${name}</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #1f2937;
          background: white;
          font-size: 12px;
        }

        .page {
          max-width: 210mm;
          margin: 0 auto;
          padding: 20mm;
          background: white;
        }

        .header {
          border-bottom: 3px solid #3b82f6;
          padding-bottom: 20px;
          margin-bottom: 25px;
        }

        .name {
          font-size: 32px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .headline {
          font-size: 18px;
          font-weight: 500;
          color: #6b7280;
          margin-bottom: 15px;
        }

        .contact-info {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          font-size: 12px;
          color: #4b5563;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .contact-item a {
          color: #3b82f6;
          text-decoration: none;
        }

        .summary {
          margin-bottom: 25px;
          font-size: 13px;
          line-height: 1.6;
          color: #374151;
        }

        .section {
          margin-bottom: 25px;
        }

        .section-title {
          font-size: 16px;
          font-weight: 600;
          color: #1f2937;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 8px;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .content {
          font-size: 12px;
          line-height: 1.5;
          color: #374151;
          white-space: pre-wrap;
        }

        .experience-item, .education-item {
          margin-bottom: 20px;
        }

        .item-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .item-title {
          font-weight: 600;
          color: #1f2937;
          font-size: 14px;
        }

        .item-company {
          font-weight: 500;
          color: #4b5563;
          font-size: 13px;
        }

        .item-date {
          font-size: 11px;
          color: #6b7280;
          font-weight: 400;
        }

        .item-description {
          font-size: 11px;
          color: #374151;
          line-height: 1.4;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 10px;
          margin-top: 10px;
        }

        .skill-item {
          background: #f3f4f6;
          padding: 6px 10px;
          border-radius: 4px;
          font-size: 11px;
          color: #374151;
          text-align: center;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin-top: 10px;
        }

        .project-item {
          background: #f9fafb;
          padding: 15px;
          border-radius: 6px;
          border-left: 3px solid #3b82f6;
        }

        .project-title {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 8px;
          font-size: 13px;
        }

        .project-description {
          font-size: 11px;
          color: #6b7280;
          line-height: 1.4;
        }

        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 12px;
          margin-top: 10px;
        }

        .certification-item {
          background: #f0f9ff;
          padding: 12px;
          border-radius: 6px;
          border-left: 3px solid #0ea5e9;
        }

        .certification-name {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
          font-size: 12px;
        }

        .certification-issuer {
          font-size: 11px;
          color: #6b7280;
        }

        .languages-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 10px;
        }

        .language-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .language-name {
          font-weight: 500;
          color: #1f2937;
          font-size: 12px;
        }

        .language-level {
          font-size: 11px;
          color: #6b7280;
        }

        .awards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 12px;
          margin-top: 10px;
        }

        .award-item {
          background: #fef3c7;
          padding: 12px;
          border-radius: 6px;
          border-left: 3px solid #f59e0b;
        }

        .award-title {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
          font-size: 12px;
        }

        .award-awarder {
          font-size: 11px;
          color: #6b7280;
        }

        .volunteer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 12px;
          margin-top: 10px;
        }

        .volunteer-item {
          background: #ecfdf5;
          padding: 12px;
          border-radius: 6px;
          border-left: 3px solid #10b981;
        }

        .volunteer-position {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
          font-size: 12px;
        }

        .volunteer-organization {
          font-size: 11px;
          color: #6b7280;
        }

        .profiles-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 10px;
        }

        .profile-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
        }

        .profile-icon {
          width: 16px;
          height: 16px;
          background: #3b82f6;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 8px;
          font-weight: 600;
        }

        .profile-link {
          color: #3b82f6;
          text-decoration: none;
        }

        @media print {
          body {
            -webkit-print-color-adjust: exact;
            color-adjust: exact;
          }
        }
      </style>
    </head>
    <body>
      <div class="page">
        <!-- Header -->
        <div class="header">
          <div class="name">${name}</div>
          ${headline ? `<div class="headline">${headline}</div>` : ""}
          <div class="contact-info">
            ${email ? `<div class="contact-item">📧 <a href="mailto:${email}">${email}</a></div>` : ""}
            ${phone ? `<div class="contact-item">📱 <a href="tel:${phone}">${phone}</a></div>` : ""}
            ${location ? `<div class="contact-item">📍 ${location}</div>` : ""}
          </div>
        </div>

        ${
          summary
            ? `
        <!-- Resumo -->
        <div class="summary">
          ${summary.replace(/<[^>]*>/g, "")}
        </div>
        `
            : ""
        }

        <!-- Conteúdo do Currículo -->
        <div class="content">
          ${formatResumeContent(resumeContent)}
        </div>
      </div>
    </body>
    </html>
  `;
};

const formatResumeContent = (content: string): string => {
  return content
    .replace(/\*\*(.*?)\*\*/g, '<div class="section-title">$1</div>')
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/\n\n+/g, "</p><p>")
    .replace(/\n/g, "<br>")
    .replace(/^/, "<p>")
    .replace(/$/, "</p>")
    .replace(/<p><\/p>/g, "")
    .replace(/^<\/p>/, "")
    .replace(/<p>$/g, "");
};
