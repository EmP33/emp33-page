import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 90%;
  margin: 0 auto;

  &::after {
    content: "ABOUT ME";
    position: absolute;
    width: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 17.5vw;
    font-weight: 900;
    text-align: center;
    color: var(--color-text);
    opacity: 0.05;
    z-index: -5;
  }
`;

export const TechnologiesList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  & > li {
    position: relative;
    padding-left: 20px;
    display: flex;
    align-items: center;

    &:before {
      content: "";
      width: 7.5px;
      height: 7.5px;
      background: var(--color-text);
      clip-path: polygon(0 0, 0% 100%, 100% 50%);
      position: absolute;
      left: 0;
    }
  }
`;

export const HeadingText = styled.h2`
  font-size: 62px;
  margin: 64px 0 0 0;
  padding: 0;
  color: var(--color-text);
`;
