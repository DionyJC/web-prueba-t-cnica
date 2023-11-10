import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alerta from "./Alerta";

const FormularioRegistro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => {
    // Expresión regular para validar direcciones de correo electrónico
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos
    if ([email, password].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    if (!validateEmail(email)) {
      setAlerta("El campo de correo no es una dirección de correo válida.");
      return;
    }

    if (email.length < 9 || email.length > 20) {
      setAlerta({
        msg: "El campo de correo no es una dirección de correo válida.",
        error: true,
      });
      return;
    }

    if (password.length <= 3 || password.length > 12) {
      setAlerta({
        msg: "La contraseña tiene que más de tres caracteres",
        error: true,
      });
      return;
    }

    fetch("web-prueba-t-cnica-844ox0ab1-diony-caros-projects.vercel.app/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  const { msg } = alerta;

  return (
    <div className="container-principal">
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="container">
          <motion.div
            className="info-login"
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <img
              src="./public/images/Grupo 258.svg"
              alt="imagen logo"
              className="logo"
            />
            <h2>Sufipay</h2>
            <p className="parrafo-info">
              Registrate con tu Correo y Contraseña
            </p>
          </motion.div>

          <motion.div
            className="ingreso-info"
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            {msg && <Alerta alerta={alerta} />}
            <div className="contenedor-inputs">
              <input
                type="email"
                placeholder="Usuario"
                className="input-ingreso"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Contraseña"
                className="input-ingreso"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="btn">REGISTRARME</button>

            <Link to="/login">Ir a la Página de Ingreso</Link>
          </motion.div>
        </div>
      </form>
    </div>
  );
};

export default FormularioRegistro;
