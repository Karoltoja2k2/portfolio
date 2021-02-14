import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useThree, useFrame } from "react-three-fiber";

import { OrbitControls, Stars } from "@react-three/drei";

import Skybox from "./Skybox";
import CameraControls from "../three/camera";
import { Vector3 } from "three";

function BgCanvas(props) {
  const ref = useRef(null);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      console.log(ref.current);
    }, 500);
    return () => clearTimeout(timeout2);
  }, []);

  useEffect(() => {}, []);
  return (
    <div className="bgCanvas">
      <Canvas onPointerMove={(e) => console.log(e)} style={{ backgroundColor: "black" }}>
        {/* <Skybox /> */}
        <Stars radius={400} count={1000} depth={10} factor={8} />
        <CameraAnimation scrollPosition={props.scrollPosition} />
      </Canvas>
    </div>
  );
}

let sin = 0;

function CameraAnimation({ scrollPosition }) {
  useFrame(({ clock, camera }) => {
    let rotX = camera.rotation.x;
    let fract = scrollPosition * 0.001;
    let diff = fract + rotX;
    diff = (-1 * (diff * 0.8)) / 30;
    camera.position.z += 0.1 * Math.sin(sin);
    sin += Math.PI / 1080;
    camera.rotation.x += diff;
  });
  return null;
}

export default BgCanvas;
