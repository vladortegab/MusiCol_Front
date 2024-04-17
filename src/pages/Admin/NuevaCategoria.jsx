<<<<<<< HEAD
import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { consultaAPI } from "../../api/apiJsonServer";
import { editAPIPost } from "../../api/apiJsonServer";

import { firstLetterCapital } from "../../funcionesUtiles";
import { CampoFormulario } from "../../components/CampoFormulario";
import { ListaOpciones } from "../../components/CampoFormulario";
import { DescripcionTextArea } from "../../components/CampoFormulario";
import ButtonForm from "../../components/ButtonForm";

const SectionAddVideo = styled.section`
  background-color: #8bb7f0;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormularioAddCategoria = styled.form`
  background-color: white;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 80%;
  border-radius: 15px;
  box-shadow: 7px 8px 5px -1px rgba(0, 0, 0, 0.62);
  padding-left: 5%;
  padding-right: 5%;
  box-sizing: border-box;
  margin-top: 2rem;

  @media (min-width: 550px) {
    width: 80%;
  }

  @media (min-width: 768px) {
    width: 60%;
  }
`;

const TituloFormularioVideo = styled.h1`
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

  @media (min-width: 768px) and (max-width: 995px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 996px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const CeldaEditCategory = styled.td`
  font-weight: 700;
  &:hover {
    cursor: pointer;
    background-color: #53585d;
    color: white;
  }
`;

const CeldaDeleteCategory = styled.td`
  font-weight: 700;
  &:hover {
    cursor: pointer;
    background-color: red;
    color: white;
  }
`;

const Tabla = styled.table`
  margin-top: 1rem;
  width: 100%;
  border: 4px solid #2a7ae4;

  .headtable {
    font-weight: 700;
  }

  th,
  td {
    border: 2px solid black;
    text-align: center;
    vertical-align: middle;
    padding: 5px;
  }

  th {
    padding: 5px;
    background-color: black;
    color: white;
    border-collapse: collapse;
  }

  @media screen and (min-width: 550px) {
    display: table;
  }
`;

const NuevaCategoria = (
  props,
  {
    categoriasArray,
    handleDataFormAddCategoría,
    handleEditCategoryForm,
   
    
  }
) => {
  const { match } = props;

  const [nombreGenero, setNombreGenero] = useState("");
  const [colorGenero, setColorGenero] = useState("");
  const [descripcionGenero, setDescripcionGenero] = useState("");
  const [idCategoria, setIdCategoria] = useState(0);
  const [generoEditar, setGeneroEditar] = useState(null);
  const [nombreCategoria, setNombreCategoría] = useState("");
  const [descripcionCategoria, setDescripcionCategoría] = useState("");
  const [emptyGenero, setEmptyGenero] = useState(false);
  const [colorCategoria, setcolorCategoria] = useState("#31ea1a");
  const [mostrarFormularioCategoria, setmostrarFormularioCategoria] =
    useState(true);
  const [loading, setLoading] = useState(true);
  const [generos, setGeneros] = useState([]);
  const [genero, setGenero] = useState("Selecciona una opción");

  useEffect(() => {
    const loadGeneros = async () => {
      try {
        const generosData = await consultaAPI("genres", {}, match.params.id);
        setGeneros(generosData);

        const id = parseInt(match.params.id, 10);
        const genreToEdit = generosData.find((genero) => genero.id === id);
        if (genreToEdit) {
          setGeneroEditar(genreToEdit);
          setNombreGenero(genreToEdit.name);
          setDescripcionGenero(genreToEdit.description);
          setColorGenero(genreToEdit.colorInHex);
          setGenero(genreToEdit.songs);
        } else {
          setEmptyGenero(true);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error loading genre:", error);
        setGeneros([]);
        setLoading(false);
      }
    };

    loadGeneros();
  }, [match.params.id]);

  const handleSubmitFormularioCategoria = async (evento) => {
    evento.preventDefault();
    try {
      const nuevaCategoria = {
        nombre: nombreGenero,
        descripcion: descripcionGenero,
        color: colorGenero
      };
      // Enviar la solicitud para guardar la categoría
      await editAPIPost("genres", nuevaCategoria); // Asumiendo que "categorias" es el endpoint correcto
      // Limpiar el formulario después de guardar la categoría
      handleCleanFormularioCategoria();
      // Opcional: Actualizar la lista de categorías después de guardar una nueva
      // Esto depende de cómo esté estructurada tu aplicación y cómo manejas los datos de la API
    } catch (error) {
      console.error("Error al guardar la categoría:", error);
      // Puedes mostrar un mensaje de error al usuario aquí si lo deseas
    }
  };
  const handleCleanFormularioCategoria = () => {
    setNombreCategoría("");
    setDescripcionCategoría("");
    setcolorCategoria("#31ea1a");
    setIdCategoria(0);
  };                                            
  const handleEditCategory = (categoria) => {
    console.log("Editando categoría:", categoria);
    setNombreGenero(categoria.name); // Ajusta las propiedades según corresponda
    setDescripcionGenero(categoria.description);
    setColorGenero(categoria.colorInHex);
    setIdCategoria(categoria.id);
  };
 /*  const handleDeleteCategoriaTable = (indexCategoria) => {
    handleDeleteCategory(indexCategoria);
  }; */
  const handleDeleteCategory = (idCategoria) => {
    // Filtrar las categorías para eliminar la categoría con el ID especificado
    const nuevasCategorias = generos.filter(categoria => categoria.id !== idCategoria);
    
    // Actualizar el estado con las nuevas categorías sin la categoría eliminada
    setGeneros(nuevasCategorias);
    
    // Aquí podrías agregar lógica adicional, como enviar una solicitud para eliminar la categoría del servidor si es necesario
  };
  const showDataCategory = (categoria) => {
    setNombreCategoría(categoria.categoria);
    setDescripcionCategoría(categoria.descripcion);
    setcolorCategoria(categoria.color);
  };

  return (
    <>
      <SectionAddVideo>
        {mostrarFormularioCategoria ? (
          <FormularioAddCategoria onSubmit={handleSubmitFormularioCategoria}>
            <TituloFormularioVideo>
              Agregar Nuevo Género ✨/ Editar Género Existente ✏️
            </TituloFormularioVideo>
            <CampoFormulario
              type="text"
              titulo="Nombre del Género"
              valor={nombreGenero}
              setValue={setNombreGenero}
            />
            <DescripcionTextArea
              titulo="Descripción del Género"
              setValue={setDescripcionGenero}
              valor={descripcionGenero}
            />
            <CampoFormulario
              type="color"
              titulo="Selecciona Color Género"
              valor={colorGenero}
              setValue={setColorGenero}
            />
            <ListaOpciones
              titulo={"Géneros"}
              generos={generos.map((genero) => firstLetterCapital(genero.name))}
              valor={genero}
              setCategoria={setGenero}
            />

            <ContenedorBotones>
              <ButtonForm
                className="botonSaveGenero"
                title="Guardar Categoría"
                icono="iconoSave"
              />
              <ButtonForm
                className="botonLimpiarGenero"
                title="Limpiar Categoría"
                icono="iconoClean"
                onClick={handleCleanFormularioCategoria}
              />
              <ButtonForm
                className="botonEditarGenero"
                title="Editar Categoría"
                icono="iconoEdit"
                onClick={() => {
                  const objetoEdit = {
                    id: idCategoria,
                    categoria: nombreCategoria,
                    descripcion: descripcionCategoria,
                    color: colorCategoria,
                  };
                  handleEditCategoryForm(
                    objetoEdit,
                    handleCleanFormularioCategoria
                  );
                }}
              />
            </ContenedorBotones>
            <Tabla>
            
              <thead className="headtable">
                <tr>
                <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Color</th>
                  <th>Editar</th>
                  <th>Remover</th>
                </tr>
              </thead>

              <tbody>
            
                

                {generos.map((categoria, i) => {

                  return (
                    <tr key={i}>
                      <td>{firstLetterCapital(categoria.name)}</td>

                      <td>
                        {categoria.description
                          ? categoria.description.substring(0, 45) + "..." : ""}
                      </td>

                      <td
                        style={{ backgroundColor: `${categoria.colorInHex}` }}
                      ></td>
                        
                        
                      <CeldaEditCategory
                        title={`Editar Categoría: ${categoria.name}`}
                        onClick={() => handleEditCategory(categoria)}
                      >
                        Editar
                      </CeldaEditCategory>
                      <CeldaDeleteCategory
                        title={`Borrar Categoría: ${categoria.name}`}
                        onClick={() => handleDeleteCategory(categoria.id)}
                      >
                        Eliminar
                      </CeldaDeleteCategory>
                    </tr>
                  );
                })}
                
              </tbody>
              
            </Tabla>
          </FormularioAddCategoria>
        ) : (
          false
        )}
      </SectionAddVideo>
    </>
  );
};
=======
import { useState } from 'react'
import ButtonForm from '../../components/ButtonForm'
import CampoTexto from '../../components/CampoTexto'
import '../../css/estilos.css'
import { datos } from '../../data/archivos_iniciales'
import TextArea from '../../components/TextArea'
import CampoColor from '../../components/CampoColor'

const NuevaCategoria = () =>{

    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [color, setColor] = useState('')
    const [codigo, setCodigo] = useState('')
 

    const manejarEnvio = (e) => {
        e.preventDefault()
        const datosAEnviar = {
            nombre,
            descripcion,
            color
        }
        console.log(datosAEnviar)
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
                    <h2 className="nuevamusica__titulo">Nueva Categoría</h2>
                    <form className='form' action="" onSubmit={manejarEnvio}>
                        
                        <CampoTexto 
                            titulo='Nombre' 
                            error='' 
                            required 
                            valor={nombre}
                            actualizarValor={setNombre}    
                        />

                        <TextArea 
                            titulo='Descripción' 
                            error='' 
                            required
                            valor={descripcion}
                            actualizarValor={setDescripcion} 
                        />

                        <CampoColor 
                            titulo='Color' 
                            error='' 
                            required
                            valor={color}
                            actualizarValor={setColor}
                        />

                        <CampoTexto 
                            titulo='Código de seguridad' 
                            error='' 
                            required
                            valor={codigo}
                            actualizarValor={setCodigo}
                        />

                        <div className="botones">
                            <ButtonForm titulo='Guardar' styles={EstilosBtnGuardar} />
                            <ButtonForm titulo='Limpiar' styles={EstilosBtnLimpiar} />
                        </div>

                    </form>

                    <table>
                        <thead>
                            <tr>
                                <td>Nombre</td>
                                <td>Descripción</td>
                                <td>Editar</td>
                                <td>Remover</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                datos.generos.map((categoria, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{categoria.nombre}</td>
                                            <td>{categoria.descripcion}</td>
                                            <td className="table__editar">Editar</td>
                                            <td className="table__remover">Remover</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>
            </main>
        </>
        
        
        
    )
    
}

>>>>>>> 88fe98f5a1c9f31e2b57bf65778605109200f882
export default NuevaCategoria