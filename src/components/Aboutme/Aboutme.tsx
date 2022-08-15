import React from "react";
import styled from "styled-components";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
// Components
import { Button, Grid } from "@mui/material";
import Screen3D from "../UI/Screen3D";
// Image
import { room } from "../../assets";

const Container = styled.div`
  width: 100%;
  overflow: hidden;

  & image {
    width: 150px;
  }

  /* @media only screen and (max-width: 1200px) {
    padding: 0 16px 0 16px;
  } */

  & article {
    color: #fff;
    display: grid;
    grid-template-columns: 1fr max-content;
    margin: 16px 64px 0 64px;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 900px) {
      grid-template-columns: 1fr;
      margin: 16px 12px 0 24px;
      justify-items: left;
    }

    &:after {
      content: "About";
      font-size: 225px;
      font-weight: bold;
      position: absolute;
      right: 0;
      color: rgba(255, 255, 255, 0.1);
      z-index: -1;

      @media only screen and (max-width: 1200px) {
        font-size: 200px;
      }

      @media only screen and (max-width: 900px) {
        content: "";
      }
    }

    & > div {
      width: 95%;
    }

    & h2 {
      margin: 0;
      padding: 0;
      font-size: 62px;

      @media only screen and (max-width: 600px) {
        font-size: 48px;
      }
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
  const navigate = useNavigate();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Container id="about">
      <article>
        <div>
          <h2 data-aos="fade-right">About me</h2>
        </div>
        <Button
          variant="contained"
          data-aos="fade-left"
          color="primary"
          size="large"
          sx={{ p: "10px 40px 10px 40px", letterSpacing: 2 }}
          onClick={() => navigate("/about")}
        >
          More
        </Button>
      </article>
      <Grid
        container
        sx={{ overflow: "hidden", width: "90%", margin: "40px auto 0 auto" }}
      >
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
            data-aos="fade-right"
            style={{
              color: "var(--color-text)",
              fontSize: "40px",
              fontWeight: 300,
            }}
          >
            Something about me
          </h2>
          <p data-aos="fade-right">
            Hello! My name is{" "}
            <span style={{ color: "var(--color-text)" }}>Marek</span> and I am
            passionate about creating things for Internet. My greatest interest
            is in creating web applications that can also be useful to other
            people. I started my adventure in{" "}
            <span style={{ color: "var(--color-text)" }}>2019</span>, when I
            started learning HTML and CSS in high school, I immediately liked it
            and I started training in this outside of school.
          </p>
          <p data-aos="fade-right">
            Since then, I have been constantly devoting myself to this passion.
            Over the years I have{" "}
            <span style={{ color: "var(--color-text)" }}>
              mastered a lot of technologies to a decent degree, and expanded
              and I consolidated my knowledge quite well
            </span>
            .
          </p>
          <p data-aos="fade-right">
            Currently I am developing more advanced applications, which are also
            designed to help others develop.
          </p>
          <p data-aos="fade-right">
            Here are the technologies I work with the most:
          </p>
          <TechnologiesList data-aos="fade-right">
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
