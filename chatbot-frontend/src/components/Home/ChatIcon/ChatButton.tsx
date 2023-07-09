// import { Backdrop, Container, Fab, Grid, Typography } from "@mui/material";
// import ChatIcon from "@mui/icons-material/Chat";
// import CloseIcon from "@mui/icons-material/Close";
// import CustomChatBotUsingMUI from "../../CustomChatBotUsingMUI/CustomChatBotUsingMUI";
// import { useState } from "react";

// type Props = {};

// const ChatButton = (props: Props) => {
//   const [display, setDisplay] = useState(false);
//   return (
//     <>
//       <Backdrop sx={{ color: "#fff", zIndex: 1 }} open={display}>
//         <CustomChatBotUsingMUI display={display} />
//       </Backdrop>
      
//       <Fab
//         sx={{
//           position: "fixed",
//           bottom: 30,
//           right: 30,
//         }}
//         color="primary"
//         aria-label="add"
//         onClick={() => {
//           setDisplay(!display);
//         }}
//       >
//         {display ? <CloseIcon /> : <ChatIcon />}
//       </Fab>
//     </>
//   );
// };

// export default ChatButton;

import { Backdrop, Box, Container, Fab, Grid, Typography } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import CustomChatBotUsingMUI from "../../CustomChatBotUsingMUI/CustomChatBotUsingMUI";
import { useState } from "react";
import imgUrl from "./demo-icon-3.png";

type Props = {};

const ChatButton = (props: Props) => {
  const [display, setDisplay] = useState(false);
  return (
    <>
      <Backdrop sx={{ color: "#fff", zIndex: 1 }} open={display}>
        <CustomChatBotUsingMUI display={display} />
      </Backdrop>

      <Fab
        sx={{
          position: "fixed",
          bottom: 60,
          right: 60,
        }}
        color="primary"
        aria-label="add"
        onClick={() => {
          setDisplay(!display);
        }}
      >
        {display ? (
          <CloseIcon />
        ) : (
          <Box
            component="img"
            sx={{
                width: '70px'
            }}
            src={imgUrl}
          />
        )}
      </Fab>
    </>
  );
};

export default ChatButton;
