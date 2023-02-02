import Person from "@/components/Person";
import React from "react";
import styled from "styled-components";

const TeamContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const About = () => {
  return (
    <TeamContainer>
      <h1>About</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
    </TeamContainer>
  );
};

export default About;
