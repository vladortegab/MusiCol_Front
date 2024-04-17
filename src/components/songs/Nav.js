import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@mui/material";

const Nav = ({ setLibraryStatus, libraryStatus }) => {
  const openLibraryHandler = () => {
    setLibraryStatus(!libraryStatus);
  };

  return (
    <nav>
      <Typography variant="h1">Canción</Typography>
      <button 
        className={libraryStatus ? "library-active" : ""}
        onClick={openLibraryHandler}
      >
        Libreria de Canciones
        <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon> 
      </button>
    </nav>
  );
};

export default Nav;
