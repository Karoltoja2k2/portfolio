import React from "react";

function Sections({ sections }) {
  return (
    <div className="sections">
      {sections.map((section) => (
        <section key={section.id} id={section.name} ref={section.ref}>
          {React.cloneElement(section.component, { name: section.name, isActive: section.active })}
        </section>
      ))}
    </div>
  );
}

export default Sections;
