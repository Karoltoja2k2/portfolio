import React from "react";
import "./navbar.scss";

function Navbar(props) {
  const scrollTo = (ele) => {
    ele.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="nav">
      <div className="nav__list">
        {props.sections.map((section) => (
          <p onClick={() => scrollTo(section.ref.current)} className={`${section.active ? "active" : ""}`}>
            {section.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
