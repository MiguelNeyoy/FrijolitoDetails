import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import PreguntaTrivia from "../componentes/PreguntasTrivia.jsx";
import "../styles/trivia.css";

function Trivia() {
  const preguntas = [
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
  ];

  const [indice, setIndice] = useState(0);
  const navigate = useNavigate();

  const avanzar = (respuesta) => {
    console.log("Respuesta : ", respuesta);
    if (indice + 1 < preguntas.length) {
      setTimeout(() => setIndice(indice + 1), 1000); // Espera 1 seg y muestra la siguiente
    } else {
      navigate("/");
    }
  };

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
    </div>
  );
}

export default Trivia;
