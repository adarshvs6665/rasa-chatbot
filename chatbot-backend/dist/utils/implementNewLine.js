"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.implementNewLineForHTML = void 0;
const implementNewLineForHTML = (text) => {
    return text.split("\n").join("<br>");
};
exports.implementNewLineForHTML = implementNewLineForHTML;
