import React, { useReducer } from "react";
import proyectoReducer from "./proyectoReducer";
import proyectoContext from "./proyectoContext";
import { FORMULARIO_PROYECTO,
         OBTENER_PROYECTO } from "../../types";



const ProyectoState = props => {

    const proyectos = [
        {id: 1, nombre:'tienda virtual'},
        {id: 2, nombre:'algo de algo'},
        {id: 3, nombre:'todo de todo'},
    ];

    const initialState = {
         proyectos : [
        ],
        formulario: false
    };

    // Dispact para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer,initialState);

    // Serie de funciones para le crud
    const mostrarFormulario = () =>{
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    const obtenerProyectos = () =>{
        dispatch({
            type: OBTENER_PROYECTO,
            payload:proyectos
        })
    }


    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario : state.formulario,
                mostrarFormulario,
                obtenerProyectos
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
};

export default ProyectoState;