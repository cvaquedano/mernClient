import React, { useReducer } from "react";
import {v4 as uuidv4} from 'uuid';
import proyectoReducer from "./proyectoReducer";
import proyectoContext from "./proyectoContext";
import { FORMULARIO_PROYECTO,
         OBTENER_PROYECTO,
         AGREGAR_PROYECTO,
         VALIDAR_FORMULARIO,
         PROYECTO_ACTUAL,
         ELIMINAR_PROYECTO,

         } from "../../types";




const ProyectoState = props => {

    const proyectos = [
        {id: 1, nombre:'tienda virtual'},
        {id: 2, nombre:'algo de algo'},
        {id: 3, nombre:'todo de todo'},
    ];

    const initialState = {
         proyectos : [],
        formulario: false,
        errorFormulario:false,
        proyecto: null
    };

    // Dispact para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer,initialState);

    // Serie de funciones para le crud
    const mostrarFormulario = () =>{
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    };

    const obtenerProyectos = () =>{
        dispatch({
            type: OBTENER_PROYECTO,
            payload:proyectos
        })
    };

    // Agregar proyecto
    const agregarProyecto =  proyecto => {
        proyecto.id = uuidv4();

        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        });
    };

    const mostrarError =  () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        });
    };

    const setProyectoActual =  proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        });
    };

    const eliminarProyecto =  proyectoId => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        });
        
    };


    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario : state.formulario,
                errorFormulario: state.errorFormulario,
                proyecto : state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                setProyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
};

export default ProyectoState;