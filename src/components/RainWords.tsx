import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

//import { ButtonWrapper } from "./RainWords";

//COMMENT
import Modal from "./Modal";
import { IoIosPlay, IoIosPause } from "react-icons/io";

// Empty div that serves as a container for rain of words
const RainWordsWrapper = styled.div``;

const RainAnimation = keyframes`
  0% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(calc(100vh + 50px));
  }
`;

interface WordProps {
  delay: string;
}

// WordWrapper: styled div that represents single word
const WordWrapper = styled.div<WordProps>`
  position: absolute;
  z-index: 100;
  font-size: 1.5rem;
  color: black;
  animation: ${RainAnimation} 18s linear infinite;
  animation-delay: ${(props) => props.delay}s;
  cursor: pointer;
`;

// const ButtonWrapper = styled.button`
//   position: fixed;
//   top: 20px;
//   right: 20px;
//   background-color: transparent;
//   border: none;
//   color: white;
//   font-size: 1.5rem;
//   cursor: pointer;
//   z-index: 1000;
// `;

const ButtonWrapper = styled.li`
  border-radius: 50%;
  box-shadow: 0 3px 6px lightgrey;
  display: grid;
  place-items: center;
  margin: 8px 0;
  font-size: 28px;
  padding: 12px;
  cursor: pointer;
  position: absolute;
  right: 25px;
  transform: translateY(-725%);
  background-color: #ffffff;
  z-index: 1000;

  svg {
    fill: black;
  }
`;

const PauseIcon = styled(IoIosPause)`
  color: white;
`;

const PlayIcon = styled(IoIosPlay)`
  color: white;
`;

const RainWords = (words: string) => {
  const [wordStates, setWordStates] = useState<any[]>([]);
  const [selectedWord, setSelectedWord] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(true);

  //Called whenever the array of words changes, and it it initializes a wordStates array with some values
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
        //Has an Onclick handler that calles handleWordClick function with the corresponding word from the words prop
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
        {isAnimationPlaying ? <PauseIcon /> : <PlayIcon />}
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
