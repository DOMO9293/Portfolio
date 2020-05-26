import styled from "styled-components";

import React, { useEffect, useRef } from "react";
import { setColor } from "../../styles";

const StyledCursor = styled.div`
  pointer-events: none;
  width: 30px;
  height: 30px;
  position: fixed;
  padding: 0.3rem;
  background-color: ${setColor.blue};
  border-radius: 50%;
  opacity: 70%;
  mix-blend-mode: difference;
  transition: transform 0.3s ease;
`;

function Cursor() {
  const cursorpos = useRef();
  const onMove = (e) => {
    const { clientX: x, clientY: y } = e;
    cursorpos.current.style.left = x + "px";
    cursorpos.current.style.top = y + "px";
  };
  useEffect(() => {
    window.addEventListener("pointermove", onMove);
  }, []);
  return <StyledCursor ref={cursorpos} className="cursor" />;
}

export default Cursor;
