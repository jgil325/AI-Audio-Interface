import React from "react";
import { useEffect, useState } from "react";

import ReactDOM from "react-dom";
import styled from "styled-components";
import { getFirestore, collection, doc, onSnapshot, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

const WordWrapper = styled.div`
  color: black;
`;

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
        measurementId: "G-KBZW5DM2E9"
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

      const extractedAudioUrls = audioSnapshot.docs.map((doc) => doc.data().URL);
      setUrl(extractedAudioUrls);
    };

    handleWordClick(word);
  }, [word]);

  
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <ModalWrapper>
      <ModalContent>
        <WordWrapper>{word}</WordWrapper>
        <button onClick={onClose}>Close</button>
        {url.map((url) => (
          <audio key={url} src={url} controls />
        ))}
      </ModalContent>
    </ModalWrapper>,
    document.body
  );
};

export default Modal;
