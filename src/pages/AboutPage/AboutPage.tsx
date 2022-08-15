import React, { useEffect } from "react";
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
import Certificate from "./Certificate";
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
  }, [dispatch]);

  if (loading) {
    return <LoadingPage />;
  }
  return (
    <>
      <Container>
        <Appbar />
        <HeadingText data-aos="fade-up">Something about me</HeadingText>
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
            <p data-aos="fade-up">
              Hello! My name is{" "}
              <span style={{ color: "var(--color-text)" }}>Marek</span> and I am
              passionate about creating things for Internet. My greatest
              interest is in creating web applications that can also be useful
              to other people. I started my adventure in{" "}
              <span style={{ color: "var(--color-text)" }}>2019</span>, when I
              started learning HTML and CSS in high school, I immediately liked
              it and I started training in this outside of school.
            </p>
            <p data-aos="fade-up">
              Since then, I have been constantly devoting myself to this
              passion. Over the years I have{" "}
              <span style={{ color: "var(--color-text)" }}>
                mastered a lot of technologies to a decent degree, and expanded
                and I consolidated my knowledge quite well
              </span>
              .
            </p>
            <p data-aos="fade-up">
              Currently I am developing more advanced applications, which are
              also designed to help others develop.
            </p>
            <p data-aos="fade-up">
              Here are the technologies I work with the most:
            </p>
            <TechnologiesList data-aos="fade-up">
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
        <HeadingText data-aos="fade-up">My learning timeline</HeadingText>
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
            description="In September 2019, I started my adventure with creating a website. At that time, I was studying computer science at school and that was one of the lessons at that time. I liked it immediately and started to spend a lot of time having fun creating something at home as well. I learned the basics of HTML, then CSS, and JS at that point."
          />
          <TimelineBlock
            direction="right"
            year={2020}
            title="The first independent projects"
            description="With the following months I got to know this world more and more. And so, at the beginning of 2020, I started doing my small first projects mainly based on HTML and CSS, I was creating more advanced animations, transitions and page layouts. After mastering HTML and CSS quite well as I thought. I knew how to write semantic and optimal for search engines HTML code, I got acquainted with creating layouts, responsive pages, and I got to know the CSS framework, bootstrap."
          />
          <TimelineBlock
            direction="left"
            year={2020}
            title="First and last break"
            description="In the summer of 2020, I had my first and last break from learning programming. Then I went to another city for 1.5 months and then I had no opportunity to train."
          />
          <TimelineBlock
            direction="right"
            year={2020}
            title="Explore the world of JS"
            description="In the fall of 2020, I started training JS, so far I already knew the basics of the language from lessons that I had regularly for a year, but I was not attracted then as much as CSS and HTML. But from the moment I started learning it myself, I also got to like this language very much. Of course, in line with these technologies, I learned a bit of back-end basics, PHP, SQL, and a bit of Python, but they did not convince me like front-end technologies."
          />

          <TimelineBlock
            direction="left"
            year={2021}
            title="Getting lost"
            description="The beginning of 2021 was a time when I wanted, to put it this way, to gain as much knowledge as possible from all possible technologies that are in the world of the front-end. This is how I was able to familiarize myself with technologies such as GIT or Github, NPM, SCSS, first beginnings in JS frameworks: React, Vue and Angular a little bit of everything, also JQuery and more bootstrap."
          />
          <TimelineBlock
            direction="right"
            year={2021}
            title="The end of school"
            description="In this year also I had vocational exams in programming and web development and database management. The exams that I was able to pass with fairly satisfactory results."
          />
          <TimelineBlock
            direction="left"
            year={2021}
            title="Getting lost 2"
            description="After graduating from school, I started to focus more on creating websites that were supposed to look great and had amazing animations. It was a bit of a wrong path because I wasted a lot of time, as before, on too much exploring this world."
          />
          <TimelineBlock
            direction="right"
            year={2021}
            title="Udemy courses"
            description="So in the summer I decided to get my knowledge together and started doing Udemy courses. Which gave me a lot of new knowledge, patched the patches in the previously known one, and reminded me of what I had already learned. Thus, in the following months, I was able to complete the courses, min. from the entire MERN stack, JS, CSS and SCSS, React, Typescript and I learned a lot of useful skills in the work of a front-end developer and gained theoretical knowledge, which I then regularly used in later projects such as webpack, styled-components, testing libraries."
          />
          <TimelineBlock
            direction="left"
            year={2022}
            title="Large projects"
            description="In 2022, I started learning React, in which I then created the first larger projects, gaining and consolidating the knowledge I had learned throughout my adventure with programming."
          />
        </Box>
        <HeadingText data-aos="fade-up">Certificates</HeadingText>
        <Grid
          container
          sx={{
            margin: "0 auto",
            height: "100%",
            position: "relative",
            mt: 10,
          }}
        >
          <Grid item data-aos="fade-up" xs={12} sm={6} lg={4}>
            <Certificate link="https://udemy-certificate.s3.amazonaws.com/image/UC-f658f7c5-9b8b-4f3e-ae00-b2621e1614ed.jpg" />
          </Grid>
          <Grid item data-aos="fade-up" xs={12} sm={6} lg={4}>
            <Certificate link="https://udemy-certificate.s3.amazonaws.com/image/UC-6dc78bcb-0877-4643-a7ee-7df841eb51ae.jpg" />
          </Grid>
          <Grid item data-aos="fade-up" xs={12} sm={6} lg={4}>
            <Certificate link="https://udemy-certificate.s3.amazonaws.com/image/UC-9e1a6d6a-669f-4836-91d4-c0307ce43dfd.jpg" />
          </Grid>
          <Grid item data-aos="fade-up" xs={12} sm={6} lg={4}>
            <Certificate link="https://udemy-certificate.s3.amazonaws.com/image/UC-cce12fa4-59a8-4713-8fea-346239fd7d83.jpg" />
          </Grid>
          <Grid item data-aos="fade-up" xs={12} sm={6} lg={4}>
            <Certificate link="https://udemy-certificate.s3.amazonaws.com/image/UC-ea1308c7-2c43-461c-b1c4-b81307bcd47f.jpg" />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default AboutPage;
