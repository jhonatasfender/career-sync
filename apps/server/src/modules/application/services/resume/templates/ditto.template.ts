import type { BuildProfileSummary } from "../../../types";

export const dittoTemplate = (resumeContent: string, profile: BuildProfileSummary): string => {
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
          background: #f8fafc;
          font-size: 12px;
        }

        .page {
          max-width: 210mm;
          margin: 0 auto;
          padding: 20mm;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .header {
          text-align: center;
          padding: 30px 0;
          border-bottom: 3px solid #8b5cf6;
          margin-bottom: 30px;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          border-radius: 8px 8px 0 0;
        }

        .name {
          font-size: 36px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 12px;
          letter-spacing: -0.5px;
        }

        .headline {
          font-size: 18px;
          font-weight: 500;
          color: #6b7280;
          margin-bottom: 20px;
          font-style: italic;
        }

        .contact-info {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
          font-size: 13px;
          color: #4b5563;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: white;
          border-radius: 25px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .contact-item a {
          color: #8b5cf6;
          text-decoration: none;
          font-weight: 500;
        }

        .contact-item a:hover {
          text-decoration: underline;
        }

        .summary-section {
          background: #fef3c7;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 25px;
          border-left: 4px solid #f59e0b;
        }

        .summary-title {
          font-size: 16px;
          font-weight: 600;
          color: #92400e;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .summary-content {
          font-size: 13px;
          line-height: 1.6;
          color: #78350f;
        }

        .content {
          font-size: 12px;
          line-height: 1.5;
          color: #374151;
          white-space: pre-wrap;
        }

        .section {
          margin-bottom: 25px;
          background: white;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #8b5cf6;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
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
          color: #8b5cf6;
        }

        .experience-item, .education-item {
          margin-bottom: 20px;
          padding: 15px;
          background: #f8fafc;
          border-radius: 6px;
          border-left: 3px solid #8b5cf6;
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
          background: #e5e7eb;
          padding: 4px 8px;
          border-radius: 12px;
        }

        .item-description {
          font-size: 11px;
          color: #374151;
          line-height: 1.4;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 10px;
          margin-top: 10px;
        }

        .skill-item {
          background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
          color: white;
          padding: 8px 12px;
          border-radius: 20px;
          font-size: 11px;
          text-align: center;
          font-weight: 500;
          box-shadow: 0 2px 4px rgba(139, 92, 246, 0.3);
        }

        .projects-grid {
          display: grid;
          gap: 15px;
          margin-top: 10px;
        }

        .project-item {
          background: #f0f9ff;
          padding: 15px;
          border-radius: 6px;
          border-left: 3px solid #0ea5e9;
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
          gap: 12px;
          margin-top: 10px;
        }

        .certification-item {
          background: #f0fdf4;
          padding: 12px;
          border-radius: 6px;
          border-left: 3px solid #10b981;
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
          background: #fdf2f8;
          padding: 8px 12px;
          border-radius: 6px;
          border-left: 3px solid #ec4899;
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
          background: #f3f4f6;
          padding: 8px 12px;
          border-radius: 6px;
          border-left: 3px solid #8b5cf6;
        }

        .profile-icon {
          width: 16px;
          height: 16px;
          background: #8b5cf6;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 8px;
          font-weight: 600;
        }

        .profile-link {
          color: #8b5cf6;
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
        <div class="summary-section">
          <div class="summary-title">Resumo Profissional</div>
          <div class="summary-content">${summary.replace(/<[^>]*>/g, "")}</div>
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
