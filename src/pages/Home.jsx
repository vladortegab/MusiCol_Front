import ListaGeneros from "../components/ListaGeneros"
import Hero from "../components/Hero"
//import HolaMundo from '../components/HolaMundo'; // Asegúrate de proporcionar la ruta correcta al archivo HolaMundo.js
// import EditMusic1 from "../components/EditMusic1";
// import EditMusic from "../components/EditMusica";

const Home = () =>{

    return (
        <>  
            <Hero />
            
            <ListaGeneros url='/generos'/>
            <HolaMundo url="/hola-mundo"/>
            {/* <EditMusic1 url="/edit-music"/>
            <EditMusic url="/editar-musica"/> */}

        </>
    )
    
}

export default Home