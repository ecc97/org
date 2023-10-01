import './Equipo.css'
import Colaborador from '../colaborador/Colaborador'
import hexToRgba from 'hex-to-rgba'

const Equipo = (props) => {

    const { colorPrimario, titulo, id } = props.datos
    
    const obj = { backgroundColor: hexToRgba(colorPrimario, 0.7) }
    
    const estiloBorderTitulo = { borderColor: colorPrimario }
    
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props
    
    return <>
    {
        colaboradores.length > 0 &&
        <section className='equipo' style={obj}>
            <input type="color" className='input-color' value={colorPrimario} onChange={(evento) => {actualizarColor(evento.target.value, id)}} />
            <h3 style={estiloBorderTitulo}>{titulo}</h3>
            <div className="colaboradores">
                {colaboradores.map((colaborador, index) => <Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario} eliminarColaborador={eliminarColaborador} like={like}/> ) 
                }
            </div>
            <hr color='white'></hr>
        </section>
    }
    </>
}

export default Equipo
