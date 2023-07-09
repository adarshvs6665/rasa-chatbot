import { Box, Grid, Typography } from "@mui/material";
import imgURL1 from "../../../assets/images/img1.png";
import imgURL2 from "../../../assets/images/img2.png";
import imgURL3 from "../../../assets/images/img3.png";
import imgURL4 from "../../../assets/images/img4.png";
import imgURL5 from "../../../assets/images/img5.png";

type Props = {};

const AdministrationPanel = (props: Props) => {
    return (
        <Box>
            <Box>
                <Typography
                    sx={{
                        fontSize: "1.25rem",
                        fontWeight: "700 !important",
                        mb: 2,
                    }}
                >
                    Administration Panel
                </Typography>
            </Box>
            <Grid container spacing={1}>
                <Grid
                    item
                    xs={8}
                    sx={{
                        paddingTop: "0 !important",
                    }}
                >
                    <Box sx={{ display: "flex", p: 1 }}>
                        <Grid
                            item
                            xs={4}
                            sx={{
                                border: "1px solid black",
                                p: 1,
                            }}
                        >
                            <Box
                                component="img"
                                src={imgURL1}
                                sx={{
                                    width: "226px",
                                    height: "265px",
                                }}
                            ></Box>
                            <Typography
                                sx={{ color: "#c63", fontWeight: "600", p: 1 }}
                            >
                                Chancellor
                            </Typography>
                            <Typography sx={{ fontWeight: "800", p: 1 }}>
                                Shri. Arif Muhammed Khan
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: "600",
                                    fontSize: ".7rem",
                                    p: 1,
                                }}
                            >
                                The Hon'ble Governor of Kerala
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={4}
                            sx={{
                                border: "1px solid black",
                                p: 1,
                            }}
                        >
                            <Box
                                component="img"
                                src={imgURL2}
                                sx={{
                                    width: "226px",
                                    height: "265px",
                                }}
                            ></Box>
                            <Typography
                                sx={{ color: "#c63", fontWeight: "600", p: 1 }}
                            >
                                Pro-Chancellor
                            </Typography>
                            <Typography sx={{ fontWeight: "800", p: 1 }}>
                                Dr.R.BINDU
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: "600",
                                    fontSize: ".7rem",
                                    p: 1,
                                }}
                            >
                                The Hon'ble Minister for Higher Education
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={4}
                            sx={{
                                border: "1px solid black",
                                p: 1,
                            }}
                        >
                            <Box
                                component="img"
                                src={imgURL3}
                                sx={{
                                    width: "226px",
                                    height: "265px",
                                }}
                            ></Box>
                            <Typography
                                sx={{ color: "#c63", fontWeight: "600", p: 1 }}
                            >
                                Vice Chancellor
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: "800",
                                    p: 1,
                                    fontSize: ".9rem",
                                }}
                            >
                                Prof.(Dr.) Mohanan Kunnummal
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: "600",
                                    fontSize: ".7rem",
                                    p: 1,
                                }}
                            >
                                University of Kerala
                            </Typography>
                        </Grid>
                    </Box>
                    <Box sx={{ display: "flex", p: 1 }}>
                        <Grid
                            item
                            xs={4}
                            sx={{
                                border: "1px solid black",
                                p: 1,
                            }}
                        >
                            <Box
                                component="img"
                                src={imgURL4}
                                sx={{
                                    width: "226px",
                                    height: "265px",
                                }}
                            ></Box>
                            <Typography
                                sx={{ color: "#c63", fontWeight: "600", p: 1 }}
                            >
                                Registrar
                            </Typography>
                            <Typography sx={{ fontWeight: "800", p: 1 }}>
                                Dr. K. S. Anil Kumar
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: "600",
                                    fontSize: ".7rem",
                                    p: 1,
                                }}
                            >
                                University of Kerala
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={4}
                            sx={{
                                border: "1px solid black",
                                p: 1,
                            }}
                        >
                            <Box
                                component="img"
                                src={imgURL5}
                                sx={{
                                    width: "226px",
                                    height: "265px",
                                }}
                            ></Box>
                            <Typography
                                sx={{ color: "#c63", fontWeight: "600", p: 1 }}
                            >
                                PRINCIPAL
                            </Typography>
                            <Typography sx={{ fontWeight: "800", p: 1 }}>
                                Dr.Bisharathu Beevi.A
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: "600",
                                    fontSize: ".7rem",
                                    p: 1,
                                }}
                            >
                                University College of Engineering
                            </Typography>
                        </Grid>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={4}
                    sx={{
                        p: 1,
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: "#ECF0F1",
                            p: 2,
                            mb: 1,
                            textAlign: "left",
                        }}
                    >
                        <Typography
                            sx={{ fontSize: "1rem", fontWeight: "600" }}
                        >
                            FEE STRUCTURE
                        </Typography>
                        <Typography
                            sx={{ fontSize: ".8rem", fontWeight: "600" }}
                        >
                            CLICK HERE
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: "#ECF0F1",
                            p: 2,
                            mb: 1,
                            textAlign: "left",
                        }}
                    >
                        <Typography
                            sx={{ fontSize: "1rem", fontWeight: "600" }}
                        >
                            Attend maximum number of online courses and win
                            exciting prices "MERAKI 2020"
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: "#ECF0F1",
                            p: 2,
                            mb: 1,
                            textAlign: "left",
                        }}
                    >
                        <Typography
                            sx={{ fontSize: "1rem", fontWeight: "600" }}
                        >
                            INFORMATION TECHNOLOGY INTERNATIONAL WEBINAR SERIES
                            SCHEDULE 2021
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: "#ECF0F1",
                            p: 2,
                            mb: 1,
                            textAlign: "left",
                        }}
                    >
                        <Typography
                            sx={{ fontSize: "1rem", fontWeight: "600" }}
                        >
                            {" "}
                            GENERAL DEPARTMENT WEBINAR SERIES SCHEDULE
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: "#ECF0F1",
                            p: 2,
                            mb: 1,
                            textAlign: "left",
                        }}
                    >
                        <Typography
                            sx={{ fontSize: "1rem", fontWeight: "600" }}
                        >
                            {" "}
                            FREE ENTRANCE VIDEO CLASSES FOR KEAM,JEE ETC
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: "#ECF0F1",
                            p: 2,
                            mb: 1,
                            textAlign: "left",
                        }}
                    >
                        <Typography
                            sx={{ fontSize: "1rem", fontWeight: "600" }}
                        >
                            {" "}
                            COMPUTER SCIENCE WEBINAR SERIES SCHEDULE
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: "#ECF0F1",
                            p: 2,
                            mb: 1,
                            textAlign: "left",
                        }}
                    >
                        <Typography
                            sx={{ fontSize: "1rem", fontWeight: "600" }}
                        >
                            {" "}
                            INFORMATION TECHNOLOGY WEBINAR SERIES 2020 SCHEDULE
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AdministrationPanel;
