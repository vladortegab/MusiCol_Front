import React, { useState, useEffect } from "react";
import "./Signup.css";
import { MainSpace, ImageSpace } from "../../../../styles";
import { Box, Typography } from "@mui/material"; // Importa componentes de MUI
import { LogoSpace, FormSpace, Img } from "../../styles";
import Complete from "../../complete/index"; 

import { Link, Redirect } from "react-router-dom";
import {
  GOOGLE_AUTH_URL,
  FACEBOOK_AUTH_URL,
  GITHUB_AUTH_URL,
} from "../../constants";
import { signup } from "../../util/APIUtils";
import fbLogo from "../../img/fb-logo.png";
import googleLogo from "../../img/google-logo.png";
import githubLogo from "../../img/github-logo.png";
import Alert from "react-s-alert";

const Signup = ({ authenticated, location }) => {
  const [isSignedUp, setIsSignedUp] = useState(false);

  useEffect(() => {
    if (authenticated) {
      setIsSignedUp(true);
    }
  }, [authenticated]);

  const handleSignupSuccess = () => {
    setIsSignedUp(true);
  };

  if (authenticated) {
    return (
      <Redirect
        to={{
          pathname: "/",
          state: { from: location },
        }}
      />
    );
  }

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
        {/* Sección de registro */}
        <Box>
          <LogoSpace>
            <Img src={"../../../assets/img/favicon.jpg"} alt="Logo" />
            <Typography variant="h3">Signup</Typography>
          </LogoSpace>
          <FormSpace>
            {!isSignedUp && <SignupForm onSuccess={handleSignupSuccess} />}
            {isSignedUp && <Complete />}
          </FormSpace>
        </Box>
        {/* Fin de sección de registro */}

        {/* Sección de login */}
        <Box>
          <div className="signup-container">
            <div className="or-separator">
              <span className="or-text">OR</span>
            </div>
            <span className="login-link">
              Already have an account? <Link to="/login">Login!</Link>
            </span>
            {!isSignedUp && <SocialSignup />} {/* Mostrar SocialSignup solo si el usuario no está registrado */}
          </div>
        </Box>
        {/* Fin de sección de login */}
      </Box>
    </MainSpace>
  );
};

const SocialSignup = () => {
  return (
    <div className="social-signup">
      <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
        <img src={googleLogo} alt="Google" /> Sign up with Google
      </a>
      <a
        className="btn btn-block social-btn facebook"
        href={FACEBOOK_AUTH_URL}
      >
        <img src={fbLogo} alt="Facebook" /> Sign up with Facebook
      </a>
      <a className="btn btn-block social-btn github" href={GITHUB_AUTH_URL}>
        <img src={githubLogo} alt="Github" /> Sign up with Github
      </a>
    </div>
  );
};

const SignupForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    signup(formData)
      .then(() => {
        Alert.success(
          "You're successfully registered. Please login to continue!"
        );
        onSuccess(); // Llama a la función onSuccess pasada por las props
      })
      .catch((error) => {
        Alert.error(
          (error && error.message) ||
            "Oops! Something went wrong. Please try again!"
        );
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-item">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-item">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-item">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-item">
        <button type="submit" className="btn btn-block btn-primary">
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default Signup;
