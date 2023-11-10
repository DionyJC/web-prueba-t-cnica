const Alerta = ({ alerta }) => {
    const estiloAviso = alerta.error ? "rojo" : "azul";
  
    return (
      <div className={`aviso ${estiloAviso}`}>
        {alerta.msg}
      </div>
    );
  };
  
  export default Alerta;