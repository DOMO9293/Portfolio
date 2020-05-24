import * as THREE from "three";
import React, { useRef } from "react";
import { useFrame, useThree, extend } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as perlin from "./perlin";
import { setColor } from "../../styles";
import lerp from "lerp";

extend({ OrbitControls });

function Circle() {
  var linesAmount = 4;
  var radius = 100;
  var verticesAmount = 100;

  return new Array(linesAmount).fill().map((d, j) => {
    let material = new THREE.LineBasicMaterial({
      color: setColor[Object.keys(setColor)[j]],
    });
    let index = j;
    let geometry = new THREE.Geometry();
    geometry.y = (index / linesAmount) * radius * 2;
    for (let i = 0; i <= verticesAmount; i++) {
      let vector = new THREE.Vector3();
      vector.x = Math.cos((i / verticesAmount) * Math.PI * 2);
      vector.z = Math.sin((i / verticesAmount) * Math.PI * 2);
      vector._o = vector.clone();
      geometry.vertices.push(vector);
    }
    return (
      <line
        key={j}
        userData={{ verticesAmount: 100 }}
        geometry={geometry}
        material={material}
        position={[j, j, j]}
      />
    );
  });
}

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
            ? (line.position.y += j * 0.1)
            : (line.position.y -= j * 0.1);

          //line.position.z += 0.5;
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
