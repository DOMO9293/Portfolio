import React from "react";
import styled, { css } from "styled-components";
const StyledText = styled.div`
  color: ${(props) => props.color};
  position: absolute;
  top: ${(props) => props.top}vh;
  left: ${(props) => props.left}vw;
  font-weight: ${(props) => (props.isbold ? "700" : "200")};
  max-width: 400px;
  transform: translate(-50%, -50%);
`;

function AboutText({ children, isbold, top, left, color }) {
  return (
    <StyledText top={top} left={left} isbold={isbold} color={color}>
      {children}
    </StyledText>
  );
}

export default AboutText;
