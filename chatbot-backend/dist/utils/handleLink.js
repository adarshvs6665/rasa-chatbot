"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restoreLinks = exports.backupLinks = void 0;
const backupLinks = (text) => {
    const links = [];
    const textWithoutLinks = text.replace(/<a\b[^>]*>(.*?)<\/a>/gi, (match, link) => {
        links.push(link);
        return "<>";
    });
    return { links, textWithoutLinks };
};
exports.backupLinks = backupLinks;
const restoreLinks = (links, text) => {
    const restoredText = text.replace(/<>+/g, () => {
        const link = links.shift();
        return `<a style="font-size: 16px;color: orange;font-weight: 600;" href="${link}" target="_blank">${link}</a>`;
    });
    return restoredText;
};
exports.restoreLinks = restoreLinks;
