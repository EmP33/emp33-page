import styled from "styled-components";

export const Navigation = styled.ul`
  list-style: none;
  margin: 0;
  padding: 32px;

  & li {
    line-height: 1.5;

    & a {
      color: var(--color-text);
      text-decoration: none;
      text-transform: uppercase;
      font-size: 40px;
      font-family: var(--font-mono);
      transition: 0.2s linear;
      font-weight: 300;

      &:hover {
        font-weight: 100;
        color: var(--color-secondary);
      }
    }
  }
`;

export const SocialMedia = styled.ul`
  list-style: none;
  margin: 0;
  padding: 12px 16px 12px 16px;
  display: flex;
  column-gap: 15px;
  border-top: 2px solid var(--color-text);
  display: flex;
  justify-content: center;
  align-items: center;

  & > li {
    transition: all 0.2s ease-in-out;

    & > a {
      color: var(--color-text);
      font-size: 26px;
      text-decoration: none;

      &:hover {
        color: var(--color-secondary);
      }
    }
  }
`;
