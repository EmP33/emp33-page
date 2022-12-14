import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";
// Store
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { uiActions } from "../../store/uiSlice";

// Components
import Appbar from "../../components/Appbar/Appbar";
import Work from "./Work";
import LoadingPage from "../LoadingPage/LoadingPage";
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

  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 16.9vw;
  }
  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 25.2vw;
  }
  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 48vw;
  }
`;

const WorksPage = () => {
  const dispatch = useAppDispatch();
  const [works, setWorks] = useState<WorkType[]>([]);
  const loading = useAppSelector((state) => state.ui.loading);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(uiActions.switchLoading(true));
    setTimeout(() => {
      dispatch(uiActions.switchLoading(false));
    }, 2000);
  }, []);

  const worksRef = ref(database, "/works");
  onValue(worksRef, (snapshot) => {
    const data = snapshot.val();
    if (!works.length) setWorks(data);
  });

  if (loading) {
    return <LoadingPage />;
  }

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
