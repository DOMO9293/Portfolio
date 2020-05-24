import React, { Suspense, useRef, useCallback, useState } from "react";
import Header from "../components/home/Header";
import Sphere from "../components/home/Sphere";
import { Text } from "../components/Work/Text";
import { Canvas, Dom } from "react-three-fiber";
import styled from "styled-components";
import { setColor } from "../styles";

import { Redirect } from "react-router-dom";

const Info = styled.div`
  position: absolute;
  display: inline;
  color: ${setColor.blue};
  top: 93%;
  left: 45%;
  text-align: center;
`;
const Home = () => {
  const mouse = useRef([0, 0]);
  const [clicked, setClicked] = useState(false);
  const [moveto, setMoveto] = useState(false);
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => {
    mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2];
  }, []);
  const onClick = () => {
    setClicked(true);
    setTimeout(() => setMoveto(true), 3000);
  };

  return (
    <>
      <Info>click anywhere!</Info>
      <Canvas
        camera={{ position: [0, 0, 200] }}
        shadowMap
        onMouseMove={onMouseMove}
        onClick={onClick}
      >
        <ambientLight />
        <Suspense
          fallback={<Dom center className="loading" children="Loading..." />}
        >
          <Sphere mouse={mouse} onMouseMove={onMouseMove} clicked={clicked} />
          <Text
            left
            size={10}
            position={[0, 10, 0]}
            color={setColor.mainGrey}
            index={99}
          >
            Jaesook Jeong
          </Text>
        </Suspense>
      </Canvas>

      {moveto && <Redirect to="/portfolio/work" />}
    </>
  );
};
export default Home;
