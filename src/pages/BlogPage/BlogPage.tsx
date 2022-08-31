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
import { PostType } from "../../data.types";
import LoadingPage from "../LoadingPage/LoadingPage";
import BlogPostElement from "../../components/Blog/BlogPostElement/BlogPostElement";

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
`;

const BlogPage = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.ui.loading);

  const [posts, setPosts] = useState<PostType[]>([]);

  const postsRef = ref(database, "/blog");
  onValue(postsRef, (snapshot) => {
    const data = snapshot.val();
    if (!posts.length) setPosts(data);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(uiActions.switchLoading(true));
    setTimeout(() => {
      dispatch(uiActions.switchLoading(false));
    }, 2000);
  }, []);

  //   if (loading) {
  //     return <LoadingPage />;
  //   }

  console.log(posts);

  return (
    <Container>
      <Appbar />
      <Box
        sx={{
          width: { xs: "100%", md: "90%", lg: "75%" },
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1,1fr)",
              sm: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
            },
            gridTemplateRows: "max-content",
            columnGap: 3,
            rowGap: 3,
            justifyContent: "center",
            p: 2,
          }}
        >
          {posts.map((post) => (
            <BlogPostElement post={post} key={post.id} />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default BlogPage;
