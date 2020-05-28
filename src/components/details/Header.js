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
    top: 43vh;
    width: 95%;
    font-size: 7rem;
    color: ${setColor.pink};
    opacity: 80%;
    transition: all 0.5s ease;
  }
  p {
    position: absolute;
    font-size: 1.3rem;
    font-style: italic;
    top: 55vh;
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

function Header({ str, text, vid }) {
  return (
    <Styledheader>
      <iframe src={vid} title="vid" />
      <h1>{str}</h1>
      <p>{text}</p>
    </Styledheader>
  );
}

export default Header;
