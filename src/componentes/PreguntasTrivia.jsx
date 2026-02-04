import { useState, useEffect, useCallback, useMemo, memo } from "react";
import "../styles/PreguntasTrivia.css";

const PreguntaTrivia = memo(({ pregunta, opcion, onRespons }) => {
  const [select, setSelect] = useState(null);
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    setSelect(null);
    setConfirm(false);
  }, [pregunta]);

  const selectOption = useCallback((option) => {
    if (!confirm) {
      setSelect(option);
    }
  }, [confirm]);

  const responder = useCallback(() => {
    if (select) {
      setConfirm(true);
      if (onRespons) onRespons(select);
    }
  }, [select, onRespons]);

  const textFree = useMemo(() =>
    Array.isArray(opcion) && opcion.length === 1 && opcion[0] === ""
    , [opcion]);

  const bgClass = useMemo(() => {
    switch (pregunta) {
      case "¿Donde fue nuestra primera cita?":
        return "bg-cita";
      case "Cual es el snack favorito de tu novio que es el mas guapo de la relacion":
        return "bg-snack";
      case "Cuando es nuestro aniversario?":
        return "bg-aniversario";
      case "Si pudieras describirme con una sola palabra, ¿cuál sería?":
        return "bg-palabra";
      default:
        return "";
    }
  }, [pregunta]);

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
              className={`${option === select ? "selected" : ""} ${confirm && option === select ? "confirm" : ""
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
});

PreguntaTrivia.displayName = 'PreguntaTrivia';

export default PreguntaTrivia;
