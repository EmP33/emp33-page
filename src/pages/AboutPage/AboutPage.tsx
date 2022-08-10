import React, { useEffect } from "react";
import styled from "styled-components";
import Appbar from "../../components/Appbar/Appbar";
// Store
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { uiActions } from "../../store/uiSlice";
// Components
import LoadingPage from "../LoadingPage/LoadingPage";

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
`;

const AboutPage = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.ui.loading);

  useEffect(() => {
    dispatch(uiActions.switchLoading(true));
    setTimeout(() => {
      dispatch(uiActions.switchLoading(false));
    }, 2000);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }
  return (
    <Container>
      <Appbar />
    </Container>
  );
};

export default AboutPage;
