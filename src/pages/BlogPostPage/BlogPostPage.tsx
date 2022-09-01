import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";
import format from "date-fns/format";
// Store
import { useAppDispatch } from "../../lib/hooks";
import { uiActions } from "../../store/uiSlice";
// Components
import Appbar from "../../components/Appbar/Appbar";

// Type
import { PostType } from "../../data.types";
// Styles
import { Container, PostContainer } from "./BlogPostPage.styles";

const BlogPostPage = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const [post, setPost] = useState<PostType | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(uiActions.switchLoading(true));
    setTimeout(() => {
      dispatch(uiActions.switchLoading(false));
    }, 2000);
  }, []);

  const postRef = ref(database, `/blog/${params.blogID}`);
  onValue(postRef, (snapshot) => {
    const data = snapshot.val();
    if (!post) setPost(data);
  });

  return (
    <Container>
      <Appbar />

      <PostContainer>
        {post && (
          <>
            <p className="author">
              Marek Purwin <span className="category">{post.category}</span>
            </p>
            <p>
              {format(new Date(post.date), "dd MMM yyyy")} &sdot;{" "}
              {post.readTime} min read
            </p>
            <h1>{post.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: post?.body }}></p>
          </>
        )}
      </PostContainer>
    </Container>
  );
};

export default BlogPostPage;
