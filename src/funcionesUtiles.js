export const firstLetterCapital = (text) => {
<<<<<<< HEAD
  if (typeof text !== 'string' || !text) {
    return ''; // Devuelve una cadena vacía si text es undefined o no es una cadena de texto
  }

=======
>>>>>>> 88fe98f5a1c9f31e2b57bf65778605109200f882
  if (text.length < 5) {
    return text.toUpperCase();
  } else {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
};
