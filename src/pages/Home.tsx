// home.tsx
import React from "react";
import styled from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2rem;
  text-align: center;
`;

const Home = () => {
  return (
    <StyledHome>
      <h1>Welcome to the Home Page!</h1>
    </StyledHome>
  );
};

export default Home;
