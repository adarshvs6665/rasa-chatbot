import { useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";
import { Box, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";

type Props = {
  messageText: string;
  setmessageText: React.Dispatch<React.SetStateAction<string>>;
  handleSendMessage: () => void;
};

const SendBox = ({ messageText, setmessageText, handleSendMessage }: Props) => {
  const [micState, setMicState] = useState(false);
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result: any) => {
      console.log(result);
      setmessageText(result);
    },
  });
  console.log(listening);

  const handleOnMicClick = () => {
    if (!micState) {
      listen();
      console.log("Started listening...");
    } else {
      console.log("Stopped listening...");
      stop();
    }
    setMicState(!micState);
  };

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <TextField
        variant="outlined"
        value={messageText}
        onChange={(event) => setmessageText(event.target.value)}
        onKeyPress={(event) => {
          if (event.key === "Enter" && messageText.replaceAll(" ", "") !== "") {
            handleSendMessage();
          }
        }}
        placeholder="Ask me something..."
        sx={{
          backgroundColor: "white",
          width: "100%",
          borderRadius: "0rem 0rem 2rem 2rem",
          "& fieldset": { border: "none" },
          fontFamily: "monospace",
        }}
        autoComplete="off"
        inputProps={{
          sx: {
            fontFamily: "monospace",
            fontSize: "14px",
          },
          style: { width: "380px" },
        }}
      ></TextField>

      <MicIcon
        onClick={handleOnMicClick}
        sx={{
          position: "absolute",
          top: "50%",
          right: "13%",
          fontSize: "25px",
          transform: "translateY(-50%)",
          color: micState ? "rgb(244, 67, 54)" : "rgb(74, 74, 74)",
          "&:hover": {
            opacity: "0.7",
            cursor: "pointer",
          },
        }}
      />

      <SendIcon
        onClick={() => {
          if (micState) {
            handleOnMicClick();
          }
          handleSendMessage();
        }}
        sx={{
          position: "absolute",
          top: "50%",
          right: "4%",
          transform: "translateY(-50%)",
          color: "rgb(74, 74, 74)",
          "&:hover": {
            opacity: "0.7",
            cursor: "pointer",
          },
        }}
      />
    </Box>
  );
};

export default SendBox;
