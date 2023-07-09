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
const translate_google_1 = __importDefault(require("translate-google"));
const config_1 = require("./config");
const handleLink_1 = require("./handleLink");
const preserveValues_1 = require("./preserveValues");
const translateToMalayalam = (input) => __awaiter(void 0, void 0, void 0, function* () {
    const { links, textWithoutLinks } = (0, handleLink_1.backupLinks)(input);
    const { values, textWithoutValues } = (0, preserveValues_1.preserveValues)(textWithoutLinks);
    const outputWithoutLinksAndValues = yield (0, translate_google_1.default)(textWithoutValues, {
        to: "ml",
    })
        .then((res) => {
        return res;
    })
        .catch((err) => {
        return config_1.config.translationErrorCode;
    });
    const outputWithoutLinks = (0, preserveValues_1.restoreValues)(values, outputWithoutLinksAndValues);
    const output = (0, handleLink_1.restoreLinks)(links, outputWithoutLinks);
    return output;
});
exports.default = translateToMalayalam;
