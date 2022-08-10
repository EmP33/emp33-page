import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { uiActions } from "../../store/uiSlice";
// Components
import Appbar from "../../components/Appbar/Appbar";
import { Box } from "@mui/material";
import Resource from "../../components/ResourcesSection/Resource";
import ResourceSidebar from "../../components/ResourceSidebar/ResourceSidebar";
// Types
import { ResourceType } from "../../data.types";
import LoadingPage from "../LoadingPage/LoadingPage";

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
`;

const ResourcesPage = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.ui.loading);

  const [resources, setResources] = useState<ResourceType[]>([]);

  const resourcesRef = ref(database, "/resources");
  onValue(resourcesRef, (snapshot) => {
    const data = snapshot.val();
    if (!resources.length) setResources(data);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(uiActions.switchLoading(true));
    setTimeout(() => {
      dispatch(uiActions.switchLoading(false));
    }, 2000);
  }, []);

  // if (loading) {
  //   return <LoadingPage />;
  // }

  return (
    <Container>
      <Appbar />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "max-content 1fr" },
          columnGap: 5,
        }}
      >
        <ResourceSidebar resources={resources} />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1,1fr)",
              sm: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
            },
            gridTemplateRows: "max-content",
            columnGap: 5,
            rowGap: 3,
            justifyContent: "center",
            p: 2,
          }}
        >
          {params.resourceName
            ? resources
                .filter(
                  (resource) =>
                    resource.category.toLowerCase() === params.resourceName
                )
                .map((resource) => (
                  <Resource key={resource.id} resource={resource} />
                ))
            : resources.map((resource) => (
                <Resource key={resource.id} resource={resource} />
              ))}
        </Box>
      </Box>
    </Container>
  );
};

export default ResourcesPage;
