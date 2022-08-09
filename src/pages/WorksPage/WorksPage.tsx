import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";
// Components
import Appbar from "../../components/Appbar/Appbar";
import Work from "./Work";
// Type
import { WorkType } from "../../data.types";

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
`;

const WorksContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 12.7vw;
  justify-content: center;
`;

const WorksPage = () => {
  const [works, setWorks] = useState<WorkType[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const worksRef = ref(database, "/works");
  onValue(worksRef, (snapshot) => {
    const data = snapshot.val();
    if (!works.length) setWorks(data);
  });

  return (
    <Container>
      <Appbar />
      <WorksContainer>
        {works.map((work: WorkType) => (
          <Work key={work.id} work={work} />
        ))}
      </WorksContainer>
    </Container>
  );
};

export default WorksPage;
