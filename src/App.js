import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "../src/pages/LoginGoogle/app/App";
import Signup from "../src/pages/LoginGoogle/user/signup/Signup";
import Profile from "../src/pages/LoginGoogle/user/profile/Profile";
import OAuth2RedirectHandler from "../src/pages/LoginGoogle/user/oauth2/OAuth2RedirectHandler";
import LoadingIndicator from "././pages/LoginGoogle/common/LoadingIndicator";
import { getCurrentUser } from "../src/pages/LoginGoogle/util/APIUtils";
import { ACCESS_TOKEN } from "../src/pages/LoginGoogle/constants";
import PrivateRoute from "././pages/LoginGoogle/common/PrivateRoute";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import "./App.css";

import Header from "./components/Header";
import GlobalStyle from "./GlobalStyle";
import Page404 from "./pages/Page404";
import Footer from "./components/Footer";
import MiMusica from "./pages/Usuario/mi_musica";
import NuevaMusica from "./pages/Usuario/NuevaMusica";
import EditarMusica from "./pages/Admin/EditarMusica";
import EditDeleteMusicaPagina from "./components/DeleteEditMusica";
import NuevaCategoria from "./pages/Admin/NuevaCategoria";
import HolaMundo from "./components/HolaMundo"; // Asegúrate de proporcionar la ruta correcta al archivo HolaMundo.js
import EditMusic from "./components/EditMusica";
import LoginContextProvider from "./contexts/LoginContext";
import EditMusic1 from "./components/EditMusic1";
import VerCancion from "./components/VerCancion";
import VerUsuarios from "./components/VerUsuarios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: true,
    };

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  loadCurrentlyLoggedInUser() {
    getCurrentUser()
      .then((response) => {
        this.setState({
          currentUser: response,
          authenticated: true,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
        });
      });
  }

  handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null,
    }, () => {
      // Redirige al usuario a la página de inicio de sesión después de cerrar sesión
      this.props.history.push("/login");
      Alert.success("¡Has cerrado sesión de forma segura!");
    });
  };
  

  handleLogin = () => {
    this.setState({ authenticated: true }, () => {
      // Redirige al usuario después de que el estado se haya actualizado correctamente
      this.props.history.push("/editar-musica");
    });
  };

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  render() {
    if (this.state.loading) {
      return <LoadingIndicator />;
    }

    return (
      <>
        <Router>
          <div className="App">
            <GlobalStyle />
            <Header
              authenticated={this.state.authenticated}
              onLogout={this.handleLogout}
            />
            <LoginContextProvider>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/nuevamusica" component={NuevaMusica} />
                <Route path="/nuevacategoria" component={NuevaCategoria} />
                <Route path="/hola-mundo" component={HolaMundo} />
                <Route path="/ver-cancion/:id" component={VerCancion} />
                <Route path="/editarusuarios" component={VerUsuarios} />

                <Route
                  path="/edit-delete-musica"
                  component={EditDeleteMusicaPagina}
                />

                <Route path="/editar-musica/:id" component={EditMusic} />
                {/*<Route path="/edit-music/:id" component={EditMusic1} />*/}

                {/*  <Route
                path="/editar_musica"
                render={(props) => (
                  <LoginContextProvider>
                    <EditarMusica {...props} />
                  </LoginContextProvider>
                )}
              /> */}
                <Route
                  path="/editar-musica/:id"
                  /* component={EditarMusica} */
                  render={(props) => (
                    <LoginContextProvider>
                      <EditarMusica {...props} />
                    </LoginContextProvider>
                  )}
                />

                <Route
                  path="/edit-delete-musica"
                  render={(props) => (
                    <LoginContextProvider>
                      {this.state.authenticated ? (
                        <EditDeleteMusicaPagina {...props} />
                      ) : (
                        <EditarMusica {...props} />
                      )}
                    </LoginContextProvider>
                  )}
                />
                
                <Route
                  path="/editar_musica"
                  render={(props) => (
                    <LoginContextProvider>
                      {this.state.authenticated ? (
                        <EditarMusica {...props} />
                      ) : (
                        <EditarMusica {...props} />
                      )}
                    </LoginContextProvider>
                  )}
                />
               

                {/*  <PrivateRoute
              path="/mi_musica"
              authenticated={this.state.authenticated}
              component={EditarMusica}
            /> */}
                {/* <PrivateRoute path="/mi_musica" authenticated={this.state.authenticated} component={MiMusica} /> */}
                <Route
                  path="/login"
                  render={(props) => (
                    <LoginContextProvider>
                      <Login {...props} onLogin={this.handleLogin} />
                    </LoginContextProvider>
                  )}
                />

                {/* <Route
                path="/editar-musica/:id"
                component={EditarMusica}
                render={(props) => (
                  <LoginContextProvider>
                    <EditMusic {...props} />
                  </LoginContextProvider> 
                )}
              /> */}

                <Route path="/signup" component={Signup} />
                <PrivateRoute
                  path="/profile"
                  authenticated={this.state.authenticated}
                  currentUser={this.state.currentUser}
                  component={Profile}
                />
                <Route path="/mi_musica" component={MiMusica} />
                <Route path="/login" component={OAuth2RedirectHandler} />
                <Route component={Page404}></Route>

                <Redirect to="/404" />
              </Switch>
            </LoginContextProvider>
            <Footer />
          </div>
        </Router>
      </>
    );
  }
}

export default App;
