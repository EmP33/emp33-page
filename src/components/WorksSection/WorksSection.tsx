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
    margin: 16px 64px 0 64px;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 900px) {
      grid-template-columns: 1fr;
      margin: 16px 12px 0 12px;
      justify-items: left;
    }

    &:after {
      content: "Works";
      font-size: 300px;
      font-weight: bold;
      position: absolute;
      right: 0;
      color: rgba(255, 255, 255, 0.1);
      z-index: -1;

      @media only screen and (max-width: 1200px) {
        font-size: 250px;
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
        <Button
          variant="contained"
          color="primary"
          sx={{ p: "10px 40px 10px 40px", letterSpacing: 2 }}
        >
          See more!
        </Button>
      </article>
      <Works />
    </Container>
  );
};

export default WorksSection;
