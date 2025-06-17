import { useState } from "react";
import LetterContent from "./LetterContent";
import closeLetter from "../assets/closeLetter.svg";
import "../styles/letter.css";
function Letter() {
  const [opened, setOpened] = useState(false);

  return (
    <section className="containerLetter">
      {!opened ? (
        <>
          <div className="envelope-container" onClick={() => setOpened(true)}>
            <img
              className="envelope-img"
              src={closeLetter}
              alt="imagen de carta"
            />
            <p className="envelope-text">Haz clic para abrir la carta</p>
          </div>
        </>
      ) : (
        <div className="letter-paper">
          <LetterContent />
        </div>
      )}
    </section>
  );
}

export default Letter;
