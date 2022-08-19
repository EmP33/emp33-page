import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

// Types
import { ResourceType } from "../../data.types";

const Container = styled.aside`
  width: 100%;

  ul {
    list-style: none;
    color: var(--color-text);
    margin: 0;
    padding-left: 24px;
    display: grid;
    @media only screen and (max-width: 600px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (max-width: 450px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  a {
    text-decoration: none;
  }
  .active {
    background: var(--color-secondary);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  li {
    margin-top: 16px;
    cursor: pointer;
    letter-spacing: 1px;
    position: relative;
    padding-left: 15px;
    font-size: 18px;
    background: linear-gradient(
      to right,
      var(--color-secondary),
      var(--color-secondary) 50%,
      var(--color-text) 50%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 100%;
    transition: background-position 275ms ease;
    text-decoration: none; // text decorations are clipped in WebKit browsers
    &:hover {
      background-position: 0 100%;
    }

    &::before {
      content: "";
      width: 10px;
      height: 10px;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      background: var(--color-secondary);
      clip-path: polygon(0 0, 0% 100%, 100% 50%);
    }
  }
`;

interface Props {
  resources: ResourceType[];
}

const ResourceSidebar: React.FC<Props> = ({ resources }) => {
  const location = useLocation();
  const count: any = {};
  resources.forEach((resource) => {
    count[resource.category] = (count[resource.category] || 0) + 1;
  });

  return (
    <Container>
      <ul>
        {Array.from(
          new Set(resources.map((resource) => resource.category))
        ).map((resource) => (
          <Link to={`/resources/${resource.toLowerCase()}`} key={resource}>
            <li
              className={
                location.pathname.includes(resource.toLowerCase())
                  ? "active"
                  : ""
              }
            >
              {resource} [{count[resource]}]
            </li>
          </Link>
        ))}
      </ul>
    </Container>
  );
};

export default ResourceSidebar;
