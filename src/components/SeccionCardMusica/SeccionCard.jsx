import styled from "styled-components";
import ContenedorCardMusic from "./ContenedorCardMusic";
import { Link } from "react-router-dom";
import { firstLetterCapital } from "../../funcionesUtiles";

const SeccionCategorias = styled.section`
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
`;

const TituloCategorias = styled.h1`
  font-weight: 900;
  border-bottom: 4px solid ${(props) => props.color};
  font-size: 35px;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-family: "Carter", sans-serif;
  display: flex;
  align-items: center;
`;

const DescripcionCategorias = styled.p`
  text-align: center;
  padding-bottom: 1rem;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  line-height: 2rem;
  padding-left: 15px;
  padding-right: 15px;
`;

const SpanDescripcion = styled.span`
  color: white;
  font-weight: 700;
  font-family: "Carter", sans-serif;
  border-bottom: 2px solid;
  text-shadow: -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black;
  margin-right: 15px;
`;

const ContenedorVerCategorías = styled.div`
  margin-top: 3rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff6ed;
  width: 100%;
`;

const DescripcionVerCategorías = styled.p`
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  text-align: center;
  padding-left: 5%;
  padding-right: 5%;
  line-height: 1.5rem;
  color: #4e1d16;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.5rem;
  }
`;

const SeccionesCategorias = ({ categoriasArray = [], data = [] }) => {
  return (
    <>
      {categoriasArray.map((categoriaObjeto, index) => {
        const dataCategoria = data.filter(
          (ObjetoVideo) => categoriaObjeto.name.toLowerCase() === ObjetoVideo.genre.name.toLowerCase()
        );

        return dataCategoria.length ? (
          <SeccionCategorias color={categoriaObjeto.color} key={index}>
            <TituloCategorias color={categoriaObjeto.color}>
              {firstLetterCapital(categoriaObjeto.name)}
            </TituloCategorias>
            <DescripcionCategorias>
              <SpanDescripcion>Descripción 🚀 :</SpanDescripcion>
              {categoriaObjeto.description}
            </DescripcionCategorias>
            <ContenedorCardMusic videosCategoria={dataCategoria} categoriacolor={categoriaObjeto.color} />
            <ContenedorVerCategorías>
              <DescripcionVerCategorías>
                Haz click en el botón de abajo (👇) para visualizar{" "}
                <span style={{ fontWeight: 900, fontFamily: "'Helvetica Neue', sans-serif", letterSpacing: "2px" }}>
                  TODOS
                </span>{" "}
                los videos de la categoría {categoriaObjeto.name}
              </DescripcionVerCategorías>
              <Link to={`/categoria/${categoriaObjeto.name}`} className="botonVerFullCategoria">
                Ver Categoría
              </Link>
            </ContenedorVerCategorías>
          </SeccionCategorias>
        ) : (
          <div key={index}></div>
        );
      })}
    </>
  );
};

export default SeccionesCategorias;
