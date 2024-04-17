import { Link } from 'react-router-dom'
import '../css/estilos.css'
import Player from '../img/player.png'

const Hero = ()=>{
    return (
        <section className='hero'>
            <div className='hero__contenido container'>
                <div className='hero__texto'>
                    <div className='hero__categoria'>MusicaCol</div>
                    <h2 className='hero__titulo'>La plataforma musical potenciadora de artistas Colombianos.</h2>
                    <p className='hero__descripcion'>Esta plataforma proporciona a los artistas colombianos un sitio ideal para mostrar su trabajo, conectarse con su audiencia y alcanzar sus metas profesionales en la industria musical.</p>
                </div>
                <a href='https://www.youtube.com/watch?v=7_U5CZ4iB6Y' target='_blank' rel="noopener noreferrer">
                    <div className='hero__player' >
                        <img src={Player} alt="Imagen Player" />
                    </div>
                </a>
                
            </div>
        </section>
    )
}

export default Hero