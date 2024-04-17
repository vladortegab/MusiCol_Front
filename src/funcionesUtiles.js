export const firstLetterCapital = (text) => {
  if (typeof text !== 'string' || !text) {
    return ''; // Devuelve una cadena vacía si text es undefined o no es una cadena de texto
  }

  if (text.length < 5) {
    return text.toUpperCase();
  } else {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
};
