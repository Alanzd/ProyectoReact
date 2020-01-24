import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import App from './componentes/App';       //componente raiz, la funcion App que hemos hecho 



ReactDOM.render( //renderizamos el componente padre qye hemos llamado App
    <App/>,
    document.getElementById("contenedorRaiz")  //viene del index.html
);


