import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background: var(--color-primary-light);
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  color: #fff;
  cursor: pointer;

  &:hover {
    filter: brightness(105%);

    h4 {
      text-decoration: underline;
    }
  }

  p:first-child {
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 1px;
    display: flex;
    justify-content: space-between;

    span {
      text-transform: capitalize;
      font-size: 10px;
      border-radius: 20px;
      background: var(--color-text);
      padding: 5px;

      &:hover {
        filter: brightness(90%);
      }
    }
  }
  p:last-child {
    color: var(--color-text);
  }
`;
