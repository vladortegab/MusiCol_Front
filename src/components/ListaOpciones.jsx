import { datos } from '../data/archivos_iniciales'

const ListaOpciones = ({titulo, required, error, valor, actualizarValor}) => {
    
    const manejarCambio = (e) => {
        actualizarValor(e.target.value)
    }
    
    return (
        <div className="form__input ">
            <div className="form__input inputbackground">
                <label className='form__label' htmlFor="genero">{titulo}</label>
                <select name="genero" id="genero" required={required} value={valor} onChange={manejarCambio}>
                    <option value="" disabled defaultValue='' hidden>** Escoja un Género **</option>
                    {
                        datos.generos.map((genero, i) => {
                            return(
                                <option value={genero.nombre} key={i}>{genero.nombre}</option>
                            )
                        })
                    }
                </select>
            </div>
            <span className="form__mensaje">{error}</span>
        </div>
    )
}

export default ListaOpciones