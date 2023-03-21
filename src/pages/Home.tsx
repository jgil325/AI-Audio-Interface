// home.tsx
import RainWords from "@/components/RainWords";
import WordDisplay from "@/components/WordDisplay";
import React from "react";
import styled from "styled-components";
import words from "@/components/Words";

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
      <h1>Oistir</h1>
      {/* <WordDisplay /> */}
      <RainWords words={words} />
    </StyledHome>
  );
};

export default Home;
