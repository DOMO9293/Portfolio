import styled from "styled-components";
import React, { useRef, useEffect } from "react";
import { TweenMax, TimelineLite, Power3 } from "gsap";

const StyledText = styled.div`
  visibility: hidden;
  color: ${(props) => props.color};
  position: absolute;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  font-weight: ${(props) => (props.isbold ? "700" : "200")};
  max-width: 400px;
  transform: translate(-50%, -50%);
`;

function AboutText({ children, isbold, top, left, color }) {
  let load = useRef(null);

  let tl = new TimelineLite();

  useEffect(() => {
    TweenMax.to(load, 2, { css: { visibility: "visible" } });

    tl.from(load, 1, { y: 44, opacity: 0, ease: Power3.easeInOut, delay: 2 });
  });
  return (
    <StyledText
      ref={(el) => (load = el)}
      top={top}
      left={left}
      isbold={isbold}
      color={color}
    >
      {children}
    </StyledText>
  );
}

export default AboutText;
