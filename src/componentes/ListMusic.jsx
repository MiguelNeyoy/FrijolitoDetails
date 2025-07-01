import { useRef, useState, useEffect } from "react";
import iconPlay from "../assets/heart-play-button.svg";
import iconPause from "../assets/heart-pause-button.svg";
import "../styles/Music.css";

const Canciones = ({
  linkMusic,
  frase,
  nameMusic,
  artista,
  isActive,
  onPlay,
  onStop,
}) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isActive && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [isActive]);

  function playAudio() {
    if (audioRef.current) {
      setIsPlaying(true);
      if (onPlay) onPlay();
      let volumen = audioRef.current;
      volumen.volume = 0;
      audioRef.current.play();

      let vol = 0;

      const interval = setInterval(() => {
        if (vol < 1) {
          vol += 0.05;
          volumen.volume = Math.min(vol, 1);
        } else {
          clearInterval(interval);
        }
      }, 60);
    }
  }

  function pauseAudio() {
    if (audioRef.current) {
      let audio = audioRef.current;
      audio.volume = 0;
      setIsPlaying(false);
      if (onStop) onStop();

      let vol = 0;
      const interval = setInterval(() => {
        if (vol > 1) {
          vol -= 0.05;
          audio.volume = Math.max(vol, 0);
        } else {
          clearInterval(interval);
          audio.pause();
        }
      }, 100);
    }
  }

  const handdleEnd = () => {
    setIsPlaying(false);
    if (onStop) onStop();
  };

  return (
    <section className="containerMusic">
      <article className="contTxt">
        <p className="descriptArtist">
          {nameMusic} <span>{artista}</span>
        </p>

        <audio
          src={linkMusic}
          ref={audioRef}
          className="cancion"
          onEnded={handdleEnd}
        />
        <p className="frase">{frase}</p>
      </article>
      {!isPlaying && (
        <button onClick={playAudio} className="btnPlay">
          <img src={iconPlay} alt="iconPlay" className="iconPlay" />
        </button>
      )}
      {isPlaying && (
        <button onClick={pauseAudio} className="btnPause">
          <img src={iconPause} alt="iconPause" className="iconPause" />
        </button>
      )}
    </section>
  );
};

export default Canciones;
