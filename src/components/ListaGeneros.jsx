import MusicaCard from "./MusicaCard"
import { datos } from "../data/archivos_iniciales"

const ListaGeneros = ({ isAuthenticated }) => {
    

    return (
        <main className="generos">
      <h1 className="sr-only">Lista géneros música</h1>
      <p className="sr-only">MusicaCol plataforma para registrar y escuchar nuestra música favorita</p>
      <div className="generos_Listas">
        {datos.generos.map((genero) => {
          const { id, nombre, descripcion, color } = genero;
          let colorLista = {
            backgroundColor: color
          };

          // Filtrar las músicas por género
          const musicasPorGenero = datos.musicas.filter((musica) => musica.genero === nombre);

          return (
            <div className="generos__contenido container" key={id}>
              <div className="generos__titulo">
                <div className="generos__nombre" style={colorLista}>{nombre}</div>
                <div className="generos__descripcion">{descripcion}</div>
              </div>
              <div className="generos__listamusicas">
                {musicasPorGenero.map((musica) => (
                  <MusicaCard
                    key={musica.id}
                    musica={musica}
                    color={color}
<<<<<<< HEAD
                    url="/ver-cancion/:id"
                    isAuthenticated={isAuthenticated}
                  />
                  
=======
                    url="/musicas"
                    isAuthenticated={isAuthenticated}
                  />
>>>>>>> 88fe98f5a1c9f31e2b57bf65778605109200f882
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </main>
    )
}

<<<<<<< HEAD
export default ListaGeneros
 /*
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SeccionCard from "./SeccionCardMusica/SeccionCard";
import { consultaAPI } from "../api/apiJsonServer";

//const Main = styled.main`
  
`;

const ListaGeneros = ({ isAuthenticated }) => {
  const [generos, setGeneros] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    consultaAPI("genres")
      .then((categorias) => {
        const fetchMusicasPromises = categorias.map((genero) =>
          consultaAPI(`songs?genreId=${genero.id}`)
        );

        Promise.all(fetchMusicasPromises)
          .then((musicasPorGenero) => {
            categorias.forEach((genero, index) => {
              genero.musicas = musicasPorGenero[index];
            });
            setGeneros(categorias);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error al obtener las músicas:", error);
            setLoading(false);
          });
      })
      .catch((error) => {
        console.error("Error al obtener los géneros:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <Main className="generos">
      <h1 className="sr-only">Lista géneros música</h1>
      <p className="sr-only">
        MusicaCol plataforma para registrar y escuchar nuestra música favorita
      </p>
      <div className="generos_Listas">
        {generos.map((genero) => (
          <div className="generos__contenido container" key={genero.id}>
            <div className="generos__titulo">
              <div
                className="generos__nombre"
                style={{ backgroundColor: genero.color }}
              >
                {genero.name}
              </div>
              <div className="generos__descripcion">{genero.description}</div>
            </div>
            <div className="generos__listamusicas">
              {genero.map((musica) => (
                <SeccionCard
                  key={musica.id}
                  musica={{
                    ...musica,
                    artwork: process.env.PUBLIC_URL + musica.artwork, // Construir la URL completa de la imagen
                  }}
                  color={color}
                  url={`/ver-cancion/${musica.id}`}
                  isAuthenticated={isAuthenticated}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Main>
  );
};

export default ListaGeneros;
*/
=======
export default ListaGeneros
>>>>>>> 88fe98f5a1c9f31e2b57bf65778605109200f882
