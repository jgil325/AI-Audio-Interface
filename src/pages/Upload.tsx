import React, { useState } from "react";
import styled from "styled-components";

const TranscribeButton = styled.button`
  color: white;
  background: tomato;
  border-radius: 5px;
`;

const Upload: React.FC = () => {
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
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("RESEND REQUEST");
    }
    setTranscription(getRes.data.text);
    console.log(getRes.data);
    console.log(transcription);
  };

  return (
    <div>
      <input type="file" onChange={handleFile} accept="audio/*" />
      {/* <button onClick={transcribe}>Transcribe</button> */}
      <TranscribeButton onClick={transcribe}>Transcribe</TranscribeButton>
      <br />
      <div>{transcription}</div>
    </div>
  );
};

export default Upload;
