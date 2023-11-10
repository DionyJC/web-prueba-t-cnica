import { useEffect, useState } from "react";

import Navbar from "./Navbar"
import Tabla from "./Tabla"
import Filtros from "./Filtros";

const Home = () => {

  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../info.json');
        const data = await response.json();
        setDatos(data);
      } catch (error) {
        console.error('Error al cargar datos:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <Navbar />
      <div className="contenedor-descarga">
          <p className="parrafo-desembolso">Mis desembolsos</p>
          <div className="descarga">
            <button className="btn-descargar">
              <img src="./public/images/descargar.png" alt="icono descargar" className="img-icon-descargar" />
              Descargar 
            </button>
          </div>
      </div>

      <div className="tabla">
      <Filtros />
      <Tabla datos={datos} />
      </div>
    </div>
  )
}

export default Home