import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";
// Components
import Appbar from "../../components/Appbar/Appbar";
import { Box, Typography, Button } from "@mui/material";
// Type
import { WorkType } from "../../data.types";
// Icons
import { FiGithub } from "react-icons/fi";

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
`;

const WorkPage = () => {
  const navigate = useNavigate();
  const [work, setWork] = useState<WorkType | null>(null);
  const params = useParams();
  const workRef = ref(database, `/works/${params.workID}`);
  useEffect(() => {
    onValue(workRef, (snapshot) => {
      const data = snapshot.val();
      if (!work) setWork(data);
    });
  }, []);

  return (
    <Container>
      <Appbar />
      {work ? (
        <Box
          sx={{
            p: { xs: 1, sm: 4 },
            background: "var(--color-primary-dark)",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2,1fr)" },
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <Box sx={{ gridRow: { xs: "2/3", md: "1/2" }, mt: { xs: 5, md: 0 } }}>
            <img src={work.image} alt="work" style={{ width: "100%" }} />
          </Box>
          <Box sx={{ color: "var(--color-text)", pl: { xs: 1, sm: 4 } }}>
            <Typography variant="h2">{work.title}</Typography>
            <Typography variant="body1">{work.description}</Typography>
            <Box
              sx={{
                mt: 4,
                display: "grid",
                gridTemplateColumns: "repeat(2,max-content)",
                gridColumnGap: 17,
                justifyContent: "flex-end",
              }}
            >
              <a
                href={work.link}
                rel="noreferrer"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Button variant="contained" size="large" color="secondary">
                  Show Project!
                </Button>
              </a>
              <a
                href={work.ghlink}
                rel="noreferrer"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Button variant="contained" size="large" endIcon={<FiGithub />}>
                  Github
                </Button>
              </a>
            </Box>
          </Box>
        </Box>
      ) : (
        ""
      )}
    </Container>
  );
};

export default WorkPage;
