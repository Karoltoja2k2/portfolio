import React from "react";

function SocialLinks(props) {
  return (
    <div className="social">
      <div className="social__item" style={{ backgroundColor: props.color }}></div>
      <div className="social__item" style={{ backgroundColor: props.color }}></div>
      <div className="social__item" style={{ backgroundColor: props.color }}></div>
    </div>
  );
}

export default SocialLinks;
