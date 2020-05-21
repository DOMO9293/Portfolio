import React from "react";
import styled from "styled-components";
import { setColor } from "../../styles";
import { Link } from "react-router-dom";

const Nav = ({ className }) => {
  return (
    <nav className={className}>
      <ul>
        <li>
          <Link className={"text-link"} to="/about">
            about
          </Link>
        </li>
        <li>
          <Link className={"text-link"} to="/work">
            work
          </Link>
        </li>
        <li>contact</li>
      </ul>
      <Link className={"right"} to="/">
        home
      </Link>
    </nav>
  );
};

const StyledNav = styled(Nav)`
  position: absolute;
  top: 2%;
  left: 2%;
  font-size: 1.2em;
  text-decoration: none;
  ul li {
    list-style: none;
    float: left;
    width: 100px;
    color: ${setColor.mainGrey};
  }
  .text-link {
    text-decoration: none;
    color: inherit;
  }
  .right {
    position: absolute;
    text-decoration: none;
    color: ${setColor.mainGrey};
    color: "white";
    left: 91vw;
  }
  ul li:hover {
    text-decoration: underline;
  }
`;

export default StyledNav;
