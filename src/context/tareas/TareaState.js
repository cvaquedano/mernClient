import React, { useReducer } from 'react';
// import {v4 as uuidv4} from 'uuid';

import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';

import {TAREAS_PROYECTO,
        AGREGAR_TAREA,
        ELIMINAR_TAREA,
        VALIDAR_TAREA,
        TAREA_ACTUAL,
        SALVAR_TAREA,
        TAREA_ERROR,
} from '../../types'
import clienteAxios from '../../config/axios';

const TareaState =  props =>{
    const initialState ={
        tareasProyecto: [],
        errorTarea : false,
        tareaActual : null,
        mensaje: null
    };

    const [state, dispatch] = useReducer(tareaReducer,initialState);

    // Crear las funciones

    // Obtener las tareas de un proyecto
    const obtenerTareas = async proyecto => {
        try {
            const resultado = await clienteAxios.get('/api/tareas', {params :{proyecto}});

            dispatch({
                type:TAREAS_PROYECTO,
                payload: resultado.data.tareas
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error', // error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: TAREA_ERROR,
                payload: alerta
            });
        }
    }
    const agregarTareas = async tarea => {

        try {
            const resultado = await clienteAxios.post('/api/tareas', tarea);

            dispatch({
                type:AGREGAR_TAREA,
                payload: resultado.data
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error', // error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: TAREA_ERROR,
                payload: alerta
            });
        }


    }
    const eliminarTarea = async (tareaId, proyecto) => {

        try {
            await clienteAxios.delete(`/api/tareas/${tareaId}`, {params :{proyecto}});

            dispatch({
                type: ELIMINAR_TAREA,
                payload: tareaId
            });
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error', // error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: TAREA_ERROR,
                payload: alerta
            });
        }
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

    const salvarTarea = async tarea => {

        try {
            const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`, tarea);

            dispatch({
                type:SALVAR_TAREA,
                payload: resultado.data.tarea
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error', // error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: TAREA_ERROR,
                payload: alerta
            });
        }

    }
    return(
        <tareaContext.Provider
            value={{
                tareasProyecto: state.tareasProyecto,
                errorTarea: state.errorTarea,
                tareaActual: state.tareaActual,
                obtenerTareas,
                agregarTareas,
                eliminarTarea,
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