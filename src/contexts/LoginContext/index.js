import React, {createContext} from 'react'
import { login } from '../../pages/LoginGoogle/util/APIUtils'

export const LoginContext = createContext()
const LoginContextProvider = ({children}) => {
const handleLogin = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    console.log('🚀 ~ handleLogin ~ password:', password)
    console.log('🚀 ~ handleLogin ~ email:', email)

    /* try {
      const response = await login({ email, password });
      if (response.ok) {
        const data = await response.json()
        this.handleSuccessfulLogin(data?.data?.token);
      } else {
        throw new Error('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      Alert.error(error.message);
    } */
  };


  return (
    <LoginContext.Provider value={ {
      login,
handleLogin
    }}>

    </LoginContext.Provider>
  )
}

export default LoginContextProvider