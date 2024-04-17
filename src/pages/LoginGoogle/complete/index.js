import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const Img = styled.img`
  width: 70%;
`;

const Complete = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/login"; // Redirige a /login después de 3 segundos
    }, 4000);

    return () => clearTimeout(timer); // Limpia el temporizador en la limpieza del efecto
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h2">¡Gracias por tu registro!</Typography>
      <Typography variant="h4">Te redirigiremos a la pantalla de Login, para que Inicies Sesión</Typography>
      <Img src="../../../assets/img/complete.png" alt="Registro completo" />
    </Box>
  );
};

export default Complete;
