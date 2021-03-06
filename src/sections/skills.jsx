import React from "react";
import SectionTitle from "../components/common/sectionTitle";

function Skills({ name, isActive }) {
  return (
    <div className="skills section__container--thin">
      <SectionTitle name={name} isActive={isActive} />
    </div>
  );
}

export default Skills;
