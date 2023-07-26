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
const translateToEnglish = (input) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, translate_google_1.default)(input, { to: 'en' })
        .then((res) => {
        console.log(res);
        return (res);
    })
        .catch((err) => {
        return config_1.config.translationErrorCode;
    });
});
exports.default = translateToEnglish;
