///Este para llamar datos de la API
<<<<<<< HEAD
import React, { useContext, useEffect, useState } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> 88fe98f5a1c9f31e2b57bf65778605109200f882
import { consultaAPI, editAPIPost } from "../api/apiJsonServer";
import styled from "styled-components";
import { consultaAPIYoutube, idVideoYoutube } from "../api/apiyoutube";
import Swal from "sweetalert2";
import Error404 from "../pages/Page404";
import { firstLetterCapital } from "../funcionesUtiles";
import LoaderSection from "../components/LoaderSection";
import { DescripcionTextArea } from "../components/CampoFormulario";
import { CampoFormulario } from "../components/CampoFormulario";
import { ListaOpciones } from "../components/CampoFormulario";
<<<<<<< HEAD
import { Redirect } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext";
=======
>>>>>>> 88fe98f5a1c9f31e2b57bf65778605109200f882

import ButtonForm from "../components/ButtonForm";

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

<<<<<<< HEAD
const EditMusic = (props) => {
  const { match } = props;
  console.log("🚀 ~ EditMusic ~ match:", match.params.id);
  const [musicas, setMusicas] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [id, setMusicaEditar] = useState(null);
=======
const EditMusic = ({ match}) => {
 

  const [musicas, setMusicas] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [musicaEditar, setMusicaEditar] = useState(null);
>>>>>>> 88fe98f5a1c9f31e2b57bf65778605109200f882
  const [nombre, setNombre] = useState("");
  const [url, setURL] = useState("");
  const [urlImg, setIMG] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [genero, setGenero] = useState("Selecciona una opción");
  const [emptyMusica, setEmptyMusica] = useState(false);
  const [loading, setLoading] = useState(true);
<<<<<<< HEAD
  const [redirect, setRedirect] = useState(false);
  const { sessionStorage, token } = useContext(LoginContext);

  const loadMusic = async () => {
    // console.log("Hola Mundo Lectura")
    try {
      // const musicasData = await consultaAPI(`songs/${match.params.id}`, {}, match.params.id);
      const musicasData = await consultaAPI(`songs`, {}, match.params.id);
      const generosData = await consultaAPI("genres");
      setMusicas(musicasData);
      setGeneros(generosData);

      const id = parseInt(match.params.id, 10);
      // console.log("Hola Mundo Lectura 2")
      const musicToEdit = musicasData.find((musica) => musica.id === id);
      // console.log("🚀 ~ loadMusic ~ musicToEdit:", musicToEdit)
      // console.log("🚀 ~ loadMusicreterno ~ musicasData:", musicasData)
      if (musicToEdit) {
        setMusicaEditar(musicToEdit);
        setNombre(musicToEdit.title);
        setDescripcion(musicToEdit.description);
        setURL(musicToEdit.audioUrl);
        setIMG(musicToEdit.artwork);
        // console.log("🚀 ~ loadMusic ~ musicToEdit.genre:", musicToEdit.genre)
        setGenero(firstLetterCapital(musicToEdit.genre.name));
      } else {
        setEmptyMusica(true);
      }

      setLoading(false);
    } catch (error) {
      console.error("Error loading music:", error);
      setMusicas([]);
      setGeneros([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMusic();
  }, [match.params.id]);

  /*   useEffect(() => {
    console.log("🚀 ~ EditMusic ~ token:", sessionStorage.token);
    console.log('🚀 ~ useEffect ~ token:', token)
  }, [sessionStorage]); */

=======

  useEffect(() => {
    const loadMusic = async () => {
      try {
        const musicasData = await consultaAPI("songs");
        const generosData = await consultaAPI("generos");
        setMusicas(musicasData);
        setGeneros(generosData);

        const id = parseInt(match.params.id, 10);
        const musicToEdit = musicasData.find((musica) => musica.id === id);
        if (musicToEdit) {
          setMusicaEditar(musicToEdit);
          setNombre(musicToEdit.titulo);
          setDescripcion(musicToEdit.descripcion);
          setURL(musicToEdit.urlMusica);
          setIMG(musicToEdit.urlImagen);
          setGenero(firstLetterCapital(musicToEdit.genero));
        } else {
          setEmptyMusica(true);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error loading music:", error);
        setMusicas([]);
        setGeneros([]);
        setLoading(false);
      }
    };

    loadMusic();
  }, [match.params.id]);

>>>>>>> 88fe98f5a1c9f31e2b57bf65778605109200f882
  const handleCleanFormulario = () => {
    setNombre("");
    setDescripcion("");
    setURL("");
    setIMG("");
    setGenero("Selecciona una opción");
  };
<<<<<<< HEAD
  const handleSubmitFormEdit = async (e) => {
    e.preventDefault();

    const objetoEdicion = {
        title: nombre,
        audioUrl: url,
        artwork: urlImg,
        description: descripcion,
        artistId: 1, // Debes asignar el ID del artista correspondiente
        genreId: 1, // Debes asignar el ID del género correspondiente
    };

    try {
        await editAPIPost('songs', objetoEdicion, match.params.id);

        Swal.fire({
            title: "¡ Éxito !",
            text: "Se ha editado la música",
            imageUrl: "/img/minions.gif",
            imageAlt: "Success",
            showCancelButton: false,
            confirmButtonText: "OK",
            confirmButtonColor: "#4CAF50",
        });

        setLoading(true);
        setRedirect(true);
    } catch (error) {
        console.error("Error al editar la música:", error);
        // Aquí puedes mostrar un mensaje de error al usuario o tomar alguna otra acción para manejar el error
    }
};

  
=======

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
>>>>>>> 88fe98f5a1c9f31e2b57bf65778605109200f882

  if (loading) {
    return <LoaderSection />;
  }

  if (emptyMusica) {
    return <Error404 />;
  }
<<<<<<< HEAD
  if (redirect) {
    return <Redirect to="/edit-delete-musica" />;
  }
  // console.log("🚀 ~ EditMusic ~ nombre:", nombre)

  return (
    <Contenedor>

      <FormularioAddMusica onSubmit={handleSubmitFormEdit}>
      <TituloFormularioMusica>Editar Música ✏️</TituloFormularioMusica>

=======

  return (
    <Contenedor>
      <FormularioAddMusica onSubmit={handleSubmitFormEdit}>
        <TituloFormularioMusica>Editar Música ✏️</TituloFormularioMusica>
>>>>>>> 88fe98f5a1c9f31e2b57bf65778605109200f882
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
<<<<<<< HEAD
          generos={generos.map((musica) => firstLetterCapital(musica.name))}
          // generos={[]}
=======
          generos={generos.map((musica) => firstLetterCapital(musica.nombre))}
>>>>>>> 88fe98f5a1c9f31e2b57bf65778605109200f882
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
