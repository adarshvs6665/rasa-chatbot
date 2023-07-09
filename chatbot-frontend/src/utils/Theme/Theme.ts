import { createTheme } from '@mui/material/styles';
import { config } from '../config';


export const switchButtonTheme = createTheme({
  palette: {
    primary: {
      main: config.color.chatBoxHeaderSwitchButtonBgColor,
    },
  },
});