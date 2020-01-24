const express = require('express'); //equivalente a import, es un modulo para importar modulos
const bodyParser = require('body-parser'); //TODO: importar y usar modulo middle-ware CORS
const mongoose = require('mongoose');
const Usuario = require('./modelo')
const cors = require ('cors');  // es una libreria
const app = express();
const PORT = 4000; //las constantes que no van a variar nunca se ponen en mayusc

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1/db_usuarios'); // es la direccion ip local (es lo mismo que localhost)

const conexion = mongoose.connection;
conexion.once("open", function () {
    console.log(" 0) - Mongoose on fire");
})

// el middle ware es un sotware instermediario para la serializacion y 
// deserializacion (parseo) automática

app.listen(PORT,
    function () {
        console.log("servidor ejecutandose en " + PORT);
    }); // express funciona con funciones CallBk

const rutasAPI = express.Router();
//y este objeto va a hacer de intermediario entre URL/api/usuarios
app.use("/api/usuarios", rutasAPI);

//http://127.0.0.1:4000/api/usuarios/registro   método POST
function recibirRegistroPost(peticionHTTP, respuestaHTTP) { //es el (req, res)
    console.log(" 2) - La peticion HTTP comienza a ser procesada");
    
    //deberiamos recibir un JSOn con el nuevo usuario 
    //asi que creamos un Obj Schema y le pasamos el JSON ya convertido en obj JS 
    // gracias al body.Parse
    let nuevoUsuario = new Usuario(peticionHTTP.body);
    let promesaDeGuardado =  nuevoUsuario.save(); //metodo save, devuelve una promesa de guardar
    promesaDeGuardado.then ( usuario => {   //cuando tengas datos invocas a la funcion usuario-promesa
        console.log(" 4) - Se ha registrado en bbdd");
        respuestaHTTP.status(200).json({ //status 200 indica ok y devolvemos un json 
            "Usuario": "guardado" //si esta ok devolvemos el mensaje ok
        })
    })
    promesaDeGuardado.catch( error => {
        console.log(" 4) - Se fue a la puta");
        respuestaHTTP.status(400).send("Se fue a la puta")
    }
    );  
    console.log(" 3) - la peticion HTTP ha sido procesada");
    
}

rutasAPI.route("/registro").post(recibirRegistroPost);



rutasAPI.route("/").get(function(reqPeticionHttp, resRespuestaHttp){ //enrutamos la raiz de la ruta, metodo GET
     Usuario.find(function(err, coleccionUsuarios){ //le decimos al esquema de mongoose, "busca todo " 
     //y cuando hayas encontrado invocas a la function err, (va a pasar tanto el error como los datos)
     if(err) {
         console.log("err") ;   //si error contiene un error mostramos el error en consola
         // y si todo ha ido bien `pedimos devolver la coleccion en formato JSON
     }else{
         resRespuestaHttp.json(coleccionUsuarios);  
         //se invoca a la query db.Usuarios.find(), es un método de mongoose
     }
    });
    }) ;

    rutasAPI.delete("/:id", (req, res) => {
        let idUsuario = req.params.id;
        console.log(idUsuario);
        
        Usuario.findByIdAndDelete(idUsuario, (err) => {
        if(err){
        console.log('ERRORRRRR!!!')
        }else{
        console.log('AAACIERTOOOO!!!')
        }
        })
       })

console.log(" 1.2) - El script principal ha terminado");


