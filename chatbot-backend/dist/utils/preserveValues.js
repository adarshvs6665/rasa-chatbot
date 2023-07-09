"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restoreValues = exports.preserveValues = void 0;
const preserveValues = (text) => {
    const values = [];
    const textWithoutValues = text.replace(/<preserve>(.*?)<\/preserve>/gi, (match, value) => {
        console.log(value);
        values.push(value);
        return "<_>";
    });
    return { values, textWithoutValues };
};
exports.preserveValues = preserveValues;
const restoreValues = (values, text) => {
    const restoredText = text.replace(/<_>+/g, () => {
        const value = values.shift();
        return `<span style="font-size: 14px;">${value}</span>`;
    });
    return restoredText;
};
exports.restoreValues = restoreValues;
