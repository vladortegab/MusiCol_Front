import { API_BASE_URL, ACCESS_TOKEN } from '../constants';
//import usersData from "../../LoginGoogle/user/login/users.json"; // Importa el archivo JSON de usuarios

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
        // Obtener el token de acceso del almacenamiento local
        const accessToken = localStorage.getItem(ACCESS_TOKEN);


    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + accessToken)
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/users",
        method: 'GET'
    });
}

/* export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}
  */
/* export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
} */
// En el archivo APIUtils.js
export function signup(signupRequest) {
    return fetch(API_BASE_URL + '/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupRequest)
    });
}

export function login(loginRequest) {
    return fetch(API_BASE_URL + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginRequest)
    });
} 
<<<<<<< HEAD
export function logout() {
    // Elimina el token de acceso del almacenamiento local al cerrar sesión
    localStorage.removeItem(ACCESS_TOKEN);

    // Realiza cualquier otra lógica necesaria al cerrar sesión, como redirigir al usuario a la página de inicio de sesión, etc.
}
=======

>>>>>>> 88fe98f5a1c9f31e2b57bf65778605109200f882

//Esta se usa con json en el front
/* export function login(loginRequest) {
  return new Promise((resolve, reject) => {
    // Verificar si el usuario y la contraseña coinciden
    const user = usersData.find(u => u.email === loginRequest.email && u.password === loginRequest.password);
    if (user) {
      // Simular una respuesta exitosa del servidor
      const accessToken = 'your_access_token';
      resolve({ accessToken });
    } else {
      // Simular un error de autenticación
      reject(new Error('Invalid email or password'));
    }
  });
}  */

  