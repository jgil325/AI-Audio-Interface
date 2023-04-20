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
  animation: ${RainAnimation} 18s linear infinite;
  animation-delay: ${(props) => props.delay}s;
  cursor: pointer;
`;

const ButtonWrapper = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;

const RainWords = ({ words }) => {
  const [wordStates, setWordStates] = useState<any[]>([]);
  const [selectedWord, setSelectedWord] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(true);

  useEffect(() => {
    setWordStates(
      words.map((word: any, index: number) => ({
        top: -50,
        left: Math.random() * window.innerWidth,
        delay: index * 0.3,
        shift: Math.random() * 100 - 50,
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

  const handleWordClick = (word: string) => {
    setSelectedWord(word);
    setIsSidebarOpen(true);
  };

  const handleCloseSideBar = () => {
    setIsSidebarOpen(false);
  };

  const handleAnimationToggle = () => {
    setIsAnimationPlaying(!isAnimationPlaying);
  };

  return (
    <RainWordsWrapper>
      {wordStates.map((word, index) => (
        <WordWrapper
          key={index}
          delay={word.delay}
          onClick={() => handleWordClick(words[index])}
          style={{
            top: word.top,
            left: word.left + word.shift,
            animationPlayState: isAnimationPlaying ? "running" : "paused",
          }}
        >
          {words[index]}
        </WordWrapper>
      ))}
      <ButtonWrapper onClick={handleAnimationToggle}>
        {isAnimationPlaying ? "Pause" : "Play"}
      </ButtonWrapper>
      {isSidebarOpen && (
        <Modal
          isOpen={isSidebarOpen}
          onClose={handleCloseSideBar}
          word={selectedWord}
        >
          <ButtonWrapper onClick={handleCloseSideBar} />
        </Modal>
      )}
    </RainWordsWrapper>
  );
};

export default RainWords;
