import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import {config} from '../../utils/config'
import Switch from "@mui/material/Switch";
import { chatBotName } from "../../utils/config";
import { switchButtonTheme } from "../../utils/Theme/Theme";

type HeaderProps = {
    // switchChecked: any
    handleToggle: any
}

const Header = (props: HeaderProps) => {
    const label = { inputProps: { "aria-label": "Switch demo" } };
    return (
        <AppBar
            position="static"
            sx={{
                borderRadius: "2rem 2rem 0rem 0rem",
                backgroundColor: config.color.chatboxHeaderColor,
            }}
        >
            <Toolbar
                sx={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.5rem 1rem",
                }}
            >
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{
                        mr: 2,
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        sx={{
                            flexGrow: 1,
                            fontWeight: "600",
                            fontFamily: "monospace",
                        }}
                    >
                        {chatBotName.charAt(0) +
                            chatBotName.slice(1).toLowerCase()}
                    </Typography>
                </IconButton>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <Typography
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            fontFamily: "monospace",
                            fontSize: ".8rem",
                        }}
                    >
                        Malayalam
                    </Typography>
                    <ThemeProvider theme={switchButtonTheme} >
                    <Switch color="primary" onChange={props.handleToggle} {...label} />
                    </ThemeProvider>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
