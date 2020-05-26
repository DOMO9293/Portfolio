import React from "react";
import state from "../components/globals/store";
import styled from "styled-components";
import Header from "../components/details/Header.js";

const Gallery = styled.div`
  display: ${"grid" | "inline-grid"};
`;

const paragraph = ({ match }) => {
  return <div></div>;
};

const Details = ({ match }) => {
  console.log("gg", match.params.index);
  let str = state.paragraphs[parseInt(match.params.index)].header;
  let text = state.paragraphs[parseInt(match.params.index)].detailedtext;

  return (
    <div>
      <Header str={str} text={text} />

      {state.paragraphs[parseInt(match.params.index)].details.map((data, i) => (
        <img src={data} key={i} alt="" />
      ))}
    </div>
  );
};

export default Details;
