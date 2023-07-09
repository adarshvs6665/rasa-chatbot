"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function getCurrentTimestamp() {
    const currentDate = new Date();
    return currentDate.toISOString();
}
const logger = (req, res, next) => {
    const message = req.body.message;
    const translateFlag = req.body.translate;
    if (message) {
        const logEntry = `${req.protocol.toString().toUpperCase()} : ${req.method} \t\t ${getCurrentTimestamp()}\t\t translate : ${translateFlag}\t\t query: ${message}\n`;
        fs_1.default.appendFile("logs/log.txt", logEntry, "utf8", (err) => {
            if (err) {
                console.error("Error writing to file:", err);
            }
        });
    }
    next();
};
exports.default = logger;
