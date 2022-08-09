import React from "react";
import { RaceBy } from "@uiball/loaders";

// Component
import { Container, Typography } from "@mui/material";

const LoadingPage = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: "#aaa", letterSpacing: 7 }}
        gutterBottom
      >
        EMP33
      </Typography>
      <RaceBy size={100} lineWeight={7} speed={2} color="white" />;
    </Container>
  );
};

export default LoadingPage;
