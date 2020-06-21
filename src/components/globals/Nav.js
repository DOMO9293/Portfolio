import React from "react";
import styled from "styled-components";
import { setColor } from "../../styles";
import { Link } from "react-router-dom";
import Cursor from "../globals/Cursor";

const Nav = () => {
  return (
    <StyledNav>
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
        <li>
          {" "}
          <div
            className={"text-link"}
            onClick={() =>
              window.open("https://www.linkedin.com/in/jaesook-jeong-7499b71aa")
            }
          >
            contact
          </div>
        </li>
      </ul>
      <Link className={"right text-link"} to="/">
        home
      </Link>
      <Cursor className="cursor" />
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: absolute;
  top: 2%;
  left: 2%;
  font-size: 1.2em;
  text-decoration: none;
  text-align: center;
  /*   display: inline;
 */
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

  .text-link::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: ${setColor.mainGrey};
    transition: width 0.3s;
  }
  .text-link:hover::after {
    width: 100%;
    transition: width 0.3s;
  }
`;

export default Nav;
