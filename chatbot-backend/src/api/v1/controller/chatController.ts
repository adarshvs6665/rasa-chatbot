import axios from "axios";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import translateToMalayalam from "../../../utils/translateToMalayalam";
import { isEnglish } from "../../../utils/isEnglish";
import translateToEnglish from "../../../utils/translateToEnglish";
import { backupLinks, restoreLinks } from "../../../utils/handleLink";
import { implementNewLineForHTML } from "../../../utils/implementNewLine";

type responseObjType = {
  id: string;
  message: string;
  sender: string;
  translatedMessage?: string;
  lang: string;
};
export const chatController = async (req: Request, res: Response) => {
  let translateFlag: boolean = req.body.translate;
  if (!translateFlag) {
    translateFlag = false;
  }
  let { message } = req.body;
  if (!isEnglish(message)) {
    message = await translateToEnglish(message);
    console.log(message);
  }
  await axios
    .post("http://localhost:5005/webhooks/rest/webhook", {
      message: message,
    })
    .then(async (rasaPrediction: any) => {
      const predictedMessage =
        rasaPrediction!.data && rasaPrediction!.data.length > 0
          ? rasaPrediction!.data[0].text
          : "I'm sorry, I didn't understand. Can you rephrase that?";
      const responseObj: responseObjType = {
        id: uuidv4(),
        message: predictedMessage,
        sender: "bot",
        lang: "en",
      };
      if (translateFlag) {
        responseObj.translatedMessage = implementNewLineForHTML(
          await translateToMalayalam(predictedMessage)
        );
        responseObj.lang = "ml";
      }
      /**
       * using the link back restore methods to beautify the normal ( english ) message
       * better option is to write a new function for this functionality
       */
      const { links, textWithoutLinks } = backupLinks(responseObj.message);
      responseObj.message = implementNewLineForHTML(
        restoreLinks(links, textWithoutLinks)
      );
      res.status(200).json(responseObj);
    })
    .catch((err: any) => {
      const predictedMessage =
        "I'm sorry, I didn't understand. Can you rephrase that?";
      const responseObj: responseObjType = {
        id: uuidv4(),
        message: predictedMessage,
        sender: "bot",
        lang: "en",
      };
      res.status(400).json(responseObj);
    });
};
