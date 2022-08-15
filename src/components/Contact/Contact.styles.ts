import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  overflow: hidden;
  padding-bottom: 30px;

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

    & > div {
      width: 80%;

      @media only screen and (max-width: 900px) {
        width: 95%;
      }
    }

    & h2 {
      margin: 0;
      padding: 0;
      font-size: 62px;
    }
  }
`;

export const ContactForm = styled.form`
  & ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 10px;
    padding: 0;

    @media only screen and (max-width: 600px) {
      grid-template-columns: 1fr;
    }
    & > li {
      list-style-type: none;
      position: relative;

      &:hover label {
        width: 100%;
      }
    }
    & label {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      transition: 0.2s linear;
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        background: #5b41f2;
      }
    }
  }

  .entire {
    grid-column: 1/-1;
  }

  & .border {
    position: relative;

    &::after {
      transition: 0.2s linear;
      content: "";
      position: absolute;
      width: 0;
      height: 3px;
      background: #5b41f2;
      bottom: 0;
      left: 0;
    }
  }

  .subject-div {
    grid-column: 1/-1;
  }

  & input,
  & textarea {
    min-height: 50px;
    width: 100%;
    padding-left: 10px;
    font-size: 18px;
    background: var(--color-primary-light);
    border: none;
    outline: none;
    color: #fff;

    &:active .border::after {
      width: 100%;
    }
  }
`;
