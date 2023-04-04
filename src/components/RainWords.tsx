import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Modal from "./Modal";

const RainWordsWrapper = styled.div``;

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
  const [selectedWord, setSelectedWord] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWordStates(
      words.map((word: any, index: number) => ({
        top: -50,
        left: Math.random() * window.innerWidth,
        delay: index * 0.2,
        shift: Math.random() * 100 - 50, // add a random shift value between -50 and 50
      }))
    );
  }, [words]);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordStates((prevState) =>
        prevState.map((wordState) => ({
          ...wordState,
          top: wordState.top >= windowHeight + 50 ? -50 : wordState.top + 10,
          left:
            wordState.top >= windowHeight + 50
              ? Math.random() * windowWidth
              : wordState.left,
        }))
      );
    }, 10000);

    return () => clearInterval(intervalId);
  }, [windowHeight, windowWidth]);

  const handleWordClick = (word: string) => {
    setSelectedWord(word);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <RainWordsWrapper>
      {wordStates.map((word, index) => (
        <WordWrapper
          key={index}
          style={{ top: word.top, left: word.left + word.shift }}
          delay={word.delay}
          onClick={() => handleWordClick(words[index])}
        >
          {words[index]}
        </WordWrapper>
      ))}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          word={selectedWord}
        >
          <h2>{selectedWord}</h2>
          <p>This is the text for {selectedWord}.</p>
        </Modal>
      )}
    </RainWordsWrapper>
  );
};

export default RainWords;
