import "../styles/Carrusel.css";
import { useState, useCallback, memo } from "react";
import arrowLeft from "../assets/arrow-left-icon.svg";
import arrowRight from "../assets/arrow-right-icon.svg";

const Carrusel = memo(({ imagenes, respuestaTrivia }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === imagenes.length ? 0 : prevIndex + 1
    );
  }, [imagenes.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? imagenes.length - 1 : prevIndex - 1
    );
  }, [imagenes.length]);

  return (
    <div className="carousel">
      <div className="slide_direction">
        <div className="left" onClick={handlePrevious}>
          <img
            src={arrowLeft}
            alt="icon flecha izquierda"
            className="arrowLeft"
          />
        </div>

        <img
          key={currentIndex}
          src={imagenes[currentIndex]}
          className="imgCarrusel"
          loading="lazy"
          alt={`Imagen del carrusel ${currentIndex + 1}`}
        />

        <div className="respuestas">
          {respuestaTrivia.map((r, i) => (
            <div key={i}>
              {" "}
              {`${i + 1}._`} {r}
            </div>
          ))}
          <div className="right" onClick={handleNext}>
            <img src={arrowRight} alt="flecha derecha" className="arrowRight" />
          </div>
        </div>
      </div>
    </div>
  );
});

Carrusel.displayName = 'Carrusel';

export default Carrusel;
