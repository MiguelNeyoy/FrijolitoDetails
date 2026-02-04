import { useRef, useState, useEffect, useCallback, memo } from "react";
import iconPlay from "../assets/heart-play-button.svg";
import iconPause from "../assets/heart-pause-button.svg";
import "../styles/Music.css";

const Canciones = memo(({
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
  const fadeIntervalRef = useRef(null);

  useEffect(() => {
    if (!isActive && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [isActive]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }
    };
  }, []);

  const playAudio = useCallback(() => {
    if (audioRef.current) {
      setIsPlaying(true);
      if (onPlay) onPlay();

      const volumen = audioRef.current;
      volumen.volume = 0;
      audioRef.current.play();

      let vol = 0;

      // Clear any existing interval
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }

      fadeIntervalRef.current = setInterval(() => {
        if (vol < 1) {
          vol += 0.05;
          volumen.volume = Math.min(vol, 1);
        } else {
          clearInterval(fadeIntervalRef.current);
          fadeIntervalRef.current = null;
        }
      }, 60);
    }
  }, [onPlay]);

  const pauseAudio = useCallback(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      let vol = audio.volume; // Start from current volume
      setIsPlaying(false);
      if (onStop) onStop();

      // Clear any existing interval
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }

      fadeIntervalRef.current = setInterval(() => {
        if (vol > 0) { // Fixed: was vol > 1, now correctly vol > 0
          vol -= 0.05;
          audio.volume = Math.max(vol, 0);
        } else {
          clearInterval(fadeIntervalRef.current);
          fadeIntervalRef.current = null;
          audio.pause();
        }
      }, 100);
    }
  }, [onStop]);

  const handleEnd = useCallback(() => {
    setIsPlaying(false);
    if (onStop) onStop();
  }, [onStop]);

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
          onEnded={handleEnd}
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
});

Canciones.displayName = 'Canciones';

export default Canciones;
