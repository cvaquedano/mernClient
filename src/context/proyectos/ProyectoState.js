import React, { useReducer } from "react";
import proyectoReducer from "./proyectoReducer";
import proyectoContext from "./proyectoContext";

const ProyectoState = props => {
    const initialState = {
        formulario: false
    };

    // Dispact para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer,initialState);

    return (
        <proyectoContext.Provider
            value={{
                formulario : state.formulario
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
};

export default ProyectoState;