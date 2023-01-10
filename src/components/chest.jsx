import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { a, useSpring } from "@react-spring/three"


export function Chest(props) {
  const ref = useRef();
  const topRef = useRef();
  const [topRaised, setTopRaised] = useState(false);
  const { position } = useSpring({ position: topRaised ? [0, 2.17, -0.57] : [0, 1.17, -0.57] });

  const { nodes, materials } = useGLTF("models/chest.gltf");
  useFrame((state, delta) => {ref.current.rotation.y += 0.01});

  const moveTop = () => {
    setTopRaised(!topRaised);
  }

  return (
    <group rotation-x={0.21} ref={ref} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ChestBase071.geometry}
        material={materials.Chest}
        position={[0, 0.21, 0]}
        onClick={moveTop}

      />
      <a.mesh
        ref={topRef}
        castShadow
        receiveShadow
        geometry={nodes.ChestTop071.geometry}
        material={materials.Chest}
        position={position}
        onClick={moveTop}
      />
    </group>
  );
}

useGLTF.preload("/chest.gltf");