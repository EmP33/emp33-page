import React, { useEffect } from "react";
import { avatar } from "../../assets/index";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { uiActions } from "../../store/uiSlice";
import { motion } from "framer-motion";
// Components
import Appbar from "../../components/Appbar/Appbar";
import { Typography, Box, Grid } from "@mui/material";
import CodeBlock from "../../components/CodeBlock/CodeBlock";
import WorksSection from "../../components/WorksSection/WorksSection";
import ResourcesSection from "../../components/ResourcesSection/ResourcesSection";
import Aboutme from "../../components/Aboutme/Aboutme";
import Contact from "../../components/Contact/Contact";
import LoadingPage from "../LoadingPage/LoadingPage";
import Footer from "../../components/Footer/Footer";
// Icons
import { IoLogoInstagram } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineCodepen } from "react-icons/ai";
// Styles
import {
  Container,
  Header,
  SocialList,
  EmailWrapper,
  SubHeading,
  Heading,
} from "./HomePage.styles";

const dotsVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
};

const HomePage = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.ui.loading);

  useEffect(() => {
    dispatch(uiActions.switchLoading(true));
    setTimeout(() => {
      dispatch(uiActions.switchLoading(false));
    }, 2000);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }
  return (
    <Container>
      <Appbar />
      <Header variants={dotsVariants} initial="hidden" animate="visible">
        <motion.div
          className="dots"
          variants={dotsVariants}
          initial="hidden"
          animate="visible"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </motion.div>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            background: "rgba(41, 48, 64,0.9)",
            padding: { xs: "40px 28px 40px 28px", sm: "40px" },
            borderRadius: "0 0 50% 50%",
            zIndex: 10,
          }}
        >
          <Heading>
            <span>M</span>
            <span>a</span>
            <span>r</span>
            <span>e</span>
            <span>k</span>
            <span className="heading-space"></span>
            <span>p</span>
            <span>u</span>
            <span>r</span>
            <span>w</span>
            <span>i</span>
            <span>n</span>
          </Heading>
          <Box
            sx={{
              fontWeight: "100",
              fontSize: { xs: "17px", md: "19px", lg: "22px" },
              margin: 0,
              letterSpacing: 2,
              textAlign: "center",
            }}
          >
            <SubHeading>
              Front-end developer
              <span className="Mask">Front-end developer</span>
              <span className="Mask">Front-end developer</span>
            </SubHeading>
          </Box>
        </Box>
        <Grid
          container
          sx={{
            position: "absolute",
            left: "50%",
            top: { xs: "25%", sm: "35%", md: "50%" },
            transform: {
              xs: "translate(-50%,-25%)",
              sm: "translate(-50%,-35%)",
              md: "translate(-50%,-50%)",
            },
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
            width: "90%",
            mt: { xs: 12, sm: 5 },
            zIndex: 15,
            gridRowGap: 25,
          }}
        >
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                zIndex: 11,
                width: { xs: 250, sm: 200, md: 250, lg: 300, xl: 400 },
                background: "var(--color-primary-light)",
                borderRadius: "50%",
                margin: "0 auto",
                mt: 5,
                mb: { xs: 5, md: 0 },
              }}
            >
              <img src={avatar} alt="avatar" style={{ width: "100%" }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <CodeBlock />
          </Grid>
        </Grid>
      </Header>
      <WorksSection />
      <Box sx={{ width: { xs: "100%", sm: "95%" }, marginLeft: "auto" }}>
        <ResourcesSection />
        <Aboutme />
        <Contact />
      </Box>
      <SocialList>
        <li>
          <a
            aria-label="Navigate to Github"
            href="https://github.com/EmP33"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
        </li>
        <li>
          <a
            aria-label="Navigate to Instagram"
            href="https://www.instagram.com/marek_p1/"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoInstagram />
          </a>
        </li>
        <li>
          <a
            aria-label="Navigate to Facebook"
            href="https://www.facebook.com/marekpur2/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a
            aria-label="Navigate to Codepen"
            href="https://codepen.io/endipl2"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineCodepen />
          </a>
        </li>
      </SocialList>
      <EmailWrapper>
        <p>purwinmarek16@gmail.com</p>
      </EmailWrapper>
      <Footer />
    </Container>
  );
};

export default HomePage;
