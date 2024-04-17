import styled from "styled-components";
import Boton from "../../components/ButtonForm";
import { firstLetterCapital } from "../../funcionesUtiles";
import { withRouter } from 'react-router-dom'; // Importa withRouter desde react-router-dom

const ContenedorCard = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow:blue;
  margin-left: 2px;
  margin-right: 2px;
  margin-bottom: 5px;
  margin-top: 5px;
  background-color:red;

  &:hover {
    background-color: white;
    color: white;

    box-shadow: 0px 0px 21px -5px rgba(255, 255, 255, 1);
    transform: scale(0.95);
    transition: transform 1s ease;
    border: 4px solid;
  }
`;

const ImageCard = styled.img`
  width: 100%;
  border: 5px solid ${(props) => props.color};
  border-radius: 15px;
  margin-bottom: 1rem;
`;

const TituloCard = styled.h1`
  margin-top: 1rem;
  margin-bottom: 1rem;
  height: 4.5rem;
  font-family: "Carter", sans-serif;
  font-size: 1.5rem;
  color: black;
  text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white,
    1px 1px 0 white;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Categoria = styled.p`
  margin-bottom: 1rem;

  .realce {
    font-weight: 700;
    font-family: "Carter", sans-serif;
  }
`;

const CardMusic = ({ history, musica, color, url }) => { // Añade history como prop
    const { id, titulo, categoria, urlImagen } = musica; // Corrige el nombre de las propiedades
  
    const handleClick = (id) => {
      history.push(`/ver-cancion/${id}`); // Usa history.push para navegar
    };
  
    const newTitle = (titulo) => {
      if (titulo.length > 40) {
        return titulo.substring(0, 40) + "...";
      } else {
        return titulo;
      }
    };
  
    return (
      <ContenedorCard>
        <TituloCard>{newTitle(titulo)}</TituloCard>
        <Categoria>
          Categoría:{" "}
          <span className="realce">{firstLetterCapital(categoria)}</span>
        </Categoria>
        <ImageCard src={urlImagen} alt={titulo} color={color} />
        <Boton
          title="Ver Video"
          className="botonVerVideo"
          icono="iconoEye"
          onClick={() => handleClick(id)}
          nombretitulo={titulo}
        />
      </ContenedorCard>
    );
  };
  
  export default withRouter(CardMusic); 