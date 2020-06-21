import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { setColor } from "../../styles";

const Styledheader = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  h1 {
    position: absolute;
    top: 10vh;
    width: 95%;
    font-size: 7rem;
    color: ${setColor.blue};
    opacity: 80%;
    transition: all 0.5s ease;
  }
  p {
    position: absolute;
    font-size: 1.3rem;
    font-style: italic;
    top: 85vh;
    width: 95%;
    color: ${setColor.primaryColor};
    opacity: 90%;
    transition: all 0.5s ease;
  }
  iframe {
    height: 50vh;
    width: 80vh;
  }
`;
const ScrollDown = styled.div`
  position: absolute;
  top: 95vh;
  left: 48vw;
  color: ${setColor.mainGrey};
`;

function Header({ str, text, vid }) {
  return (
    <Styledheader>
      <iframe src={vid} title="vid" />
      <h1>{str}</h1>
      <p>{text}</p>
      <ScrollDown>&#8675; scroll down &#8675;</ScrollDown>
    </Styledheader>
  );
}

export default Header;
