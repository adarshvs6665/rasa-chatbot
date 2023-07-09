import { useEffect, useRef, useState, RefObject, SetStateAction } from "react";
import {
    AppBar,
    Avatar,
    Backdrop,
    Box,
    Button,
    Card,
    CardContent,
    CircularProgress,
    Grid,
    IconButton,
    InputAdornment,
    List,
    ListItem,
    ListItemText,
    Paper,
    Stack,
    TextField,
    Toolbar,
    Typography,
    styled,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import BotMessageComponent from "../MessageComponent/BotMessageComponent";
import UserMessageComponent from "../MessageComponent/UserMessageComponent";
import { useSendChatMutation } from "../../api-integration/useSendChatMutation";
import { config } from "../../utils/config";
import Header from "../Header/Header";
import ChatBox from "../ChatBox/ChatBox";
import SendBox from "../SendBox/SendBox";
import { isError } from "react-query";
import VoiceRecognitionButton from "../test/VoiceRecognitionButton";

type message = {
    id: string;
    sender: string;
    message: string;
    translatedMessage?: string;
    lang?: string;
};

type InputProps = {
    display: boolean;
};

const CustomChatBotUsingMUI = ({ display }: InputProps) => {
    const [messageText, setmessageText] = useState("");
    const [messages, setMessages] = useState<message[]>(
        config.chatMessageInitialTemplate
    );
    const [translateFlag, setTranslateFlag] = useState(false);
    const { mutate, isSuccess, data, isError } = useSendChatMutation();

    const messagesScrollRef: RefObject<HTMLUListElement> = useRef(null);

    // Scroll to the bottom of the container on initial load
    // useEffect(() => {
    //     if (messagesScrollRef.current) {
    //         messagesScrollRef.current.scrollTop =
    //             messagesScrollRef.current.scrollHeight;
    //     }
    // }, []);

    // Scroll to the bottom of the container whenever new messages are added
    useEffect(() => {
        if (messagesScrollRef.current) {
            messagesScrollRef.current.scrollTop =
                messagesScrollRef.current.scrollHeight;
        }

        // scroll to the bottom of the container after the bot message stops loading and displays its content
        const timer = setTimeout(() => {
            if (messagesScrollRef.current) {
                messagesScrollRef.current.scrollTop =
                    messagesScrollRef.current.scrollHeight;
            }
            //  2600 seconds delay is given to execute the scrolling because the delay is generated in 500 ms and bot loads message for 2000 second. (2500)
        }, 2600);
        return () => clearTimeout(timer);
    }, [messages]);

    useEffect(() => {
        // whenever the response is success the botReplyFunction is called after 500 ms
        // useEffect is triggered when data is changed
        if (isSuccess) {
            const timer = setTimeout(() => {
                botReplyFunction(data);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [data]);

    useEffect(() => {
        if (isError) {
            const timer = setTimeout(() => {
                botReplyFunction(config.errorMessage[0]);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isError]);

    useEffect(() => {
        console.log("current state : " + translateFlag);
    }, [translateFlag]);

    // this function updates the 'messages' variable which is rendered on the chatbox
    const botReplyFunction = ({
        message,
        sender,
        id,
        translatedMessage = "null",
        lang = "en",
    }: message) => {
        setMessages((prev) => [
            ...prev,
            {
                // id: prev[prev.length - 1].id + 1,
                id: id,
                message: !translateFlag ? message : translatedMessage,
                sender: sender,
                lang: lang,
            },
        ]);
    };

    // this function updates the'messages' variable which is rendered on the chatbox. Used to add user message
    const handleSendMessage = () => {
        setMessages((prev) => [
            ...prev,
            {
                id: prev[prev.length - 1].id + 1,
                message: messageText,
                sender: "user",
            },
        ]);
        setmessageText("");
        mutate({ message: messageText, translate: translateFlag });
    };

    const handleToggle = () => {
        setTranslateFlag(!translateFlag);
    };

    return (
        <Box
            sx={{
                width: "500px",
                display: display?"block":"none",
                margin: "1rem",
                position: "fixed",
                bottom: 42,
                right: 120,
            }}
        >
            <Stack spacing={-1}>
                {/* Heading of the Chat component  */}
                <Header handleToggle={handleToggle} />

                {/* Body of the Chat Component  */}
                <ChatBox
                    // fontSize={translateFlag?'18px':'14px'}
                    messages={messages}
                    messagesScrollRef={messagesScrollRef}
                />
            </Stack>
            {/* Component to type in message and send  */}
            <SendBox
                messageText={messageText}
                setmessageText={setmessageText}
                handleSendMessage={handleSendMessage}
            />
            {/* <VoiceRecognitionButton /> */}
        </Box>
    );
};

export default CustomChatBotUsingMUI;
