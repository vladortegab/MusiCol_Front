import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { consultaAPI, deleteAPIPost } from "../api/apiJsonServer";
import LoaderSection from "../components/LoaderSection";
import MusicaCard from "../components/MusicaCard"; // Importa MusicaCard en lugar de CardVideo
import ListaOpciones from "../components/ListaOpciones";
import Swal from "sweetalert2";
import { datos } from "../data/archivos_iniciales";
import { FaRegWindowClose } from "react-icons/fa";
import { PiPencilFill } from "react-icons/pi";
import { firstLetterCapital } from "../funcionesUtiles";
import "../css/estilos.css";
import { Redirect } from "react-router-dom";

const Contenedor = styled.section`
  padding: 2rem 5%;
  position: relative;
  background-color: #000000;

  .contenedor__imagen-titulo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;

    .contenedor__imagen-titulo_spin {
      padding: 5px;
      background-color: white;
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
  }

  .contenedor__descripcion {
    text-align: center;
    font-family: "Inter", sans-serif;
    line-height: 1.5rem;
    margin-bottom: 2rem;
    color: blue;
  }

  .contenedor__imagen-titulo__titulo {
    text-align: center;
    font-family: "Carter", sans-serif;
    text-decoration-line: underline;
    text-decoration-color: red;
    text-decoration-thickness: 5px;
    font-size: 2rem;
    color: white;
  }

  .cantidadVideosSeleccionados {
    text-align: center;
    margin-bottom: 1rem;
    font-weight: 700;
    color: gray;

    .realce {
      font-size: 1.5rem;
      color: red;
      font-family: "Carter", sans-serif;
      text-decoration: underline;
      text-decoration-color: green;
      text-decoration-thickness: 5px;
    }
  }
`;

const ContenedorMusica = styled.div`
  width: 100%;
  position: relative;
  margin: 0 10px;

  display: flex;
  padding: 10px 0px;

  @media screen and (min-width: 550px) and (max-width: 767px) {
    width: 50%;
  }

  @media screen and (min-width: 768px) {
    width: 25%;
  }

  .contenedor__botones-edit-delete {
    position: relative;
    margin-top: 5px;
    margin-right: -430px;

    margin-left: auto;
    z-index: 1;

    .contenedor__botones-edit-delete_boton {
      background-color: lightsalmon;
      border-radius: 15px;
      padding: 5px;
      border: 2px solid yellow;

      &:hover {
        cursor: pointer;
        background-color: blue;

        .contenedor__botones-edit-delete_boton-icono {
          color: white;
        }
      }
    }
  }
`;
const ContenedorAllMusica = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 5%;
  box-sizing: border-box;
  row-gap: 1rem;
  justify-content: space-evenly;
`;

const EditDeleteMusicaPage = () => {
  const [musicas, setMusicas] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
  const [musicasFiltradas, setMusicasFiltradas] = useState([]);
  const [redirectId, setRedirectId] = useState(null);

  useEffect(() => {
    setGeneros(datos.generos);
  }, []);

  useEffect(() => {
    let nuevasMusicas = datos.musicas;

    if (categoriaSeleccionada !== "Todos") {
      nuevasMusicas = datos.musicas.filter(
        (musica) => musica.genero === categoriaSeleccionada
      );
    }

    setMusicasFiltradas(nuevasMusicas);
  }, [categoriaSeleccionada]);

  /*   useEffect(() => {
    if (
      categoriaSeleccionada !== "Selecciona una opción" &&
      categoriaSeleccionada !== "Todos"
    ) {
      const nuevasMusicas = datos.musicas.filter((musica) => {
        return musica.genero === categoriaSeleccionada.toLowerCase();
      });
      setMusicas(prevMusicas => {
        setMusicasFiltradas(nuevasMusicas);
        return prevMusicas; // Devuelve el valor anterior de musicas
      });
    } else if (categoriaSeleccionada === "Todos") {
      setMusicasFiltradas(datos.musicas);
    }
  }, [categoriaSeleccionada]); // No necesitas musicas como dependencia */

  const handleDelete = (musica) => {
    deleteAPIPost("musicas", musica.id)
      .then(() => {
        Swal.fire({
          title: "Éxito",
          text: "Se ha eliminado la música exitosamente",
          icon: "success",
        });
        // Aquí podrías actualizar tus datos si estás consultando la API nuevamente
        // consultaAPI("musicas", setMusicas);
        setMusicas(musicas.filter((m) => m.id !== musica.id));
      })
      .catch(() => {
        console.error("Error al eliminar la música desde la API");
      });
  };

  const handleEdit = (musica) => {
    // Aquí puedes manejar la redirección a la página de edición
    setRedirectId(musica.id);
    console.log("Editar música:", musica);
  };

  // Verifica si se debe redirigir
  if (redirectId !== null) {
    return <Redirect to={`/editar-musica/${redirectId}`} />;
  }
  if (generos.length === 0) {
    return <LoaderSection />;
  }

  return (
    <Contenedor>
      <h1 className="contenedor__imagen-titulo__titulo">
        Editar o Eliminar Músicas
      </h1>
      <ListaOpciones
        nuevoCampo="Todos"
        titulo={"Generos"}
        categorias={generos.map((genero) => firstLetterCapital(genero.nombre))}
        valor={categoriaSeleccionada}
        actualizarValor={setCategoriaSeleccionada}
      />
      <ContenedorAllMusica>
        {musicasFiltradas.map((musica, id) => {
          const genero = generos.find((g) => g.nombre === musica.genero); // Encuentra el objeto de género correspondiente
          return (
            <ContenedorMusica key={id}>
              <div className="contenedor__botones-edit-delete">
                <div
                  className="contenedor__botones-edit-delete_boton"
                  onClick={() => handleDelete(musica)}
                >
                  <FaRegWindowClose
                    className="contenedor__botones-edit-delete_boton-icono"
                    title="Eliminar"
                  />
                </div>
                <div
                  className="contenedor__botones-edit-delete_boton"
                  onClick={() => handleEdit(musica)}
                >
                  <PiPencilFill
                    className="contenedor__botones-edit-delete_boton-icono"
                    title="Editar"
                  />
                </div>
              </div>
              {/* Ajusta las propiedades de isAuthenticated e isEditing según sea necesario */}
              <MusicaCard
                musica={musica} // Pasar la música correspondiente
                key={id}
                color={genero.color} // Pasar el color del género
              />
            </ContenedorMusica>
          );
        })}
      </ContenedorAllMusica>
    </Contenedor>
  );
};

export default EditDeleteMusicaPage;
