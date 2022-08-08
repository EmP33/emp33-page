import React from "react";
import styled from "styled-components";
// Components
import { Box } from "@mui/material";
import Work from "./Work";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-column-gap: 4.5vw;
  grid-row-gap: 7.6vw;
  grid-template-columns: repeat(10, 5vw);
  grid-auto-rows: 5vw;
  justify-content: center;
  margin-top: 82px;
  /* overflow: hidden; */
`;

const Works = () => {
  return (
    <Container>
      <Work /> <Work /> <Work /> <Work /> <Work /> <Work /> <Work /> <Work />
      <Work /> <Work /> <Work /> <Work /> <Work /> <Work />
      <Work /> <Work /> <Work /> <Work /> <Work /> <Work />
    </Container>
  );
};

export default Works;
