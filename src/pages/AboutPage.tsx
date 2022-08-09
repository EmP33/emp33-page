import React from "react";
import styled from "styled-components";
import Appbar from "../components/Appbar/Appbar";

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
`;

const AboutPage = () => {
  return (
    <Container>
      <Appbar />
    </Container>
  );
};

export default AboutPage;
