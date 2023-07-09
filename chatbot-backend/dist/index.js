"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// module imports
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const chatRouter_1 = __importDefault(require("./api/v1/route/chatRouter"));
const logger_1 = __importDefault(require("./api/v1/middlewares/logger"));
//configure env variables
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
//middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: process.env.ORIGIN,
}));
app.use(logger_1.default);
//route middlewares
app.use("/api/v1/chat", chatRouter_1.default);
// app.post("/api/v1/translate", async (req, res)=> {
//   const {text} = req.body;
//   console.log(isEnglish(text))
//   res.send(await translateToEnglish(text))
// })
//initilizing server
app.listen(PORT, () => {
    console.log(`⚡️ [server]: Server is running at http://localhost:${PORT}`);
});
