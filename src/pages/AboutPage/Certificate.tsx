import React from "react";
import styled from "styled-components";

interface Props {
  link: string;
}

const CertificateBlock = styled.div`
  position: relative;
  border: 12px solid var(--color-text);
  border-radius: 8px;
  margin: 0 0 32px 16px;
  user-select: none;

  &:hover {
    animation: tilt-n-move-shaking 0.3s infinite;
  }

  &::before {
    width: 50px;
    height: 15px;
    background: var(--color-text);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -27px;
    content: "";
    border-radius: 50% 50% 0 0;
  }
  &::after {
    width: 30px;
    height: 8px;
    background: var(--color-primary);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -20px;
    content: "";
    border-radius: 50% 50% 0 0;
  }

  @keyframes tilt-n-move-shaking {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    25% {
      transform: translate(3px, 3px) rotate(3deg);
    }
    50% {
      transform: translate(0, 0) rotate(0eg);
    }
    75% {
      transform: translate(-3px, 3px) rotate(-3deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }
`;

const Certificate: React.FC<Props> = ({ link }) => {
  return (
    <CertificateBlock>
      <img
        src={link}
        alt="certificate"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />
    </CertificateBlock>
  );
};

export default Certificate;
