import React, { Component, useContext } from "react";
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

import {
  GOOGLE_AUTH_URL,
  FACEBOOK_AUTH_URL,
  GITHUB_AUTH_URL,
  ACCESS_TOKEN,
  API_BASE_URL // Agrega API_BASE_URL si no está definido en tu archivo de constantes
} from "../../constants";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginSuccess: false,
      users: usersData,
    };
  }

  render() {
    const { loginSuccess } = this.state;
    const {login, handleSubmit} = useContext(LoginContext)

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
                /* users={this.state.users} */
                onLogin={this.props.onLogin} // Asegúrate de pasar onLogin aquí
              handleSubmit={handleSubmit}
                {...this.props}
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
  }
}

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

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit=props.handleSubmit
  }

  handleInputChange = (event) => {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;

    this.setState({
      [inputName]: inputValue,
    });
  };

  /* handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      const response = await login({ email, password });
      if (response.ok) {
        const data = await response.json()
        this.handleSuccessfulLogin(data?.data?.token);
      } else {
        throw new Error('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      Alert.error(error.message);
    }
  }; */
 /*  {
    "email": "admin@udea.edu.co",
    "password": "password"
    
} */


handleSuccessfulLogin = (accessToken) => {
    // Almacenar el token de acceso en localStorage
    localStorage.setItem(ACCESS_TOKEN, accessToken);

    // Mostrar alerta de inicio de sesión exitoso
    Alert.success("Inicio de sesión exitoso");

    // Redirigir al usuario a la página correspondiente según su rol
    setTimeout(() => {
      const { history, users } = this.props;
      const user = users.find((user) => user.email === this.state.email)
      
      /* if (user && user.isAdmin) {
        history.push("/editar_musica");
      } else {
        history.push("/mi_musica");
        console.log('Rute /mi-música', user )
      } */
    }, 2000);
  };

  render() {
    
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-item">
            <input
              type="input"
              name="email"
              className="form-control"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-item">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-item">
            <button type="submit" className="btn btn-block btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);