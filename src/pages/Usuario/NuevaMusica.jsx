import { useState } from "react"
import ButtonLink from "../../components/ButtonLink"
import ButtonForm from "../../components/ButtonForm"
import CampoTexto from "../../components/CampoTexto"
import ListaOpciones from "../../components/ListaOpciones"
import TextArea from "../../components/TextArea"

const NuevaMusica = () =>{

    const[titulo,setTitulo] = useState('')
    const[linkMusica,setMusica] = useState('')
    const[linkImagen,setImagen] = useState('')
    const[genero,setGenero] = useState('')
    const[descripcion,setDescripcion] = useState('')
    const[codigoSeguridad,setCodigoSeguridad] = useState('')
    

    const manejarEnvio = (e) =>{
        e.preventDefault()
        console.log('Manejar el envio')
        let datosAEnviar = {
            titulo,
            linkMusica,
            linkImagen,
            genero,
            descripcion,
            codigoSeguridad
        }
        console.log(datosAEnviar)
    }

    const EstilosBtn = {
        color: '#ffffff',
        background: '#2A7AE4',
        fontSize: '21px',
        fontWeight: '600',
        width: '254px',
        height: '54px',
        borderRadius: '4px',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const EstilosBtnGuardar = {
        display: 'inline-block',
        color: '#ffffff',
        background: '#2A7AE4',
        fontSize: '21px',
        fontWeight: '600',
        width: '180px',
        height: '54px',
        borderRadius: '4px',
        border: 'none'
    }

    const EstilosBtnLimpiar = {
        display: 'inline-block',
        color: '#000000',
        background: '#9E9E9E',
        fontSize: '21px',
        fontWeight: '600',
        width: '180px',
        height: '54px',
        borderRadius: '4px',
        border: 'none'
    }

    return (
        <>
            <main className="nuevamusica">
                <div className="container">
                    <h2 className="nuevamusica__titulo">Nueva Música</h2>
                    
                    <form className='form' action="" onSubmit={manejarEnvio}>
                        
                        <CampoTexto 
                            titulo='Título'
                            mensaje="" 
                            required={true} 
                            valor={titulo} 
                            actualizarValor={setTitulo} 
                        />
                        
                        <CampoTexto 
                            titulo='Link del archivo de música' 
                            mensaje="" 
                            required={true} 
                            valor={linkMusica} 
                            actualizarValor={setMusica} 
                        />

                        <CampoTexto 
                            titulo='Link de la imagen del archivo de música' 
                            mensaje="" 
                            required={true} 
                            valor={linkImagen} 
                            actualizarValor={setImagen} 
                        />

                        <ListaOpciones 
                            titulo='Género' 
                            mensaje="" 
                            required={true} 
                            valor={genero} 
                            actualizarValor={setGenero} 
                        />

                        <TextArea 
                            titulo='Descripción del archivo ' 
                            mensaje='' 
                            required={true} 
                            valor={descripcion} 
                            actualizarValor={setDescripcion} 
                        />

                        <CampoTexto 
                            titulo='Código de seguridad' 
                            mensaje="" 
                            required valor={codigoSeguridad}
                            actualizarValor={ setCodigoSeguridad } 
                        />

                        <div className="barra__botones">
                            <div className="botones">
                                <ButtonForm titulo='Guardar' styles={EstilosBtnGuardar} />
                                <ButtonForm titulo='Limpiar' styles={EstilosBtnLimpiar} />
                            </div>
                            <ButtonLink to='/nuevamusica' titulo='Nueva Música' styles={EstilosBtn}/>
                        </div>

                    </form>

                </div>
            </main>
        </>
        
        
        
    )
    
}

export default NuevaMusica