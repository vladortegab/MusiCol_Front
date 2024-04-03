//Este para llamar datos Local
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import Error404 from "../pages/Page404";
import { firstLetterCapital } from "../funcionesUtiles";
import LoaderSection from "../components/LoaderSection";
import { DescripcionTextArea } from "../components/CampoFormulario";
import { CampoFormulario } from "../components/CampoFormulario";
import { ListaOpciones } from "../components/CampoFormulario";

import ButtonForm from "../components/ButtonForm";
import { datos } from "../data/archivos_iniciales"; // Importa los datos del archivo archivos_iniciales.js

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

//Llamar datos Local
const EditMusic = ({ match }) => {
  const [musicas, setMusicas] = useState(datos.musicas); // Establece los datos de música desde archivos_iniciales.js
  const [generos, setGeneros] = useState(datos.generos); // Establece los datos de género desde archivos_iniciales.js
  const [musicaEditar, setMusicaEditar] = useState(null);
  const [nombre, setNombre] = useState("");
  const [url, setURL] = useState("");
  const [urlImg, setIMG] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [genero, setGenero] = useState("Selecciona una opción");
  const [emptyMusica, setEmptyMusica] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const id = parseInt(match.params.id, 10);
    const musicToEdit = musicas.find((musica) => musica.id === id);
    if (musicToEdit) {
      setMusicaEditar(musicToEdit);
      setNombre(musicToEdit.nombre);
      setDescripcion(musicToEdit.descripcion);
      setURL(musicToEdit.urlMusica);
      setIMG(musicToEdit.urlImagen);
      setGenero(firstLetterCapital(musicToEdit.genero));
    } else {
      setEmptyMusica(true);
    }
    setLoading(false);
  }, [match.params.id, musicas]);

  const handleCleanFormulario = () => {
    setNombre("");
    setDescripcion("");
    setURL("");
    setIMG("");
    setGenero("Selecciona una opción");
  };

  const handleSubmitFormEdit = (e) => {
    e.preventDefault();

    const objetoEdicion = {
      id: musicaEditar.id,
      nombre,
      genero: genero.toLowerCase(),
      urlMusica: url,
      urlImagen: urlImg,
      descripcion,
    };

    const musicasActualizadas = musicas.map((musica) =>
      musica.id === objetoEdicion.id ? objetoEdicion : musica
    );

    setMusicas(musicasActualizadas);

    Swal.fire({
      title: "¡ Éxito !",
      text: "Se ha editado el video",
      imageUrl: "/img/minions.gif",
      imageAlt: "Success",
      showCancelButton: false,
      confirmButtonText: "OK",
      confirmButtonColor: "#4CAF50",
    });

    setLoading(true);
  };

  if (loading) {
    return <LoaderSection />;
  }

  if (emptyMusica) {
    return <Error404 />;
  }

  return (
    <Contenedor>
      <FormularioAddMusica onSubmit={handleSubmitFormEdit}>
        <TituloFormularioMusica>Editar Música ✏️</TituloFormularioMusica>
        <CampoFormulario
          type="text"
          titulo="Nombre del Archivo de Música"
          valor={nombre}
          setValue={setNombre}
        />
        <CampoFormulario
          type="text"
          titulo="URL del Archivo de Música"
          valor={url}
          setValue={setURL}
        />
        <ListaOpciones
          titulo={"Géneros"}
          generos={generos.map((musica) => firstLetterCapital(musica.nombre))}
          valor={genero}
          setCategoria={setGenero}
        />
        <CampoFormulario
          type="text"
          titulo="URL del Archivo de Imagén"
          valor={urlImg}
          setValue={setIMG}
        />
        <img
          src={urlImg}
          style={{ display: "block", margin: "auto" }}
          alt="Imagen de música"
        />
        {/* Aquí visualizamos la imagen */}
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

export default EditMusic;
