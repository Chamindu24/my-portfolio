
import React from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh, Material } from "three";


// Correct GroupProps typing
type GroupProps = React.ComponentProps<"group">;

interface GLTFResult {
  nodes: {
    Cube000_ComputerDesk_0001_1: Mesh;
    Cube000_ComputerDesk_0001_2: Mesh;
  };
  materials: {
    ["ComputerDesk.001"]: Material;
    ["FloppyDisk.001"]: Material;
  };
}

export function Computer(props: GroupProps) {
  const { nodes, materials } = useGLTF(
    "/models/computer-optimized-transformed.glb"
  ) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group position={[-4.005, 67.549, 58.539]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_1.geometry}
          material={materials["ComputerDesk.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_2.geometry}
          material={materials["FloppyDisk.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/computer-optimized-transformed.glb");

export default Computer;
