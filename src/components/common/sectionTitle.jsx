import React from "react";

function SectionTitle({ name, isActive }) {
  return (
    <div className={`section__title ${isActive ? "section__title--active" : ""}`}>
      <p>{name.toUpperCase()}</p>
    </div>
  );
}

export default SectionTitle;
