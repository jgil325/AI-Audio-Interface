import Person from "@/components/Person";
import React from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
background-color: #f7ebfa;
font-family: 'Montserrat', sans-serif; 
`;

const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  font-family: 'Montserrat', sans-serif; 
`;

const PersonImageContainer = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  margin-bottom: 16px;
  overflow: hidden;
  
`;

const PersonImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  
`;

const PersonName = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
  color: #590059;
`;

const PersonInfo = styled.p`
font-size: 16px;
text-align: left;
color: #590059;
height: 200px;
overflow: scroll;
`;

const GridContainer = styled.div`
display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 100px;
  padding: 32px;
  justify-items: center;
  //margin-top: 100px;
`;


const About = () => {
  return (
    <PageWrapper>
      
      <GridContainer>
        <PersonContainer>
          <PersonImageContainer>
          <PersonImage src="https://i.imgur.com/nDt3oyJ.png" />
          </PersonImageContainer>
          <PersonName>Jacob</PersonName>
          <PersonInfo>Jacob is an undergrad Computer Science student with a minor in Spanish. He works as a frontend developer for CIRT, a tech startup based here in Athens. On this team he is one of the web developers, focusing mainly on the frontend side of the code as well as playing a major role in the selection of project architecture. He will be graduating this may and will be working as a software engineer at American Express where he hopes to grow his technical skills with more real world experience.</PersonInfo>
        </PersonContainer>
        <PersonContainer>
        <PersonImageContainer>
          <PersonImage src="https://i.imgur.com/m4gCfqF.png" />
          </PersonImageContainer>
          <PersonName>Manmeet</PersonName>
          <PersonInfo>Manmeet is one of the Developers for our team. She is a senior studying Computer Science at the University of Georgia and also pursuing the New Media Certificate on the Dev Track. Manmeet loves learning new things and is passionate about the different aspects of emerging technology. She will be graduating in May and will be working as a software engineer at Macy's Tech and can't wait to continue to learn and grow!</PersonInfo>
        </PersonContainer>
        <PersonContainer>
        <PersonImageContainer>
          <PersonImage src="https://i.imgur.com/ol9Tk4R.png" />
          </PersonImageContainer>
          <PersonName>Zach</PersonName>
          <PersonInfo>Zach is one of the UI / UX designers for our team. He is an undergraduate student in the Marketing program at UGA and is also pursuing the New Media Certificate. Zach is passionate about technology, creativity, and product development, and as a soon-to-be graduate, he hopes to pursue a career in Product Management for tech companies.</PersonInfo>
        </PersonContainer>
        <PersonContainer>
        <PersonImageContainer>
          <PersonImage src="https://i.imgur.com/R5SROov.png" />
          </PersonImageContainer>
          <PersonName>Christine</PersonName>
          <PersonInfo>Christine Li is a senior studying Psychology and Spanish with aspirations to be an experience designer in the future. Her role in Team AIAI is to understand OiStir’s audience and how to make the product as useful and desirable as possible through conducting UX Research with her co-lead Saba Alemayehu.</PersonInfo>
        </PersonContainer>
        <PersonContainer>
        <PersonImageContainer>
          <PersonImage src="https://i.imgur.com/S3VoBGo.png" />
          </PersonImageContainer>
          <PersonName>Saba</PersonName>
          <PersonInfo>Saba is the UX researcher for our team. She is an undergraduate student at the University of Georgia studying Psychology, Sociology and New Media and is an undergraduate researcher for the Games and Virtual Environments Lab. Saba is very passionate about research, technology and collaborative work. She hopes to graduate soon and pursue her career in User Experience through either graduate school or through full-time work.</PersonInfo>
        </PersonContainer>
        <PersonContainer>
        <PersonImageContainer>
          <PersonImage src="https://i.imgur.com/FKIH8E1.png" />
          </PersonImageContainer>
          <PersonName>Brianna</PersonName>
          <PersonInfo>Brianna is one of the UI / UX designers for our team. She is an undergraduate student at the University of Georgia and is also pursuing the New Media Certificate. Brianna is passionate about technology, creativity, and product development.</PersonInfo>
        </PersonContainer>
      </GridContainer>
    </PageWrapper>
  );
};

export default About;
