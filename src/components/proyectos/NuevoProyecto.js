import React, { Fragment,useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    // Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const {formulario, mostrarFormulario} = proyectosContext;

    const [proyecto, setProyecto] = useState({
        nombre:''
    });

    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        });
    }
    const {nombre} = proyecto;

    const onSubmit = e =>{
        e.preventDefault();

    }

    return (
      <Fragment>
          <button
            onClick={()=>mostrarFormulario()}
            type='button'
            className='btn btn-block btn-primario'
            >Nuevo Proyecto</button>

            {
                formulario
                ?
                (
                    <form
                        onSubmit={onSubmit}
                        className='formulario-nuevo-proyecto'
                    >
                        <input
                            type='text'
                            className='input-text'
                            placeholder='Nombre proyecto'
                            name='nombre'
                            onChange={onChangeProyecto}
                            value={nombre}
                        />
                        <input
                            type='submit'
                            className='btn btn-primario btn-block'
                            value='Agregar proyecto'
                        />
                    </form>
                )
                : null
            }
         </Fragment>
    );
};

export default NuevoProyecto;