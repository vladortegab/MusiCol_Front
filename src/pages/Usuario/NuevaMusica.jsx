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
