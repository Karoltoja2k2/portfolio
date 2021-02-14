import React, { useEffect } from "react";

import { OrbitControls } from "@react-three/drei";
import { useThree, useFrame } from "react-three-fiber";

import * as THREE from "three";

const CameraControls = React.forwardRef((props, ref) => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  useEffect(() => {
    console.log(camera);
      camera.position.set(0, 0, 100);
    
    camera.far = 450000;
  }, []);

  return (
    <OrbitControls
      maxDistance={225000}
      enableDamping={true}
      mouseButtons={{
        LEFT: THREE.MOUSE.ROTATE,
        MIDDLE: THREE.MOUSE.DOLLY,
      }}
      ref={ref}
      args={[camera, domElement]}
    />
  );
});

export default CameraControls;
