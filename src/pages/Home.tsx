// home.tsx
import RainWords from "@/components/RainWords";
import WordDisplay from "@/components/WordDisplay";
import React from "react";
import styled from "styled-components";
import words from "@/components/Words";
// import { FcAbout, FcBusinessman, FcCamera, FcFullTrash } from "react-icons/fc";

// import Fab from "../components/FAB";

// const actions = [
//   { label: "About", icon: <FcAbout />, onClick: console.log },
//   { label: "Profile", icon: <FcBusinessman />, onClick: console.log },
//   { label: "Picture", icon: <FcCamera />, onClick: console.log },
//   { label: "Trash", icon: <FcFullTrash />, onClick: console.log },
// ];

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
      {/* <Fab actions={actions} /> */}
      <RainWords words={words} />
    </StyledHome>
  );
};

export default Home;
