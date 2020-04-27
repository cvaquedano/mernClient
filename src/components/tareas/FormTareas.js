import React, {useContext} from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';


const FormTareas = () => {

    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;

    if(!proyecto) return null;

    // Array destructuring
    const [proyectoActual] = proyecto;
    return (
        <div className='formulario'>
            <form>
                <div
                className='contenedor-input'
                >
                    <input
                        type='text'
                        className='input-text'
                        placeholder='Nombre tarea...'
                        name='nombre'
                    />
                </div>
                <div className='contendor-input'>
                    <input
                        type='submit'
                        className='btn btn-primario btn-submit btn-block'
                        value='Agregar tarea'
                    />
                </div>

            </form>
        </div>

    );
};

export default FormTareas;