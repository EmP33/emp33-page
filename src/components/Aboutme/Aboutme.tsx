import React from "react";
import styled from "styled-components";
import Spline from "@splinetool/react-spline";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// Components
import { Button, Grid } from "@mui/material";
import Screen3D from "../UI/Screen3D";
// Image
import { room } from "../../assets";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: max-content 1fr;
  padding: 0 64px 0 64px;
  overflow: hidden;

  & image {
    width: 150px;
  }

  @media only screen and (max-width: 1200px) {
    padding: 0 16px 0 16px;
  }

  & > article {
    color: #fff;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;

    &:after {
      content: "About";
      font-size: 150px;
      font-weight: bold;
      position: absolute;
      right: 0;
      color: rgba(255, 255, 255, 0.1);
      z-index: -1;

      @media only screen and (max-width: 900px) {
        content: "";
      }
    }

    & > div {
      width: 95%;
    }

    & h2 {
      font-size: 62px;
      margin: 0;
      padding: 0;
    }
  }
`;

const TechnologiesList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  & > li {
    position: relative;
    padding-left: 20px;
    display: flex;
    align-items: center;

    &:before {
      content: "";
      width: 7.5px;
      height: 7.5px;
      background: #ab49de;
      clip-path: polygon(0 0, 0% 100%, 100% 50%);
      position: absolute;
      left: 0;
    }
  }
`;

const Aboutme = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Container id="about">
      <article>
        <div>
          <h2>About me</h2>
          {/* <p>
            Here are the resources that I have used in my work and that I just
            like to use
          </p> */}
        </div>
        {/* <Button variant="contained" color="primary">
          See all!
        </Button> */}
      </article>
      <Grid container sx={{ overflow: "hidden", mt: 5 }}>
        <Grid
          item
          xs={12}
          lg={5}
          sx={{
            color: "#eee",
            display: "flex",
            alignItems: "flex-left",
            flexDirection: "column",
            fontSize: "18px",
          }}
        >
          <h2
            style={{
              color: "var(--color-text)",
              fontSize: "40px",
              fontWeight: 300,
            }}
          >
            Something about me
          </h2>
          <p>
            Hello! My name is{" "}
            <span style={{ color: "var(--color-text)" }}>Marek</span> and I am
            passionate about creating things for Internet. My greatest interest
            is in creating web applications that can also be useful to other
            people. I started my adventure in{" "}
            <span style={{ color: "var(--color-text)" }}>2019</span>, when I
            started learning HTML and CSS in high school, I immediately liked it
            and I started training in this outside of school.
          </p>
          <p>
            Since then, I have been constantly devoting myself to this passion.
            Over the years I have{" "}
            <span style={{ color: "var(--color-text)" }}>
              mastered a lot of technologies to a decent degree, and expanded
              and I consolidated my knowledge quite well
            </span>
            .
          </p>
          <p>
            Currently I am developing more advanced applications, which are also
            designed to help others develop.
          </p>
          <p>Here are the technologies I work with the most:</p>
          <TechnologiesList>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>styled-components</li>
            <li>@reduxjs/toolkit</li>
            <li>Firebase</li>
          </TechnologiesList>
        </Grid>
        <Grid item xs={12} lg={7} sx={{ display: { xs: "none", lg: "block" } }}>
          <Screen3D />
        </Grid>
        <Grid
          item
          xs={12}
          lg={7}
          sx={{
            display: { xs: "flex", lg: "none" },
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          {matches ? (
            <img src={room} alt="room" style={{ width: "600px" }} />
          ) : (
            <img src={room} alt="room" style={{ width: "350px" }} />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Aboutme;
