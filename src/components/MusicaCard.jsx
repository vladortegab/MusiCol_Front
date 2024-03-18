import "../css/estilos.css";
import { Link } from "react-router-dom";
import { datos } from "../data/archivos_iniciales";

const MusicaCards = ({ url, color, nombreMusica, isAuthenticated, isEditing  }) => {
  // Función para manejar la eliminación de una música
  let colorCard = {
    border: `2px solid ${color}`,
    backgroundColor: `${color}`,
  };
  const handleDelete = (id) => {
    // Aquí puedes implementar la lógica para eliminar la música con el ID proporcionado
  };

  return (
    <>
      {datos.musicas.map((musica) => {
        const { id, urlMusica, urlImagen, genero } = musica;
        if (genero === nombreMusica) {
          return (
            <div className="musicacard" style={colorCard} key={id}>
              <Link
                to={`${url}/${urlMusica}`}
                target="_blank"
                rel="noopener noreferrer"
                key={id}
              >
                <img src={`${urlImagen}`} alt="Imagen musica card" key={id} />
              </Link>{" "}
              {isAuthenticated && isEditing && (
                <div className="actions">
                  <button onClick={() => handleDelete(id)}>Eliminar</button>
                  {/* Agrega aquí la lógica de edición si es necesario */}
                </div>
              )}
            </div>
          );
        }
      })}
    </>
  );
};

export default MusicaCards;
