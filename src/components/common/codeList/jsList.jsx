import React from "react";

function JsList({ name, items, onClick }) {
  let itemsLen = items.length;
  return (
    <p className="jsList">
      <label>{`> ${name} = [`}</label>
      {items.map((item, index) => (
        <>
          <label className={`jsList__label ${item.active ? "jsList__label--active" : ""}`} key={index} onClick={() => onClick(item)}>
            {item.value}
          </label>
          {index != itemsLen - 1 && <label>{`,\u00A0`}</label>}
        </>
      ))}
      {`]`}
    </p>
  );
}

export default JsList;
