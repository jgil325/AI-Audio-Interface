import React from "react";
import { useEffect, useState } from "react";

import ReactDOM from "react-dom";
import styled from "styled-components";
import {
  getFirestore,
  collection,
  doc,
  onSnapshot,
  getDocs,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";

//SIDEBAR CHANGES

const Sidebar = styled.div`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-400px")};
  transition: left 1s ease-in-out;
  z-index: 999;
  background-color: #000000;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const SidebarItem = styled.div`
  margin-top: 100px;
  color: white;
  margin-bottom: 10px;
`;

const CloseButton = styled.button`
  width: auto;
  display: inline-block;
`;

//Takes in three props 'isOpen, onClose, and Word
//If isOpen is true, it renders the modal window with word
const Modal = ({ isOpen, onClose, word }) => {
  const [url, setUrl] = useState<string[]>([]);

  //Essentially what needs to be done so that data can be accessed from database
  useEffect(() => {
    const handleWordClick = async (word: string) => {
      const firebaseConfig = {
        apiKey: "AIzaSyCqB1hMk_mVZXvb-Xk8jsBtN9SH_Ew3HUI",
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

      const extractedAudioUrls = audioSnapshot.docs.map(
        (doc) => doc.data().URL
      );
      setUrl(extractedAudioUrls);
    };

    handleWordClick(word);
  }, [word]);

  if (!isOpen) {
    return null;
  }

  // return ReactDOM.createPortal(
  //   <Sidebar isOpen={isOpen}>
  //        <SidebarItem>{word}</SidebarItem>
  //        {url.map((url) => (
  //          <audio key={url} src={url} controls />
  //        ))}
  //      </Sidebar>,
  //   document.body
  // );
  return (
    <Sidebar isOpen={isOpen}>
      <SidebarItem>{word}</SidebarItem>
      {url.map((url) => (
        <audio key={url} src={url} controls />
      ))}
      <CloseButton onClick={onClose}>Close</CloseButton>
    </Sidebar>
  );
};

export default Modal;
