import React from "react";
import store from "../components/globals/store";

const Details = ({ match }) => {
  return <div>{match.params.index}</div>;
};

export default Details;
