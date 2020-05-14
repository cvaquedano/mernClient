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
import tokenAuth from '../../config/tokenAuth';
const AuthState = props  => {

    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    const registarUsuario = async datos =>{
        try {
            const respuesta = await clienteAxios.post('api/usuarios',datos);
            dispatch({
                type:REGISTRO_EXITOSO,
                payload: respuesta.data
            });

            usuarioAutenticado();
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

    const usuarioAutenticado = async () =>{
        const token = localStorage.getItem('token');
        if(token){
            tokenAuth(token);
        }
        try {
            const respuesta = await clienteAxios.get('/api/auth');

            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.usuario
            });
        } catch (error) {
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
        }
    }

    return (
        <authContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
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