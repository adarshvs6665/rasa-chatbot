export const chatBotName = "RASA";
export const config = {
    fontSize: {
        ml: "17px",
        en: "14px",
    },
    color: {
        // chatboxHeaderColor: "rgb(110, 72, 170)",
        // chatboxHeaderColor: "#3a71b6",
        chatboxHeaderColor: "#1976d2",
        // botMessageComponentColor: "rgb(110, 72, 170)",
        // botMessageComponentColor: "#3a71b6",
        botMessageComponentColor: "#1976d2",
        userMessageComponentColor: "rgb(255, 255, 255)",
        // chatBoxHeaderSwitchButtonBgColor: "#D7BDE2",
        chatBoxHeaderSwitchButtonBgColor: "rgb(174, 214, 241)",
    },
    errorMessage: [
        {
            id: "926674cd-3870-ig46-8cb6-e2628354e35",
            message: "Something went wrong. Please try again later.",
            sender: "bot",
            lang: "en",
        },
    ],
    chatMessageInitialTemplate: [
        {
            id: "423674cd-3870-4e46-8cb6-e26d18354e3e",
            message: `Hi welcome. Ask me anything about UCEK!`,
            sender: "bot",
            lang: "en",
        },
    ],
};
