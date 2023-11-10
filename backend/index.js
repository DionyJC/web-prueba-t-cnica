import dotenv from 'dotenv'
import conectarDB from './config/db.js';
import express from 'express';
import cors from 'cors';
import Usuario from './models/Usuario.js';


const app = express();
dotenv.config();
conectarDB();

app.use(express.json());
app.use(cors({
    origin:["web-prueba-t-cnica-844ox0ab1-diony-caros-projects.vercel.app"],
    methods:["POST","GETS"],
    credentials:true
}));


const PORT = process.env.PORT || 3000;



//Estamos creando nuestra primera ruta que nos llevar al login de ingreso
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await Usuario.findOne({ email });
  
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json({msg:"La contraseña es incorrecta"});
        }
      } else {
        res.send({msg:"No se encuentra registrado"});
      }
    } catch (error) {
      res.status(500).send("Error en el servidor: " + error.message);
    }
  });
  

//Registro de usuario
app.use("/registro",(req,res) =>{
    Usuario.create(req.body)
    .then(usuarios => res.json(usuarios))
    .catch(err => res.json(err));
})

app.listen(4000, ()=>{
    console.log("Corriendo en el puerto 4000")
})
