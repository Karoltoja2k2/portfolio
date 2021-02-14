import React, { useRef, useState, useEffect } from "react";
import "./styles/App.scss";

import { Hero, Skills, Projects, Contact } from "./sections";
import { getElementDimensions } from "./helpers";
import Navbar from "./components/navbar";
import BgCanvas from "./components/bgCanvas";
import Sections from "./sections/sections";
import { data } from "./data";

let lang = data.find((x) => x.language === "PL");

function App() {
  const [state, setState] = useState({
    scrollPosition: 0,
    sections: [
      { id: 0, name: lang.sections.hero, component: <Hero />, ref: useRef(null), active: false, icon: "fas fa-home" },
      {
        id: 1,
        name: lang.sections.skills,
        component: <Skills />,
        ref: useRef(null),
        active: false,
        icon: "fas fa-project-diagram",
      },
      {
        id: 2,
        name: lang.sections.projects,
        component: <Projects />,
        ref: useRef(null),
        active: false,
        icon: "fas fa-laptop-code",
      },
      {
        id: 3,
        name: lang.sections.contact,
        component: <Contact />,
        ref: useRef(null),
        active: false,
        icon: "far fa-envelope",
      },
    ],
  });

  function HandleScroll(e) {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    let sections = state.sections.map((x) => {
      let ele = x.ref.current;
      if (ele) {
        const { height, offsetBottom, offsetTop } = getElementDimensions(ele);
        let isSelected =
          scrollPosition + windowHeight / 2 >= offsetTop && scrollPosition + windowHeight / 2 < offsetBottom;

        return isSelected != x.active ? { ...x, active: isSelected } : x;
      }
    });

    setState({
      ...state,
      scrollPosition: scrollPosition,
      sections: [...sections],
    });
  }

  useEffect(() => {
    HandleScroll();
    window.addEventListener("scroll", HandleScroll);
  }, []);

  return (
    <div className="app" onMouseMove={(e) => {}}>
      <Navbar sections={state.sections} />
      <BgCanvas scrollPosition={state.scrollPosition} />
      <Sections sections={state.sections} />
    </div>
  );
}

export default App;
