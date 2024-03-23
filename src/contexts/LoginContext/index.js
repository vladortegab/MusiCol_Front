import React, { createContext, useEffect, useState } from "react";
import { login } from "../../pages/LoginGoogle/util/APIUtils";
import Alert from "react-s-alert";
import { ACCESS_TOKEN, ROL_USER } from "../../pages/LoginGoogle/constants";
//import { withRouter  } from "react-router-dom";

export const LoginContext = createContext();
const LoginContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSucces] = useState(false);
  // const router = withRouter ();
  let localStorage = window.localStorage;

  useEffect(() => {
    console.log(email, password, loginSuccess);
  }, [email, password, loginSuccess]);

  const handleSuccessfullLogin = (accessToken, isAdmin) => {
    console.log(accessToken);
    // Almacenar el token de acceso en localStorage
    localStorage.setItem(ACCESS_TOKEN, accessToken);
    localStorage.setItem(ROL_USER, isAdmin); 

    // Mostrar alerta de inicio de sesión exitoso
    Alert.success("Inicio de sesión exitoso");

    // Redirigir al usuario a la página correspondiente según su rol
    setTimeout(() => {
      if (accessToken !== "") {
        // Verificar si el usuario es administrador
        if (email === 'admin@udea.edu.co') {
          // Redirigir al usuario a /editar_musica si es administrador
          window.location.href = "/editar_musica";
        } else {
          // Redirigir al usuario a /mi_musica si no es administrador
          window.location.href = "/mi_musica";
        }
      } else {
        Alert.success("Something was wrong");
      }
    }, 100);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await login({
        email: email,
        password: password,
      });
      if (response.ok) {
        const data = await response.json();
        handleSuccessfullLogin(data.data.token, data.data.rol);
        // handleSuccessfullLogin(data.data.token);
      } else {
        throw new Error("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      Alert.error(error.message);
    }
  };

  return (
    <LoginContext.Provider
      value={{
        login,
        email,
        setEmail,
        password,
        setPassword,
        loginSuccess,
        setLoginSucces,
        handleSubmit,
        handleSuccessfullLogin,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
