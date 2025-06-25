import { useState, useEffect } from "react";
import "../styles/ContadorDias.css";
import healthRed from "../assets/healthRed.svg";

const ContadorDias = () => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2025-11-21"); // 🎄 Puedes cambiar la fecha aquí

    function calculateDaysLeft() {
      const today = new Date();
      const timeDiff = targetDate - today;
      const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      setDaysLeft(days);
    }

    calculateDaysLeft(); // Calcular al cargar

    // Opcional: actualizar cada día
    const interval = setInterval(calculateDaysLeft, 1000 * 60 * 60 * 24); // cada 24 horas

    return () => clearInterval(interval); // limpieza del intervalo
  }, []);

  const month = Math.floor(daysLeft / 30);

  return (
    <div className="containerDay">
      <img
        src={healthRed}
        alt="corazon"
        title="te amo"
        className="iconHealth"
      />
      <h1 className="tittle">Cuenta regresiva</h1>
      <p className="parrafo">
        Faltan <strong>{daysLeft}</strong> días para el 21 de noviembre de 2025.
      </p>
      <p className="parrafo">
        Faltan <strong> {month} </strong> meses para nuestro primer año juntos ❤
      </p>
    </div>
  );
};

export default ContadorDias;
