import React, { useState, useRef, useEffect, Suspense } from "react";
import SectionTitle from "../components/common/sectionTitle";
import { Canvas } from "react-three-fiber";
import { data } from "../data";
import CameraControls from "../three/camera";
import Plane from "../three/plane";

import img from "../images/gg1.png";
import img2 from "../images/pathfinding1.png";
import { Vector3 } from "three";

let lang = data.find((x) => x.language === "PL");
let categories = [...new Set(lang.projects.map((x) => x.category))];

function Projects({ name, isActive }) {
  const [state, setstate] = useState(lang.projects);

  return (
    <div className="projects section__container--thin">
      <SectionTitle name={name} isActive={isActive} />
      <button
        onClick={() => {
          setstate(state.filter((x) => x.category == "c#"));
        }}
      />
      {/* <div className="projects__filter">
        {categories.map((x) => (
          <div className="filter__item">{x}</div>
        ))}
      </div> */}
      <div className="projects__grid">
        {state.map((x) => (
          <div key={x.title} className="grid__item">
            <div className="item__description">
              <p>{x.title}</p>
            </div>
            <div className="item__img">
              <img src={x.mainImg} />
              <div className="item__over">
                <i className="fab fa-readme"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="projects__canvas">
        <Canvas style={{}}>
          <CameraControls />
          <Suspense fallback={null}>
            <Plane origin={new Vector3(75, 0, 0)} normal={new Vector3(1, 0, 0)} img={img} />
            <Plane origin={new Vector3(0, 0, 75)} normal={new Vector3(0, 0, 1)} img={img2} />
          </Suspense>
        </Canvas>
      </div> */}
    </div>
  );
}

export default React.memo(Projects);
