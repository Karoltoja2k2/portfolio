import React, { useState, useEffect } from "react";
import WriterBase from "./writerBase";

export default function Writer({ words }) {
  const [state, setState] = useState({
    wordIndex: 0,
    subIndex: 0,
    reverse: false,
  });

  useEffect(() => {
    let subIndex = state.subIndex;
    let reverse = state.reverse;
    let wordIndex = state.wordIndex;
    let delay = Math.max(reverse ? 40 : 50, parseInt(Math.random() * 100));
    if (subIndex == 0) {
      reverse = false;
      let newWordIndex = wordIndex + 1;
      wordIndex = newWordIndex >= words.length ? 0 : newWordIndex;
      delay = 500;
    } else if (subIndex == words[wordIndex].length) {
      reverse = true;
      delay = 1000;
    }

    let modifier = reverse != state.reverse ? 0 : reverse ? -1 : 1;
    const timeout2 = setTimeout(() => {
      setState({ wordIndex: wordIndex, subIndex: state.subIndex + modifier, reverse: reverse, run: state.run });
    }, delay);
    return () => clearTimeout(timeout2);
  }, [state]);

  return <WriterBase word={words[state.wordIndex]} subIndex={state.subIndex} />;
}
