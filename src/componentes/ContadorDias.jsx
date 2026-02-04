import { useMemo, memo } from "react";
import "../styles/ContadorDias.css";
import healthRed from "../assets/healthRed.svg";

const ContadorDias = memo(() => {
  const { daysLeft, month } = useMemo(() => {
    const targetDate = new Date("2025-11-21");
    const today = new Date();
    const timeDiff = targetDate - today;
    const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30);

    return { daysLeft: days, month: months };
  }, []); // Only calculate once on mount

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
});

ContadorDias.displayName = 'ContadorDias';

export default ContadorDias;
