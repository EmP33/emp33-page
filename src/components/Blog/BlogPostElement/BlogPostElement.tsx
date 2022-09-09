import React from "react";
import { useNavigate } from "react-router-dom";
import format from "date-fns/format";
//Types
import { PostType } from "../../../data.types";
// Styles
import { Container } from "./BlogPostElement.styles";

interface Props {
  post: PostType;
  length: number;
}

const listVariant = {
  hidden: {
    y: "5vh",
    opacity: 0,
  },
  visible: ({ index, length }: { index: number; length: number }) => ({
    y: 0,
    opacity: 1,
    transition: { delay: length / 10 - index / 10 },
  }),
};

const BlogPostElement: React.FC<Props> = ({ post, length }) => {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => navigate(`/blog/${post.id}`)}
      custom={{ index: post.id, length: length }}
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
