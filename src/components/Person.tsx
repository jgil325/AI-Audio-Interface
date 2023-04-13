import React from "react";
import styled from "styled-components";

const PersonContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Name = styled.h3`
  padding-right: 10px;
`;

const handleWordClick = async (word: string) => {
}

const Person = ({ name, info }) => {
  return (
    <PersonContainer>
      {/* <Name>{name}</Name>
      <p>{info}</p> */}
      <button onClick={() => handleWordClick(name)}>Hi</button>
    </PersonContainer>
  );
};

export default Person;
