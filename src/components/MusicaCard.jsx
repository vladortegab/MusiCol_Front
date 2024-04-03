import { Link } from "react-router-dom";

const MusicaCard = ({  musica, color, url }) => {
  const { id, urlMusica, urlImagen } = musica;

   

  let colorCard = {
    border: `2px solid ${color}`,
    backgroundColor: `${color}`,
  };

  // Función para manejar la eliminación de una música
  const handleDelete = (id) => {
    // Lógica para eliminar música
  };

  return (
  
    <div className="musicacard" style={colorCard} key={id}>
      <Link to={`${url}/${urlMusica}`} target="_blank" rel="noopener noreferrer" key={id}>
        <img src={urlImagen} alt={`Imagen de música ${id}`} />
      </Link>{" "}
      {/* Agrega la lógica de edición si es necesario */}
    </div>
)};


export default MusicaCard;
