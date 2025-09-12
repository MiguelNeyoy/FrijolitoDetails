import { Link } from "react-router-dom";
import homeIcon from "../assets/home.svg";
import "../styles/MainPromesa.css";
export default function CreadorPromesa() {
  return (
    <aside className="main-promesa">
      <nav className="nav-promesa">
        <Link to={"/"} className="linkHomePromesa">
          <img src={homeIcon} title="home" className="homeIcon" />
        </Link>
      </nav>
      <p className="parrafo-promesa">Creador de promesas</p>
      <p className="parrafo-promesa">Para "Nombre", mi todo </p>
      <section className="container-promesa">
        <p>Aqui va colocada la Promesa</p>
        <img src="" alt="Imagen rotativa entre cada promesa " />
        <button>Siguente Promesa</button>
      </section>
      <form className="container-form">
        <input type="text" />
        <button type="button">Añadir Promesa</button>
      </form>
    </aside>
  );
}
