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
import { Divider } from "@mui/material";

const pages = ["Image Gallery", "Click Here IEDC UCEK", "Achievements", "Google Classroom", "AICTE Approval", "Accreditation Center"];

function MenuComponent2() {
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
                    <Box
                        sx={{
                            flexGrow: 1,
                                display: "flex",
                                justifyContent: "space-around",
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ mt: 0, color: "white", display: "block", borderRadius: 0, textAlign: "center" }}
                            >
                                <Typography sx={{fontSize:'12px', textAlign: "center"}}>
                                {page}
                                </Typography>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default MenuComponent2;
