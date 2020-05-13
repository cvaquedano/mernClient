import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION} from '../../types';
import authReducer from './authReducer';
import authContext from './authContext';
import clienteAxios from '../../config/axios';

const AuthState = props  => {

    const initialState = {
        token: localStorage.getItem('token'),
        auteticado: null,
        usuario: null,
        mensaje: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    const registarUsuario = async datos =>{
        try {
            const respuesta = await clienteAxios.post('api/usuarios',datos);
            console.log(respuesta);
            dispatch({
                type:REGISTRO_EXITOSO,
                payload: respuesta.data
            });
        } catch (error) {

            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }

    return (
        <authContext.Provider
            value={{
                token: state.token,
                auteticado: state.auteticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registarUsuario
            }}
        >
            {props.children}
        </authContext.Provider>
    );

}

export default AuthState;