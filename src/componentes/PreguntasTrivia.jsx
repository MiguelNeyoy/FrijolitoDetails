import { useState, useEffect } from "react";
import "../styles/PreguntasTrivia.css";
const PreguntaTrivia = ({ pregunta, opcion, onRespons }) => {
  const [select, setSelect] = useState(null);
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    setSelect(null);
    setConfirm(false);
  }, [pregunta]);

  function selectOption(option) {
    if (!confirm) {
      setSelect(option);
    }
  }

  function responder() {
    if (select) {
      setConfirm(true);
      if (onRespons) onRespons(select);
    }
  }

  const textFree =
    Array.isArray(opcion) && opcion.length === 1 && opcion[0] === "";
  let bgClass = "";
  switch (pregunta) {
    case "¿Donde fue nuestra primera cita?":
      bgClass = "bg-cita";
      break;
    case "Cual es el snack favorito de tu novio que es el mas guapo de la relacion":
      bgClass = "bg-snack";
      break;
    case "Cuando es nuestro aniversario?":
      bgClass = "bg-aniversario";
      break;
    case "Si pudieras describirme con una sola palabra, ¿cuál sería?":
      bgClass = "bg-palabra";
      break;
    default:
      bgClass = "";
      break;
  }

  return (
    <div className={`container ${bgClass}`}>
      <h2 className="tittlePregunta">{pregunta}</h2>
      <div className="container-answer">
        {textFree ? (
          <textarea
            value={select || ""}
            onChange={(e) => setSelect(e.target.value)}
            disabled={confirm}
            placeholder="Escribe aqui la palabra"
            className="text-area-word"
          ></textarea>
        ) : (
          opcion.map((option, index) => (
            <button
              key={index}
              onClick={() => selectOption(option)}
              className={`${option === select ? "selected" : ""} ${
                confirm && option === select ? "confirm" : ""
              }`}
              disabled={confirm}
            >
              {option}
            </button>
          ))
        )}
      </div>
      <button
        onClick={responder}
        className="btnRespons"
        disabled={!select || confirm}
      >
        Responder
      </button>
    </div>
  );
};

export default PreguntaTrivia;
