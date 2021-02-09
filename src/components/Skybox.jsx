import React from "react";
import { CubeTextureLoader } from "three";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";

function Skybox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load([
    "https://6izyu.csb.app/2.jpg",
    "https://6izyu.csb.app/2.jpg",
    "https://6izyu.csb.app/2.jpg",
    "https://6izyu.csb.app/2.jpg",
    "https://6izyu.csb.app/2.jpg",
    "https://6izyu.csb.app/2.jpg",
  ]);
  // Set the scene background property to the resulting texture.
  scene.background = texture;
  return null;
}

export default React.memo(Skybox);
