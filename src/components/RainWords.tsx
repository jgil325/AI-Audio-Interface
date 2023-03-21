import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const RainAnimation = keyframes`
  0% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(calc(100vh + 50px));
  }
`;

const WordWrapper = styled.div`
  position: absolute;
  z-index: 100;
  font-size: 1.5rem;
  color: white;
  animation: ${RainAnimation} 10s linear infinite;
  animation-delay: ${(props) => props.delay}s;
`;

const RainWords = ({ words }) => {
  const [wordStates, setWordStates] = useState<any[]>([]);

  useEffect(() => {
    setWordStates(
      words.map((word, index) => ({
        top: -50,
        left: Math.random() * window.innerWidth,
        delay: index * 0.2,
        shift: Math.random() * 100 - 50, // add a random shift value between -50 and 50
      }))
    );
  }, [words]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordStates((prevState) =>
        prevState.map((wordState) => ({
          ...wordState,
          top:
            wordState.top >= window.innerHeight + 50 ? -50 : wordState.top + 10,
          left:
            wordState.top >= window.innerHeight + 50
              ? Math.random() * window.innerWidth
              : wordState.top + 10 > window.innerHeight + 50
              ? Math.random() * window.innerWidth
              : wordState.left + wordState.shift,
        }))
      );
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {wordStates.map((word, index) => (
        <WordWrapper
          key={index}
          style={{ top: word.top, left: word.left + word.shift }}
          delay={word.delay}
        >
          {words[index]}
        </WordWrapper>
      ))}
    </>
  );
};

export default RainWords;
