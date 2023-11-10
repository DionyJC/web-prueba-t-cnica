import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Filtros = () => {
  const [filtros, setFiltros] = useState({
    fecha: "",
    desembolso: "",
    tipoDocumento: "",
    numeroDocumento: "",
    monto: "",
  });

  const handleFiltroChange = (e) => {
    const { name, value } = e.target;
    setFiltros((prevFiltros) => ({ ...prevFiltros, [name]: value }));
  };

  //   const datosFiltrados = datos.filter((fila) => {
  //     return (
  //       fila.FechaHora.includes(filtros.fecha) &&
  //       String(fila.DesembolsoNumero).includes(filtros.desembolso) &&
  //       fila.TipoDocumento.includes(filtros.tipoDocumento) &&
  //       fila.NumeroDocumento.includes(filtros.numeroDocumento) &&
  //       String(fila.Monto).includes(filtros.monto)
  //     );
  //   });

  return (
    <div className="filtro-container">
      <input
        type="text"
        id="tipoDocumento"
        name="tipoDocumento"
        value={filtros.tipoDocumento}
        onChange={handleFiltroChange}
        placeholder="Tipo de Documento"
      />

      <input
        type="text"
        id="numeroDocumento"
        name="numeroDocumento"
        value={filtros.numeroDocumento}
        onChange={handleFiltroChange}
        placeholder="Número de Documento"
      />

      <input
        type="text"
        id="desembolso"
        name="desembolso"
        value={filtros.desembolso}
        onChange={handleFiltroChange}
        placeholder="Número de Desembolso"
      />
      <div className="input-container">
        <input type="text" placeholder="Desde" className="input-con-icono" />
        <FontAwesomeIcon icon={faCalendar} className="icono" style={{color: "#ee1717",}}/>
      </div>

      <div className="input-container">
        <input type="text" placeholder="Hasta" className="input-con-icono" />
        <FontAwesomeIcon icon={faCalendar} className="icono" style={{color: "#ee1717",}} />
      </div>

    </div>
  );
};

export default Filtros;
