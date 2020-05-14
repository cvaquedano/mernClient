import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autentificacion/authContext';


const NuevaCuenta = (props) => {

    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    const authContext = useContext(AuthContext);
    const {autenticado, mensaje, registarUsuario} = authContext;

    useEffect(()=>{

        if(autenticado){
            props.history.push('/proyectos');
        }
        if(mensaje){
            console.log('si entro mensaje');
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

    },[mensaje,autenticado,props.history]);

    const [usuario, setUsuario]=useState({
        email:'',
        nombre:'',
        password:'',
        confirmar:''
    });

    const {email, nombre, password, confirmar} = usuario;

    const onChange = e => {
        setUsuario(
           {
               ...usuario,
               [e.target.name] : e.target.value

           }
        );

    }

    const onSubmit =  e => {
        e.preventDefault();

        if( nombre.trim()=== '' ||
            email.trim()=== '' ||
            password.trim()=== '' ||
            confirmar.trim()=== '' ){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }

        if(password.length < 6){
            mostrarAlerta('El password debe ser al menos de 6 caracteres', 'alerta-error');
            return;
        }

        if(password !== confirmar) {
            mostrarAlerta('El password y la confirmacion debe ser igual', 'alerta-error');
            return;
        };

        registarUsuario({
            nombre,
            email,
            password
        })




    };
    return(
        <div className='form-usuario'>
            {alerta ? ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
            <div className='contenedor-form sombra-dark'>
                <h1>Obtener una cuenta</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className='campo-form'>
                        <label htmlFor="email">Nombre</label>
                        <input
                            type='text'
                            id='nombre'
                            name='nombre'
                            placeholder='Tu Nombre'
                            onChange={onChange}
                            value={nombre}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor="email">Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Tu Email'
                            onChange={onChange}
                            value={email}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Tu password'
                            onChange={onChange}
                            value={password}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='confirmar'>Confirmar Password</label>
                        <input
                            type='password'
                            id='confirmar'
                            name='confirmar'
                            placeholder='Repite tu password'
                            onChange={onChange}
                            value={confirmar}
                        />
                    </div>
                    <div className='campo-form'>
                        <input
                            type='submit'
                            className='btn btn-primario brn-block'
                            value="Registrarme"
                        />
                    </div>
                </form>
                <Link
                    to={'/'}
                    className='enlace-cuenta'>
                        Iniciar Sesion
                    </Link>
            </div>
            
        </div>
    );
}

export default NuevaCuenta;