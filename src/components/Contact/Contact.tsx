import React from "react";
import styled from "styled-components";
// Components
import { Button } from "@mui/material";

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
      content: "Contact";
      font-size: 200px;
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
const Contact = () => {
  return (
    <Container>
      <article>
        <div>
          <h2>Contact</h2>
          {/* <p>
            Here are the resources that I have used in my work and that I just
            like to use
          </p> */}
        </div>
        {/* <Button variant="contained" color="primary">
          See all!
        </Button> */}
      </article>
    </Container>
  );
};

export default Contact;
