import React from "react";
import styled from "styled-components";
// Components
import { Button } from "@mui/material";
import Works from "./Works";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  & > article {
    color: #fff;
    display: grid;
    grid-template-columns: 1fr max-content;
    margin: 0 64px 0 64px;
    justify-content: center;
    align-items: center;

    &:after {
      content: "Works";
      font-size: 300px;
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

const WorksSection = () => {
  return (
    <Container>
      <article>
        <div>
          <h2>My Portfolio</h2>
          <p>
            Here are my projects that I made during my 3 years of coding
            adventure. After going to the details of the project, the
            technologies used in the project and its description will be
            displayed. To see all projects go to my works page.
          </p>
        </div>
        <Button variant="contained" color="primary">
          See more!
        </Button>
      </article>
      <Works />
    </Container>
  );
};

export default WorksSection;
