import {
  SUCCES_REGISTER,
  ERROR_REGISTER,
  GET_USER,
  SUCCES_LOGIN,
  ERROR_LOGIN ,
  CLOSE_SESSION,
} from '../../types'

export default (state, action) => {
  switch (action.type) {
    case SUCCES_REGISTER:
    case SUCCES_LOGIN:
      localStorage.setItem('token', action.payload.token);
      return {
          ...state,
          authenticated: true,
          message: null,
          loading: false
      }

      case GET_USER:
        return {
          ...state,
          authenticated:true,
          user: action.payload,
          loading: false
        }
      case CLOSE_SESSION:
      case ERROR_LOGIN:
      case ERROR_REGISTER:
        localStorage.removeItem('token')
          return {
              ...state,
              token: null,
              user: null,
              authenticated: null,
              message: action.payload,
              loading: false
          }
    default:
      return state
  }
}
