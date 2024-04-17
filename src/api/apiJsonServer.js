//Este codigo es para urlAPI
//buscar mejor fetch de javascript para hacer uso 
import axios from "axios";

const urlAPI = "http://localhost:8080";

export const consultaAPI = async (path, setFunction, id) => {
  const urlAPIConsulta = `${urlAPI}/${path}`;

  try {
    const response = await axios
      .get(urlAPIConsulta, {
        headers: {
          Authorization: `Bearer ${sessionStorage.token}`,
          Token: sessionStorage.token,
        },
      })
      /* .then(function (response) {
        console.log(response);
      }).catch((error)=>{console.log("Error al realizar la peticion", error)}) */
    console.log(response)
    if (response.data.length === 0) {

      throw new Error("Error de Get");
    } else {
      // setFunction([...response.data]);
      return response.data 
    }
  } catch (error) {
    console.error(error);
    throw new Error("Error de Get", error);
  }
};

export const addAPIPost = (path, objeto) => {
  const urlAPIPost = `${urlAPI}/${path}`;
  return axios.post(urlAPIPost, objeto);
};

/* export const deleteAPIPost = (path, id) => {
  const urlAPIDelete = `${urlAPI}/${path}/${id}`;
  return axios.delete(urlAPIDelete);
}; */
export const deleteAPIPost = async (path, setFunction, id) => {
  const urlAPIConsulta = `${urlAPI}/${path}/${id}`;

  try {
    const response = await axios
      .del(urlAPIConsulta, {
        headers: {
          Authorization: `Bearer ${sessionStorage.token}`,
          Token: sessionStorage.token,
        },
      })
      /* .then(function (response) {
        console.log(response);
      }).catch((error)=>{console.log("Error al realizar la peticion", error)}) */
    console.log(response)
    if (response.data.length === 0) {

      throw new Error("Error de Delete");
    } else {
      // setFunction([...response.data]);
      return response.data 
    }
  } catch (error) {
    console.error(error);
    throw new Error("Error de Delete", error);
  }
};
/* 
export const editAPIPost = (path, id, objeto) => {
  const urlAPiEdit = `${urlAPI}/${path}/${id}`;
  return axios.patch(urlAPiEdit, objeto, {
    headers: {
      Authorization: `Bearer ${sessionStorage.token}`,
      Token: sessionStorage.token,
    },
  });
};
 */

export const editAPIPost = async (path, setFunction, id) => {
  const urlAPIConsulta = `${urlAPI}/${path}`;
  
    try {
      const response = await axios
        .get(urlAPIConsulta, {
          headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
            Token: sessionStorage.token,
          },
        })
        /* .then(function (response) {
          console.log(response);
        }).catch((error)=>{console.log("Error al realizar la peticion", error)}) */
        console.log("🚀 ~ editAPIPost ~ response:", response)
      if (response.data.length === 0) {
  
        throw new Error("Error de Get");
      } else {
        // setFunction([...response.data]);
        return response.data 
      }
    } catch (error) {
      console.error(error);
      throw new Error("Error de Get", error);
    }
  }; 

/* 
export const editAPIPost = async (path, objeto, id) => {
  const urlAPIEdit = `${urlAPI}/${path}/${id}`;

  try {
    const response = await fetch(urlAPIEdit, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.token}`,
        Token: sessionStorage.token,
      },
      body: JSON.stringify(objeto),
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Error al editar", error);
  }
}; */


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
