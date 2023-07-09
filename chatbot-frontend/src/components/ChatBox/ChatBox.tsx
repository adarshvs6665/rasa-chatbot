import { List } from "@mui/material";
import React, { RefObject } from "react";
import BotMessageComponent from "../MessageComponent/BotMessageComponent";
import UserMessageComponent from "../MessageComponent/UserMessageComponent";
import { isEnglish } from "../../utils/isEnglish";

type message = {
    id: string;
    sender: string;
    message: string;
    lang?: string;
};

type Props = {
    messages: message[];
    messagesScrollRef: RefObject<HTMLUListElement>;
};

const ChatBox = ({ messages, messagesScrollRef }: Props) => {
    return (
        <List
            ref={messagesScrollRef}
            sx={{
                backgroundColor: "rgb(245, 248, 251)",
                minHeight: "700px",
                maxHeight: "700px", // set a maximum height
                overflowY: "scroll", // enable vertical scrolling
            }}
        >
            {messages.map((e: message, key) => {
                if (e.sender == "bot") {
                    return (
                        <BotMessageComponent
                            message={e.message}
                            fontFlag={e.lang == "ml"}
                            key={key}
                        />
                    );
                } else if (e.sender == "user") {
                    return (
                        <UserMessageComponent
                            message={e.message}
                            fontFlag={!isEnglish(e.message)}
                            key={key}
                        />
                    );
                }
            })}
        </List>
    );
};

export default ChatBox;
