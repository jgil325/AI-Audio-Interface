import React, { useState } from "react";
import styled from "styled-components";
import AudioPlayer from "../components/AudioPlayer";
var Sentiment = require("sentiment");

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TranscribeButton = styled.button`
  color: white;
  background: tomato;
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const Input = styled.input`
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  outline: none;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TranscriptionContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TranscriptionTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const TranscriptionText = styled.p`
  font-size: 16px;
  text-align: center;
`;

const AudioPlayerContainer = styled.div`
  margin-top: 20px;
`;

const Upload: React.FC = () => {
  var sentiment = new Sentiment();
  const axios = require("axios");
  const [transcription, setTranscription] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files![0]);
  };

  const transcribe = async () => {
    console.log("PRESSED BUTTON");
    const assembly = axios.create({
      baseURL: "https://api.assemblyai.com/v2",
      headers: {
        Authorization: "44b6ea24665746caa0cb96acc7295c7e",
        "Content-Type": "application/json",
      },
    });
    console.log("check 1");
    var audio = file;
    var postResOne;
    postResOne = await assembly.post("/upload", audio);

    var newUrl = postResOne.data.upload_url;

    const postRes = await assembly.post("/transcript", {
      audio_url: newUrl,
    });

    const transcriptId = postRes.data.id;
    console.log("check 2");
    let getRes;
    while (true) {
      getRes = await assembly.get(`/transcript/${transcriptId}`);
      console.log(getRes.data);
      if (
        getRes.data.status === "completed" ||
        getRes.data.status === "error"
      ) {
        break;
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("RESEND REQUEST");
    }
    setTranscription(getRes.data.text);
    console.log(getRes.data);
    console.log(transcription);

    var result = sentiment.analyze(transcription);
    console.log("CHECK HERE");
    console.log(result);
  };

  return (
    <Container>
      <Title>Transcribe Audio Files</Title>
      <InputContainer>
        <Input type="file" onChange={handleFile} accept="audio/*" />
        <TranscribeButton onClick={transcribe}>Transcribe</TranscribeButton>
      </InputContainer>
      <TranscriptionContainer>
        <TranscriptionTitle>Transcription:</TranscriptionTitle>
        <TranscriptionText>{transcription}</TranscriptionText>
      </TranscriptionContainer>
      <AudioPlayerContainer>
        <AudioPlayer file={file} />
      </AudioPlayerContainer>
    </Container>
  );
};

export default Upload;
