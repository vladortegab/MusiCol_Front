import LogoMenu from "../img/LogoMenu.png";
import { logout } from "../pages/LoginGoogle/util/APIUtils"; // Importa la función logout desde APIUtils

import { Link, withRouter } from "react-router-dom";
import ButtonLink from "../../src/components/ButtonLink";
import "../css/estilos.css";

const Header = ({ location }) => {
  const handleLogout = () => {
    // Llama a la función logout al hacer clic en el botón de cerrar sesión
    logout();
    // Redirige al usuario a la página de inicio de sesión después de cerrar sesión
    window.location.href = "/login"; // Puedes cambiar '/login' por la ruta a tu página de inicio de sesión
  };

  const EstilosBtn = {
    display: "inline-block",
    backgroundColor: "#F5F5F5",
    border: "1px solid #F5F5F5",
    borderRadius: "4px",
    fontSize: "21px",
    fontWeight: "600",
    width: "180px",
    height: "54px",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
  };

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const isHomePage = location.pathname === "/";
  const isMiMusicaPage = location.pathname === "/mi_musica";
  const isNuevaMusicaPage = location.pathname === "/nuevamusica";
  const isNuevaCategoriaPage = location.pathname === "/nuevacategoria";

  const isEditarMusicaId3 = location.pathname.includes("/editar_musica");
  const isEditarMusicaPage = location.pathname === "/edit-delete-musica";
  const isEditarMusicaId1 = location.pathname.includes("/editar-musica/");
  //const isEditarMusicaId2 = location.pathname.includes("/edit-music/");

  return (
    <header className="header">
      <div className="header__contenido container">
        <Link to="/">
          <img className="header__imagen" src={LogoMenu} alt="Logo MusicaCol" />
        </Link>

        <nav className="header__nav">
          <div style={{ display: "flex", marginRight: "10px" }}>
            {isHomePage && !isLoggedIn && (
              <ButtonLink
                to="/mi_musica"
                titulo="Mi Musica"
                styles={EstilosBtn}
              />
            )}
            {isHomePage && isLoggedIn && (
              <Link to="/login" className="enlace">
                Login
              </Link>
            )}
          </div>
          {/* Agrega el botón de cierre de sesión */}

          {/* Para Usuario Vista después de Login*/}
          <div style={{ display: "flex", marginRight: "10px" }}>
            {isMiMusicaPage && (
              <Link to="/nuevamusica" className="enlace">
                Nueva Musica
              </Link>
            )}
            {isNuevaMusicaPage && (
              <Link to="/mi_musica" className="enlace">
                Mi Musica
              </Link>
            )}

            {isNuevaMusicaPage && (
              <button onClick={handleLogout} className="enlace">
                Cerrar sesión
              </button>
            )}
          </div>

          {/* Para Admin Vista Opcion Editar o eliminar Musica */}
          <div style={{ display: "flex", marginRight: "10px" }}>
            {isEditarMusicaPage && (
              <Link to="/nuevacategoria" className="enlace">
                Editar Géneros
              </Link>
            )}
            {isEditarMusicaPage && (
              <Link to="/editar_musica" className="enlace">
                Visualizar Música
              </Link>
            )}
            {isEditarMusicaPage && (
              <button onClick={handleLogout} className="enlace">
                Cerrar sesión
              </button>
            )}
          </div>
          {/* Para Admin Vista Id Musica */}
          <div style={{ display: "flex", marginRight: "10px" }}>
            {isEditarMusicaId1 && (
              <Link to="/edit-delete-musica" className="enlace">
                Editar Música
              </Link>
            )}
            {isEditarMusicaId1 && (
              <Link to="/editarusuarios" className="enlace">
                Editar Usuario
              </Link>
            )}
            {isEditarMusicaId1 && (
              <Link to="/nuevacategoria" className="enlace">
                Editar Géneros
              </Link>
            )}
              {isEditarMusicaId1 && (
              <button onClick={handleLogout} className="enlace">
                Cerrar sesión
              </button>
            )}
          </div>
          {/* 
          <div style={{display: "flex", marginRight: "10px"}}>
            {isEditarMusicaId2 && (
              <Link to="/edit-delete-musica" className="enlace">
                Editar Músicas
              </Link>
            )}
            {isEditarMusicaId2 && (
              <Link to="/editarusuarios" className="enlace">
                Editar Usuarios
              </Link>
            )}
          
          </div> */}

          {/* Para Admin Vista principal despues de Login */}
          <div style={{ display: "flex", marginRight: "10px" }}>
            {isEditarMusicaId3 && (
              <Link to="/edit-delete-musica" className="enlace">
                Editar Música
              </Link>
            )}
            {isEditarMusicaId3 && (
              <Link to="/editarusuarios" className="enlace">
                Editar Usuarios
              </Link>
            )}
            {isEditarMusicaId3 && (
              <button onClick={handleLogout} className="enlace">
                Cerrar sesión
              </button>
            )}
          </div>
          {/* Para Admin Vista Nuevos Generos-Categoria */}
          <div style={{ display: "flex" }}>
            {isNuevaCategoriaPage && (
              <Link to="/edit-delete-musica" className="enlace">
                Editar Musica
              </Link>
            )}
            {isNuevaCategoriaPage && (
              <Link to="/editarcomentarios" className="enlace">
                Editar Comentarios
              </Link>
            )}
              {isNuevaCategoriaPage && (
              <button onClick={handleLogout} className="enlace">
                Cerrar sesión
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default withRouter(Header);
