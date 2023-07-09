import { Box, Container, Typography } from "@mui/material";
import React from "react";
import banner from "../../../assets/images/banner.jpg";

type Props = {};

const Header = (props: Props) => {
    return (
        <Box
            component="img"
            src={banner}
            sx={{
                maxWidth: "100%",
                height: "auto",
            }}
        ></Box>
    );
};

export default Header;
