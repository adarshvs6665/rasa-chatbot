import { Request, Response, NextFunction } from "express";
import fs from "fs";

function getCurrentTimestamp(): string {
  const currentDate = new Date();
  return currentDate.toISOString();
}

const logger = (req: Request, res: Response, next: NextFunction) => {
  const message = req.body.message;
  const translateFlag = req.body.translate;

  if (message) {
    const logEntry = `${req.protocol.toString().toUpperCase()} : ${req.method} \t\t ${getCurrentTimestamp()}\t\t translate : ${translateFlag}\t\t query: ${message}\n`;

    fs.appendFile("logs/log.txt", logEntry, "utf8", (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      }
    });
  }

  next();
};

export default logger;
