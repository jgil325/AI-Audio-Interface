// home.tsx
import RainWords from "@/components/RainWords";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import words from "@/components/Words";
// import Fab from "../components/FAB";

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2rem;
  text-align: center;
  background-color: #fbfcfa;
`;

interface PopupWrapperProps {
  show: boolean;
}

const PopupWrapper = styled.div<PopupWrapperProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 0 3px 6px lightgrey;
  padding: 20px;
  width: full;
  z-index: 1000;
  display: ${(props) => (props.show ? "block" : "none")};
  color: black;
  border-radius: 10px;
`;

const PopupTextWrapper = styled.div`
  padding-top: 20px;
`;

const PopupText = styled.p`
  white-space: pre-wrap;
`;

const GetStartedButton = styled.button`
  background-color: #353b48;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const visitedBefore = localStorage.getItem("visitedBefore");
    if (!visitedBefore) {
      setShowPopup(true);
      localStorage.setItem("visitedBefore", "true");
    }
  }, []);

  return (
    <StyledHome>
      {showPopup && <Overlay />}
      <PopupWrapper show={showPopup}>
        <PopupTextWrapper>
          <PopupText>1. Browse and click on words</PopupText>
          <PopupText>2. Listen to the audio files on the left</PopupText>
          <PopupText>
            3. Download or Bookmark the audio clips that inspire you. And
            you&apos;re ready to jumpstart your next big project!
          </PopupText>
        </PopupTextWrapper>
        <GetStartedButton onClick={() => setShowPopup(false)}>
          Get Started
        </GetStartedButton>
      </PopupWrapper>
      <RainWords words={words} />
    </StyledHome>
  );
};

export default Home;
