import React, { createContext, useEffect, useState } from "react";
<<<<<<< HEAD
import { login,logout  } from "../../pages/LoginGoogle/util/APIUtils";
=======
import { login } from "../../pages/LoginGoogle/util/APIUtils";
>>>>>>> 88fe98f5a1c9f31e2b57bf65778605109200f882
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

<<<<<<< HEAD
    useEffect(()=>{
    console.log("🚀 ~ LoginContextProvider ~ token:", token)
  },[token]) 

  const convertedToken = (token) => {
    let myDecodedToken = decodeToken(token);
=======
  /*   useEffect(()=>{
    console.log("🚀 ~ LoginContextProvider ~ token:", token)
  },[token]) */

  useEffect(() => {
    console.log(email, password, loginSuccess);
  }, [email, password, loginSuccess]);

  const convertedToken = (token) => {
    let myDecodedToken = decodeToken(token);
    console.log("🚀 ~ convertedToken ~ myDecodedToken:", myDecodedToken)

>>>>>>> 88fe98f5a1c9f31e2b57bf65778605109200f882
    return myDecodedToken.roles[0].authority;
  };

  const handleSuccessfullLogin = (accessToken, role) => {
    // Almacenar el token de acceso en sessionStorage
    setIsAuthenticate(true)
    sessionStorage.setItem(ACCESS_TOKEN, accessToken);
    sessionStorage.setItem(ROL_USER, role);
    sessionStorage.setItem('oauth', true)
<<<<<<< HEAD

=======
    console.log(
      "🚀 ~ handleSuccessfullLogin ~ sessionStorage:",
      sessionStorage.getItem(ROL_USER)
    );
>>>>>>> 88fe98f5a1c9f31e2b57bf65778605109200f882
    // Mostrar alerta de inicio de sesión exitoso
    /* Alert.success("Inicio de sesión exitoso"); */

    // Redirigir al usuario a la página correspondiente según su rol
    setTimeout(() => {
      if (accessToken !== "") {
        // Verificar si el usuario es administrador
        if (role === "ROLE_ADMIN") {
          console.log("🚀 ~ setTimeout ~ role:", role)
          // Redirigir al usuario a /edit-delete-videos si es administrador
          
<<<<<<< HEAD
          window.location.href = "/editar_musica"; 
        } else if (role === "ROLE_USER"){
          // Redirigir al usuario a /mi_musica si no es administrador
          window.location.href = "/mi_musica"; 
          /* console.log("🚀 ~ setTimeout ~ mi_musica:", 'NO SOY ROLE') */
          
=======
          window.location.href = "/edit-delete-musica"; 
        } else {
          // Redirigir al usuario a /mi_musica si no es administrador
          /* window.location.href = "/mi_musica"; */
          /* console.log("🚀 ~ setTimeout ~ mi_musica:", 'NO SOY ROLE') */
>>>>>>> 88fe98f5a1c9f31e2b57bf65778605109200f882
        }
      } else {
        Alert.success("Something was wrong");
      }
    }, 100);
  };
<<<<<<< HEAD
    
  const handleLogout = () => {
    sessionStorage.removeItem(ACCESS_TOKEN);
    sessionStorage.removeItem(ROL_USER);
    setIsAuthenticate(false);
    window.location.href = "/login"; // Redirige al usuario a la página de inicio de sesión después de cerrar sesión
    Alert.success("You're safely logged out!");
  };
=======
>>>>>>> 88fe98f5a1c9f31e2b57bf65778605109200f882

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
<<<<<<< HEAD
        logout,
=======
>>>>>>> 88fe98f5a1c9f31e2b57bf65778605109200f882
        email,
        setEmail,
        password,
        setPassword,
        loginSuccess,
        setLoginSucces,
        handleSubmit,
        handleSuccessfullLogin,
        setIsAuthenticate, 
<<<<<<< HEAD
        isAuthenticate,
        token,
        sessionStorage
=======
        isAuthenticate
>>>>>>> 88fe98f5a1c9f31e2b57bf65778605109200f882
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
