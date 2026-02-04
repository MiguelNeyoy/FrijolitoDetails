import { Link } from "react-router-dom";
import { useState, useCallback, useMemo } from "react";
import PreguntaTrivia from "../componentes/PreguntasTrivia.jsx";
import Carrusel from "../componentes/CarruselDeImagenes.jsx";
import "../styles/trivia.css";
import imgCarrusel1 from "../assets/imgCarruselUno.jpg";
import imgCarrusel2 from "../assets/imgCarruselDos.jpg";
import imgCarrusel3 from "../assets/imgCarruselTres.jpg";
import imgCarrusel4 from "../assets/imgCarruselCuatro.jpg";
import imgCarrusel5 from "../assets/imgCarruselCinco.jpg";

function Trivia() {
  const preguntas = useMemo(() => [
    {
      pregunta: "¿Donde fue nuestra primera cita?",
      opcion: ["En un cafe", "En un such", "Maruchan Premiun", "elote"],
    },
    {
      pregunta:
        "Cual es el snack favorito de tu novio que es el mas guapo de la relacion",
      opcion: [
        "Elote",
        "Fruta con chile",
        "Ceviche",
        "Sabritas",
        "todas las anteriores",
      ],
    },
    {
      pregunta: "Cuando es nuestro aniversario?",
      opcion: ["No se", "Mañana", "en Noviembre 21", "ya no supe"],
    },
    {
      pregunta: "Si pudieras describirme con una sola palabra, ¿cuál sería?",
      opcion: [""],
    },
  ], []);

  const imagenes = useMemo(() => [
    imgCarrusel1,
    imgCarrusel2,
    imgCarrusel3,
    imgCarrusel4,
    imgCarrusel5,
  ], []);

  const [indice, setIndice] = useState(0);
  const [showCarrusel, setShowCarrusel] = useState(false);
  const [restulTrivia, setResultTrivia] = useState([]);

  const avanzar = useCallback((respuesta) => {
    setResultTrivia((prev) => [...prev, respuesta]);
    console.log("Respuesta : ", respuesta);
    if (indice + 1 < preguntas.length) {
      setTimeout(() => setIndice(indice + 1), 1000); // Espera 1 seg y muestra la siguiente
    } else {
      setShowCarrusel(true);
    }
  }, [indice, preguntas.length]);

  const handleCloseCarrusel = useCallback(() => {
    setShowCarrusel(false);
  }, []);

  return (
    <div className="main">
      <Link to="/" className="link-home">
        Home
      </Link>
      <PreguntaTrivia
        pregunta={preguntas[indice].pregunta}
        opcion={preguntas[indice].opcion}
        onRespons={avanzar}
      />
      {showCarrusel && (
        <div onClick={handleCloseCarrusel} className="modalCarrusel">
          <div
            className="contentModalCarrusel"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="btnModalCloseCarrusel"
              onClick={handleCloseCarrusel}
            >
              {" "}
              Cerrar
            </button>
            <Carrusel imagenes={imagenes} respuestaTrivia={restulTrivia} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Trivia;
