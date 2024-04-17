import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { consultaAPI, deleteAPIPost } from "../api/apiJsonServer";
import Swal from "sweetalert2";
import LoaderSection from "./LoaderSection";

const Contenedor = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #8bb7f0;
`;

const Tabla = styled.table`
  width: 90%;
  border-collapse: collapse;
`;

const TituloTabla = styled.h1`
  text-align: center;
  font-weight: 800;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 18px;
  padding-bottom: 1rem;
`;

const EncabezadoTabla = styled.th`
  background-color: #2a7ae4;
  color: white;
  padding: 10px;
  text-align: left;
`;

const CeldaTabla = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

const BotonEliminar = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
`;
const EspacioVacio = styled.div`
  height: 80vh; /* Altura del espacio vacío */
`;
const TablaContainer = styled.div`
  width: 90%;
`;

const VerUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUsuarios = async () => {
      try {
        const usuariosData = await consultaAPI("users");
        setUsuarios(usuariosData);
        setLoading(false);
      } catch (error) {
        console.error("Error loading usuarios:", error);
        setUsuarios([]);
        setLoading(false);
      }
    };

    loadUsuarios();
  }, []);

  /*   const handleEliminarUsuario = async (idUsuario) => {
    try {
      await deleteAPIPost("usuarios", idUsuario);

      Swal.fire({
        title: "¡Éxito!",
        text: "Se ha eliminado el usuario",
        icon: "success",
        confirmButtonText: "OK",
      });

      // Actualizar la lista de usuarios después de eliminar uno
      const nuevosUsuarios = usuarios.filter((usuario) => usuario.id !== idUsuario);
      setUsuarios(nuevosUsuarios);
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
      // Aquí puedes mostrar un mensaje de error al usuario o tomar alguna otra acción para manejar el error
    }
  }; */
  const handleEliminarUsuario = (indexUsuario) => {
    // Verificar si el usuario a eliminar es "Admin"
    if (usuarios[indexUsuario].name === "Admin") {
      // Mostrar advertencia
      Swal.fire({
        title: "Error",
        text: "No se puede eliminar al usuario 'Admin'",
        icon: "error",
        confirmButtonText: "OK",
      });
      return; // Salir de la función sin eliminar al usuario
    }
  
    // Actualizar la lista de usuarios después de eliminar uno
    Swal.fire({
      title: "¡Éxito!",
      text: "Se ha eliminado el usuario",
      icon: "success",
      confirmButtonText: "OK",
    });
    const nuevosUsuarios = usuarios.filter(
      (usuario, index) => index !== indexUsuario
    );
    setUsuarios(nuevosUsuarios);
  };
  

  return (
    <Contenedor>
      <TablaContainer>
        <Tabla>
          <thead>
            <tr>
              <EncabezadoTabla>ID</EncabezadoTabla>
              <EncabezadoTabla>Nombre</EncabezadoTabla>
              <EncabezadoTabla>Email</EncabezadoTabla>
              <EncabezadoTabla>Fecha de Registro</EncabezadoTabla>
              <EncabezadoTabla>Acciones</EncabezadoTabla>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario, index) => (
              <tr key={index}>
                <CeldaTabla>{index + 1}</CeldaTabla>
                <CeldaTabla>{usuario.name}</CeldaTabla>
                <CeldaTabla>{usuario.email}</CeldaTabla>
                <CeldaTabla>{usuario.joinedOn}</CeldaTabla>

                <CeldaTabla>
                  <BotonEliminar onClick={() => handleEliminarUsuario(index)}>
                    Eliminar
                  </BotonEliminar>
                </CeldaTabla>
              </tr>
            ))}
          </tbody>
        </Tabla>
      </TablaContainer>
      <EspacioVacio /> {/* Espacio vacío */}
    </Contenedor>
  );
};

export default VerUsuarios;
