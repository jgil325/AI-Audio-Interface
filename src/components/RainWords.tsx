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
  padding-top: 180px;
  font-size: 1.5rem;
  color: white;
  animation: ${RainAnimation} 10s linear infinite;
  animation-delay: ${(props) => props.delay}s;
`;

const RainWords = ({ words }) => {
  const [wordStates, setWordStates] = useState([]);

  useEffect(() => {
    setWordStates(
      words.map((word, index) => ({
        top: -50,
        left: Math.random() * window.innerWidth,
        delay: index * 0.2,
      }))
    );
  }, [words]);

  return (
    <>
      {wordStates.map((word, index) => (
        <WordWrapper
          key={index}
          style={{ top: word.top, left: word.left }}
          delay={word.delay}
        >
          {words[index]}
        </WordWrapper>
      ))}
    </>
  );
};

export default RainWords;
