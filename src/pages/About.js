import React, { useRef, useEffect } from "react";
import Element from "../components/about/Element";
import AboutText from "../components/about/AboutText";
import state from "../components/globals/store";
import { Canvas } from "react-three-fiber";
import { setColor } from "../styles";
import styled from "styled-components";

function Parahps({ isbold }) {
  let app = useRef(null);
  let whami = state.about.whoami;
  let promo = state.about.promo;
  let skills = state.about.skills;
  let contacts = state.about.contact;

  useEffect(() => {
    console.log(app);
  });
  return (
    <div ref={app}>
      <AboutText isbold top={18} left={35} color={setColor.blue}>
        Who am I?
      </AboutText>
      <AboutText top={33} left={35} color={setColor.blue}>
        {whami}
      </AboutText>
      <AboutText isbold top={15} left={65} color={setColor.pink}>
        Skills
      </AboutText>
      <AboutText top={31} left={67} color={setColor.pink}>
        <ul>
          {skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </AboutText>
      <AboutText isbold top={73} left={35} color={setColor.primaryColor}>
        {promo}
      </AboutText>
      <AboutText top={73} left={67} color={setColor.mainGrey}>
        <ul>
          {contacts.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </AboutText>
    </div>
  );
}
function About() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 350] }} shadowMap>
        <ambientLight />

        <Element />
      </Canvas>

      <Parahps />
    </>
  );
}

export default About;

const Wrapper = styled.div``;
