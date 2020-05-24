import { TextureLoader } from "three";
import React, { useRef, forwardRef } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import lerp from "lerp";
import state from "../globals/store";
import { useBlock } from "./Container";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib";

RectAreaLightUniformsLib.init();
const Plane = forwardRef(
  ({ color = "white", shift = 1, opacity = 1, args, map, ...props }, ref) => {
    const { viewportHeight, offsetFactor } = useBlock();
    const immg = useLoader(TextureLoader, map);

    const material = useRef();
    let last = state.top.current;
    useFrame(() => {
      const { pages, top } = state;
      material.current.scale = lerp(
        material.current.scale,
        offsetFactor - top.current / ((pages - 1) * viewportHeight),
        0.1
      );
      material.current.shift = lerp(
        material.current.shift,
        (top.current - last) / shift,
        0.1
      );
      last = top.current;
    });
    return (
      <>
        <mesh ref={ref} {...props}>
          <meshBasicMaterial
            ref={material}
            attach="material"
            map={immg}
            transparent
          />
          <planeBufferGeometry attach="geometry" args={args} transparent />
        </mesh>
      </>
    );
  }
);

export default Plane;
