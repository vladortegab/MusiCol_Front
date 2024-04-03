import '../css/estilos.css'

/* const ButtonForm = ({titulo, styles}) => {
    return <input type="submit" value ={titulo} style={styles}>
           
        </input>
}

export default ButtonForm */

import { BsPlusCircleFill } from "react-icons/bs";
import { AiFillSave } from "react-icons/ai";
import { MdCleaningServices } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { ImEye } from "react-icons/im";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import { PiPencilDuotone } from "react-icons/pi";

const ButtonForm = (props) => {
  const { title, className, icono, onClick, nombretitulo } = props;

  const iconoBoton = (tipoIcono) => {
    if (tipoIcono === "iconoMas") {
      return <BsPlusCircleFill className="iconoBoton" />;
    } else if (tipoIcono === "iconoSave") {
      return <AiFillSave className="iconoBoton" />;
    } else if (tipoIcono === "iconoClean") {
      return <MdCleaningServices className="iconoBoton" />;
    } else if (tipoIcono === "iconoEdit") {
      return <FaPencilAlt className="iconoBoton" />;
    } else if (tipoIcono === "iconoEye") {
      return <ImEye className="iconoBoton" />;
    } else if (tipoIcono === "iconoMasCategoria") {
      return <FaMagnifyingGlassPlus className="iconoBoton" />;
    } else if (tipoIcono === "iconoEditDeleteVideos") {
      return <PiPencilDuotone className="iconoBoton" />;
    } else {
      return undefined;
    }
  };

  if (className === "botonNuevaMusica") {
    return (
      <button
        onClick={onClick}
        title={title}
        className={className}
        type="button"
      >
        {iconoBoton(icono)} {title}
      </button>
    );
  }

  if (className === "botonSaveAddMusica") {
    return (
      <button title={title} className={className} type="submit">
        {iconoBoton(icono)} {title}
      </button>
    );
  }

  if (className === "botonLimpiarAddMusica") {
    return (
      <button
        title={title}
        className={className}
        type="button"
        onClick={onClick}
      >
        {iconoBoton(icono)} {title}
      </button>
    );
  }

  if (className === "botonSaveGenero") {
    return (
      <button title={title} className={className} type="submit">
        {iconoBoton(icono)} {title}
      </button>
    );
  }

  if (className === "botonLimpiarGenero") {
    return (
      <button
        title={title}
        className={className}
        type="button"
        onClick={onClick}
      >
        {iconoBoton(icono)} {title}
      </button>
    );
  }

  if (className === "botonEditarGenero") {
    return (
      <button
        title={title}
        className={className}
        type="button"
        onClick={onClick}
      >
        {iconoBoton(icono)} {title}
      </button>
    );
  }

  if (className === "botonVerMusica") {
    return (
      <button
        title={`${title} ${nombretitulo}`}
        className={className}
        type="button"
        onClick={onClick}
      >
        {iconoBoton(icono)} {title}
      </button>
    );
  }

  if (className === "botonVerFullGenero") {
    return (
      <button
        title={`${title} ${nombretitulo}`}
        className={className}
        type="button"
        style={{ marginTop: "1rem" }}
        onClick={onClick}
      >
        {iconoBoton(icono)} {title} {nombretitulo}
      </button>
    );
  }

  if (className === "botonEditDeleteMusica") {
    return (
      <button
        onClick={onClick}
        title={title}
        className={className}
        type="button"
      >
        {iconoBoton(icono)} {title} {nombretitulo}
      </button>
    );
  }
};

export default ButtonForm;
