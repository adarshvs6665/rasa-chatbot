import { Box, Divider, Typography } from "@mui/material";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
    return (
        <Box sx={{ pt: 3, pb: 3 }}>
            <Divider
                flexItem
                sx={{
                    bgcolor: "#000000",
                }}
            />
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pt: 2,
                pl: 2,
                pr: 2
            }}>
                <Typography sx={{fontSize: ".8rem"}}>
                    University College of Engineering, Kariavattom,
                    Thiruvananthapuram
                </Typography>
                <Typography sx={{fontSize: ".8rem"}}>Visitors : 4091</Typography>
                <Typography sx={{fontSize: ".8rem"}}>Demo Website</Typography>
            </Box>
        </Box>
    );
};

export default Footer;
