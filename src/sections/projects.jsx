import React, { useState, useRef, useEffect, Suspense } from "react";
import SectionTitle from "../components/common/sectionTitle";
import OneWriter from "../components/common/writer/onewriter";
import { Canvas } from "react-three-fiber";
import { data } from "../data";
import CameraControls from "../three/camera";
import Plane from "../three/plane";

import img from "../images/gg1.png";
import img2 from "../images/pathfinding1.png";
import { Vector3 } from "three";
import JsList from "../components/common/codeList/jsList";
import MultiLineWriter from "../components/common/writer/multiLineWriter";

let lang = data.find((x) => x.language === "PL");
let cat = ["All"];
lang.projects.forEach((x) => (cat = [...cat, ...x.categories]));
let categories = [...new Set(cat)];

function Projects({ name, isActive }) {
  const [state, setstate] = useState(
    lang.projects.map((x, index) => {
      return { ...x, id: index, hovered: false };
    })
  );

  function Hover(id) {
    setstate(
      state.map((x) => {
        return { ...x, hovered: x.id == id };
      })
    );
  }

  return (
    <div className="projects section__container--thin">
      <SectionTitle name={name} isActive={isActive} />
      <div className="projects__filter">
        <JsList
          name="filters"
          items={categories.map((x) => {
            return { value: x, active: false };
          })}
          onClick={(e) => {
            console.log(e);
          }}
        ></JsList>
      </div>
      <p style={{ color: "white" }}>{"> dir *_details"}</p>
      <div className="projects__grid">
        {state.map((x) => (
          <div key={x.id} className="grid__item" onMouseEnter={() => Hover(x.id)} onMouseLeave={() => Hover(100)}>
            <img src={x.mainImg} />
            <div className="img__over" onClick={() => console.log("object")}>
              <div className="over__title">
                {/* <OneWriter word={x.title} reset={x.hovered} maxDelay={15} /> */}
                <MultiLineWriter words={[x.title, `cd ${x.shortTitle}_details`]} reset={x.hovered} maxDelay={20} />
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
    // <div className="projects section__container--thin">
    //   <SectionTitle name={name} isActive={isActive} />
    //   <div className="projects__filter">
    //     {/* <p>
    //       {`categories = [${categories.join(", ")}]`}
    //     </p> */}
    //     <JsList name="filters" items={categories} onClick={(e) => {console.log(e)}}></JsList>
    //   </div>
    //   <div className="projects__grid">
    //     {state.map((x) => (
    //       <div key={x.title} className="grid__item">
    //         {/* <div className="item__description">
    //           <p>{x.title}</p>
    //         </div> */}
    //         <div className="item__img">
    //           <img src={x.mainImg} />
    //           <div className="item__over">
    //             <div className="over__border"></div>
    //             <i className="fas fa-folder-open"></i>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    //   {/* <div className="projects__canvas">
    //     <Canvas style={{}}>
    //       <CameraControls />
    //       <Suspense fallback={null}>
    //         <Plane origin={new Vector3(75, 0, 0)} normal={new Vector3(1, 0, 0)} img={img} />
    //         <Plane origin={new Vector3(0, 0, 75)} normal={new Vector3(0, 0, 1)} img={img2} />
    //       </Suspense>
    //     </Canvas>
    //   </div> */}
    // </div>
  );
}

export default React.memo(Projects);
