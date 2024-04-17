import ListaGeneros from "../../components/ListaGeneros";
import { useContext, useEffect } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { Redirect } from "react-router-dom";


const MiMusica = () => {
  const { isAuthenticate } = useContext(LoginContext);
  const sessionStorage = window.sessionStorage;
  console.log(
    "🚀 ~ MiMusica ~ sessionStorage:",
    sessionStorage.getItem("oauth")
  );

  /* useEffect(() => {
    console.log("🚀 ~ MiMusica ~ isAuthenticate:", isAuthenticate);
  }, [isAuthenticate]); */

  /* <EditMyMusic/> */

  return sessionStorage.getItem("oauth") ? (
   <ListaGeneros url="./generos" />
   
  ) : (
    <Redirect to="/login" />
  );
};

export default MiMusica;
