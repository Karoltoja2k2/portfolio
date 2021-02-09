import React, { useRef, useEffect } from "react";
import "./bgCanvas.scss";
import * as THREE from "three";
import { Canvas, useThree, useFrame } from "react-three-fiber";

import { OrbitControls, Stars } from "@react-three/drei";

import Skybox from "./Skybox";

function BgCanvas() {
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
      <Canvas onPointerMove={(e) => console.log(e)} style={{backgroundColor: "black"}}>
        {/* <Skybox /> */}
        <Stars radius={400} count={2500} depth={10}/>

        <OrbitControls
          maxDistance={225000}
          autoRotate={true}
          autoRotateSpeed={0.5}
          enableDamping={false}
          mouseButtons={{
            RIGHT: THREE.MOUSE.PAN,
            MIDDLE: THREE.MOUSE.ROTATE,
          }}
          ref={ref}
        />
      </Canvas>
    </div>
  );
}

export default React.memo(BgCanvas);
