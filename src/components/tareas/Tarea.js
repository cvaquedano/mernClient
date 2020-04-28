import React, { useContext } from 'react';
import tareasContext from '../../context/tareas/tareaContext';
import proyectoContext from '../../context/proyectos/proyectoContext';

const Tarea = ({tarea}) => {

    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;
    const [proyectoActual] = proyecto;

    const tareaContext = useContext(tareasContext);
    const {eliminarTarea, obtenerTareas, actualizarTarea, setTareaActual} = tareaContext;

    const {nombre, estado} = tarea;

    const eliminar = tareaId => {
        eliminarTarea(tareaId);
        obtenerTareas(proyectoActual.id)
    };

    const actualizarEstado = tarea => {
        tarea.estado = !tarea.estado;
        actualizarTarea(tarea);

    };
    const seleccionarTareaActual = tarea =>{
        setTareaActual(tarea);
    }
    return (
        <li className='tarea sombra'>
            <p>{nombre}</p>
            <div className='estado'>
                {estado
                ? (<button
                        type='button'
                        className='completo'
                        onClick={()=>actualizarEstado(tarea)}
                    >Completo</button>
                    )
                :  (<button
                        type='button'
                        className='incompleto'
                        onClick={()=>actualizarEstado(tarea)}
                    >Incompleto</button>
                    )
                }
            </div>
            <div className='acciones'>
                <button
                onClick={()=>seleccionarTareaActual(tarea)}
                    type='button'
                    className='btn btn-primario'
                    >Editar</button>
                <button
                    type='button'
                    className='btn btn-secundario'
                    onClick={() =>eliminar(tarea.tareaId)}
                >Eliminar</button>
            </div>
        </li>
    );
};

export default Tarea;