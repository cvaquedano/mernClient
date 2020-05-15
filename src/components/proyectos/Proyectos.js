import React, { useContext, useEffect } from "react";
import Sidebar from "../layout/Sidebar";
import Barra from "../layout/Barra";
import FormTareas from "../tareas/FormTareas";
import ListadoTareas from "../tareas/ListadoTareas";
import AuthContext from "../../context/autentificacion/authContext";


const Proyectos = () => {

    // Extraer la info del autenticacion
    const authContext = useContext(AuthContext);
    const {usuarioAutenticado} = authContext;

    useEffect(()=>{
        usuarioAutenticado();
    },[]);

    return(
        <div className='contenedor-app'>
            <Sidebar/>
            <div className='seccion-principal'>
                <Barra/>
                <main>
                    <FormTareas/>
                    <div className='contenedor-tareas'>
                        <ListadoTareas/>

                    </div>
                </main>
            </div>
        </div>
    );
}

export default Proyectos;