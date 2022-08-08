import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { avatar } from "../assets/index";
// Components
import Appbar from "../components/Appbar/Appbar";
import { Typography, Box, Grid } from "@mui/material";
import CodeBlock from "../components/CodeBlock/CodeBlock";
import WorksSection from "../components/WorksSection/WorksSection";
import ResourcesSection from "../components/ResourcesSection/ResourcesSection";
import Aboutme from "../components/Aboutme/Aboutme";
import Contact from "../components/Contact/Contact";
// Icons
import { IoLogoInstagram } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineCodepen } from "react-icons/ai";

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
`;

const Header = styled.header`
  width: 100%;
  height: 95vh;
  color: #fff;
  text-align: center;
  overflow: hidden;
  position: relative;

  &::before,
  &::after {
    position: absolute;
    width: 350px;
    height: 350px;
    content: "";
    border-radius: 54% 46% 42% 58%/60% 58% 42% 40%;
    background-image: linear-gradient(45deg, #ab49de, var(--color-secondary));
    animation: vawe 5s linear infinite;
  }
  &::before {
    top: -10%;
    right: -10%;
  }
  &::after {
    bottom: -10%;
    left: -15%;
  }

  & > .dots {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  & > .dots span {
    position: absolute;
    border-radius: 50%;
    background-image: linear-gradient(45deg, #ab49de, var(--color-secondary));
    border-radius: 38% 62% 55% 45%/32% 53% 47% 68%;
    animation: vawe 7s linear infinite;
  }
  & > .dots span:nth-child(1) {
    top: 10%;
    left: calc(100% - 360px);
    width: 75px;
    height: 75px;
  }
  & > .dots span:nth-child(2) {
    top: 15px;
    left: 180px;
    width: 50px;
    height: 50px;
    border-radius: 38% 62% 33% 67%/60% 53% 47% 40%;
    transform: rotate(90deg);
  }
  & > .dots span:nth-child(3) {
    right: 180px;
    bottom: 20px;
    width: 80px;
    height: 80px;
    border-radius: 38% 62% 55% 45%/52% 53% 47% 48%;
  }
  & > .dots span:nth-child(4) {
    bottom: 50px;
    left: 240px;
    width: 20px;
    height: 20px;
    border-radius: 38% 62% 55% 45%/52% 53% 47% 48%;
  }
  & > .dots span:nth-child(5) {
    right: 280px;
    bottom: 80px;
    width: 25px;
    height: 25px;
    border-radius: 38% 62% 55% 45%/52% 53% 47% 48%;
  }
  & > .dots span:nth-child(6) {
    top: 6%;
    left: calc(100% - 400px);
    width: 25px;
    height: 25px;
  }

  @keyframes vawe {
    20% {
      border-radius: 45% 55% 62% 38%/53% 51% 49% 47%;
    }
    40% {
      border-radius: 45% 55% 49% 51%/36% 51% 49% 64%;
    }
    60% {
      border-radius: 60% 40% 57% 43%/47% 62% 38% 53%;
    }
    80% {
      border-radius: 60% 40% 32% 68%/38% 36% 64% 62%;
    }
  }
`;

const AnimatedHeading = styled.h2`
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  cursor: pointer;
  &:hover span:nth-child(even) {
    letter-spacing: 0;
  }
  &:hover span:nth-child(2) {
    transition-delay: 0;
  }
  &:hover span:nth-child(4) {
    transition-delay: 0.5s;
  }
  &:hover span:nth-child(6) {
    transition-delay: 1s;
  }
  &:hover span:nth-child(8) {
    transition-delay: 1.5s;
  }

  & > span {
    display: inline-flex;
    color: var(--color-secondary);

    &:nth-child(even) {
      overflow: hidden;
      transition: ease-in-out 0.5s;
      color: #fff;
      border-bottom: 8px solid var(--color-secondary);
      letter-spacing: -1em;

      @media only screen and (max-width: 900px) {
        letter-spacing: 0;
      }
    }
  }
`;

const SocialList = styled.ul`
  width: 50px;
  height: 200px;
  position: fixed;
  display: flex;
  left: 2%;
  bottom: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 220px;

  &::after {
    content: "";
    width: 1px;
    height: 140px;
    background: #808080;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  & > li {
    margin-bottom: 10px;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: translateY(-3px);
    }
    & > a {
      color: #808080;
      font-size: 22px;
      text-decoration: none;

      &:hover {
        color: var(--color-secondary);
      }
    }
  }
`;

const EmailWrapper = styled.div`
  width: 50px;
  height: 200px;
  position: fixed;
  display: flex;
  left: 2%;
  top: 0;
  padding: 0;
  margin: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  padding-top: 220px;

  & > p {
    color: #808080;
    transform: rotate(-90deg);
    transition: transform 0.2s ease-in-out;
    &:hover {
      color: var(--color-secondary);
      transform: rotate(-90deg) translateX(-2px);
    }
  }

  &::before {
    content: "";
    width: 1px;
    height: 100px;
    background: #808080;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const HomePage = () => {
  return (
    <Container>
      <Appbar />
      <Header>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            background: "rgba(41, 48, 64,0.9)",
            padding: "40px",
            borderRadius: "0 0 50% 50%",
            zIndex: 10,
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontWeight: "100", fontSize: "7.5vw", margin: "0 0 10px 0" }}
          >
            Marek Purwin
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "100",
              fontSize: { xs: "14px", md: "16px", lg: "18px" },
              margin: 0,
              letterSpacing: 2,
            }}
          >
            <AnimatedHeading>
              <span>F</span>
              <span>ront</span>-<span>E</span>
              <span>nd</span> <span>D</span>
              <span>eveloper</span>
            </AnimatedHeading>
          </Typography>
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
                width: { xs: 150, sm: 150, md: 250, lg: 300, xl: 400 },
                background: "var(--color-primary-light)",
                borderRadius: "50%",
                margin: "0 auto",
                mt: 5,
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
      <Box sx={{ width: "95%", marginLeft: "auto" }}>
        {/* <WorksSection /> */}
        <ResourcesSection />
        <Aboutme />
        <Contact />
      </Box>
      <SocialList>
        <li>
          <a href="https://github.com/EmP33" target="_blank" rel="noreferrer">
            <FiGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/marek_p1/"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/marekpur2/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a href="https://codepen.io/endipl2" target="_blank" rel="noreferrer">
            <AiOutlineCodepen />
          </a>
        </li>
      </SocialList>
      <EmailWrapper>
        <p>purwinmarek16@gmail.com</p>
      </EmailWrapper>
    </Container>
  );
};

export default HomePage;
