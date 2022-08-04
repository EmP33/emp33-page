import React, { useState } from "react";
import styled from "styled-components";
import { avatar } from "../assets/index";
// Components
import Appbar from "../components/Appbar/Appbar";
import { Typography, Box } from "@mui/material";

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
`;

const Header = styled.header`
  width: 100%;
  height: 90vh;
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
    background-image: linear-gradient(45deg, #ab49de, #5b41f2);
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
    background-image: linear-gradient(45deg, #ab49de, #5b41f2);
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
            The Magic Space of the front end developer
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            zIndex: 11,
            top: "50%",
            left: "10%",
            transform: "translate(-10%,-50%)",
            width: { xs: 350, sm: 400, md: 400, lg: 400 },
          }}
        >
          <img src={avatar} alt="avatar" style={{ width: "100%" }} />
        </Box>
      </Header>
    </Container>
  );
};

export default HomePage;
