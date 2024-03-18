import ListaGeneros from "../components/ListaGeneros"
import Hero from "../components/Hero"

const Home = () =>{

    return (
        <>  
            <Hero />
            
            <ListaGeneros url='/generos'/>
        </>
    )
    
}

export default Home