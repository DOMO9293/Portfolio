import React, { Suspense, useEffect, useRef, useMemo, useState } from "react";
import {
  Canvas,
  Dom,
  useLoader,
  useFrame,
  extend,
  useThree,
} from "react-three-fiber";
import { TextureLoader, LinearFilter } from "three";
import lerp from "lerp";
import { Text, MultilineText } from "../components/Work/Text";
import { Block, useBlock } from "../components/Work/Container";
import state from "../components/globals/store";
import styled from "styled-components";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { setColor } from "../styles";
import Plane from "../components/Work/Plane";
import { Redirect } from "react-router-dom";
import { HTML } from "drei";

//import cursor from "../components/Work/circles.png"

function Paragraph({ index, offset, factor, header, aspect, text, image }) {
  const { contentMaxWidth: w, canvasWidth, margin, mobile } = useBlock();
  const size = aspect < 1 && !mobile ? 0.65 : 1;
  const alignRight = (canvasWidth - w * size - margin) / 2;
  const pixelWidth = w * state.zoom * size;
  const left = !(index % 2);
  console.log(left);
  const color = setColor.mainGrey;

  return (
    <Block factor={factor} offset={offset}>
      <group position={[left ? -alignRight : alignRight, 0, 0]}>
        <Plane
          map={image}
          args={[1, 1, 32, 32]}
          shift={75}
          size={size}
          aspect={aspect}
          scale={[w * size, (w * size) / aspect, 1]}
          frustumCulled={false}
          index={index}
        />

        <HTML
          style={{
            width: pixelWidth / (mobile ? 1 : 2),
            textAlign: left ? "left" : "right",
            color: setColor.mainGrey,
            fontSize: 20,
          }}
          position={[
            left || mobile ? (-w * size) / 2 : 0,
            (-w * size) / 2 / aspect - 0.4,
            1,
          ]}
        >
          <div tabIndex={index}>{text}</div>
        </HTML>
        <HTML
          style={{
            width: pixelWidth / (mobile ? 1 : 2),
            textAlign: left ? "left" : "right",
            fontSize: 60,
            fontWeight: "800",
            color: setColor.mainGrey,
          }}
          position={[
            left ? (-w * size) / 2 : (w * size) / 2 - 9.5,
            (w * size) / aspect / 2 + 1.1,
            -1,
          ]}
        >
          <div>{header}</div>
        </HTML>
        <Block factor={0.2}>
          <Text
            opacity={0.5}
            size={w * 0.1}
            color={setColor.primaryColor}
            position={[
              ((left ? w : -w) / 2) * size,
              (w * size) / aspect / 1.5,
              -10,
            ]}
          >
            {"0" + (index + 1)}
          </Text>
        </Block>
        <Block factor={0.2}>
          <Text
            opacity={0.5}
            size={w * 0.05}
            color={setColor.blue}
            position={[
              left ? (w / 2) * size + alignRight : (-w / 2) * size - alignRight,
              (w * size) / aspect / 1 - 10,
              -10,
            ]}
          >
            repo
          </Text>
        </Block>
      </group>
    </Block>
  );
}

function Content() {
  return (
    <>
      {state.paragraphs.map((props, index) => (
        <Paragraph key={index} index={index} {...props} />
      ))}
    </>
  );
}

export default function Work() {
  const [redirect, setRedirect] = useState([false, null]);
  //const [index, setIndex] = useState(null);

  const scrollArea = useRef();
  const onScroll = (e) => (state.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);
  const onClick = (e) => {
    //setIndex(index);
    console.log(e.target.id);
    if (e.target.id !== "00") {
      setRedirect([true, e.target.id]);
    }
  };
  return (
    <>
      <Canvas
        concurrent
        pixelRatio={1}
        orthographic
        camera={{ zoom: state.zoom, position: [0, 0, 500] }}
      >
        <Suspense
          fallback={<HTML center className="loading" children="Loading..." />}
        >
          <Content />
        </Suspense>
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        {new Array(state.sections).fill().map((_, index) => (
          <Section key={index} id={"0" + index} onClick={onClick} />
        ))}
      </div>
      {redirect[0] && <Redirect to={`/details/${redirect[1]}`} />}
    </>
  );
}

const Section = styled.div`
  height: ${(state.pages / state.sections) * 100}vh;
  cursor: url("/cursor5.png"), auto;
`;
