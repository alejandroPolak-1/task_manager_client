import React, { useReducer } from 'react'
import AuthContext from './authContext'
import AuthReducer from './authReducer'

import clientAxios from '../../config/axios'

import {
  SUCCES_REGISTER,
  ERROR_REGISTER,
  GET_USER,
  SUCCES_LOGIN,
  CLOSE_SESSION,
} from '../../types'

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    authenticated: null,
    user: null,
    menssage: null,
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState)

  //Functions
  const registerUser = async dataset => {
      try {
          const response = await clientAxios.post('/api/users', dataset)
          console.log(response)

          dispatch({
              type: SUCCES_REGISTER
          })
      } catch (error) {
          console.log(error)

          dispatch({
              type: ERROR_REGISTER
          })
      }
  }

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        menssage: state.menssage,
        registerUser 
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
