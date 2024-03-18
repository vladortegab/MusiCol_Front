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
import NuevaCategoria from "./pages/Admin/NuevaCategoria";

import LoginContextProvider from "./contexts/LoginContext";

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

  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null,
    });
    Alert.success("You're safely logged out!");
  }

  handleLogin = () => {
    this.setState({ authenticated: true }, () => {
      // Redirige al usuario después de que el estado se haya actualizado correctamente
      this.props.history.push("/editar_musica");
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
      <LoginContextProvider>
      <Router>
        <div className="App">
          <GlobalStyle />
          <Header
            authenticated={this.state.authenticated}
            onLogout={this.handleLogout}
            />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/nuevamusica" component={NuevaMusica} />
            <Route path="/nuevacategoria" component={NuevaCategoria} />
            <Route path="/editar_musica" component={EditarMusica} />

           {/*  <PrivateRoute
              path="/mi_musica"
              authenticated={this.state.authenticated}
              component={EditarMusica}
            /> */}
            {/* <PrivateRoute path="/mi_musica" authenticated={this.state.authenticated} component={MiMusica} /> */}
            <Route
              path="/login"
              render={(props) => (
                <Login {...props} onLogin={this.handleLogin} />
                )}
                />

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
          <Footer />
        </div>
      </Router>
              </LoginContextProvider>
    );
  }
}

export default App;
