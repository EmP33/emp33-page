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
  display: grid;
  grid-template-rows: max-content 1fr;
  align-items: center;
`;

const TechnologiesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  padding: 0;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  li {
    position: relative;
    letter-spacing: 1px;
    padding-left: 20px;
    font-size: 15px;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 10px;
      height: 10px;
      background: var(--color-secondary);
      clip-path: polygon(0 0, 0 100%, 100% 50%);
    }
  }
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
          }}
        >
          <Box
            sx={{
              gridRow: { xs: "2/3", md: "1/2" },
              mt: { xs: 5, md: 0 },
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={work.image} alt="work" style={{ width: "100%" }} />
          </Box>
          <Box sx={{ color: "var(--color-text)", pl: { xs: 1, sm: 4 } }}>
            <Typography variant="h2">{work.title}</Typography>
            <Typography variant="body1">{work.description}</Typography>
            <TechnologiesList>
              {work.topics.map((topic, i) => (
                <li key={`${topic}-${i}`}>{topic}</li>
              ))}
            </TechnologiesList>
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
