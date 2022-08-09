import styled from "styled-components";

export const NavContainer = styled.nav`
  color: #eee;
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 900px) {
    width: 90%;
  }

  & > ul {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin: 0;
    & li {
      list-style: none;
      padding: 0.5rem;
      font-size: 18px;

      & > h5 {
        margin: 0 1rem 0 0;
        font-size: 22px;
      }
    }
    & > a {
      text-decoration: none;
      color: #fff;
    }
    .active-nav {
      color: var(--color-text);
    }
  }

  & > div {
    display: flex;
  }
`;

export const IconButton = styled.button`
  border-radius: 50%;
  padding: 8px;
  font-size: 18px;
  background: none;
  border: 2px solid #eee;
  color: #fff;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px 0 8px;
  cursor: pointer;
`;
