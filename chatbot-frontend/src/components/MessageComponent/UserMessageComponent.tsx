import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { PulseLoader } from "react-spinners";
import { config } from "../../utils/config";
import imgUrl from "./demo-icon-4.png";

interface MessageProps {
  // avatarUrl: string;
  message: string;
  fontFlag: boolean;
}

const UserMessageComponent: React.FC<MessageProps> = ({
  message,
  fontFlag,
}) => {
  const avatarUrl = imgUrl;
  // const avatarUrl =
  //     "data:image/svg+xml,%3csvg viewBox='-208.5 21 100 100' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ccircle cx='-158.5' cy='71' fill='%23F5EEE5' r='50'/%3e%3cdefs%3e%3ccircle cx='-158.5' cy='71' id='a' r='50'/%3e%3c/defs%3e%3cclipPath id='b'%3e%3cuse overflow='visible' xlink:href='%23a'/%3e%3c/clipPath%3e%3cpath clip-path='url(%23b)' d='M-108.5 121v-14s-21.2-4.9-28-6.7c-2.5-.7-7-3.3-7-12V82h-30v6.3c0 8.7-4.5 11.3-7 12-6.8 1.9-28.1 7.3-28.1 6.7v14h100.1z' fill='%23E6C19C'/%3e%3cg clip-path='url(%23b)'%3e%3cdefs%3e%3cpath d='M-108.5 121v-14s-21.2-4.9-28-6.7c-2.5-.7-7-3.3-7-12V82h-30v6.3c0 8.7-4.5 11.3-7 12-6.8 1.9-28.1 7.3-28.1 6.7v14h100.1z' id='c'/%3e%3c/defs%3e%3cclipPath id='d'%3e%3cuse overflow='visible' xlink:href='%23c'/%3e%3c/clipPath%3e%3cpath clip-path='url(%23d)' d='M-158.5 100.1c12.7 0 23-18.6 23-34.4 0-16.2-10.3-24.7-23-24.7s-23 8.5-23 24.7c0 15.8 10.3 34.4 23 34.4z' fill='%23D4B08C'/%3e%3c/g%3e%3cpath d='M-158.5 96c12.7 0 23-16.3 23-31 0-15.1-10.3-23-23-23s-23 7.9-23 23c0 14.7 10.3 31 23 31z' fill='%23F2CEA5'/%3e%3c/svg%3e";
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: "5px",
        marginBottom: "15px",
        justifyContent: "right",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          borderRadius: "20px 20px 0px 20px",
          backgroundColor: config.color.userMessageComponentColor,
          color: "rgb(74, 74, 74)",
          padding: "0.5rem 1.1rem 0.5rem 1.1rem",
          maxWidth: "50%",
          fontFamily: "monospace",
          fontSize: fontFlag ? config.fontSize.ml : config.fontSize.en,
          alignSelf: "flex-end",
          textAlign: "left",
          wordBreak: "break-all",
          boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.15)", //rgba(0, 0, 0, 0.15) 0px 1px 2px 0px
        }}
      >
        {message}
      </Typography>
      <Box
        sx={{
          backgroundColor: "#ffffff00",
          margin: "10px 10px 0px 10px",
          alignSelf: "flex-end",
          p: ".3rem",
          borderRadius: "20px 20px 20px 0px",
          // boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Avatar
          src={avatarUrl}
          sx={{
            width: "3rem",
            height: "3rem",
          }}
        >
          A{" "}
        </Avatar>
      </Box>
    </Box>
  );
};

export default UserMessageComponent;
