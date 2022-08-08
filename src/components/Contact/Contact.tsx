import React from "react";
import styled from "styled-components";
// Components
import { Button, Grid, Box } from "@mui/material";
// Images
import { map } from "../../assets";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  @media only screen and (max-width: 900px) {
    height: 200vh;
  }
  @media only screen and (max-width: 600px) {
    height: 250vh;
  }

  & > article {
    color: #fff;
    display: grid;
    grid-template-columns: 1fr max-content;
    margin: 0 64px 0 64px;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 900px) {
      grid-template-columns: 1fr;
      margin: 0 16px 0 16px;
    }

    &:after {
      content: "Contact";
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
      width: 40%;

      @media only screen and (max-width: 900px) {
        width: 95%;
      }
    }

    & h2 {
      font-size: 62px;
      margin: 0;
      padding: 0;
    }
  }
`;

const ContactForm = styled.form`
  & ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 10px;
    padding: 0;
    & > li {
      list-style-type: none;
      position: relative;

      &:hover label {
        width: 100%;
      }
    }
    & label {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      transition: 0.2s linear;
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        background: #5b41f2;
      }
    }
  }

  .entire {
    grid-column: 1/-1;
  }

  & .border {
    position: relative;

    &::after {
      transition: 0.2s linear;
      content: "";
      position: absolute;
      width: 0;
      height: 3px;
      background: #5b41f2;
      bottom: 0;
      left: 0;
    }
  }

  .subject-div {
    grid-column: 1/-1;
  }

  & input,
  & textarea {
    min-height: 50px;
    width: 100%;
    padding-left: 10px;
    font-size: 18px;
    background: var(--color-primary-light);
    border: none;
    outline: none;
    color: #fff;

    &:active .border::after {
      width: 100%;
    }
  }
`;

const Contact = () => {
  return (
    <Container>
      <article>
        <div>
          <h2>Contact</h2>
          <p>
            I’m interested in freelance opportunities – especially ambitious or
            large projects. However, if you have other request or question,
            don’t hesitate to use the form.
          </p>
        </div>
      </article>
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ p: { xs: 2, md: 5 }, mt: { xs: 1, md: 10 } }}
        >
          <ContactForm>
            <ul>
              <li className="half name-div">
                <input placeholder="Name" />
                <label></label>
              </li>
              <li className="half email-div">
                <input placeholder="Email" />
                <label></label>
              </li>
              <li className="entire subject-div">
                <input placeholder="Subject" />
                <label></label>
              </li>
              <li className="entire">
                <textarea placeholder="Message" rows={9} />
                <label></label>
              </li>
              <li
                className="entire"
                style={{ justifySelf: "flex-end", marginTop: "20px" }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{ fontSize: 18, letterSpacing: 1 }}
                >
                  SEND MESSAGE!
                </Button>
              </li>
            </ul>
          </ContactForm>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={map} alt="mapa" style={{ objectFit: "contain" }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
