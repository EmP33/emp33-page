import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  text-align: center;
  padding: 8px;
  & a {
    color: var(--color-text);
    text-decoration: none;
    font-family: var(--font-mono);
  }
`;

const Footer = () => {
  return (
    <Container>
      <a href="https://github.com/EmP33" rel="noreferrer" target="_blank">
        Designed & Built by Marek Purwin
      </a>
    </Container>
  );
};

export default Footer;
