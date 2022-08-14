import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
`;

export const Header = styled(motion.header)`
  width: 100%;
  height: 95vh;
  color: #fff;
  text-align: center;
  overflow: hidden;
  position: relative;

  &::before,
  &::after {
    position: absolute;
    width: 350px;
    height: 350px;
    content: "";
    border-radius: 54% 46% 42% 58%/60% 58% 42% 40%;
    background-image: linear-gradient(45deg, #ab49de, var(--color-secondary));
    animation: vawe 5s linear infinite;
  }
  &::before {
    top: -10%;
    right: -10%;
  }
  &::after {
    bottom: -10%;
    left: -15%;
  }

  & > .dots {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  & > .dots span {
    position: absolute;
    border-radius: 50%;
    background-image: linear-gradient(45deg, #ab49de, var(--color-secondary));
    border-radius: 38% 62% 55% 45%/32% 53% 47% 68%;
    animation: vawe 7s linear infinite;
  }
  & > .dots span:nth-child(1) {
    top: 10%;
    left: calc(100% - 360px);
    width: 75px;
    height: 75px;
  }
  & > .dots span:nth-child(2) {
    top: 15px;
    left: 180px;
    width: 50px;
    height: 50px;
    border-radius: 38% 62% 33% 67%/60% 53% 47% 40%;
    transform: rotate(90deg);
  }
  & > .dots span:nth-child(3) {
    right: 180px;
    bottom: 20px;
    width: 80px;
    height: 80px;
    border-radius: 38% 62% 55% 45%/52% 53% 47% 48%;
  }
  & > .dots span:nth-child(4) {
    bottom: 50px;
    left: 240px;
    width: 20px;
    height: 20px;
    border-radius: 38% 62% 55% 45%/52% 53% 47% 48%;
  }
  & > .dots span:nth-child(5) {
    right: 280px;
    bottom: 80px;
    width: 25px;
    height: 25px;
    border-radius: 38% 62% 55% 45%/52% 53% 47% 48%;
  }
  & > .dots span:nth-child(6) {
    top: 6%;
    left: calc(100% - 400px);
    width: 25px;
    height: 25px;
  }

  @keyframes vawe {
    20% {
      border-radius: 45% 55% 62% 38%/53% 51% 49% 47%;
    }
    40% {
      border-radius: 45% 55% 49% 51%/36% 51% 49% 64%;
    }
    60% {
      border-radius: 60% 40% 57% 43%/47% 62% 38% 53%;
    }
    80% {
      border-radius: 60% 40% 32% 68%/38% 36% 64% 62%;
    }
  }
`;

export const AnimatedHeading = styled.h2`
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  cursor: pointer;
  &:hover span:nth-child(even) {
    letter-spacing: 0;
  }
  &:hover span:nth-child(2) {
    transition-delay: 0;
  }
  &:hover span:nth-child(4) {
    transition-delay: 0.5s;
  }
  &:hover span:nth-child(6) {
    transition-delay: 1s;
  }
  &:hover span:nth-child(8) {
    transition-delay: 1.5s;
  }

  & > span {
    display: inline-flex;
    color: var(--color-secondary);

    &:nth-child(even) {
      overflow: hidden;
      transition: ease-in-out 0.5s;
      color: #fff;
      border-bottom: 8px solid var(--color-secondary);
      letter-spacing: -1em;

      @media only screen and (max-width: 900px) {
        letter-spacing: 0;
      }
    }
  }
`;

export const SocialList = styled.ul`
  width: 50px;
  height: 200px;
  position: fixed;
  display: flex;
  left: 2%;
  bottom: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 220px;

  @media only screen and (max-width: 600px) {
    display: none;
  }

  &::after {
    content: "";
    width: 1px;
    height: 140px;
    background: var(--color-text);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  & > li {
    margin-bottom: 10px;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: translateY(-3px);
    }
    & > a {
      color: var(--color-text);
      font-size: 22px;
      text-decoration: none;

      &:hover {
        color: var(--color-secondary);
      }
    }
  }
`;

export const EmailWrapper = styled.div`
  width: 50px;
  height: 200px;
  position: fixed;
  display: flex;
  left: 2%;
  top: 0;
  padding: 0;
  margin: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  padding-top: 220px;

  @media only screen and (max-width: 600px) {
    display: none;
  }

  & > p {
    color: var(--color-text);
    transform: rotate(-90deg);
    transition: transform 0.2s ease-in-out;
    &:hover {
      color: var(--color-secondary);
      transform: rotate(-90deg) translateX(-2px);
    }
  }

  &::before {
    content: "";
    width: 1px;
    height: 100px;
    background: var(--color-text);
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;
