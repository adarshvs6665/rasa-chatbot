"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatController = void 0;
const axios_1 = __importDefault(require("axios"));
const uuid_1 = require("uuid");
const translateToMalayalam_1 = __importDefault(require("../../../utils/translateToMalayalam"));
const isEnglish_1 = require("../../../utils/isEnglish");
const translateToEnglish_1 = __importDefault(require("../../../utils/translateToEnglish"));
const handleLink_1 = require("../../../utils/handleLink");
const implementNewLine_1 = require("../../../utils/implementNewLine");
const chatController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let translateFlag = req.body.translate;
    if (!translateFlag) {
        translateFlag = false;
    }
    let { message } = req.body;
    if (!(0, isEnglish_1.isEnglish)(message)) {
        message = yield (0, translateToEnglish_1.default)(message);
        console.log(message);
    }
    yield axios_1.default
        .post("http://localhost:5005/webhooks/rest/webhook", {
        message: message,
    })
        .then((rasaPrediction) => __awaiter(void 0, void 0, void 0, function* () {
        const predictedMessage = rasaPrediction.data && rasaPrediction.data.length > 0
            ? rasaPrediction.data[0].text
            : "I'm sorry, I didn't understand. Can you rephrase that?";
        const responseObj = {
            id: (0, uuid_1.v4)(),
            message: predictedMessage,
            sender: "bot",
            lang: "en",
        };
        if (translateFlag) {
            responseObj.translatedMessage = (0, implementNewLine_1.implementNewLineForHTML)(yield (0, translateToMalayalam_1.default)(predictedMessage));
            responseObj.lang = "ml";
        }
        /**
         * using the link back restore methods to beautify the normal ( english ) message
         * better option is to write a new function for this functionality
         */
        const { links, textWithoutLinks } = (0, handleLink_1.backupLinks)(responseObj.message);
        responseObj.message = (0, implementNewLine_1.implementNewLineForHTML)((0, handleLink_1.restoreLinks)(links, textWithoutLinks));
        res.status(200).json(responseObj);
    }))
        .catch((err) => {
        const predictedMessage = "I'm sorry, I didn't understand. Can you rephrase that?";
        const responseObj = {
            id: (0, uuid_1.v4)(),
            message: predictedMessage,
            sender: "bot",
            lang: "en",
        };
        res.status(400).json(responseObj);
    });
});
exports.chatController = chatController;
