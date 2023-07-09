import { Box, Grid, Stack, Typography } from "@mui/material";
import heroImg from "../../../assets/images/hero.png";

type Props = {};

const MainSection = (props: Props) => {
    return (
        <Grid container spacing={1} >
            <Grid
                item
                xs={8}
                sx={{
                    paddingTop: "0 !important"
                }}
            >
                <Box
                    component="img"
                    src={heroImg}
                    sx={{
                        minWidth: "100%",
                        minHeight: "100%"
                    }}
                ></Box>
            </Grid>
            <Grid item xs={4} sx={{fontFamily: "", background: "#ECF0F1", paddingLeft: "0px !important", paddingTop: "0px !important"}} >
            <Box sx={{
                        textAlign: "left",
                        p: 2,
                        backgroundColor: "#ECF0F1"
                    }}>News</Box>
                <Stack spacing={2} sx={{
                    borderTop: "2px dotted #757575",
                    borderBottom: "2px dotted #757575",
                    pb: 2,
                    pt: 2,
                    backgroundColor: "#ECF0F1"
                }} >
                    
                    <Box sx={{
                        // fontFamily: "Helvetica",
                        fontSize: ".8rem",
                        fontWeight: "600"
                    }}>APR 04</Box>
                    <Box sx={{
                        // fontFamily: "Ropa Sans",
                        fontSize: "1rem",
                        textAlign: "left",
                        pl: 2,
                        fontWeight: "800"
                    }}>SECOND SEMESTER B.TECH DEGREE EXAM REGISTRATION</Box>
                    <Box sx={{
                        // fontFamily: "Helvetica",
                        fontSize: ".7rem",
                        textAlign: "left",
                        pl: 2,
                        color: "#757575"
                    }}>For details click here</Box>
                </Stack>
                <Stack spacing={2} sx={{
                    borderBottom: "2px dotted #757575",
                    pt: 2,
                    pb: 2,
                    backgroundColor: "#ECF0F1"
                }} >
                    <Box sx={{
                        // fontFamily: "Helvetica",
                        fontSize: ".8rem",
                        fontWeight: "600"
                    }}>MARCH 22</Box>
                    <Box sx={{
                        // fontFamily: "Ropa Sans",
                        fontSize: "1rem",
                        textAlign: "left",
                        pl: 2,
                        fontWeight: "800"
                    }}>THIRD SEMESTER B.TECH EXAM (December 2022) REVALUATION RESULT</Box>
                    <Box sx={{
                        // fontFamily: "Helvetica",
                        fontSize: ".7rem",
                        textAlign: "left",
                        pl: 2,
                        color: "#757575"
                    }}>For details click here</Box>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default MainSection;
