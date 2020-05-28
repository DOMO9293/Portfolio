import React, { useEffect, useState } from "react";
import state from "../components/globals/store";
import styled from "styled-components";
import Header from "../components/details/Header.js";
import Section from "../components/details/Section";
import { setColor } from "../styles";

const StyledDetail = styled.div`
  background-color: ${(props) =>
    props.activeBG ? setColor.pink : setColor.mainWhite};
  transition: all 0.5s ease;
`;

const Details = ({ match }) => {
  const [activeBG, setActivBG] = useState(false);

  let str = state.paragraphs[parseInt(match.params.index)].header;
  let text = state.paragraphs[parseInt(match.params.index)].text;

  function bgchanger() {
    if (this.scrollY > this.innerHeight / 2) {
      setActivBG(true);
    } else {
      setActivBG(false);
    }
  }
  //ㅇㅕ기서 화살표로 this찍으면 undefined나온다 화살표함수에서의 this 정리할 것.

  useEffect(() => {
    window.addEventListener("scroll", bgchanger);
    return function cleanup() {
      window.removeEventListener("scroll", bgchanger);
    };
  }, []);
  return (
    <StyledDetail activeBG={activeBG}>
      <Header
        str={str}
        text={text}
        vid={state.paragraphs[parseInt(match.params.index)].vid}
      />
      <Section
        images={state.paragraphs[parseInt(match.params.index)].details}
        description={state.paragraphs[parseInt(match.params.index)].description}
      />
    </StyledDetail>
  );
};

export default Details;
