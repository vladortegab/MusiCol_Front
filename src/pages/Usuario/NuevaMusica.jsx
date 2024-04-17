<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import ButtonForm from "../../components/ButtonForm";
import styled from "styled-components";
import { CampoFormulario } from "../../components/CampoFormulario";
import { DescripcionTextArea } from "../../components/CampoFormulario";
import { ListaOpciones } from "../../components/CampoFormulario";
import { addAPIPost, consultaAPI } from "../../api/apiJsonServer";
import Swal from "sweetalert2";

const Contenedor = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #8bb7f0;
`;

const FormularioAddMusica = styled.form`
  background-color: white;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 90%;
  border-radius: 15px;
  box-shadow: 7px 8px 5px -1px rgba(0, 0, 0, 0.62);
  padding-left: 5%;
  padding-right: 5%;
  box-sizing: border-box;
`;

const TituloFormularioMusica = styled.h1`
  text-align: center;
  font-weight: 800;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 18px;
  padding-bottom: 1rem;
`;

const ContenedorBotones = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;
`;

const NuevaMusica = ({ match }) => {
  const [nombre, setNombre] = useState("");
  const [urlImg, setIMG] = useState("");
  const [genero, setGenero] = useState("");
  const [url, setURL] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    async function loadMusic() {
      try {
        const generosData = await consultaAPI("generos");
        setGeneros(generosData);

        const id = parseInt(match.params.id, 10);
        const musicToEdit = generosData.find((genero) => genero.id === id);
        if (musicToEdit) {
          setGenero(musicToEdit.nombre);
        }
      } catch (error) {
        console.error("Error loading music:", error);
      }
    }
    loadMusic();
  }, [match.params.id]);

  const manejarEnvio = async (e) => {
    e.preventDefault();

    const objetoGuardado = {
      nombre,
      genero: genero.toLowerCase(),
      urlMusica: url,
      urlImagen: urlImg,
      descripcion,
    };

    try {
      await addAPIPost ("songs", objetoGuardado);

      Swal.fire({
        title: "¡Éxito!",
        text: "Se ha guardado la música",
        imageUrl: "/img/minions.gif",
        imageAlt: "Success",
        confirmButtonText: "OK",
        confirmButtonColor: "#4CAF50",
      });

      // Limpiar los campos después de guardar
      setNombre("");
      setIMG("");
      setGenero("");
      setURL("");
      setDescripcion("");
    } catch (error) {
      console.error("Error al guardar la música:", error);
      // Manejar el error, mostrar un mensaje de error al usuario, etc.
    }
  };

  const handleCleanFormulario = () => {
    setNombre("");
    setDescripcion("");
    setURL("");
    setIMG("");
    setGenero("");
  };

  return (
    <Contenedor>
      <FormularioAddMusica onSubmit={manejarEnvio}>
        <TituloFormularioMusica>Nueva Música ✏️</TituloFormularioMusica>

        <CampoFormulario
          type="text"
          titulo="Título del Archivo de Música"
          mensaje=""
          valor={nombre}
          setValue={setNombre}
        />
        <CampoFormulario
          type="text"
          titulo="Link del archivo de música"
          mensaje=""
          valor={url}
          setValue={setURL}
        />
        <CampoFormulario
          type="text"
          titulo="Link de la imagen del archivo de música"
          mensaje=""
          valor={urlImg}
          setValue={setIMG}
        />
        <img
          src={urlImg}
          style={{ display: "block", margin: "auto" }}
          alt="Previsualizar Imagen de música"
        />

        <ListaOpciones
          titulo={"Géneros"}
          generos={generos.map((genero) => genero.nombre)}
          valor={genero}
          setCategoria={setGenero}
        />

        <DescripcionTextArea
          titulo="Descripción de Archivo de Música"
          setValue={setDescripcion}
          valor={descripcion}
        />

        <ContenedorBotones>
          <ButtonForm
            className="botonSaveAddMusica"
            title="Guardar Musica"
            icono="iconoSave"
          />
          <ButtonForm
            className="botonLimpiarAddMusica"
            title="Limpiar Formulario Musica"
            icono="iconoClean"
            onClick={handleCleanFormulario}
          />
        </ContenedorBotones>
      </FormularioAddMusica>
    </Contenedor>
  );
};

export default NuevaMusica;
=======
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
>>>>>>> 88fe98f5a1c9f31e2b57bf65778605109200f882
