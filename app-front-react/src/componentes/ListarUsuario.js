import React, {Component} from 'react';


class ListarUsuario extends /*React.*/ React.Component{
//equivalente al ngOnInit. El componente se ha montado
    componentDidMount(){
     //cuando se renderice el componente se ejecutará lo de abajo 
        let promesaHTTP = window.fetch('http://127.0.0.1:4000/api/usuarios/');
        promesaHTTP.then((resHTTP) => {     //las funciones => hacen el bind a ese this
            let promesaJSON = resHTTP.json();
            promesaJSON.then((objColeccionUsu)=> {
              //  window.alert( JSON.stringify(objColeccionUsu));
                this.setState({
                    listarUsuarios: objColeccionUsu
                });
            });     
        }); 
    }
    componentWillMount(){
    }

    render() {
        //si this.state no existe mostramos un mensaje "Cargando.."
        if(this.state === null) {
            var objViDomJSX = (<p></p>);
        }else{
            {//  podemos meter esto : let filasTr = this.state.listarUsuarios.map((usu)=> {
               // return(<tr key={usu._id}>
                 //   <td>{ usu.nombre }</td>
                //    <td>{ usu.email }</td>
               // </tr>);
           // });
        }

            objViDomJSX = (
            <div>
            <h2>Lista de usuarios</h2>

            <table>
                <thead>
                    
                <tr> 
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Password</th>

                </tr>
                    
                </thead>
                <tbody>
                    { this.state
                    .listarUsuarios
                    .map(usu => (
                        <tr key= {usu._id}>
                            <td>{usu.nombre}</td>
                            <td>{usu.email}</td>
                            <td>{usu.password}</td>
                        </tr>
                    ))}
                    {//si metemos aqui {//filasTr} y lo comentado arriba tambien sale   
                    }
                </tbody>
                
            </table>
            
        </div>
            );
        }
  
    return objViDomJSX;   
    }
    }

export default ListarUsuario;   



