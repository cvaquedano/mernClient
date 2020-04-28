import React, {useContext, useState, useEffect} from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';
import tareasContext from '../../context/tareas/tareaContext';
import {v4 as uuidv4} from 'uuid';

const FormTareas = () => {

    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;

    const tareaContext = useContext(tareasContext);
    const {tareaActual, errorTarea, agregarTareas, validarTarea, obtenerTareas, salvarTarea} = tareaContext;

    useEffect(() => {
        if(tareaActual !== null){
            setTarea({...tareaActual});
            console.log(tarea);
        } else {
            setTarea({
                nombre:''
            })
        }
    },[tareaActual]);
    const [tarea, setTarea] = useState({
        nombre:'',
    });
    const {nombre} = tarea;

    if(!proyecto) return null;

    const onSubmit =  e =>{
        e.preventDefault();

        if(nombre.trim() ===''){
            validarTarea();
            return;
        }

        if(tareaActual === null){
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTareas(tarea);
        } else {
            salvarTarea(tarea);
        }
        obtenerTareas(proyectoActual.id);

        setTarea({
            nombre:''
        })

    }

    const onChange = e=> {
        setTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    // Array destructuring
    const [proyectoActual] = proyecto;
    return (
        <div className='formulario'>
            <form
                onSubmit={onSubmit}
            >
                <div
                className='contenedor-input'
                >
                    <input
                        type='text'
                        className='input-text'
                        placeholder='Nombre tarea...'
                        name='nombre'
                        value={nombre}
                        onChange={onChange}
                    />
                </div>
                <div className='contendor-input'>
                    <input
                        type='submit'
                        className='btn btn-primario btn-submit btn-block'
                        value={tareaActual ? 'Editar Tarea' : 'Agregar Tarea'}
                    />
                </div>

            </form>
            {errorTarea ? <p className='mensaje error'>La tareas es obligatorio</p> : null}
        </div>

    );
};

export default FormTareas;