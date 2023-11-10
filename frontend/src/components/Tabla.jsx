const Tabla = ({ datos }) => {
  return (
    <div>
      <table className="tabla">
        <thead>
          <tr>
            <th>Fecha y Hora</th>
            <th>Número de Desembolso</th>
            <th>Tipo de Documento</th>
            <th>Número de Documento</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((fila, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "fila-blanca" : "fila-gris"}
            >
              <td>{fila.FechaHora}</td>
              <td>{fila.DesembolsoNumero}</td>
              <td>{fila.TipoDocumento}</td>
              <td>{fila.NumeroDocumento}</td>
              <td>{fila.Monto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
