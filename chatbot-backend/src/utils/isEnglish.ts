import langdetect from "langdetect";

export const isEnglish = (text: string) => {
    return (
        langdetect.detect(text)[0].lang != "ml"
    );
    // return (
    //     langdetect.detect(text)[0].lang === "en" ||
    //     langdetect.detect(text)[0].lang === "so"
    // );
};