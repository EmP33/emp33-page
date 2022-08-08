import React from "react";
import styled from "styled-components";
import Spline from "@splinetool/react-spline";
// Components
import { Button, Grid } from "@mui/material";

const Container = styled.div`
  width: 100%;
  height: 160vh;
  display: grid;
  grid-template-rows: max-content 1fr;
  padding: 0 64px 0 64px;
  overflow: hidden;
  & > article {
    color: #fff;
    display: grid;
    grid-template-columns: 1fr max-content;
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
    }

    & > div {
      width: 60%;
    }

    & h2 {
      font-size: 62px;
    }
  }
`;

const TechnologiesList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

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
  return (
    <Container>
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
      <Grid container>
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
          <h2 style={{ color: "#ab49de", fontSize: "40px" }}>
            Something about me
          </h2>
          <p>
            Hello! My name is <span style={{ color: "#ab49de" }}>Marek</span>{" "}
            and I am passionate about creating things for Internet. My greatest
            interest is in creating web applications that can also be useful to
            other people. I started my adventure in{" "}
            <span style={{ color: "#ab49de" }}>2019</span>, when I started
            learning HTML and CSS in high school, I immediately liked it and I
            started training in this outside of school.
          </p>
          <p>
            Since then, I have been constantly devoting myself to this passion.
            Over the years I have{" "}
            <span style={{ color: "#ab49de" }}>
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
        <Grid item xs={12} lg={7}>
          <Spline scene="https://prod.spline.design/3EgQrXNARZCMh277/scene.splinecode" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Aboutme;
