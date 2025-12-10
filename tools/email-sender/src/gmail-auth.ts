import { existsSync, readdirSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import path from "node:path";
import { createInterface } from "node:readline";

import { google } from "googleapis";

import { logger } from "./logger.js";

type OAuth2Client = InstanceType<typeof google.auth.OAuth2>;

/**
 * Scopes OAuth2 necessários:
 * - gmail.send: Permite enviar emails em nome do usuário
 * - gmail.metadata: Permite obter o perfil do usuário (emailAddress) via users.getProfile
 *   Este scope é necessário porque gmail.send sozinho não permite chamar users.getProfile.
 *   O gmail.metadata é menos invasivo que gmail.readonly, pois não permite ler o
 *   conteúdo dos emails, apenas metadata (headers, labels, histórico).
 */
const SCOPES = [
  "https://www.googleapis.com/auth/gmail.send",
  "https://www.googleapis.com/auth/gmail.metadata",
];

const TOKEN_PATH = path.join(process.cwd(), "token.json");

function loadCredentials() {
  logger.info("Iniciando carregamento de credenciais...");
  const credentialFiles = [
    path.join(process.cwd(), "client_secret.json"),
    ...(() => {
      try {
        const files = readdirSync(process.cwd());
        const matchingFiles = files
          .filter((f) => f.startsWith("client_secret_") && f.endsWith(".json"))
          .map((f) => path.join(process.cwd(), f));
        logger.debug("Arquivos de credenciais encontrados", {
          count: matchingFiles.length,
          files: matchingFiles.map((f) => path.basename(f)),
        });
        return matchingFiles;
      } catch (error) {
        logger.warn("Erro ao listar arquivos do diretório", { error });
        return [];
      }
    })(),
  ];

  logger.debug("Procurando credenciais em arquivos", {
    totalFiles: credentialFiles.length,
    files: credentialFiles.map((f) => path.basename(f)),
  });

  for (const filePath of credentialFiles) {
    if (existsSync(filePath)) {
      logger.debug("Verificando arquivo de credenciais", { file: path.basename(filePath) });
      try {
        const content = readFileSync(filePath, "utf8");
        const json = JSON.parse(content);
        const credentials = json.web ?? json.installed ?? json;

        logger.debug("Estrutura do arquivo JSON", {
          file: path.basename(filePath),
          hasWeb: !!json.web,
          hasInstalled: !!json.installed,
          hasDirectCredentials: !!(json.client_id && json.client_secret),
        });

        if (credentials.client_id && credentials.client_secret) {
          const redirectUris = credentials.redirect_uris ?? [
            "urn:ietf:wg:oauth:2.0:oob",
            "http://localhost",
          ];

          let type: string;
          if (json.web) {
            type = "web";
          } else if (json.installed) {
            type = "installed";
          } else {
            type = "direct";
          }

          logger.info("Credenciais carregadas com sucesso", {
            file: path.basename(filePath),
            clientId: String(credentials.client_id).slice(0, 20) + "...",
            redirectUris,
            type,
          });

          return {
            client_id: credentials.client_id,
            client_secret: credentials.client_secret,
            redirect_uris: redirectUris,
          };
        } else {
          logger.warn("Arquivo não contém credenciais válidas", {
            file: path.basename(filePath),
            hasClientId: !!credentials.client_id,
            hasClientSecret: !!credentials.client_secret,
          });
        }
      } catch (error) {
        logger.error("Erro ao processar arquivo de credenciais", {
          file: path.basename(filePath),
          error: error instanceof Error ? error.message : String(error),
          stack: error instanceof Error ? error.stack : undefined,
        });
      }
    } else {
      logger.debug("Arquivo não encontrado", { file: path.basename(filePath) });
    }
  }

  logger.error("Nenhum arquivo de credenciais válido encontrado", {
    searchedFiles: credentialFiles.map((f) => path.basename(f)),
  });

  throw new Error(
    "Arquivo de credenciais não encontrado. Coloque o arquivo client_secret*.json na raiz do projeto.",
  );
}

const CREDENTIALS = loadCredentials();

export async function getAuthenticatedClient(): Promise<OAuth2Client> {
  const { client_secret, client_id, redirect_uris } = CREDENTIALS;
  logger.debug("Inicializando cliente OAuth2", {
    redirectUri: redirect_uris[0],
    redirectUrisCount: redirect_uris.length,
    clientIdPrefix: String(client_id).slice(0, 20) + "...",
    hasClientSecret: !!client_secret,
  });

  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  if (existsSync(TOKEN_PATH)) {
    logger.info("Token existente encontrado, tentando reutilizar", { tokenPath: TOKEN_PATH });
    try {
      const tokenContent = readFileSync(TOKEN_PATH, "utf8");
      const token = JSON.parse(tokenContent);

      const tokenInfo = token as {
        access_token?: string;
        refresh_token?: string;
        expiry_date?: number;
        token_type?: string;
        scope?: string;
      };

      logger.debug("Token carregado", {
        hasAccessToken: !!tokenInfo.access_token,
        hasRefreshToken: !!tokenInfo.refresh_token,
        expiryDate: tokenInfo.expiry_date ? new Date(tokenInfo.expiry_date).toISOString() : null,
        tokenType: tokenInfo.token_type,
        scope: tokenInfo.scope,
      });

      const hasAllScopes = tokenInfo.scope
        ? SCOPES.every((requiredScope) => tokenInfo.scope?.includes(requiredScope))
        : false;

      if (!hasAllScopes) {
        logger.warn("Token não possui todos os scopes necessários, será necessário gerar novo", {
          requiredScopes: SCOPES,
          tokenScope: tokenInfo.scope,
        });
        logger.info("Removendo token antigo para forçar reautenticação...");
        try {
          unlinkSync(TOKEN_PATH);
          logger.info("Token antigo removido com sucesso");
        } catch (unlinkError) {
          logger.warn("Erro ao remover token antigo, continuando mesmo assim", {
            error: unlinkError instanceof Error ? unlinkError.message : String(unlinkError),
          });
        }
        return getNewToken(oAuth2Client);
      }

      oAuth2Client.setCredentials(token);
      logger.info("Token reutilizado com sucesso");
      return oAuth2Client;
    } catch (error) {
      logger.warn("Erro ao carregar token existente, gerando novo", {
        error: error instanceof Error ? error.message : String(error),
        tokenPath: TOKEN_PATH,
      });
    }
  } else {
    logger.info("Token não encontrado, será necessário gerar novo", { tokenPath: TOKEN_PATH });
  }

  return getNewToken(oAuth2Client);
}

function extractAuthCode(input: string): string {
  const trimmed = input.trim();

  try {
    const url = new URL(trimmed);
    const code = url.searchParams.get("code");
    if (code) {
      logger.info("Código extraído da URL automaticamente");
      return code;
    }
  } catch {
    logger.debug("Input não é uma URL válida, usando como código direto");
  }

  const urlPattern = /[&?]code=([^&]+)/;
  const match = urlPattern.exec(trimmed);
  if (match?.[1]) {
    logger.info("Código extraído do padrão de URL automaticamente");
    return decodeURIComponent(match[1]);
  }

  return trimmed;
}

async function getNewToken(oAuth2Client: OAuth2Client): Promise<OAuth2Client> {
  logger.info("Gerando URL de autorização...");
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
    prompt: "consent",
  });

  logger.info("URL de autorização gerada", {
    urlLength: authUrl.length,
    scopes: SCOPES,
    accessType: "offline",
  });

  logger.info("Autorize este aplicativo acessando esta URL:");
  logger.info(authUrl);
  logger.info("Digite o código de autorização ou cole a URL completa do navegador: ");

  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve, reject) => {
    rl.question("", (code) => {
      rl.close();

      logger.debug("Input de autorização recebido", {
        originalLength: code.length,
        hasWhitespace: code !== code.trim(),
        looksLikeUrl: code.includes("http") || code.includes("code="),
      });

      const cleanCode = extractAuthCode(code);

      if (!cleanCode) {
        logger.error("Código de autorização vazio ou inválido");
        reject(new Error("Código de autorização não fornecido"));
        return;
      }

      logger.info("Processando código de autorização...", {
        codeLength: cleanCode.length,
        codePrefix: cleanCode.slice(0, 10) + "...",
        timestamp: new Date().toISOString(),
        extractedFromUrl: code.includes("http") || code.includes("code="),
      });

      oAuth2Client.getToken(cleanCode, (err: Error | null, token: unknown) => {
        if (err) {
          logger.error("Erro ao recuperar o token de acesso", {
            error: err.message,
            errorType: err.constructor.name,
            stack: err.stack,
            codeLength: cleanCode.length,
            timestamp: new Date().toISOString(),
          });
          reject(err);
          return;
        }

        if (!token) {
          const error = new Error("Token não retornado pela API");
          logger.error(error.message);
          reject(error);
          return;
        }

        const tokenInfo = token as {
          access_token?: string;
          refresh_token?: string;
          expiry_date?: number;
          token_type?: string;
        };

        logger.info("Token recebido com sucesso", {
          hasAccessToken: !!tokenInfo.access_token,
          hasRefreshToken: !!tokenInfo.refresh_token,
          tokenType: tokenInfo.token_type,
          expiryDate: tokenInfo.expiry_date ? new Date(tokenInfo.expiry_date).toISOString() : null,
        });

        try {
          oAuth2Client.setCredentials(token);
          writeFileSync(TOKEN_PATH, JSON.stringify(token, null, 2));
          logger.info("Token armazenado com sucesso", {
            path: TOKEN_PATH,
            fileExists: existsSync(TOKEN_PATH),
          });
          resolve(oAuth2Client);
        } catch (writeError) {
          const error = writeError instanceof Error ? writeError : new Error(String(writeError));
          logger.error("Erro ao salvar token", {
            error: error.message,
            path: TOKEN_PATH,
          });
          reject(error);
        }
      });
    });
  });
}
