import { useState } from 'react';
import './Formulario.css'
import Campo from '../campo/Campo';
import ListaOpciones from '../listaOpciones';
import Boton from '../boton';

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState('')
    const [puesto, actualizarPuesto] = useState('')
    const [foto, actualizarFoto] = useState('')
    const [equipo, actualizarEquipo] = useState('')

    const [titulo, actualizarTitulo] = useState('')
    const [color, actualizarColor] = useState('')

    const {registrarColaborador, crearEquipo, id} = props

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        console.log('Maneja el envío', evento);
        let datosAEnviar = {
            id: id(),
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo
        }
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color});
    }
    
    return <section className='formulario'>
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario paa crear el colaborador</h2>
            <Campo titulo="Nombre" placeholder="Ingresar nombre" required={true} valor={nombre} actualizarValor={actualizarNombre}/>
            <Campo titulo="Puesto" placeholder="Ingresar puesto" required valor={puesto} actualizarValor={actualizarPuesto}/>
            <Campo titulo="Foto" placeholder="Ingresar enlace de foto" required valor={foto} actualizarValor={actualizarFoto}/>
            <ListaOpciones valor={equipo} actualizarValor={actualizarEquipo} equipos={props.equipos}/>
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario paa crear el equipo</h2>
            <Campo titulo="Título" placeholder="Ingresar título" required valor={titulo} actualizarValor={actualizarTitulo}/>
            <Campo titulo="Color" placeholder="Ingresar el color en Hex" required valor={color} actualizarValor={actualizarColor} type='color'/>
            <Boton> Registrar equipo </Boton>
        </form>
    </section>
}

export default Formulario;
//console.log(datosAEnviar);