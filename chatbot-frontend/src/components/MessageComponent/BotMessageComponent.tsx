import { Avatar, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { config } from "../../utils/config";
import imgUrl from "./demo-icon-5.png";

interface MessageProps {
  // avatarUrl: string;
  message: string;
  fontFlag: boolean;
}

const BotMessageComponent: React.FC<MessageProps> = ({ message, fontFlag }) => {
  const avatarUrl = imgUrl;
  // const avatarUrl =
  //     "data:image/svg+xml,%3csvg version='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3e%3cpath d='M303 70a47 47 0 1 0-70 40v84h46v-84c14-8 24-23 24-40z' fill='%2393c7ef'/%3e%3cpath d='M256 23v171h23v-84a47 47 0 0 0-23-87z' fill='%235a8bb0'/%3e%3cpath fill='%2393c7ef' d='M0 240h248v124H0z'/%3e%3cpath fill='%235a8bb0' d='M264 240h248v124H264z'/%3e%3cpath fill='%2393c7ef' d='M186 365h140v124H186z'/%3e%3cpath fill='%235a8bb0' d='M256 365h70v124h-70z'/%3e%3cpath fill='%23cce9f9' d='M47 163h419v279H47z'/%3e%3cpath fill='%2393c7ef' d='M256 163h209v279H256z'/%3e%3cpath d='M194 272a31 31 0 0 1-62 0c0-18 14-32 31-32s31 14 31 32z' fill='%233c5d76'/%3e%3cpath d='M380 272a31 31 0 0 1-62 0c0-18 14-32 31-32s31 14 31 32z' fill='%231e2e3b'/%3e%3cpath d='M186 349a70 70 0 1 0 140 0H186z' fill='%233c5d76'/%3e%3cpath d='M256 349v70c39 0 70-31 70-70h-70z' fill='%231e2e3b'/%3e%3c/svg%3e";
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: "5px",
        marginBottom: "20px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#ffffff00",
          margin: "10px 10px 0px 10px",
          alignSelf: "flex-end",
          p: ".3rem",
          borderRadius: "20px 20px 0px 20px",
          // boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Avatar
          src={avatarUrl}
          sx={{
            width: "3rem",
            height: "3rem",
          }}
        />
      </Box>
      <Typography
        variant="body1"
        sx={{
          borderRadius: "20px 20px 20px 0px",
          backgroundColor: config.color.botMessageComponentColor,
          color: "white",
          padding: "0.5rem 1.1rem 0.5rem 1.1rem",
          maxWidth: "60%",
          fontFamily: "monospace",
          fontSize: fontFlag ? config.fontSize.ml : config.fontSize.en,
          alignSelf: "flex-end",
          textAlign: "left",
          boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
          // minWidth: "40px",
          minHeight: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          wordBreak: "break-all",
        }}
      >
        {!isLoading ? (
          <div dangerouslySetInnerHTML={{ __html: message }} />
        ) : (
          <PulseLoader
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            color="#ffffff"
            size="4px"
            margin={3}
          />
        )}
      </Typography>
    </Box>
  );
};

export default BotMessageComponent;
