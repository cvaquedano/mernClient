import React, { Fragment } from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {
    const tareas = [
        {nombre:'Elegir algo1', estado: true},
        {nombre:'Elegir algo2', estado: false},
        {nombre:'Elegir algo3', estado: false},
        {nombre:'Elegir algo4', estado: true}
    ]
    return (
        <Fragment>
            <h2>Proyecto: Tienda Virtual</h2>
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
            >Eliminar Proyecto &times;</button>
        </Fragment>
    );
};

export default ListadoTareas;