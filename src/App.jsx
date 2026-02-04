import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Letter from "./componentes/letter.jsx";
import ContadorDias from "./componentes/ContadorDias.jsx";
import "./App.css";
import backgraundGift from "./assets/backgraundGift.png";
import heart from "./assets/heart.webp";
import fondoMusic from "./assets/fondo-romantico.webp";
import backgroundCreator from "./assets/ImgCreatorPromise/fondo_2.webp";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <main>
      <ContadorDias />

      <section className="contGifs">
        <div className="contItem">
          <button
            onClick={handleOpenModal}
            className="buttonImg"
          >
            <img
              className="img"
              src={backgraundGift}
              title="sos la mujer mas hermosa"
              alt="Esta es la imagen que oculta la sorpresa"
              loading="lazy"
            />
          </button>
          <p className="parrafo">Carta para el amor de mi vida ❤</p>
        </div>
        <div className="contItem">
          <Link to="/trivia" className="linkContainer">
            <img src={heart} alt="imagen de la trivia " className="img" loading="lazy" />
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
              loading="lazy"
            />
            <p className="parrafo">Las canciones mas especiales </p>
          </Link>
        </div>
        <article className="contItem">
          <Link to={"creador-promesa"} className="linkContainer">
            <img
              src={backgroundCreator}
              alt="fondo de la seccion de creador de promesas"
              className="img"
              loading="lazy"
            />
            <p>Creador de Promesas para el amor de mi vida</p>
          </Link>
        </article>
      </section>

      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseModal}>
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
