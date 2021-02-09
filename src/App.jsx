import React, { useRef, useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/navbar";
import Hero from "./sections/hero";
import Skills from "./sections/skills";
import Projects from "./sections/projects";
import BgCanvas from "./components/bgCanvas";

function App() {
  let hero = useRef(null);
  let skills = useRef(null);
  let projects = useRef(null);

  const [state, setState] = useState({
    sections: [
      { name: "Hero", component: <Hero />, ref: hero, active: false },
      { name: "Skills", component: <Skills />, ref: skills, active: false },
      { name: "Projects", component: <Projects />, ref: projects, active: false },
    ],
  });

  function HandleScroll() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    setState({
      ...state,
      sections: state.sections.map((x) => {
        let ele = x.ref.current;
        if (ele) {
          const { height, offsetBottom, offsetTop } = getDimensions(ele);
          let isSelected =
            scrollPosition + windowHeight / 2 >= offsetTop && scrollPosition + windowHeight / 2 < offsetBottom;
          return isSelected != x.active ? { ...x, active: isSelected } : x;
        }
      }),
    });
  }

  useEffect(() => {
    HandleScroll();
    window.addEventListener("scroll", HandleScroll);
  }, []);

  return (
    <div>
      <Navbar sections={state.sections} />
      <BgCanvas />
      <div className="sections">
        {state.sections.map((section) => (
          <section id={section.name} ref={section.ref}>
            {section.component}
          </section>
        ))}
      </div>
    </div>
  );
}

const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

export default App;
