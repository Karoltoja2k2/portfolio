import React, { useState, useEffect } from "react";
import WriterBase from "./writerBase";
import CalculateDelay from "./calculateDelay";

function OneWriter({ word, reset, maxDelay }) {
  const [state, setState] = useState({
    subIndex: 0,
    run: true,
  });

  useEffect(() => {
    console.log(reset);
    if (reset) {
      setState({ subIndex: 0, run: true });
    } else {
      setState({ subIndex: 0, run: false });
    }
  }, [reset]);

  useEffect(() => {
    let run = state.run;
    if (run === false) {
      return;
    }

    let subIndex = state.subIndex;
    if (subIndex == word.length) {
      run = false;
    }

    let delay = CalculateDelay(15, maxDelay);

    let modifier = 1;
    const timeout2 = setTimeout(() => {
      setState({ subIndex: state.subIndex + modifier });
    }, delay);
    return () => clearTimeout(timeout2);
  }, [state]);

  return <WriterBase word={word} subIndex={state.subIndex} />;
}

export default OneWriter;
