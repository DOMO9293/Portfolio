import styled from "styled-components";

import React, { useEffect, useRef, useState } from "react";
import { setColor } from "../../styles";

const StyledCursor = styled.div`
  pointer-events: none;
  width: 50px;
height: 50px;
position: fixed;
padding: 0.3rem;
border: 1px solid ${(props) => props.color};
box-shadow: 1px 1px;
border-radius: 50%;
opacity: 70%;
mix-blend-mode: difference;
transition: transform 1s ease;
transform: translate(-50%, -50%);
 /*  width: 50px;
  height: 50px;
  position: fixed;

  border: 1px dashed ${setColor.blue};
  border-radius: 50%;
  opacity: 70%;
  mix-blend-mode: difference;
  transition: 0.01s; */
  /*  animation: animate 10s linear infinite;
  
  @keyframes animate {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  } */
`;

function Cursor() {
  const cursorpos = useRef();
  const [cursorcolor, setCursorcolor] = useState(setColor.blue);
  const onMove = (e) => {
    const { clientX: x, clientY: y } = e;
    if (cursorpos.current) {
      cursorpos.current.style.left = x + "px";
      cursorpos.current.style.top = y + "px";
    }
  };
  useEffect(() => {
    window.addEventListener("pointermove", onMove);
    void setInterval(
      () =>
        setCursorcolor(
          setColor[
            Object.keys(setColor)[
              Math.floor(Math.random() * Object.keys(setColor).length)
            ]
          ]
        ),
      10000
    );
  }, []);
  return <StyledCursor ref={cursorpos} color={cursorcolor} />;
}

export default Cursor;
/* width: 30px;
height: 30px;
position: fixed;
padding: 0.3rem;
background-color: ${setColor.blue};
border-radius: 50%;
opacity: 70%;
mix-blend-mode: difference;
transition: transform 0.3s ease; */
