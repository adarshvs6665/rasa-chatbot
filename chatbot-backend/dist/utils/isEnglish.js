"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEnglish = void 0;
const langdetect_1 = __importDefault(require("langdetect"));
const isEnglish = (text) => {
    return (langdetect_1.default.detect(text)[0].lang != "ml");
    // return (
    //     langdetect.detect(text)[0].lang === "en" ||
    //     langdetect.detect(text)[0].lang === "so"
    // );
};
exports.isEnglish = isEnglish;
