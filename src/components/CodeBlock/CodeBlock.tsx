import React from "react";
import styled from "styled-components";
// Components
import { Box } from "@mui/material";

const CodeBlockDiv = styled.div`
  max-width: 600px;
  background: #eee;
  color: #000;
  position: relative;
  text-align: left;
  margin: 0 auto;
  -webkit-box-shadow: 8px 8px 24px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 8px 8px 24px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 8px 8px 24px 0px rgba(0, 0, 0, 0.3);

  &:before {
    content: "";
    width: 100%;
    background: var(--color-primary-light);
    height: 35px;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const CodeBlock = () => {
  return (
    <CodeBlockDiv>
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          display: "grid",
          gridTemplateColumns: "repeat(3,max-content)",
          gridColumnGap: 10,
          p: 1,
        }}
      >
        <span
          style={{
            width: "20px",
            height: "20px",
            background: "#f44336",
            borderRadius: "50%",
          }}
        ></span>
        <span
          style={{
            width: "20px",
            height: "20px",
            background: "#ffeb3b",
            borderRadius: "50%",
          }}
        ></span>
        <span
          style={{
            width: "20px",
            height: "20px",
            background: "#4caf50",
            borderRadius: "50%",
          }}
        ></span>
      </Box>
      <Box sx={{ p: "32px 5px 5px 32px", fontSize: 22 }}>
        <pre>
          const person = &#123;
          <br />
          &nbsp;name&#58; &#34;Marek&#34;&#44;
          <br />
          &nbsp;surname&#58; &#34;Purwin&#34;&#44;
          <br />
          &nbsp;location&#58; &#34;Poland&#34;&#44;
          <br />
          &#125;
        </pre>
      </Box>
    </CodeBlockDiv>
  );
};

export default CodeBlock;
