import React, { Fragment,useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareasContext from '../../context/tareas/tareaContext';
    import {CSSTransition, TransitionGroup} from 'react-transition-group';


const ListadoTareas = () => {

    const proyectosContext = useContext(proyectoContext);
    const {proyecto, eliminarProyecto} = proyectosContext;

    const tareaContext = useContext(tareasContext);
    const {tareasProyecto} = tareaContext;

    if(!proyecto) return <h2>Selecciona un proyecto</h2>;

    // Array destructuring
    const [proyectoActual] = proyecto;

    const onClickEliminar = () =>{
        eliminarProyecto(proyectoActual.id);
    }
    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className='listado-tareas'>
                {tareasProyecto.length === 0
                    ? (<li className='tarea'>No hay tareas</li>)
                    : <TransitionGroup>
                        {tareasProyecto.map(tarea =>(
                        <CSSTransition
                            key={tarea.tareaId}
                            timeout={200}
                            classNames='tarea'
                        >
                            <Tarea
                                
                                tarea={tarea}
                            />
                        </CSSTransition>
                    ))}
                    </TransitionGroup>
                }
            </ul>
            <button
                type='button'
                className='btn btn-eliminar'
                onClick={()=>onClickEliminar()}
            >Eliminar Proyecto &times;</button>
        </Fragment>
    );
};

export default ListadoTareas;