import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  & article {
    color: #fff;
    display: grid;
    grid-template-columns: 1fr max-content;
    margin: 16px 64px 0 64px;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 900px) {
      grid-template-columns: 1fr;
      margin: 16px 12px 0 24px;
      justify-items: left;
    }

    &:after {
      content: "Works";
      font-size: 300px;
      font-weight: bold;
      position: absolute;
      right: 0;
      color: rgba(255, 255, 255, 0.1);
      z-index: -1;

      @media only screen and (max-width: 1200px) {
        font-size: 250px;
      }

      @media only screen and (max-width: 900px) {
        content: "";
      }
    }

    & > div {
      width: 95%;
    }

    & h2 {
      margin: 0;
      padding: 0;
      font-size: 62px;

      @media only screen and (max-width: 600px) {
        font-size: 48px;
      }
    }

    & p {
      @media only screen and (max-width: 600px) {
        font-size: 16px;
      }
    }
  }
`;
