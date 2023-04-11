import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

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
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <ModalWrapper>
      <ModalContent>
        <WordWrapper>{word}</WordWrapper>
        <WordWrapper>
          <h3>This is the modal for the word {word}</h3>
        </WordWrapper>
        <button onClick={onClose}>Close</button>
      </ModalContent>
    </ModalWrapper>,
    document.body
  );
};

export default Modal;
