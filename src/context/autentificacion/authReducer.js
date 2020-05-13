import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION} from '../../types';

export default (state, action)=>{
    switch(action.type){
        case REGISTRO_EXITOSO:
            localStorage.setItem('token', action.payload.token);
            return{
                ...state,
                autenticado: true,
                mensaje: null
            }
        case REGISTRO_ERROR:
            return{
                ...state,
                token: null,
                mensaje: action.payload
            }
        case OBTENER_USUARIO:
            return{
                alerta: null
            }
        case LOGIN_EXITOSO:
            return{
                alerta: null
            }
        case LOGIN_ERROR:
            return{
                alerta: null
            }
        case CERRAR_SESION:
            return{
                alerta: null
            }
        default:
            return state;
    }
}