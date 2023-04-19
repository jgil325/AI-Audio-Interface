import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
//COMMENT
import Modal from "./Modal";



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

 // WordWrapper: styled div that represents single word
const WordWrapper = styled.div`
  position: absolute;
  z-index: 100;
  font-size: 1.5rem;
  color: white;
  animation: ${RainAnimation} 10s linear infinite;
  animation-delay: ${(props) => props.delay}s;
  cursor: pointer;
`;
//Cursor-pointer above is new

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
  // Array of objects that represent the state of each falling word
  const [wordStates, setWordStates] = useState<any[]>([]);
  //Currently selected word that the user clicked on
  const [selectedWord, setSelectedWord] = useState("");
  //Boolean flag that indicates whether the modal is currently open or not
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  //Window height + width are height and width of the browser window
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);



  //Called whenever the array of words changes, and it it initializes a wordStates array with some values
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

  //Sets initial width and height
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  }, []);

  //Adds an event listener for resize event that updates height and width when the window is resized
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

  //Sets up an interval to update the position of the falling words every 10 seconds
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

  //Called when the word is clicked and sets selectedWord.
  //Then opens up the modal by setting the isModalOpen state to true
  const handleWordClick = (word: string) => {
    setSelectedWord(word);
    setIsSidebarOpen(true);
  };



  const handleCloseSideBar = () => {
    setIsSidebarOpen(false);
  }

  return (
    //Contains a mapping of the wordStates Array to the Word Wrapper element for each falling word
    <RainWordsWrapper>
      {wordStates.map((word, index) => (
       //Has an Onclick handler that calles handleWordClick function with the corresponding word from the words prop
        <WordWrapper
          key={index}
          style={{ top: word.top, left: word.left + word.shift }}
          delay={word.delay}
          onClick={() => handleWordClick(words[index])}
        >
          {words[index]}
        </WordWrapper>
        
      ))}

     
      {isSidebarOpen && (
        <Modal
          isOpen={isSidebarOpen}
          onClose={handleCloseSideBar}
          word={selectedWord}
        >
        <ButtonWrapper onClick={handleCloseSideBar}>X</ButtonWrapper>


        <h2>{selectedWord}</h2>
        <p>This is the text for {selectedWord}.</p>
        <button onClick={handleCloseSideBar}>Close</button>

        </Modal>
      )}

      
    </RainWordsWrapper>
  );
};

export default RainWords;

