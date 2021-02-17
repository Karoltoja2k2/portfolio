import React, { useState, useEffect } from "react";
import { getElementDimensions } from "../helpers";
import OneWriter from "./common/writer/onewriter";

function Navbar(props) {
  const scrollTo = (section) => {
    if (section.active || section.ref.current == null) {
      return;
    }

    let { offsetTop } = getElementDimensions(section.ref.current);
    let middle = offsetTop - window.innerHeight / 5;
    window.scrollTo({ top: middle > 0 ? middle : 0, behavior: "smooth" });
  };

  const [sections, setSections] = useState(
    props.sections.map((x) => {
      return { ...x, hovered: false };
    })
  );

  useEffect(() => {
    let oldState = sections;
    setSections(
      props.sections.map((x) => {
        let oldElem = oldState.find((y) => y.id == x.id);
        return { ...x, hovered: oldElem.hovered };
      })
    );
  }, [props.sections]);

  function setHovered(id) {
    setSections(sections.map((x) => (x.id == id ? { ...x, hovered: true } : x)));
  }

  function unHoverAll() {
    setSections(sections.map((x) => (x.hovered ? { ...x, hovered: false } : x)));
  }

  return (
    <div className="navbar">
      <div className="navbar__list">
        {sections.map((section) => (
          <div
            className={`navbar__item ${section.active ? "navbar__item--active" : ""}`}
            onClick={() => scrollTo(section)}
            onMouseOverCapture={() => {
              setHovered(section.id);
            }}
            onMouseOutCapture={() => {
              unHoverAll();
            }}
          >
            <div className="item__button">
              <i className={section.icon}></i>
            </div>
            <div className="item__description">
              <OneWriter word={section.name} reset={section.hovered} maxDelay={50} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
