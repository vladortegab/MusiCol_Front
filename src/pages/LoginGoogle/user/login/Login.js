import React, { Component, useContext, useEffect, useState } from "react";
import { MainSpace, ImageSpace } from "../../../../styles";
import { Box, Typography } from "@mui/material";
import "./Login.css";
import { LogoSpace, FormSpace, Img } from "../../styles";
import usersData from "./users.json";
import { Link, withRouter } from "react-router-dom"; // Actualiza las importaciones
//import Complete from "../../complete/index";
import fbLogo from "../../img/fb-logo.png";
import googleLogo from "../../img/google-logo.png";
import githubLogo from "../../img/github-logo.png";
import Alert from "react-s-alert";
import completeImage from "../../../../../src/img/LogoFooter.png";
import { login } from "../../util/APIUtils"; // Importa la función login desde un archivo API
import { LoginForm } from "../../../../components/LoginForm";
import { LoginContext } from "../../../../contexts/LoginContext";

import {
  GOOGLE_AUTH_URL,
  FACEBOOK_AUTH_URL,
  GITHUB_AUTH_URL,
  ACCESS_TOKEN,
  API_BASE_URL, // Agrega API_BASE_URL si no está definido en tu archivo de constantes
} from "../../constants";

const Login = (props) => {
  /*  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSucces] = useState(false); */

  const {
    email,
    setEmail,
    password,
    setPassword,
    loginSuccess,
    setLoginSucces,
    handleSubmit
  } = useContext(LoginContext);

  useEffect(() => {
    console.log(password, email);
  }, [password, email]);

  const loginProps = {
    email,
    setEmail,
    password,
    setPassword,
    loginSuccess,
    setLoginSucces,
  };

  

 

  /* const { loginSuccess } = this.state; */

  return (
    <MainSpace>
      <ImageSpace />
      <Box
        sx={{
          padding: "5vw",
          width: "55vw",
          height: "100vh",
          display: "flexbox",
          flexDirection: "column",
          backgroundColor: "white",
        }}
      >
        {/* Mostrar el mensaje de registro exitoso si loginSuccess es verdadero */}
        {loginSuccess && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h4">¡Gracias por tu registro!</Typography>
            <Img src={completeImage} />
          </Box>
        )}

        {/* Sección de registro */}
        <Box>
          <LogoSpace>
            <Img src={"../../../assets/img/favicon.jpg"} alt="Logo" />
            <Typography variant="h3">Registro</Typography>
          </LogoSpace>
          <FormSpace>
            <LoginForm
              handleSubmit={handleSubmit}
              setEmail={setEmail}
              setPassword={setPassword}
            />
          </FormSpace>
        </Box>
        {/* Fin de sección de registro */}
        {/* Sección de login */}
        <Box>
          <div className="separador-login">
            <div className="or-separator">
              <span className="or-text">OR</span>
            </div>
            <span className="signup-link">
              Nuevo Usuario? <Link to="/signup">Sign up!</Link>
            </span>
            <SocialLogin />
          </div>
        </Box>
        {/* Fin de sección de login */}
      </Box>
    </MainSpace>
  );
};

class SocialLogin extends Component {
  render() {
    return (
      <div
        className="social-login"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
          <img src={googleLogo} alt="Google" /> Log in with Google
        </a>
        <a
          className="btn btn-block social-btn facebook"
          href={FACEBOOK_AUTH_URL}
        >
          <img src={fbLogo} alt="Facebook" /> Log in with Facebook
        </a>
        <a className="btn btn-block social-btn github" href={GITHUB_AUTH_URL}>
          <img src={githubLogo} alt="Github" /> Log in with Github
        </a>
      </div>
    );
  }
}

export default withRouter(Login);
