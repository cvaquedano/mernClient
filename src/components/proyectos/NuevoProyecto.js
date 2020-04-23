import React, { Fragment,useState } from 'react';

const NuevoProyecto = () => {
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
            type='button'
            className='btn btn-block btn-primario'
            >Nuevo Proyecto</button>
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
      </Fragment>
    );
};

export default NuevoProyecto;