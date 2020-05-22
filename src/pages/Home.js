import React, { Suspense, useRef, useCallback, useState } from "react";
import Header from "../components/home/Header";
import Sphere from "../components/home/Sphere";
import { Text } from "../components/Work/Text";
import { Canvas, Dom } from "react-three-fiber";
import { setColor } from "../styles";
import { useBlock } from "../components/Work/Container";
import { Redirect } from "react-router-dom";

const Home = () => {
  const mouse = useRef([0, 0]);
  const [clicked, setClicked] = useState(false);
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => {
    mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2];
  }, []);

  return (
    <>
      <Canvas
        camera={{ position: [0, 0, 200] }}
        shadowMap
        onMouseMove={onMouseMove}
      >
        <ambientLight />
        <Suspense
          fallback={<Dom center className="loading" children="Loading..." />}
        >
          <Sphere mouse={mouse} onMouseMove={onMouseMove} />
          <Text
            left
            size={10}
            position={[0, 10, 0]}
            color={setColor.mainGrey}
            index={99}
            setClicked={setClicked}
          >
            Jaesook Jeong
          </Text>
        </Suspense>
      </Canvas>
      {clicked && <Redirect to="/portfolio/work" />}
    </>
  );
};
export default Home;
