import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// Components
import { Button, Box } from "@mui/material";
import Resource from "./Resource";
// Types
import { ResourceType } from "../../data.types";

const Container = styled.div`
  width: 100%;
  overflow: hidden;

  & > article {
    color: #fff;
    display: grid;
    grid-template-columns: 1fr max-content;
    margin: 24px 64px 0 64px;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 600px) {
      margin: 24px 12px 0 12px;
      grid-template-columns: 1fr;
      justify-items: start;
    }

    &:after {
      content: "Resources";
      font-size: 150px;
      font-weight: bold;
      position: absolute;
      right: 0;
      color: rgba(255, 255, 255, 0.1);
      z-index: -1;

      @media only screen and (max-width: 900px) {
        content: "";
      }
    }

    & > div {
      width: 60%;
      @media only screen and (max-width: 900px) {
        width: 100%;
      }
    }

    & h2 {
      font-size: 62px;
      margin: 0;
      padding: 0;
    }
  }
`;
const ResourcesSection = () => {
  const theme = useTheme();

  const mediumMatches = useMediaQuery(theme.breakpoints.up("md"));
  const xsMatches = useMediaQuery(theme.breakpoints.up("sm"));
  const [resources, setResources] = useState<ResourceType[]>([]);
  const [displayResources, setDisplayResources] = useState<ResourceType[]>([]);
  const starCountRef = ref(database, "/resources");
  onValue(starCountRef, (snapshot) => {
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
          <h2>Resources</h2>
          <p>
            Here are the resources that I have used in my work and that I just
            like to use
          </p>
        </div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ p: "10px 40px 10px 40px", letterSpacing: 2 }}
        >
          See all!
        </Button>
      </article>
      <Box
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
          p: 2,
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
