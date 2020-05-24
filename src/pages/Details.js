import React from "react";
import state from "../components/globals/store";

const Details = ({ match }) => {
  console.log("gg", match.params.index);
  let str = state.paragraphs[parseInt(match.params.index)].repo;
  return <div>{str}</div>;
};

export default Details;
