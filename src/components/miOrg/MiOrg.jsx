//import { useState } from 'react';
import './MiOrg.css';

const MiOrg = (props) => {
    console.log(props);
    return <section className="orgSeccion">
        <h3 className='tituloOrg'>Equipos</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg;