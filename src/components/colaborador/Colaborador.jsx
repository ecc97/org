import './Colaborador.css'
import { AiFillCloseCircle, AiFillHeart } from 'react-icons/ai'

const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, favorito, id } = props.datos
    const { colorPrimario, eliminarColaborador, like } = props
    return <div className='colaborador'>
        <AiFillCloseCircle className='eliminar' onClick={() => eliminarColaborador(id)} />
        <div className='encabezado' style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className='info'>
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            <h6>{equipo}</h6>
            {favorito ? <AiFillHeart color='red' onClick={() => like(id)}/> : <AiFillHeart onClick={() => like(id)} />}
        </div>
    </div>
}

export default Colaborador