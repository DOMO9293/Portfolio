import React, { Suspense } from "react";
import Element from "../components/about/Element";
import AboutText from "../components/about/AboutText";
import { Canvas, Dom } from "react-three-fiber";

function About() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 350] }} shadowMap>
        <ambientLight />

        <Element />
      </Canvas>
      <AboutText />
    </>
  );
}

export default About;
