import React, { useState, useEffect } from "react";
import CalculateDelay from "./calculateDelay"
function MultiLineWriter({ words, reset, maxDelay }) {
  const [blink, setBlink] = useState(true);

  const [state, setState] = useState({
    words: words.map((x) => {
      return {
        word: x,
        subIndex: 0,
        write: false,
      };
    }),
    run: true,
  });

  useEffect(() => {
    setState({
      words: words.map((x, index) => {
        return {
          id: index,
          word: x,
          subIndex: 0,
          write: index === 0,
          finished: false,
        };
      }),
      run: reset,
    });
  }, [reset]);

  useEffect(() => {
    let run = state.run;
    if (run === false) {
      return;
    }

    let words = state.words;
    words.forEach((x) => {
      if (x.write) {
        if (x.subIndex >= x.word.length) {
          x.finished = true;
          let nextWord = words[x.id + 1];
          if (nextWord == null) {
            x.write = true
          } else {
            x.write = false;
            nextWord.subIndex = 0;
            nextWord.write = true;
          }
        } else {
          x.subIndex += 1;
        }
      }
    });

    let delay =  CalculateDelay(15, maxDelay)

    const timeout2 = setTimeout(() => {
      setState({ ...state, words: words });
    }, delay);
    return () => clearTimeout(timeout2);
  }, [state]);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);
  return (
    <>
      {state.words.map((x) =>
        x.write || x.finished ? <p>{`>  ${x.word.substring(0, x.subIndex)}${x.write && blink ? "|" : " "}`}</p> : <></>
      )}
    </>
  );
}

export default MultiLineWriter;
