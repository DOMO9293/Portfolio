import React, { useRef } from "react";
import { useFrame, useThree, extend } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as perlin from "../globals/perlin";
import lerp from "lerp";
import Circle from "../globals/Circle";

extend({ OrbitControls });

function Circles({ mouse, clicked }) {
  let ref = useRef();
  let rate = 0;
  const { size, viewport } = useThree();

  const aspect = size.width / viewport.width;

  useFrame((state, delta) => {
    rate = requestAnimationFrame(Sphere);
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
        if (clicked) {
          //line.position.x += 0.5;
          j % 2 === 0
            ? (line.position.y += j * 0.2)
            : (line.position.y -= j * 0.2);

          //line.position.z += 0.5;
          //여기 lerp 이용해서 바꿀 수 있을 듯
        }
        line.geometry.verticesNeedUpdate = true;
      }
    }
    if (ref.current) {
      ref.current.rotation.x = lerp(
        ref.current.rotation.x * 0.2 + 1.55,
        mouse.current[1] / aspect / 200,
        0.1
      );
      ref.current.rotation.y = lerp(
        ref.current.rotation.y * 0.2,
        mouse.current[0] / aspect / 200,
        0.1
      );
    }
  });
  return (
    <group ref={ref} rotation={[1.55, 0, 0]}>
      <Circle />
    </group>
  );
}

function Sphere({ mouse, clicked }) {
  return <Circles mouse={mouse} clicked={clicked} />;
}
export default Sphere;
