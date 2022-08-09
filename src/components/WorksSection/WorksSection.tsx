import React from "react";
import { useNavigate } from "react-router-dom";
// Components
import { Button } from "@mui/material";
import Works from "./Works";
// Styles
import { Container } from "./WorkSection.styles";

const WorksSection = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <article>
        <div>
          <h2>My Portfolio</h2>
          <p>
            Here are my projects that I made during my 3 years of coding
            adventure. After going to the details of the project, the
            technologies used in the project and its description will be
            displayed. To see all projects go to my works page.
          </p>
        </div>
        <Button
          variant="contained"
          color="primary"
          sx={{ p: "10px 40px 10px 40px", letterSpacing: 2 }}
          onClick={() => navigate("/works")}
        >
          See more!
        </Button>
      </article>
      <Works />
    </Container>
  );
};

export default WorksSection;
