import { Container, Fab, Grid, Typography } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
import React from "react";
import Header from "../components/Home/Header/Header";
import MenuComponent from "../components/Home/Menu/Menu";
import MainSection from "../components/Home/MainSection/MainSection";
import MenuComponent2 from "../components/Home/Menu/Menu2";
import AdministrationPanel from "../components/Home/AdministrationPanel/AdministrationPanel";
import Footer from "../components/Home/Footer/Footer";
import ChatButton from "../components/Home/ChatIcon/ChatButton";


type Props = {};

const Home = (props: Props) => {
    return (
        <Container maxWidth="lg">
            <Header /> <MenuComponent />
            <MainSection />
            <MenuComponent2 />
            <AdministrationPanel />
            <Footer />
            <ChatButton />
        </Container>
    );
};

export default Home;
