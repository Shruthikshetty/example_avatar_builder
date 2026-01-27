import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { AudioListener, AudioLoader, Audio as ThreeAudio } from "three";

const Audio = () => {
  const { camera } = useThree();

  useEffect(() => {
    const listener = new AudioListener();
    camera.add(listener);

    const sound = new ThreeAudio(listener);
    const audioLoader = new AudioLoader();

    // load the audio file
    audioLoader.load("/file_example_MP3_1MG.mp3", (buffer) => {
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(0.5);

      const handleClick = () => {
        if (sound.isPlaying) {
          sound.pause();
        } else {
          sound.play();
        }
      };

      // play the audio on click of the window
      window.addEventListener("click", handleClick);
    });
  }, [camera]);
  return <></>;
};

export default Audio;
