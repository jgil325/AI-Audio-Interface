import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  onSnapshot,
  getDocs,
} from "firebase/firestore";

//SIDEBAR CHANGES
//background-color: #000000;

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = styled.div<SidebarProps>`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-400px")};
  transition: left 1s ease-in-out;
  z-index: 999;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);

  background-color: #f7ebfa;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 30px;

  overflow-y: auto;
`;

const SidebarItem = styled.div`
  margin-top: 80px;
  margin-bottom: 20px;
  color: black;
  padding-left: 10px;
`;

const AudioWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  audio::-webkit-media-controls-panel {
    appearance: none !important;
    -webkit-appearance: none;
    background-color: #f7ebfa;
  }

  audio::-webkit-media-controls-play-button {
    background-color: #590059;
    border-radius: 90px;
  }

  audio::-webkit-media-controls-current-time-display {
    color: #590059;
  }

  audio::-webkit-media-controls-time-remaining-display {
    color: #590059;
  }

  audio::-webkit-media-controls-volume-slider-container {
    color: #590059;
  }

  audio::-webkit-media-controls-mute-button {
    background-color: #590059;
    border-radius: 90px;
  }

  audio::-webkit-media-controls-enclosure {
    color: #590059;
  }
`;

// //audio::-webkit-media-controls {
//   display: none !important;
// }

//display: flex;
//flex-direction: column;

//background-color: #A020F0;

const SidebarAudioItem = styled.div`
  color: white;
  margin-bottom: 10px;
  padding-left: 10px;

  .audio-name {
    font-size: 18px;
    margin-bottom: 10px;

    color: black;
  }

  ${AudioWrapper} {
    margin-bottom: 20px;
  }
`;

const CloseButton = styled.button`
  width: auto;
  display: inline-block;
  padding: 10px;
  background-color: #590059;
  border: none;
  border-radius: 50px;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #9f42a4;
  }
`;

type AudioFile = {
  name: string;
  url: string;
};

//Takes in three props 'isOpen, onClose, and Word
//If isOpen is true, it renders the modal window with word
const Modal = ({ isOpen, onClose, word }) => {
  //const [url, setUrl] = useState<string[]>([]);
  const [url, setUrl] = useState<AudioFile[]>([]);

  //Essentially what needs to be done so that data can be accessed from database
  useEffect(() => {
    const handleWordClick = async (word: string) => {
      const firebaseConfig = {
        apiKey: process.env.apiKey,
        authDomain: "testcollect-51276.firebaseapp.com",
        projectId: "testcollect-51276",
        storageBucket: "testcollect-51276.appspot.com",
        messagingSenderId: "151442162125",
        appId: "1:151442162125:web:31971c768442694db44484",
        measurementId: "G-KBZW5DM2E9",
      };

      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);

      const audioRef = collection(db, word); // Use the clicked word as the collection name
      const audioSnapshot = await getDocs(audioRef);

      if (audioSnapshot.docs.length === 0) {
        console.log(`No audio found for collection "${word}"`);
        setUrl([]);
        return;
      }

      const extractedAudioUrls = audioSnapshot.docs.map((doc) => ({
        name: doc.data().Name,
        url: doc.data().URL,
      }));
      setUrl(extractedAudioUrls);
    };

    handleWordClick(word);
  }, [word]);

  if (!isOpen) {
    return null;
  }

  return (
    <Sidebar isOpen={isOpen}>
      <SidebarItem>{word}</SidebarItem>
      <SidebarAudioItem>
        {url.map((audioFile) => (
          <AudioWrapper key={audioFile.url}>
            <div className="audio-name">{audioFile.name}</div>
            <audio src={audioFile.url} controls />
          </AudioWrapper>
        ))}
      </SidebarAudioItem>
      <CloseButton onClick={onClose}>Close</CloseButton>
    </Sidebar>
  );
};

export default Modal;

// {/* {url.map((url) => (
//           <audio key={url} src={url} controls />
//         ))} */}
