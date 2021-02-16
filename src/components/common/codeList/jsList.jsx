import React from "react";

function JsList({ name, items, onClick }) {
  let itemsLen = items.length;
  return (
    <p className="jsList">
      {`> ${name} = [`}
      {items.map((item, index) => (
        <label key={index} onClick={() => onClick(item)}>
          {`${item}` + (index != itemsLen - 1 ? `,\u00A0` : "")}
        </label>
      ))}
      {`]`}
    </p>
  );
}

export default JsList;
