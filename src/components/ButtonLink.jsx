import { Link } from "react-router-dom"

const ButtonLink = ({titulo, className, to}) =>{

    return ( 
        <Link to={to} className={className}>
            {titulo}
        </Link>
    )    
}

export default ButtonLink