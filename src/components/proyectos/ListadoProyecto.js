import React from 'react';
import Proyecto from './Proyecto';

const ListadoProyecto = () => {
    const proyectos = [
        {nombre:'tienda virtual'},
        {nombre:'algo de algo'},
        {nombre:'todo de todo'},
    ]
    return (
       <ul
            className='listado-proyectos'
        >
            {proyectos.map(proyecto =>(
                <Proyecto proyecto={proyecto}/>
            ))}

       </ul>
    );
};

export default ListadoProyecto;