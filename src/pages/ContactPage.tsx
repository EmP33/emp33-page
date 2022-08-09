import React from "react";
import styled from "styled-components";
import Appbar from "../components/Appbar/Appbar";
// Components
import { Grid, Button, Box, Typography } from "@mui/material";
// Images
import { map } from "../assets/index";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  padding-bottom: 30px;
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

const ContactPage = () => {
  return (
    <Container>
      <Appbar />
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ p: { xs: 2, md: 5 }, mt: { xs: 1, md: 10 } }}
          >
            <h2
              style={{
                fontSize: "62px",
                margin: "0 0 60px 0",
                padding: 0,
                color: "#aaa",
              }}
            >
              Contact
            </h2>
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
          <Grid item xs={12} md={6} sx={{ postion: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                background: "var(--color-primary-dark)",
                color: "#fff",
                padding: 2,
                right: 10,
                marginTop: 3,
              }}
            >
              <Typography variant="body1">Marek Purwin</Typography>
              <Typography variant="body1">POLAND</Typography>
              <Typography variant="body1">purwinmarek16@gmail.com</Typography>
            </Box>
            <img src={map} alt="mapa" style={{ pointerEvents: "none" }} />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default ContactPage;
