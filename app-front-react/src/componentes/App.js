//componente raiz del proyecto

import React from  "react"; //importamos mod React
import { BrowserRouter as Router, Route, Link} from "react-router-dom" //link personalizados
import logo from  "../logo.svg"; //importamos el fich
import './App.css';  //importamos el archivo css con los estilos
import CrearUsuario from "./CrearUsuario";  //importo CrearUsuario.js
import ListarUsuario from "./ListarUsuario"; //importo ListarUsuario.js


function App() {  // es un obj de JS con propiedades CSS
    let estiloLogo = {
        width:"10em" ,
        height:"10em"
    } //para aplicar el estilo hay que meterlo como propiedad del img mas abajo
    return(
        <Router>
        <div className="App">
            <header className="App-header">
                <img src={logo} style= {estiloLogo} className="App-logo" alt= "logo"/> 
                {// lee el logo que ya hemos importado arriba
                }
                    <h1>Operaciones CRUD usuario</h1>
                
            </header>
            <nav>
                <Link to= "/registro">CrearUsuario - </Link>  
                <Link to= "/">Listado</Link>  
                

                {//link a la raiz, es con mayuscula porque es un componente del import que es una clase
                }
            </nav>
            <Route path = "/" exact component={ListarUsuario}/>
            {//indicamos que ruta queremos vincular  y un atributo component al que 
                //le pasamos el componente que qureemos cargar
            }
            <Route path = "/registro" component={CrearUsuario}/>
         {//   <CrearUsuario></CrearUsuario>  

            //{//importamos los js crear y listarUsuario
            //}
            //<ListarUsuario></ListarUsuario>
        }
       
            </div>
        </Router> 

    );
}
export default App;
