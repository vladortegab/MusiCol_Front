import React, { createContext, useEffect, useState } from "react";
import { login,logout  } from "../../pages/LoginGoogle/util/APIUtils";
import Alert from "react-s-alert";
import { ACCESS_TOKEN, ROL_USER } from "../../pages/LoginGoogle/constants";
//import { withRouter  } from "react-router-dom";
import { useJwt, decodeToken } from "react-jwt";

export const LoginContext = createContext();
const LoginContextProvider = ({ children }) => {
  const [email, setEmail] = useState("admin@udea.edu.co");
  const [password, setPassword] = useState("password");
  const [loginSuccess, setLoginSucces] = useState(false);
  const [token, setToken] = useState("");
  const { decodedToken } = useJwt(token);
  const [isAuthenticate, setIsAuthenticate] = useState(false)
  // const router = withRouter ();
  const sessionStorage = window.sessionStorage;

    useEffect(()=>{
    console.log("🚀 ~ LoginContextProvider ~ token:", token)
  },[token]) 

  const convertedToken = (token) => {
    let myDecodedToken = decodeToken(token);
    return myDecodedToken.roles[0].authority;
  };

  const handleSuccessfullLogin = (accessToken, role) => {
    // Almacenar el token de acceso en sessionStorage
    setIsAuthenticate(true)
    sessionStorage.setItem(ACCESS_TOKEN, accessToken);
    sessionStorage.setItem(ROL_USER, role);
    sessionStorage.setItem('oauth', true)

    // Mostrar alerta de inicio de sesión exitoso
    /* Alert.success("Inicio de sesión exitoso"); */

    // Redirigir al usuario a la página correspondiente según su rol
    setTimeout(() => {
      if (accessToken !== "") {
        // Verificar si el usuario es administrador
        if (role === "ROLE_ADMIN") {
          console.log("🚀 ~ setTimeout ~ role:", role)
          // Redirigir al usuario a /edit-delete-videos si es administrador
          
          window.location.href = "/editar_musica"; 
        } else if (role === "ROLE_USER"){
          // Redirigir al usuario a /mi_musica si no es administrador
          window.location.href = "/mi_musica"; 
          /* console.log("🚀 ~ setTimeout ~ mi_musica:", 'NO SOY ROLE') */
          
        }
      } else {
        Alert.success("Something was wrong");
      }
    }, 100);
  };
    
  const handleLogout = () => {
    sessionStorage.removeItem(ACCESS_TOKEN);
    sessionStorage.removeItem(ROL_USER);
    setIsAuthenticate(false);
    window.location.href = "/login"; // Redirige al usuario a la página de inicio de sesión después de cerrar sesión
    Alert.success("You're safely logged out!");
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
        /* handleSuccessfullLogin(data.data.token, data.data.rol); */
        setToken(data.data.token);
        let rol = convertedToken(data.data.token);
        
        handleSuccessfullLogin(data.data.token, rol);
      } else {
        throw new Error("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      Alert.error(error.message);
      setIsAuthenticate(false)
    }
  };

  return (
    <LoginContext.Provider
      value={{
        login,
        logout,
        email,
        setEmail,
        password,
        setPassword,
        loginSuccess,
        setLoginSucces,
        handleSubmit,
        handleSuccessfullLogin,
        setIsAuthenticate, 
        isAuthenticate,
        token,
        sessionStorage
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
