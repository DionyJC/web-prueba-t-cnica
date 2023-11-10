import { motion } from "framer-motion";
import { Link } from "react-router-dom"

const Bienvenida = () => {
  return (
    <motion.div 
     className="contenedor-central"
     initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, ease: "easeOut" }}
     >
    <div className="container-bienvenida">
      <h1 className="bienvenida">¡Hola, Bienvenido!</h1>
      <p className="parrafo-diony">Soy Dionisio Caro</p>
      <img src="./public/images/milogo.png" alt="mi logo" className="mi-logo" />
      <p className="parrafo-descripcion">Esta es la presentación de la prueba técnica. <br /> Espero que lo disfrutes y disculpa los errores cometidos. <br />Gracias por darme la oportunidad de participar</p>
      <Link to={"/login"} className="link-entrar">ENTRAR</Link>
    </div>
  </motion.div>
  )
}

export default Bienvenida