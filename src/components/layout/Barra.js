import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/autentificacion/authContext";


const Barra = () => {

     // Extraer la info del autenticacion
     const authContext = useContext(AuthContext);
     const {usuario,cerrarSesion,usuarioAutenticado} = authContext;
 
     useEffect(()=>{
         usuarioAutenticado();
         // eslint-disable-next-line
     },[]);
 
    return (
        <header
            className='app-header'
        >
            {usuario ? <p className='nombre-usuario'>Hola <span>{usuario.nombre}</span></p> : null}

            <nav
                className='nav-principal'
            >
                <button
                    className="btn btn-black cerrar-sesion"
                    onClick={() => cerrarSesion()}
                >Cerrar Sesion</button>

            </nav>

        </header>
    );
};

export default Barra;