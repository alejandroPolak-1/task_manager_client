import React, { useReducer } from 'react'
import AuthContext from './authContext'
import AuthReducer from './authReducer'

import clientAxios from '../../config/axios'
import tokenAuth from '../../config/tokenAuth.config'

import {
  SUCCES_REGISTER,
  ERROR_REGISTER,
  GET_USER,
  SUCCES_LOGIN,
  ERROR_LOGIN,
  CLOSE_SESSION,
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
  const registerUser = async (dataset) => {
    try {
      const response = await clientAxios.post('/api/users', dataset)
      // console.log(response.data)

      dispatch({
        type: SUCCES_REGISTER,
        payload: response.data,
      })

      //get user authenticated
      userAuthenticated()
    } catch (error) {
      // console.log(error.response.data.msg)
      const alert = {
        msg: error.response.data.msg,
        category: 'alerta-error',
      }

      dispatch({
        type: ERROR_REGISTER,
        payload: alert,
      })
    }
  }

  //return the user authenticated
  const userAuthenticated = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      // TODO: function for send token for headers
      tokenAuth(token)
    }
    try {
      const response = await clientAxios.get('/api/auth')
      // console.log(response)
      dispatch({
        type: GET_USER,
        payload: response.data.user,
      })
    } catch (error) {
      console.log(error.response)
      dispatch({
        type: ERROR_LOGIN,
      })
    }
  }

  //When user log in
  const logIn = async dataset => {
    try {
      const response = await clientAxios.post('/api/auth', dataset)
      console.log(response)
    } catch (error) {
      console.log(error.response.data.msg)
      const alert = {
        msg: error.response.data.msg,
        category: 'alerta-error',
      }

      dispatch({
        type: ERROR_LOGIN,
        payload: alert,
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
          registerUser,
          logIn,
        }}
      >
        {props.children}
      </AuthContext.Provider>
    )
  }

export default AuthState
