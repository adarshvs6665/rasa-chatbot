import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import HomeIcon from '@mui/icons-material/Home';
import { Divider } from "@mui/material";

const pages = ["About Us", "Academics", "Departments", "Associations", "Facilities", "Students Corner", "Cells", "Placements", "Contact Us"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function MenuComponent() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{
            backgroundColor: "#3a71b6",
            marginBottom: "11px",
            
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{
                    minHeight: '40px !important',
                }}>
                    <HomeIcon
                        sx={{ display: { xs: "none", md: "flex" }, mr: 3, color: "white"}}
                    />
                    <Box
                        sx={{
                            flexGrow: 1,
                                display: "flex",
                                justifyContent: "space-around",
                        }}
                    >
                        {pages.map((page, key) => (
                            <Box 
                            key={key}>
                             <Divider orientation="vertical" flexItem sx={{
                                bgcolor: "#ffffff"
                             }}/>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ mt: 0, color: "white", display: "block", borderRadius: 0, textAlign: "center" }}
                            >
                                <Typography sx={{fontSize:'12px', textAlign: "center"}}>
                                {page}
                                </Typography>
                            </Button>
                            </Box>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default MenuComponent;
