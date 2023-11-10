import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-nav">
      <img src="./public/images/Grupo 175.svg" alt="imagen logo" className="logo" />
      <Link to={"/"} className="contenedor-sesion">
        <p className="parrafo-cerrar-sesion">Cerrar Sesión</p>
        <img src="./public/images/cerrar.png" alt="icono cerrar" className="img-icon-cerrar" />
      </Link>
    </div>
  );
};

export default Navbar;
