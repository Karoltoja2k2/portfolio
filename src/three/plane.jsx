import React, { useEffect, useRef } from "react";
import * as THREE from "three"
import {useLoader} from "react-three-fiber"
function Plane({ origin, normal, img }) {
  const ref = useRef(null);
//   const texture = useLoader(THREE.TextureLoader, img);
  const texture = new THREE.TextureLoader().load(img, (tex) => {
    tex.needsUpdate = true;
    ref.current.scale.set(1.0, tex.image.height / tex.image.width, 1.0);
  });
  
  useEffect(() => {
    if (ref.current != null) {
      ref.current.lookAt(new THREE.Vector3().addVectors(normal, origin));
    }
  }, [ref.current]);
  return (
    <mesh position={origin} ref={ref}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshBasicMaterial attach="material" side={THREE.DoubleSide} map={texture} />
    </mesh>
  );
}

export default Plane;
