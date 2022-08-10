import React, { useEffect } from "react";

import Appbar from "../../components/Appbar/Appbar";
// Store
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { uiActions } from "../../store/uiSlice";
// Components
import { Grid, Button, Box, Typography } from "@mui/material";
import LoadingPage from "../LoadingPage/LoadingPage";
// Images
import { map } from "../../assets/index";
// Styles
import { Container, ContactForm } from "./ContactPage.styles";

const ContactPage = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.ui.loading);

  useEffect(() => {
    dispatch(uiActions.switchLoading(true));
    setTimeout(() => {
      dispatch(uiActions.switchLoading(false));
    }, 2000);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }
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
