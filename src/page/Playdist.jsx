import { Link } from "react-router-dom";
import Canciones from "../componentes/ListMusic.jsx";
import "../styles/Playdist.css";
import disfruto from "../assets/audios/disfruto-editado.mp3";

export default function Playdist() {
  return (
    <div className="mainMusic">
      <Link to={"/"} className="linkHome">
        Home
      </Link>
      <div className="listMusic">
        <Canciones
          linkMusic={disfruto}
          nameMusic={"Disfruto"}
          artista={"Carla Morrison"}
          frase={"Esta canción me hace sentir que estás conmigo"}
        />
        <Canciones linkMusic={disfruto} nameMusic={"misma2"} frase={"prueba"} />
        <Canciones linkMusic={disfruto} nameMusic={"misma3"} frase={"prueba"} />
        <Canciones linkMusic={disfruto} nameMusic={"misma4"} frase={"prueba"} />
      </div>
    </div>
  );
}
