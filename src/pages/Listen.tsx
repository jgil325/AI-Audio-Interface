import { useState } from "react";

const Listen: React.FC<{ file: File | null }> = ({ file }) => {
  const [audioUrl, setAudioUrl] = useState("");
  const handlePlayClick = async () => {
    // if (!file) {
    //   return;
    // }
    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onload = () => {
    //   setAudioUrl(reader.result as string);
    // };
    setAudioUrl("../../audio_local/audio_test.mp3");
  };

  return (
    <div>
      <button onClick={handlePlayClick}>Play</button>
      <audio controls={true} src={audioUrl} />
    </div>
  );
};

export default Listen;
