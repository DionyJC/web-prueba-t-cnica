import mongoose from "mongoose";

// ============== CONECTAR A NUESTRA BASE DE DATOS =============

const conectarDB = async() =>{

    //Esta es configuración que trae mongodeb por defecto para conectarse a su base de datos.
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })

       const url = `${connection.connection.host}:${connection.connection.port}` 
       console.log(`Mongodb conectado en: ${url}`)

    } catch (error) {
        console.log(`error: ${error.message}`) 

        //Esto es para forzar que el proceso de la conexión de la base de datos termine si hay algún error.
        process.exit(1)
    }
} 

export default conectarDB;
