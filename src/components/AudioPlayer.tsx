import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PlayButton = styled.button`
  color: white;
  background: tomato;
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const Audio = styled.audio`
  margin-top: 20px;
  margin-left: 20px;
`;

const AudioPlayer: React.FC<{ file: File | null }> = ({ file }) => {
  const [audioUrl, setAudioUrl] = useState("");
  const handlePlayClick = async () => {
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setAudioUrl(reader.result as string);
    };
  };

  return (
    <Container>
      <PlayButton onClick={handlePlayClick}>Play</PlayButton>
      <Audio controls={true} src={audioUrl} />
    </Container>
  );
};

export default AudioPlayer;
