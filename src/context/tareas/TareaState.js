import React, { useReducer } from 'react';
import {v4 as uuidv4} from 'uuid';

import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';

import {TAREAS_PROYECTO,
        AGREGAR_TAREA,
        ELIMINAR_TAREA,
        ACTUALIZAR_TAREA,
        VALIDAR_TAREA,
        TAREA_ACTUAL,
        SALVAR_TAREA
} from '../../types'

const TareaState =  props =>{
    const initialState ={
        tareas:[
            {tareaId: 1,nombre:'Elegir algo1', estado: true, proyectoId: 1},
            {tareaId: 2,nombre:'Elegir algo2', estado: false,proyectoId: 2},
            {tareaId: 3, nombre:'Elegir algo3', estado: false, proyectoId: 1},
            {tareaId: 4, nombre:'Elegir algo4', estado: true, proyectoId: 1}
        ],
        tareasProyecto: null,
        errorTarea : false,
        tareaActual : null
    };

    const [state, dispatch] = useReducer(tareaReducer,initialState);

    // Crear las funciones

    // Obtener las tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        });
    }
    const agregarTareas = tarea => {

        tarea.tareaId =  uuidv4();
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        });
    }
    const eliminarTarea = tareaId => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: tareaId
        });
    }
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        });
    }
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        });
    };

    const setTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        });

    }

    const salvarTarea = tarea => {
        dispatch({
            type: SALVAR_TAREA,
            payload: tarea
        });

    }
    return(
        <tareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                errorTarea: state.errorTarea,
                tareaActual: state.tareaActual,
                obtenerTareas,
                agregarTareas,
                eliminarTarea,
                actualizarTarea,
                validarTarea,
                setTareaActual,
                salvarTarea
            }}
        >
            {props.children}
        </tareaContext.Provider>
    )
}
export default TareaState;