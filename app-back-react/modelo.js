const mongoose = require('mongoose'); //importamos mongoose
const Schema = mongoose.Schema; 


//TODO: Validaciones de campos en BBDD. ¡OBLIGATORIO!   

let Usuario = new Schema({  //es una variable pero la usamos como clase, por eso mayus
    nombre: {
        type:String
    },
    email: {
        type: String //en mayusc porque es el tipo/clase
    },
    password: {
        type: String 
    }   //en cada uno de los campos le tenemos que indicar el tipo
});
//como el export default pero para Node
module.exports = mongoose.model('Usuario', Usuario);
// le indicamos a mongoose que para tipo Usuario utilizamos el esquema usuario
