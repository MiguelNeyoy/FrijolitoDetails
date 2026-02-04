import { useState, useCallback, useMemo, memo } from "react";
import flower from "../assets/flower.svg";
import heart from "../assets/healthRed.svg";
import HeartAnimadoLetter from "./HeartAnimadoLetter";
import "../styles/contentLetter.css";

const LetterContent = memo(() => {
  const [hearts, setHearts] = useState([]);
  const [words, setWords] = useState([]);

  const wordList = useMemo(() => [
    "Te amo",
    "Mi amor",
    "Guapa",
    "Frijolito",
    "💕",
    "Eres lo mejor de mi vida",
    "💖",
  ], []);

  const randomWord = useCallback(() => {
    return wordList[Math.floor(Math.random() * wordList.length)];
  }, [wordList]);

  const handleClick = useCallback((e) => {
    const newHeart = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };
    setHearts((prev) => [...prev, newHeart]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1000);
  }, []);

  const handleWordsClick = useCallback((e) => {
    const centerX = window.innerWidth / 2;
    const newWord = {
      id: Date.now(),
      x: centerX,
      y: e.clientY,
      text: randomWord(),
    };

    setWords((prev) => [...prev, newWord]);

    setTimeout(() => {
      setWords((prev) => prev.filter((h) => h.id !== newWord.id));
    }, 5000);
  }, [randomWord]);

  return (
    <article className="containerLetter">
      <HeartAnimadoLetter className="iconAnimationHeard" />
      <h1 className="title"> Frijolito </h1>
      <p className="contentLetter">
        Esta es una pequeña carta que tiene el fin de expresar lo que siento por
        ti en todo este tiempo. Tengo que comenzar con decirte que eres una
        persona{" "}
        <span className="wordKey" onClick={handleWordsClick}>
          maravillosa
        </span>{" "}
        que contenta todos mis días y haces que por primera vez sienta el{" "}
        <span onClick={handleWordsClick} className="wordKey">
          amor
        </span>{" "}
        de una persona valiosa en mi vida,
        <span onClick={handleWordsClick} className="wordKey">
          me encanta estar a tu lado llenarte de besos y caricias deleitarme con
          tus preciosos ojos
        </span>
        , reírnos por tonteras. Al estar contigo todos mis problemas se van por
        un momento del día ya que me llena de paz estar a tu lado. Yo quiero que
        sepas que te amo con todo mi ser toda mi alama a un que en mi mente me
        juegue en contra yo te he depositado toda mi confianza y confió que
        jamás la romperás, siempre y cuando no pase nada yo te seré leal hasta
        mi ultimo respiro.{" "}
        <span onClick={handleClick} className="wordKey cora">
          Te amo
          <img
            className="iconCora"
            src={heart}
            alt="imagen de corazon"
            title="te amo"
          />
        </span>
      </p>
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="heart"
          style={{ left: heart.x, top: heart.y }}
        >
          ❤️
        </span>
      ))}
      {words.map((word) => (
        <span
          key={word.id}
          className="floatingWord"
          style={{ left: word.x + "px", top: word.y - 20 + "px" }}
        >
          {word.text}
        </span>
      ))}
      <img className="icon-flower" src={flower} alt="Es el icon svg" />
    </article>
  );
});

LetterContent.displayName = 'LetterContent';

export default LetterContent;
