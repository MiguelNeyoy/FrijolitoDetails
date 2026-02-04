import { useState, useEffect, memo } from "react";
import "../styles/ContadorDias.css";
import healthRed from "../assets/healthRed.svg";

const ContadorDias = memo(() => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2026-11-21T00:00:00");
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        months: 0
      };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
      months: Math.floor(diff / (1000 * 60 * 60 * 24 * 30))
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="containerDay">
      <img
        src={healthRed}
        alt="corazon"
        title="te amo"
        className="iconHealth"
      />
      <div className="countdown-content">
        <h1 className="tittle">Cuenta regresiva</h1>
        <p className="subtitle">Nuestro primer año juntos ❤</p>

        <div className="countdown-grid">
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.days}</div>
            <div className="countdown-label">Días</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.hours}</div>
            <div className="countdown-label">Horas</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.minutes}</div>
            <div className="countdown-label">Minutos</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.seconds}</div>
            <div className="countdown-label">Segundos</div>
          </div>
        </div>

        <p className="date-info">21 de noviembre de 2025</p>
      </div>
    </div>
  );
});

ContadorDias.displayName = 'ContadorDias';

export default ContadorDias;
