import React from "react";
import { useNavigate } from "react-router-dom";
import format from "date-fns/format";
//Types
import { PostType } from "../../../data.types";
// Styles
import { Container } from "./BlogPostElement.styles";

interface Props {
  post: PostType;
}

const listVariant = {
  hidden: {
    y: "5vh",
    opacity: 0,
  },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.1 },
  }),
};

const BlogPostElement: React.FC<Props> = ({ post }) => {
  const navigate = useNavigate();
  return (
    <Container
      onClick={() => navigate(`/blog/${post.id}`)}
      custom={post.id}
      variants={listVariant}
      initial="hidden"
      animate="visible"
    >
      <p>
        Marek Purwin <span>{post.category}</span>
      </p>
      <h4>{post.title}</h4>
      <p>
        {format(new Date(post.date), "dd MMM yyyy")} &sdot; {post.readTime} min
        read
      </p>
    </Container>
  );
};

export default BlogPostElement;
