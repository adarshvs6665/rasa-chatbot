// module imports
import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import chatRouter from "./api/v1/route/chatRouter";
import translateToMalayalam from "./utils/translateToMalayalam";
import translateToEnglish from "./utils/translateToEnglish";
import { isEnglish } from "./utils/isEnglish";
import logger from "./api/v1/middlewares/logger";

//configure env variables
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3001;

//middlewares
app.use(express.json());

app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

app.use(logger);

//route middlewares
app.use("/api/v1/chat", chatRouter);

// app.post("/api/v1/translate", async (req, res)=> {
//   const {text} = req.body;
//   console.log(isEnglish(text))
//   res.send(await translateToEnglish(text))
// })

//initilizing server
app.listen(PORT, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${PORT}`);
});
