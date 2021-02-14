import React, { useEffect, useState } from "react";

function WriterBase({ word, subIndex }) {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);
  return <>{`>  ${word.substring(0, subIndex)}${blink ? "|" : " "}`}</>;
}

export default WriterBase;
