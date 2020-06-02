import * as THREE from "three";
import React, { useEffect } from "react";
import { setColor } from "../../styles";
import { useSprings, a } from "react-spring/three";

export default function Circle({ movement, moveto }) {
  const [springs, set] = useSprings(4, (index) => ({
    from: { position: [0, index, 0] },
  }));

  var linesAmount = 4;
  var radius = 100;
  var verticesAmount = 100;

  useEffect(
    () =>
      movement &&
      void set((i) => ({
        position: [moveto[i].x, i, moveto[i].z],
        delay: i * 500,
      })),
    []
  );
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
      <a.line
        key={j}
        userData={{ verticesAmount: 100 }}
        geometry={geometry}
        material={material}
        position={springs[j].position}
      />
    );
  });
}
