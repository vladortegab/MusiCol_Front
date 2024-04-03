

//Este codigo es para urlAPI


import axios from "axios";

const urlAPI = "http://localhost:8080";




export const consultaAPI = (path, setFunction) => {
  const urlAPIConsulta = `${urlAPI}/${path}`;

  return axios
    .get(urlAPIConsulta)
    .then((response) => {
      if (response.data.length === 0) {
        throw new Error("Error de Get");
      } else {
        setFunction([...response.data]);
      }
    })
    .catch((error) => {
      throw new Error("Error de Get");
    });
};

export const addAPIPost = (path, objeto) => {
  const urlAPIPost = `${urlAPI}/${path}`;
  return axios.post(urlAPIPost, objeto);
};

export const deleteAPIPost = (path, id) => {
  const urlAPIDelete = `${urlAPI}/${path}/${id}`;
  return axios.delete(urlAPIDelete);
};
export const editAPIPost = (path, objeto) => {
  const urlAPiEdit = `${urlAPI}/${path}/${objeto.id}`;
  return axios.put(urlAPiEdit, objeto);
}; 


//Este codigo es para datos json
/* 
import { datos } from '../data/archivos_iniciales';

export const consultaAPI = (path, setFunction) => {
  if (path === 'musicas') {
    setFunction(datos.musicas);
  } else if (path === 'generos') {
    setFunction(datos.generos);
  } else {
    throw new Error("Ruta no válida");
  }
};

export const addAPIPost = (path, objeto) => {
  // Agrega lógica para agregar un nuevo elemento al conjunto de datos local si es necesario
};

export const deleteAPIPost = (path, id) => {
  // Agrega lógica para eliminar un elemento del conjunto de datos local si es necesario
};

export const editAPIPost = (path, objeto) => {
  // Agrega lógica para editar un elemento del conjunto de datos local si es necesario
};
 */