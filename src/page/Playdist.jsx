import { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import Canciones from "../componentes/ListMusic.jsx";
import "../styles/Playdist.css";
import disfruto from "../assets/audios/disfruto-editado.mp3";
import SiSupieras from "../assets/audios/SiSupieras-edit.mp3";
import TeQuieroTanto from "../assets/audios/teQuieroTanto-edit.mp3";
import Amapolas from "../assets/audios/Amapolas.mp3";
import SanLucas from "../assets/audios/SanLucas.mp3";

// Move static data outside component to avoid recreation
const LISTA_1 = [
  {
    linkMusic: disfruto,
    nameMusic: "Disfruto",
    artista: "Carla Morrison",
    frase: "Esta canción me hace sentir que estás conmigo",
  },
  {
    linkMusic: SiSupieras,
    nameMusic: "Si supieras",
    artista: "Kevin Kaarl",
    frase:
      "Cada que suena esta cancion mi mente y mi corazon se llena de amor por ti",
  },
  {
    linkMusic: TeQuieroTanto,
    nameMusic: "Te Quiero Tanto",
    artista: "Kevin Kaarl",
    frase:
      "Es una cancion que demuestra parte de todo el amor que siento al verte ",
  },
];

const LISTA_2 = [
  {
    linkMusic: disfruto,
    nameMusic: "Disfruto",
    artista: "Carla Morrison",
    frase: "Esta canción me hace sentir que estás conmigo",
  },
  {
    linkMusic: Amapolas,
    nameMusic: "Amapolas",
    artista: "Leo Rizzi",
    frase: "Este sonido hace que te tenga en mi mente todo el dia",
  },
  {
    linkMusic: SanLucas,
    nameMusic: "San lucas",
    artista: "Kevin Kaarl",
    frase: "Una bella cancion en la que me hace pensar en el futuro",
  },
];

const LISTA_3 = [{}];

export default function Playdist() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [cancionesActuales, setCancionesActuales] = useState(LISTA_1);

  const handleSetLista1 = useCallback(() => {
    setCancionesActuales(LISTA_1);
  }, []);

  const handleSetLista2 = useCallback(() => {
    setCancionesActuales(LISTA_2);
  }, []);

  const handleSetLista3 = useCallback(() => {
    setCancionesActuales(LISTA_3);
  }, []);

  const handlePlay = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  const handleStop = useCallback(() => {
    setActiveIndex(null);
  }, []);

  return (
    <div className="mainMusic">
      <nav className="navPlaydist">
        <Link to={"/"} className="linkHome">
          Home
        </Link>
        <button className="btnNav" onClick={handleSetLista1}>
          cancines que me hacen pensar en ti
        </button>
        <button className="btnNav" onClick={handleSetLista2}>
          Canciones me hacen sentir a tu lado
        </button>
        <button className="btnNav" onClick={handleSetLista3}>
          Nuetra selecion
        </button>
      </nav>

      {activeIndex !== null && (
        <span className="sonando">sonando la cancion</span>
      )}
      <div className="listMusic">
        {cancionesActuales.map((canciones, i) => (
          <Canciones
            key={`${canciones.nameMusic}-${i}`}
            linkMusic={canciones.linkMusic}
            nameMusic={canciones.nameMusic}
            artista={canciones.artista}
            frase={canciones.frase}
            isActive={activeIndex === i}
            onPlay={() => handlePlay(i)}
            onStop={handleStop}
          />
        ))}
      </div>
    </div>
  );
}
