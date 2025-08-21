import type { BuildProfileSummary } from "../../types";

export class ResumeTemplate {
  public static generateHTML(resumeContent: string, profile: BuildProfileSummary): string {
    const name = profile.basics?.name ?? "Profissional";
    const email = profile.basics?.email ?? "";
    const phone = profile.basics?.phone ?? "";
    const location = profile.basics?.location ?? "";

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
            padding: 0;
            background: white;
          }

          .header {
            border-bottom: 3px solid #3b82f6;
            padding-bottom: 20px;
            margin-bottom: 25px;
          }

          .name {
            font-size: 28px;
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 8px;
          }

          .headline {
            font-size: 16px;
            font-weight: 500;
            color: #6b7280;
            margin-bottom: 15px;
          }

          .contact-info {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            font-size: 11px;
            color: #4b5563;
          }

          .contact-item {
            display: flex;
            align-items: center;
            gap: 6px;
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
            font-size: 11px;
            line-height: 1.5;
            color: #374151;
            white-space: pre-wrap;
          }

          .experience-item, .education-item {
            margin-bottom: 15px;
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
          }

          .item-company {
            font-weight: 500;
            color: #4b5563;
          }

          .item-date {
            font-size: 10px;
            color: #6b7280;
            font-weight: 400;
          }

          .item-description {
            font-size: 10px;
            color: #374151;
            line-height: 1.4;
          }

          .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 10px;
            margin-top: 10px;
          }

          .skill-category {
            margin-bottom: 15px;
          }

          .skill-category-title {
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 8px;
            font-size: 12px;
          }

          .skill-list {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }

          .skill-item {
            background: #f3f4f6;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 10px;
            color: #374151;
          }

          .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-top: 10px;
          }

          .project-item {
            background: #f9fafb;
            padding: 12px;
            border-radius: 6px;
            border-left: 3px solid #3b82f6;
          }

          .project-title {
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 6px;
            font-size: 12px;
          }

          .project-description {
            font-size: 10px;
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
            padding: 10px;
            border-radius: 6px;
            border-left: 3px solid #0ea5e9;
          }

          .certification-name {
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 4px;
            font-size: 11px;
          }

          .certification-issuer {
            font-size: 10px;
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
            font-size: 11px;
          }

          .language-level {
            font-size: 10px;
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
            padding: 10px;
            border-radius: 6px;
            border-left: 3px solid #f59e0b;
          }

          .award-title {
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 4px;
            font-size: 11px;
          }

          .award-awarder {
            font-size: 10px;
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
            padding: 10px;
            border-radius: 6px;
            border-left: 3px solid #10b981;
          }

          .volunteer-position {
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 4px;
            font-size: 11px;
          }

          .volunteer-organization {
            font-size: 10px;
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
            font-size: 10px;
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
            <div class="headline">${profile.summary?.content ? profile.summary.content.replace(/<[^>]*>/g, "") : "Profissional Experiente"}</div>
            <div class="contact-info">
              ${email ? `<div class="contact-item">📧 ${email}</div>` : ""}
              ${phone ? `<div class="contact-item">📱 ${phone}</div>` : ""}
              ${location ? `<div class="contact-item">📍 ${location}</div>` : ""}
            </div>
          </div>

          <!-- Conteúdo do Currículo -->
          <div class="content">
            ${this.formatResumeContent(resumeContent)}
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private static formatResumeContent(content: string): string {
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
  }
}
