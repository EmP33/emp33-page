import React from "react";
import { RaceBy } from "@uiball/loaders";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../App";
import { motion } from "framer-motion";
// Store
import { useAppSelector } from "../../lib/hooks";
// Styles
import GlobalStyle from "../../App.styles";
// Component
import { Container, Typography } from "@mui/material";

const containerVariants = {
  hidden: { x: "100vw" },
  visible: { x: 0 },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const LoadingPage = () => {
  const jokes = useAppSelector((state) => state.ui.jokes);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        maxWidth="xl"
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "#aaa", letterSpacing: 7 }}
          gutterBottom
        >
          EMP33
        </Typography>
        <RaceBy size={250} lineWeight={7} speed={2} color="white" />;
        <Typography
          variant="body1"
          sx={{ color: "var(--color-text)", fotnSize: 25 }}
        >
          {jokes[Math.floor(Math.random() * jokes.length)]}
        </Typography>
      </Container>
    </ThemeProvider>
  );
};

export default React.memo(LoadingPage);
