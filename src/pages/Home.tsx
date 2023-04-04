// home.tsx
import RainWords from "@/components/RainWords";
import React from "react";
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
`;

const Home = () => {
  return (
    <StyledHome>
      <h1>OiStir</h1>
      {/* <WordDisplay /> */}
      {/* <Fab actions={actions} /> */}
      <RainWords words={words} />
    </StyledHome>
  );
};

export default Home;
