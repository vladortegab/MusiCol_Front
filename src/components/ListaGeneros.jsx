import MusicaCard from "./MusicaCard"
import { datos } from "../data/archivos_iniciales"

const ListaGeneros = ({ isAuthenticated }) => {
    

    return (
        <main className="generos">
            <h1 className="sr-only">Lista generos música</h1>
            <p className="sr-only">MusicaCol plataforma para registrar y escuchar nuestra música favorita</p>
            <div className="generos_Listas">
                {
                    datos.generos.map((genero) => {
                        const {id, nombre, descripcion, color} = genero

                        let colorLista = {
                            backgroundColor: color
                        }

                        return (
                                <div className="generos__contenido container" key={id}>
                                    <div className="generos__titulo">
                                        <div className="generos__nombre" style={ colorLista }>{ nombre }</div>
                                        <div className="generos__descripcion">{ descripcion }</div>
                                    </div>
                                    <div className="generos__listamusicas">

                                        <MusicaCard url='/musicas' nombreMusica={nombre} color={ color } isAuthenticated={isAuthenticated}/>
                                        
                                    </div>
                                </div>
                        );
                    })
                }
            </div>
        </main>
    )
}

export default ListaGeneros