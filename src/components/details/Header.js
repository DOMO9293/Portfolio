import React from "react";
import styled from "styled-components";
import { setColor } from "../../styles";

const Styledheader = styled.div`
  height: 100vh;
  color: ${setColor.primaryColor};
  display: flex;

  text-align: center;
  h1 {
    position: absolute;
    top: 40vh;
    width: 100vw;
    font-size: 6rem;
  }
  p {
    position: absolute;
    font-size: 1rem;
    font-style: italic;
    top: 50vh;
    width: 100vw;
  }
`;

function Header({ str, text }) {
  return (
    <Styledheader>
      <h1>{str}</h1>

      <p>{text}</p>
    </Styledheader>
  );
}

export default Header;
