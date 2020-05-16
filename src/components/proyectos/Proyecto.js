import React, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareasContext from '../../context/tareas/tareaContext';

const Proyecto = ({proyecto}) => {

    const proyectosContext = useContext(proyectoContext);
    const {setProyectoActual} = proyectosContext;

    const tareaContext = useContext(tareasContext);
    const {obtenerTareas} = tareaContext;

    const seleccionarProyecto = id =>{
        setProyectoActual(id);
        obtenerTareas(id);

    }

    return (
        <li>
            <button
                type='button'
                className='btn btn-blank'
                onClick={() => seleccionarProyecto(proyecto._id) }
            >
                {proyecto.nombre}
            </button>
        </li>
    );
};

export default Proyecto;