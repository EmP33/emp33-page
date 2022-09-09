import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
`;

export const PostContainer = styled.div`
  width: 45%;
  justify-content: center;
  margin: 1.5rem auto 0;
  color: #fff;

  @media only screen and (max-width: 1200px) {
    width: 65%;
  }
  @media only screen and (max-width: 600px) {
    width: 85%;
  }
  @media only screen and (max-width: 400px) {
    width: 92.5%;
  }

  .author {
    display: flex;
    align-items: center;
  }

  & > p {
    margin: 0 0 5px 0;
    word-break: break-all;

    a {
      color: var(--color-secondary);
    }

    &:nth-child(2) {
      color: var(--color-text);
      font-weight: bold;
    }
    .category {
      text-transform: capitalize;
      font-size: 14px;
      border-radius: 20px;
      background: var(--color-text);
      padding: 5px;
      margin-left: 1rem;

      &:hover {
        filter: brightness(90%);
      }
    }
  }

  & img {
    object-fit: cover;
    width: 100%;
  }

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
