import React from "react";
import Element from "../components/about/Element";
import AboutText from "../components/about/AboutText";
import state from "../components/globals/store";
import { Canvas } from "react-three-fiber";
import { setColor } from "../styles";

function Parahps({ isbold }) {
  let whami = state.about.whoami;
  let promo = state.about.promo;
  let skills = state.about.skills;
  let contacts = state.about.contact;

  return (
    <>
      <AboutText isbold top={15} left={37} color={setColor.blue}>
        Who am I?
      </AboutText>
      <AboutText top={30} left={38} color={setColor.blue}>
        {whami}
      </AboutText>
      <AboutText isbold top={15} left={65} color={setColor.pink}>
        Skills
      </AboutText>
      <AboutText top={29} left={63} color={setColor.pink}>
        <ul>
          {skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </AboutText>
      <AboutText isbold top={73} left={35} color={setColor.primaryColor}>
        {promo}
      </AboutText>
      <AboutText top={73} left={64} color={setColor.mainGrey}>
        <ul>
          {contacts.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </AboutText>
    </>
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
