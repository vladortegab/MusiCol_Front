import ListaGeneros from "../components/ListaGeneros"
import Hero from "../components/Hero"
<<<<<<< HEAD
//import HolaMundo from '../components/HolaMundo'; // Asegúrate de proporcionar la ruta correcta al archivo HolaMundo.js
=======
import HolaMundo from '../components/HolaMundo'; // Asegúrate de proporcionar la ruta correcta al archivo HolaMundo.js
>>>>>>> 88fe98f5a1c9f31e2b57bf65778605109200f882
// import EditMusic1 from "../components/EditMusic1";
// import EditMusic from "../components/EditMusica";

const Home = () =>{

    return (
        <>  
            <Hero />
            
            <ListaGeneros url='/generos'/>
<<<<<<< HEAD
            {/* <HolaMundo url="/hola-mundo"/> */}
            {/* <EditMusic1 url="/edit-music"/>
            <EditMusic url="/editar-musica"/> */}


=======
            <HolaMundo url="/hola-mundo"/>
            {/* <EditMusic1 url="/edit-music"/>
            <EditMusic url="/editar-musica"/> */}

>>>>>>> 88fe98f5a1c9f31e2b57bf65778605109200f882
        </>
    )
    
}

export default Home