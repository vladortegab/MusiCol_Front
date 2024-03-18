import LogoMenu from "../img/LogoMenu.png";
import { Link, withRouter } from "react-router-dom";
import ButtonLink from "../../src/components/ButtonLink";
import "../css/estilos.css";

const Header = ({ location }) => {
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
  const isEditarMusicaPage = location.pathname === "/editar_musica";
  const isNuevaCategoriaPage = location.pathname === "/nuevacategoria";

  return (
    <header className="header">
      <div className="header__contenido container">
        <Link to="/">
          <img className="header__imagen" src={LogoMenu} alt="Logo MusicaCol" />
        </Link>

        <nav className="header__nav">
        <div style={{ display: 'flex', marginRight: '10px' }}>
    {isHomePage && !isLoggedIn && <ButtonLink to='/mi_musica'  titulo='Mi Musica' styles={EstilosBtn} />}
    {isHomePage && isLoggedIn && <Link to='/login' className="enlace">Login</Link>}
</div>


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
          </div>
          <div style={{ display: "flex", marginRight: "10px" }}>
            {isEditarMusicaPage && (
              <Link to="/nuevacategoria" className="enlace">
                Nueva Categoria
              </Link>
            )}
            {isEditarMusicaPage && (
              <Link to="/editarusuarios" className="enlace">
                Editar Usuarios
              </Link>
            )}
          </div>
          <div style={{ display: "flex" }}>
            {isNuevaCategoriaPage && (
              <Link to="/editar_musica" className="enlace">
                Editar Musica
              </Link>
            )}
            {isNuevaCategoriaPage && (
              <Link to="/editarcomentarios" className="enlace">
                Editar Comentarios
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default withRouter(Header);
