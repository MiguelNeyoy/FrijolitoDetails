import { useState, useEffect } from "react";
import AppRoutes from "./routers/AppRouters.jsx";
import Letter from "./componentes/letter.jsx";
import ContadorDias from "./componentes/ContadorDias.jsx";
import "./App.css";
import backgraundGift from "./assets/backgraundGift.png";

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
        <div className="contItem">Te amo mi vida Esta es una nueva version</div>
        <div className="contItem">Generador de preguntas</div>
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
