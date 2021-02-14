import React from "react";
import SectionTitle from "../components/common/sectionTitle";

function Contact({ name, isActive }) {
  return (
    <div className="contact section__container--thin">
      <SectionTitle name={name} isActive={isActive} />
    </div>
  );
}

export default Contact;
