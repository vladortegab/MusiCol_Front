import { Link } from "react-router-dom"

<<<<<<< HEAD
const ButtonLink = ({titulo, className, to}) =>{

    return ( 
        <Link to={to} className={className}>
=======
const ButtonLink = ({titulo, styles, to}) =>{

    return ( 
        <Link to={to} style={styles}>
>>>>>>> 88fe98f5a1c9f31e2b57bf65778605109200f882
            {titulo}
        </Link>
    )    
}

export default ButtonLink