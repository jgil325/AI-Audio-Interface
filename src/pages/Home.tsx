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
  width: 300px;
  z-index: 1000;
  display: ${(props) => (props.show ? "block" : "none")};
  color: black;
  border-radius: 10px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: #353b48;
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
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
        <p>This is a popup that explains how the site works.</p>
        <CloseButton onClick={() => setShowPopup(false)}> X </CloseButton>
      </PopupWrapper>
      <RainWords words={words} />
    </StyledHome>
  );
};

export default Home;
