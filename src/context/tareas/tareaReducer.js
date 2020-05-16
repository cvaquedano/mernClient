import { TAREAS_PROYECTO,
        AGREGAR_TAREA,
        ELIMINAR_TAREA,
        ACTUALIZAR_TAREA,
        VALIDAR_TAREA,
        TAREA_ACTUAL,
        SALVAR_TAREA,
        TAREA_ERROR

    } from "../../types";

export default (state, action) => {
    switch(action.type){

        case TAREAS_PROYECTO:
            return {
                ...state,
                tareasProyecto: action.payload
            };

        case AGREGAR_TAREA:
            return {
                ...state,
                tareasProyecto :[...state.tareasProyecto, action.payload],
                errorTarea: false
            };
        case VALIDAR_TAREA:
            return {
                ...state,
                errorTarea: true
            };

        case ELIMINAR_TAREA:
            return {
                ...state,
                tareasProyecto : state.tareasProyecto
                .filter(tarea =>
                    tarea._id !== action.payload)
            };

        case ACTUALIZAR_TAREA:
        case SALVAR_TAREA:
            return {
                ...state,
                tareasProyecto : state.tareasProyecto
                .map(tarea =>
                    tarea._id === action.payload._id
                    ? action.payload : tarea),
                    tareaActual : null
            };
        case TAREA_ACTUAL:
            return {
                ...state,
                tareaActual : action.payload
            };

        case TAREA_ERROR:
            return {
                ...state,
                mensaje: action.payload
            };

        default:
            return state;
    }
}