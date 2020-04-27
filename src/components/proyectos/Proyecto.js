import React, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const Proyecto = ({proyecto}) => {

    const proyectosContext = useContext(proyectoContext);
    const {setProyectoActual} = proyectosContext;

    return (
        <li>
            <button
                type='button'
                className='btn btn-blank'
                onClick={() => setProyectoActual(proyecto.id)}
            >
                {proyecto.nombre}
            </button>
        </li>
    );
};

export default Proyecto;