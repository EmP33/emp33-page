import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// Components
import { Box } from "@mui/material";
import Work from "./Work";
// Types
import { WorkType } from "../../data.types";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-column-gap: 9vw;
  grid-row-gap: 7.6vw;
  grid-template-columns: repeat(6, 10vw);
  grid-auto-rows: 5vw;
  justify-content: center;
  margin-top: 125px;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(5, 12.5vw);
    grid-column-gap: 11.3vw;
    grid-row-gap: 10vw;
    grid-auto-rows: 6.5vw;
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(4, 15vw);
    grid-column-gap: 13.6vw;
    grid-row-gap: 12.6vw;
    grid-auto-rows: 8vw;
  }

  @media only screen and (max-width: 750px) {
    grid-template-columns: repeat(3, 23vw);
    grid-column-gap: 21vw;
    grid-row-gap: 20.25vw;
    grid-auto-rows: 13vw;
    margin-bottom: 60px;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1vw;
    grid-row-gap: 1vw;
    grid-auto-rows: 30vw;
    margin-top: 30px;
  }
  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-column-gap: 32vw;
    grid-row-gap: 1vw;
    grid-auto-rows: 50vw;
  }
`;

const Works = () => {
  const theme = useTheme();
  const mediumMatches = useMediaQuery(theme.breakpoints.up("md"));
  const xsMatches = useMediaQuery(theme.breakpoints.up("sm"));
  const [works, setWorks] = useState<WorkType[]>([]);
  const [displayWorks, setDisplayWorks] = useState<WorkType[]>([]);
  const worksRef = ref(database, "/works");
  onValue(worksRef, (snapshot) => {
    const data = snapshot.val();
    if (!works.length) setWorks(data);
  });

  useEffect(() => {
    if (!xsMatches) {
      setDisplayWorks(
        works
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a: any, b: any) => a.sort - b.sort)
          // @ts-ignore
          .map(({ value }) => value)
          .slice(0, 5)
      );
    } else if (!mediumMatches) {
      setDisplayWorks(
        works
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a: any, b: any) => a.sort - b.sort)
          // @ts-ignore
          .map(({ value }) => value)
          .slice(0, 12)
      );
    } else {
      setDisplayWorks(
        works
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a: any, b: any) => a.sort - b.sort)
          // @ts-ignore
          .map(({ value }) => value)
          .slice(0, 18)
      );
    }
  }, [works]);
  return (
    <Container>
      {displayWorks.map((work: WorkType) => (
        <Work key={work.id} work={work} />
      ))}
    </Container>
  );
};

export default Works;
