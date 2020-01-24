import React, {Component} from 'react';


class CrearUsuario extends /*React.*/ Component{
    //this props es el objeto de react con datos publicos
    //this.state es el objeto de react con datos privados, es decir, 
    //el estado interno del componente. Como en Angular
    // las  variables miembro de las clases privadas

    constructor (props) {
        super (props); //invocamos al constructor del padre
                    // pasandole las propiedades publicas

                    //para evitar el problema del this con Js
                    //con bind() hacemos que en el futuro
                    // this haga referencia a ese metodo this y solo a ese
                    // this es el objeto instanciado de la clase componente

    
        this.state = {
            nombre: '',
            email: '',
            password: '',

        }
        this.onChangeNombre = this.onChangeNombre.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this); 
        this.onSubmit = this.onSubmit.bind(this);
      
    }
    
    onChangeNombre(evt) {
        this.setState({
            nombre: evt.target.value      //como parametro recibimos un objeto con la propiedad emial
            //le asiganmos el valor recibido del evento target.value
        });

    }
    onChangeEmail(evt) {
        this.setState({
            email: evt.target.value      //como parametro recibimos un objeto con la propiedad emial
            //le asiganmos el valor recibido del evento target.value
        });

    }
    onChangePassword(evt) {
        this.setState({
            password: evt.target.value      //como parametro recibimos un objeto con la propiedad emial
            //le asignamos el valor recibido del evento target.value
        });

    }

    onSubmit (evt) {
        evt.preventDefault();   //le quita el funcionamiento que tiene por defecto
    //todos los sistemas de eventos de js si no le decimos nada
    //this siempre hace referencia al objeto que llama al evento

        console.log(`datos: ${this.state.nombre}, ${this.state.email} , ${this.state.password}`);
        window.fetch('http://127.0.0.1:4000/api/usuarios/registro', {
            method:'post',
            body: JSON.stringify({
                "nombre" : this.state.nombre,
                "email" : this.state.email,
                "password" : this.state.password,

            }),
            headers:{
            'Content-Type': 'application/json'
            }
        }).then((res)=> alert("Pues habrá ido bien") )
        .catch((vacas) => "Pues habrá ido mal" );
    }
 //metodo invocado por react cada vez que se cambia el valor del input
    // y se envia un objeto con la informacion del evento
    
    render() {
    return (
        <div>
            <h2>Formulario crear usuario</h2>
            <form onSubmit= { this.onSubmit}>
                <div>
                    <label>Nombre:</label>
                        <input type= "string"
                        placeholder = 'Aqui tu nombre'
                        onChange = { this.onChangeNombre }
                        value= { this.state.nombre}
                        />
                        
                </div>
                <div>
                    <label>Email:</label>
                        <input type= "email"
                        placeholder = "ejemplo@email.com"
                        onChange = { this.onChangeEmail }
                        value= { this.state.email}
                        />
                        
                </div>
                <div>
                    <label>Password:</label>
                        <input type= "Password"
                        placeholder = "letras y numeros"
                        onChange= { this.onChangePassword }
                        value = {  this.state.password }
                        />
                </div>
                <div>
                    <input type= "submit" value= "Registrar"/>
                </div>
                
            </form>
        </div>
    );
}
}
export default CrearUsuario;    


