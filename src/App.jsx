import { useState, useEffect } from "react";
import { Form, Link } from "react-router-dom";
import Letter from "./componentes/letter.jsx";
import ContadorDias from "./componentes/ContadorDias.jsx";
import "./App.css";
import backgraundGift from "./assets/backgraundGift.png";
import heart from "./assets/heart.webp";
import fondoMusic from "./assets/fondo-romantico.webp";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <main>
      <ContadorDias />

      <section className="contGifs">
        <div className="contItem">
          <button
            onClick={() => {
              setShowModal(true);
            }}
            className="buttonImg"
          >
            <img
              className="img"
              src={backgraundGift}
              title="sos la mujer mas hermosa"
              alt="Esta es la imagen que oculta la sorpresa"
            />
          </button>
          <p className="parrafo">Carta para el amor de mi vida ❤</p>
        </div>
        <div className="contItem">
          <Link to="/trivia" className="linkContainer">
            <img src={heart} alt="imagen de la trivia " className="img" />
          </Link>
          <p className="parrafo">
            Unas preguntas para mi princesa mas hermosa{" "}
          </p>
        </div>
        <div className="contItem">
          <Link to={"/playdist"} className="linkContainer">
            <img
              src={fondoMusic}
              alt="background de canciones"
              className="img"
            />
            <p className="parrafo">Las canciones mas especiales </p>
          </Link>
        </div>
      </section>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowModal(false)}>
              Cerrar
            </button>
            <Letter />
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
