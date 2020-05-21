import { FontLoader, Vector3, TextBufferGeometry } from "three";
import React, { useCallback, useRef, useState } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import usePromise from "react-promise-suspense";
import lerp from "lerp";
import state from "../globals/store";
import { setColor } from "../../styles";
import bold from "./bold.blob";
import { useSprings, a } from "react-spring/three";
import { Redirect } from "react-router-dom";

function Text({
  children,
  size = 1,
  left,
  right,
  top,
  bottom,
  color = setColor.mainGrey,
  opacity = 1,
  height = 0.01,
  layers = 0,
  index,
  setClicked,
  ...props
}) {
  index = index !== undefined ? index : null;

  const data = useLoader(FontLoader, bold);
  const geom = usePromise(
    () =>
      new Promise((res) =>
        res(
          new TextBufferGeometry(children, {
            font: data,
            size: 1,
            height,
            curveSegments: 32,
          })
        )
      ),
    [children]
  );
  const onUpdate = useCallback(
    (self) => {
      const box = new Vector3();
      self.geometry.computeBoundingBox();
      self.geometry.boundingBox.getSize(box);
      self.position.x = left ? 0 : right ? -box.x : -box.x / 2;
      self.position.y = top ? 0 : bottom ? -box.y : -box.y / 2;
    },
    [left, right, top, bottom]
  );

  const ref = useRef();
  let last = state.top.current;
  useFrame(() => {
    ref.current.shift = lerp(
      ref.current.shift,
      (state.top.current - last) / 100,
      0.1
    );
    last = state.top.current;
  });

  const [movetoNext, setMovetonext] = useState(false);
  /* const main = useSprings({
    size: movetoNext ? 20 : 40,
    rotation: movetoNext ? [0, 0, 0] : [0, 0, 45],
  }); */
  const onClick = (e) => {
    if (index === 99) {
      console.log("yes!!");
      setClicked(true);
    }
  };

  return (
    <>
      <a.group {...props} scale={[size, size, 0.1]} onClick={onClick}>
        <mesh
          geometry={geom}
          onUpdate={onUpdate}
          frustumCulled={false}
          castShadow={true}
          receiveShadow={true}
        >
          <meshBasicMaterial ref={ref} attach="material" color={color} />
        </mesh>
      </a.group>
    </>
  );
}

const MultilineText = ({
  text,
  size = 1,
  lineHeight = 1,
  position = [0, 0, 0],
  ...props
}) =>
  text
    .split("\n")
    .map((text, index) => (
      <Text
        key={index}
        size={size}
        {...props}
        position={[position[0], position[1] - index * lineHeight, position[2]]}
        children={text}
      />
    ));

export { Text, MultilineText };
