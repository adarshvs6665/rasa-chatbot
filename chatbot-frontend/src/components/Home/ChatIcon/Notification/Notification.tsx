import { Typography } from "@mui/material";
import React from "react";

type Props = {};

const Notification = (props: Props) => {
  return (
    <Typography
      variant="body1"
      sx={{
        borderRadius: "20px 20px 0px 20px",
        backgroundColor: "red",
        color: "rgb(74, 74, 74)",
        padding: "0.5rem 1.1rem 0.5rem 1.1rem",
        maxWidth: "50%",
        fontFamily: "monospace",
        fontSize: "1rem",
        alignSelf: "flex-end",
        textAlign: "justify",
        boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.15)", //rgba(0, 0, 0, 0.15) 0px 1px 2px 0px
      }}
    >
      {"Do you want any help?"}
    </Typography>
  );
};

export default Notification;
