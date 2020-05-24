import React from "react";
import styled from "styled-components";
import { setColor } from "../../styles";

const Header = ({ className }) => {
  return <h1 className={className}>Jaesook Jeong</h1>;
};

const Select = styled(Header)`
  color: ${setColor.mainGrey};
  top: 45vh;
  left: 50vw;
  transform: translate(-52%, 0%);
  font-size: 6em;
`;

export default Select;
