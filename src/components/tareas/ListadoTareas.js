import React, { Fragment,useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';


const ListadoTareas = () => {

    const proyectosContext = useContext(proyectoContext);
    const {proyecto, eliminarProyecto} = proyectosContext;

    if(!proyecto) return <h2>Selecciona un proyecto</h2>;

    // Array destructuring
    const [proyectoActual] = proyecto;



    const tareas = [
        {nombre:'Elegir algo1', estado: true},
        {nombre:'Elegir algo2', estado: false},
        {nombre:'Elegir algo3', estado: false},
        {nombre:'Elegir algo4', estado: true}
    ];

    const onClickEliminar = () =>{
        eliminarProyecto(proyectoActual.id);
    }
    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className='listado-tareas'>
                {tareas.length === 0
                    ? (<li className='tarea'>No hay tareas</li>)
                    : tareas.map(tarea =>(
                        <Tarea
                            tarea={tarea}
                        />
                    ))
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