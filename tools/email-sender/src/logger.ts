import { existsSync, mkdirSync } from "node:fs";
import path from "node:path";

import winston from "winston";

const logsDir = path.join(process.cwd(), "logs");

if (!existsSync(logsDir)) {
  mkdirSync(logsDir, { recursive: true });
}

const logFile = path.join(logsDir, "email-sender.log");

export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL ?? "info",
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.errors({ stack: true }),
    winston.format.json(),
  ),
  defaultMeta: { service: "email-sender" },
  transports: [
    new winston.transports.File({ filename: logFile, level: "error" }),
    new winston.transports.File({ filename: logFile }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      level: process.env.LOG_LEVEL ?? "info",
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.printf(({ timestamp, level, message, ...meta }) => {
          const metaStr = Object.keys(meta).length > 0 ? JSON.stringify(meta, null, 2) : "";
          return `${timestamp} [${level}]: ${message}${metaStr ? "\n" + metaStr : ""}`;
        }),
      ),
    }),
  );
}
