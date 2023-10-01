import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/header/Header';
import Formulario from './components/formulario/Formulario';
import MiOrg from './components/miOrg/MiOrg';
import Equipo from './components/equipo/Equipo';
import Footer from './components/footer/Footer';


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Colombia",
      foto: "https://acortar.link/pxrZYY",
      nombre: "James Rodriguez",
      puesto: "Volante",
      favorito: true
    },
    {
      id: uuid(),
      equipo: "Argentina",
      foto: "https://media.gq.com.mx/photos/637d17545f336e60aae30ba6/16:9/w_2560%2Cc_limit/GettyImages-1443514862.jpg",
      nombre: "Lionel Messi",
      puesto: "Delantero",
      favorito: false
    },
    {
      id: uuid(),
      equipo: "Portugal",
      foto: "https://acortar.link/2IVIX2",
      nombre: "Cristiano Ronaldo",
      puesto: "Delantero",
      favorito: true
    },
    {
      id: uuid(),
      equipo: "Colombia",
      foto: "https://acortar.link/2qvtte",
      nombre: "Luis Díaz",
      puesto: "Volante",
      favorito: false
    },
    {
      id: uuid(),
      equipo: "Brasil",
      foto: "https://acortar.link/rrg08d",
      nombre: "Neymar",
      puesto: "Delantero",
      favorito: false
    },
    {
      id: uuid(),
      equipo: "Francia",
      foto: "https://www.elnacional.cat/uploads/s1/38/24/27/64/kylian-mbappe-francia-polonia-gol.jpeg",
      nombre: "Kyliam Mbappe",
      puesto: "Delantero",
      favorito: true
    },
    {
      id: uuid(),
      equipo: "España",
      foto: "https://acortar.link/Ek0Rj7",
      nombre: "Sergio Ramos",
      puesto: "Defensa",
      favorito: true
    }
  ])
  const [equipos, actualizarEquipos] = useState([
      {
        id: uuid(),
        titulo: 'Argentina',
        colorPrimario: '#6CACE4',
        colorSecundario: '#6cace4b3'
      },
      {
        id: uuid(),
        titulo: 'Brasil',
        colorPrimario: '#C6CE00',
        colorSecundario: '#c6ce00b3'
      },
      {
        id: uuid(),
        titulo: 'Colombia',
        colorPrimario: '#FFCD00',
        colorSecundario: '#ffcd00b3'
      },
      {
        id: uuid(),
        titulo: 'España',
        colorPrimario: '#BA2123',
        colorSecundario: '#ba2123b3'
      },
      {
        id: uuid(),
        titulo: 'Portugal',
        colorPrimario: '#DA291C',
        colorSecundario: '#da291cb3'
      },
      {
        id: uuid(),
        titulo: 'Francia',
        colorPrimario: '#002654',
        colorSecundario: '#002654b3'
      },
      {
        id: uuid(),
        titulo: 'Alemania',
        colorPrimario: '#EFB810',
        colorSecundario: '#efb810b3'
      }
  ])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }
  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log('Nuevo Colaborador', colaborador);
    //Spread Operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log('Eliminando colaborador', id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores);
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log('Actualizando:', color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }

      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  const like = (id) => {
    console.log('Like a:', id);
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }
  
  return (
    <div>
      <Header/>
      {mostrarFormulario === true ? <Formulario equipos={equipos.map((equipo) => equipo.titulo)} id={uuid} registrarColaborador={registrarColaborador} crearEquipo={crearEquipo} /> : <></>}
      <MiOrg cambiarMostrar = {cambiarMostrar}/>
      {
        equipos.map((equipo) => {
          return <Equipo datos={equipo} key={equipo.titulo} colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)} eliminarColaborador={eliminarColaborador} actualizarColor={actualizarColor} like={like} />
        })
      }
      <Footer />
    </div>
  );
}

export default App;
