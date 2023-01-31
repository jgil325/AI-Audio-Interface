import { useState } from "react";

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
    <div>
      <button onClick={handlePlayClick}>Play</button>
      <audio controls={true} src={audioUrl} />
    </div>
  );
};

export default AudioPlayer;
