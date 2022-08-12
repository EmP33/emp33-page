import React, { useEffect } from "react";
import styled from "styled-components";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// Store
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { uiActions } from "../../store/uiSlice";
// Components
import LoadingPage from "../LoadingPage/LoadingPage";
import Appbar from "../../components/Appbar/Appbar";
import TimelineBlock from "./TimelineBlock";
import { Grid, Box } from "@mui/material";
import Screen3D from "../../components/UI/Screen3D";
import Footer from "../../components/Footer/Footer";
//Images
import { room } from "../../assets/index";
// Styles
import { HeadingText, Container, TechnologiesList } from "./AboutPage.styles";

const AboutPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.ui.loading);

  useEffect(() => {
    dispatch(uiActions.switchLoading(true));
    setTimeout(() => {
      dispatch(uiActions.switchLoading(false));
    }, 2000);
  }, []);

  // if (loading) {
  //   return <LoadingPage />;
  // }
  return (
    <>
      <Container>
        <Appbar />
        <HeadingText>Something about me</HeadingText>
        <Grid container sx={{ overflow: "hidden", mt: 5, mb: 10 }}>
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
            <p>
              Hello! My name is{" "}
              <span style={{ color: "var(--color-text)" }}>Marek</span> and I am
              passionate about creating things for Internet. My greatest
              interest is in creating web applications that can also be useful
              to other people. I started my adventure in{" "}
              <span style={{ color: "var(--color-text)" }}>2019</span>, when I
              started learning HTML and CSS in high school, I immediately liked
              it and I started training in this outside of school.
            </p>
            <p>
              Since then, I have been constantly devoting myself to this
              passion. Over the years I have{" "}
              <span style={{ color: "var(--color-text)" }}>
                mastered a lot of technologies to a decent degree, and expanded
                and I consolidated my knowledge quite well
              </span>
              .
            </p>
            <p>
              Currently I am developing more advanced applications, which are
              also designed to help others develop.
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
          <Grid
            item
            xs={12}
            lg={7}
            sx={{ display: { xs: "none", lg: "block" } }}
          >
            <Screen3D />
          </Grid>
          <Grid
            item
            xs={12}
            lg={7}
            sx={{
              display: { xs: "flex", lg: "none" },
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            {matches ? (
              <img src={room} alt="room" style={{ width: "600px" }} />
            ) : (
              <img src={room} alt="room" style={{ width: "350px" }} />
            )}
          </Grid>
        </Grid>
        <HeadingText>My learning timeline</HeadingText>
        <Box
          sx={{
            width: { xs: "97.5%", md: "95%", lg: "90%", xl: "75%" },
            margin: "0 auto",
            height: "100%",
            position: "relative",
            mt: 10,

            "&::before": {
              width: "3px",
              height: "100%",
              background: "var(--color-text)",
              content: '""',
              position: "absolute",
              top: 0,
              left: { xs: "5%", md: "50%" },
              transform: "translateX(-50%)",
            },
          }}
        >
          <TimelineBlock
            direction="left"
            year={2019}
            title="Start of my journay"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
        optio, dolorum provident rerum aut hic quasi placeat iure tempora
        laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui
        ut."
          />
          <TimelineBlock
            direction="right"
            year={2020}
            title="Start of my journay"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
        optio, dolorum provident rerum aut hic quasi placeat iure tempora
        laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui
        ut."
          />
          <TimelineBlock
            direction="left"
            year={2020}
            title="Start of my journay"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
        optio, dolorum provident rerum aut hic quasi placeat iure tempora
        laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui
        ut."
          />
          <TimelineBlock
            direction="right"
            year={2021}
            title="Start of my journay"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
        optio, dolorum provident rerum aut hic quasi placeat iure tempora
        laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui
        ut."
          />
          <TimelineBlock
            direction="left"
            year={2021}
            title="Start of my journay"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
        optio, dolorum provident rerum aut hic quasi placeat iure tempora
        laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui
        ut."
          />
          <TimelineBlock
            direction="right"
            year={2022}
            title="Start of my journay"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
        optio, dolorum provident rerum aut hic quasi placeat iure tempora
        laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui
        ut."
          />
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default AboutPage;
