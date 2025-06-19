import { use } from "react";
import { useState } from "react";
const OPCION = [
  "En un cafe",
  "Con una maruchan premiun",
  "Con Un elote en la playa",
  "En un suchi en la playa",
];

const PreguntaUno = () => {
  const [option, setOption] = useState(null);
  const [confirm, setConfirm] = useState(false);

  function selectOption(option) {
    if (!confirm) {
      setOption(option);
    }
  }

  function responder() {
    if (option) {
      setConfirm(true);
      confirm(`Elegiste: ${option}`);
    }
  }

  return (
    <div className="container">
      <h2 className="tittlePregunta">¿Donde fue nuestra primera cita?</h2>
      <div className="container-answer">
        {OPCION.map((option, index) => {
          <button
            key={index}
            onClick={selectOption(option)}
            className=""
          ></button>;
        })}
      </div>
    </div>
  );
};
