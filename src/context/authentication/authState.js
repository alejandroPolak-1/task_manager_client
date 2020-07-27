import React, { useReducer } from 'react'
import AuthContext from './authContext'
import AuthReducer from './authReducer'

import clientAxios from '../../config/axios'

import {
  SUCCES_REGISTER,
  ERROR_REGISTER,
//   GET_USER,
//   SUCCES_LOGIN,
//   CLOSE_SESSION,
} from '../../types'

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    authenticated: null,
    user: null,
    message: null,
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState)

  //Functions
  const registerUser = async dataset => {
      try {
          const response = await clientAxios.post('/api/users', dataset)
          console.log(response.data)
        
          dispatch({
              type: SUCCES_REGISTER,
              payload: response.data
          })

          //get user authenticated
          userAuthenticated ()
      } catch (error) {
          console.log(error.response.data.msg)
          const alert = {
            msg: error.response.data.msg,
            category: "alerta-error"
        }

          dispatch({
              type: ERROR_REGISTER,
              payload: alert
          })
      }
  }

  //retunr the user authenticated
  const userAuthenticated = async () => {
    const token = localStorage.getItem('token')
    if(token){
      // TODO: function for send token for headers
          }
    try {
      const response = await clientAxios.get('/api/auth')
      console.log(response)
    } catch (error) {
      dispatch({
        type: ERROR_LOGIN,
      })
    }
  }


  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        registerUser 
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
