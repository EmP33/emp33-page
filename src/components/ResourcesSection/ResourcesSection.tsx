import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
// Components
import { Button, Box } from "@mui/material";
import Resource from "./Resource";
// Types
import { ResourceType } from "../../data.types";

const Container = styled.div`
  width: 100%;
  overflow: hidden;

  & article {
    color: #fff;
    display: grid;
    grid-template-columns: 1fr max-content;
    margin: 16px 64px 0 64px;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 900px) {
      grid-template-columns: 1fr;
      margin: 16px 12px 0 24px;
      justify-items: left;
    }

    &:after {
      content: "Resources";
      font-size: 225px;
      font-weight: bold;
      position: absolute;
      right: 0;
      color: rgba(255, 255, 255, 0.1);
      z-index: -1;

      @media only screen and (max-width: 1200px) {
        font-size: 200px;
      }

      @media only screen and (max-width: 900px) {
        content: "";
      }
    }

    & > div {
      width: 95%;
    }

    & h2 {
      margin: 0;
      padding: 0;
      font-size: 62px;

      @media only screen and (max-width: 600px) {
        font-size: 48px;
      }
    }

    & p {
      @media only screen and (max-width: 600px) {
        font-size: 16px;
      }
    }
  }
`;
const ResourcesSection = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const mediumMatches = useMediaQuery(theme.breakpoints.up("md"));
  const xsMatches = useMediaQuery(theme.breakpoints.up("sm"));
  const [resources, setResources] = useState<ResourceType[]>([]);
  const [displayResources, setDisplayResources] = useState<ResourceType[]>([]);
  const resourcesRef = ref(database, "/resources");
  onValue(resourcesRef, (snapshot) => {
    const data = snapshot.val();
    if (!resources.length) setResources(data);
  });

  useEffect(() => {
    if (!xsMatches) {
      setDisplayResources(
        resources
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a: any, b: any) => a.sort - b.sort)
          // @ts-ignore
          .map(({ value }) => value)
          .slice(0, 5)
      );
    } else if (!mediumMatches) {
      setDisplayResources(
        resources
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a: any, b: any) => a.sort - b.sort)
          // @ts-ignore
          .map(({ value }) => value)
          .slice(0, 8)
      );
    } else {
      setDisplayResources(
        resources
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a: any, b: any) => a.sort - b.sort)
          // @ts-ignore
          .map(({ value }) => value)
          .slice(0, 12)
      );
    }
  }, [resources]);

  return (
    <Container id="resource">
      <article>
        <div>
          <h2 data-aos="fade-right">Resources</h2>
          <p data-aos="fade-right">
            Here are the resources that I have used in my work and that I just
            like to use
          </p>
        </div>
        <Button
          variant="contained"
          data-aos="fade-left"
          color="primary"
          size="large"
          sx={{ p: "10px 40px 10px 40px", letterSpacing: 2 }}
          onClick={() => navigate("/resources")}
        >
          See all!
        </Button>
      </article>
      <Box
        data-aos="fade-up"
        sx={{
          display: "grid",
          margin: { xs: "12px", md: "32px 64px 0 64px" },
          gridTemplateColumns: {
            xs: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
          },
          columnGap: 5,
          rowGap: 3,
          justifyContent: "center",
          p: { xs: 0, sm: 2 },
        }}
      >
        {displayResources.map((resource) => (
          <Resource key={resource.id} resource={resource} />
        ))}
      </Box>
    </Container>
  );
};

export default ResourcesSection;
