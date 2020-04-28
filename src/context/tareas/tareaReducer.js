import { TAREAS_PROYECTO,
        AGREGAR_TAREA,
        ELIMINAR_TAREA,
        ACTUALIZAR_TAREA,
        VALIDAR_TAREA,
        TAREA_ACTUAL,
        SALVAR_TAREA

    } from "../../types";

export default (state, action) => {
    switch(action.type){

        case TAREAS_PROYECTO:
            return {
                ...state,
                tareasProyecto: state.tareas
                    .filter(tarea =>
                        tarea.proyectoId === action.payload
                        ),
            };

        case AGREGAR_TAREA:
            return {
                ...state,
                tareas :[...state.tareas, action.payload],
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
                tareas : state.tareas
                .filter(tarea =>
                    tarea.tareaId !== action.payload)
            };

        case ACTUALIZAR_TAREA:
        case SALVAR_TAREA:
            return {
                ...state,
                tareas : state.tareas
                .map(tarea =>
                    tarea.tareaId === action.payload.tareaId
                    ? action.payload : tarea),
                    tareaActual : null
            };
        case TAREA_ACTUAL:
            return {
                ...state,
                tareaActual : action.payload
            };


        default:
            return state;
    }
}