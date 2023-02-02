import Person from "@/components/Person";
import React from "react";
import styled from "styled-components";

const TeamContainer = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding-top: 30px;
`;

const About = () => {
  return (
    <TeamContainer>
      <h1>About the Team</h1>
      <Person name="Jacob" info="test"></Person>
      <Person name="Manmeet" info="test"></Person>
      <Person name="Zach" info="test"></Person>
      <Person name="Christine" info="test"></Person>
      <Person name="Saba" info="test"></Person>
      <Person name="Brianna" info="test"></Person>
    </TeamContainer>
  );
};

export default About;
