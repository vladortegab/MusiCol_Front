import ListaGeneros from "../../components/ListaGeneros";
import { useContext, useEffect } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { Redirect } from "react-router-dom";

<<<<<<< HEAD

=======
>>>>>>> 88fe98f5a1c9f31e2b57bf65778605109200f882
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
<<<<<<< HEAD
   <ListaGeneros url="./generos" />
   
=======
    <ListaGeneros url="./generos" />
>>>>>>> 88fe98f5a1c9f31e2b57bf65778605109200f882
  ) : (
    <Redirect to="/login" />
  );
};

export default MiMusica;
