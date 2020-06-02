import React, { useRef, useEffect, useState } from "react";
import { useFrame, useThree, extend } from "react-three-fiber";
import * as perlin from "../globals/perlin";
import Circle from "../globals/Circle";

function MovingRounds() {
  let ref = useRef();

  let rate = 0;

  useFrame((state, delta) => {
    rate = requestAnimationFrame(Element);
    if (ref.current.children) {
      for (let j = 0; j < ref.current.children.length; j++) {
        let line = ref.current.children[j];

        for (let i = 0; i <= line.userData.verticesAmount; i++) {
          let vector = line.geometry.vertices[i];
          let ratio =
            perlin.noise.simplex3(
              vector.x * 0.009,
              vector.z * 0.009 + rate * 0.006,
              line.geometry.y * 0.009
            ) * 3;
          vector.copy(vector._o); //?
          vector.multiplyScalar(100 + ratio);
        }
        line.geometry.verticesNeedUpdate = true;
      }
    }
  });
  return (
    <group ref={ref} rotation={[1.55, 0, 0]}>
      <Circle
        movement
        moveto={[
          { x: -120, z: 120 },
          { x: 120, z: 120 },
          { x: -120, z: -120 },
          { x: 120, z: -120 },
        ]}
      />
    </group>
  );
}

export default function Element() {
  return <MovingRounds />;
}
