import { readFileSync } from "node:fs";
import path from "node:path";

import axios, { type AxiosInstance } from "axios";
import type { google } from "googleapis";

import { logger } from "./logger.js";
import type { CoverLetterData } from "./markdown-parser.js";

type OAuth2Client = InstanceType<typeof google.auth.OAuth2>;

export class GmailService {
  private axiosInstance: AxiosInstance;
  private auth: OAuth2Client;

  constructor(auth: OAuth2Client) {
    this.auth = auth;
    this.axiosInstance = axios.create({
      baseURL: "https://gmail.googleapis.com/gmail/v1",
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.setupAuthInterceptor();
  }

  private setupAuthInterceptor(): void {
    this.axiosInstance.interceptors.request.use(
      async (config) => {
        const credentials = await this.auth.getAccessToken();
        if (credentials.token) {
          config.headers.Authorization = `Bearer ${credentials.token}`;
        }
        return config;
      },
      (error) => {
        const errorObj = error instanceof Error ? error : new Error(String(error));
        return Promise.reject(errorObj);
      },
    );
  }

  async sendCoverLetter(
    coverLetter: CoverLetterData,
    options: {
      to: string;
      fromEmail: string;
      subject?: string;
      body?: string;
      resumePath?: string;
    },
  ): Promise<void> {
    const { to, fromEmail, subject, body, resumePath } = options;

    logger.info("Preparando envio de email", {
      to,
      fromEmail,
      hasSubject: !!subject,
      hasCustomBody: !!body,
      hasResume: !!resumePath,
    });

    const subjectLine = subject ?? coverLetter.subject ?? "Carta de Apresentação";
    const bodyText = body ?? coverLetter.content;

    logger.debug("Conteúdo do email preparado", {
      subject: subjectLine,
      bodyLength: bodyText.length,
      resumePath: resumePath ?? null,
    });

    const boundary = `----=_Part_0_${Date.now()}`;
    const messageParts = [
      `To: ${to}`,
      `From: ${fromEmail}`,
      `Subject: ${subjectLine}`,
      "MIME-Version: 1.0",
      `Content-Type: multipart/mixed; boundary="${boundary}"`,
      "",
      `--${boundary}`,
      "Content-Type: text/plain; charset=utf-8",
      "Content-Transfer-Encoding: 7bit",
      "",
      bodyText,
    ];

    if (resumePath) {
      logger.debug("Anexando currículo", { resumePath });
      try {
        const resumeBuffer = readFileSync(resumePath);
        const resumeBase64 = resumeBuffer.toString("base64");
        const resumeFilename = path.basename(resumePath);

        logger.debug("Currículo processado", {
          filename: resumeFilename,
          sizeBytes: resumeBuffer.length,
          sizeBase64: resumeBase64.length,
        });

        const encodedFilename = encodeURIComponent(resumeFilename);
        const contentDisposition = `Content-Disposition: attachment; filename="${resumeFilename}"; filename*=UTF-8''${encodedFilename}`;

        messageParts.push(
          "",
          `--${boundary}`,
          "Content-Type: application/pdf",
          contentDisposition,
          "Content-Transfer-Encoding: base64",
          "",
          resumeBase64,
        );
      } catch (error) {
        logger.error("Erro ao processar arquivo de currículo", {
          resumePath,
          error: error instanceof Error ? error.message : String(error),
        });
        throw error;
      }
    }

    messageParts.push("", `--${boundary}--`);

    const rawMessage = messageParts.join("\n");
    logger.debug("Mensagem raw montada", {
      messageLength: rawMessage.length,
      partsCount: messageParts.length,
    });

    const encodedMessage = Buffer.from(rawMessage)
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    logger.debug("Mensagem codificada", {
      encodedLength: encodedMessage.length,
      encoding: "base64url",
    });

    logger.info("Enviando email via Gmail API...");
    try {
      const response = await this.axiosInstance.post<{ id: string }>("/users/me/messages/send", {
        raw: encodedMessage,
      });

      logger.info("Email enviado com sucesso", {
        messageId: response.data.id,
        to,
        fromEmail,
        subject: subjectLine,
        hasAttachment: !!resumePath,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      const axiosError = axios.isAxiosError(error);

      if (axiosError && error.response?.status === 403) {
        const errorData = error.response.data as {
          error?: {
            message?: string;
            details?: {
              reason?: string;
              metadata?: {
                activationUrl?: string;
              };
            }[];
          };
        };

        const serviceDisabled = errorData.error?.details?.some(
          (detail) => detail.reason === "SERVICE_DISABLED",
        );
        const activationUrl = errorData.error?.details?.find(
          (detail) => detail.metadata?.activationUrl,
        )?.metadata?.activationUrl;

        if (serviceDisabled) {
          const message = errorData.error?.message ?? "Gmail API não está habilitada";
          const url =
            activationUrl ??
            "https://console.developers.google.com/apis/api/gmail.googleapis.com/overview";

          logger.error("Gmail API não está habilitada no projeto Google Cloud", {
            message,
            activationUrl: url,
            instruction: "Siga os passos abaixo para ativar a Gmail API",
            steps: [
              `1. Acesse: ${url}`,
              "2. Clique em 'Enable' (Habilitar)",
              "3. Aguarde alguns minutos para a mudança propagar",
              "4. Execute o script novamente",
            ],
          });

          throw new Error(`${message}. Acesse ${url} para ativar a Gmail API.`);
        }
      }

      logger.error("Erro ao enviar email via Gmail API", {
        error: error instanceof Error ? error.message : String(error),
        errorType: error instanceof Error ? error.constructor.name : typeof error,
        stack: error instanceof Error ? error.stack : undefined,
        axiosError: axiosError
          ? {
              status: error.response?.status,
              statusText: error.response?.statusText,
              data: error.response?.data,
            }
          : undefined,
        to,
        fromEmail,
        subject: subjectLine,
        timestamp: new Date().toISOString(),
      });
      throw error;
    }
  }

  async verifyConnection(): Promise<boolean> {
    try {
      const response = await this.axiosInstance.get<{ emailAddress?: string }>("/users/me/profile");
      logger.info("Conectado ao Gmail", {
        email: response.data.emailAddress,
      });
      return true;
    } catch (error) {
      const axiosError = axios.isAxiosError(error);
      logger.error("Erro ao verificar conexão", {
        error: error instanceof Error ? error.message : String(error),
        axiosError: axiosError
          ? {
              status: error.response?.status,
              statusText: error.response?.statusText,
              data: error.response?.data,
            }
          : undefined,
      });
      return false;
    }
  }

  async getProfile(): Promise<{ emailAddress: string } | null> {
    logger.debug("Solicitando perfil do usuário...");
    try {
      const response = await this.axiosInstance.get<{
        emailAddress?: string;
        messagesTotal?: number;
        threadsTotal?: number;
        historyId?: string;
      }>("/users/me/profile");

      logger.debug("Perfil obtido com sucesso", {
        hasEmailAddress: !!response.data.emailAddress,
        messagesTotal: response.data.messagesTotal,
        threadsTotal: response.data.threadsTotal,
        historyId: response.data.historyId,
      });

      return {
        emailAddress: response.data.emailAddress ?? "",
      };
    } catch (error) {
      const axiosError = axios.isAxiosError(error);
      logger.error("Erro ao obter perfil do Gmail", {
        error: error instanceof Error ? error.message : String(error),
        errorType: error instanceof Error ? error.constructor.name : typeof error,
        stack: error instanceof Error ? error.stack : undefined,
        axiosError: axiosError
          ? {
              status: error.response?.status,
              statusText: error.response?.statusText,
              data: error.response?.data,
            }
          : undefined,
      });
      return null;
    }
  }
}
