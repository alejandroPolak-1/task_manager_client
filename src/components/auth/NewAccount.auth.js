import React, { useState, useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import AlertContext from '../../context/alerts/alertContext'
import AuthContext from '../../context/authentication/authContext'

const NewAccount = (props) => {
  //extract value to context
  const alertContext = useContext(AlertContext)
  const { alert, showAlert } = alertContext
 
  const authContext = useContext(AuthContext)
  const { message, authenticated, registerUser } = authContext

//in case the user has authenticated or registered or is a duplicate registration
useEffect(() =>{
  if(authenticated){
    props.history.push('/projects')
  }

  if(message){
    showAlert(message.msg, message.category)
  }

}, [message, authenticated, props.history])

  //State to Log in
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  })

  //Extract from user
  const { name, email, password, confirm } = user

  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  //When the user wants to login
  const handleSubmit = (e) => {
    e.preventDefault()

    //validate(that there are no empty fields)
    if (
      name.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      confirm.trim() === ''
    ) {
      showAlert('All fields are required', 'alerta-error')
      return
    }

    //password 6 characters minimum
    if (password < 6) {
      showAlert('The password must be at least 6 characters', 'alerta-error')
      return
    }

    //that the two passwords are the same
    if (password !== confirm) {
      showAlert("The passwords aren't the same", 'alerta-error')
      return
    }
    //pass to action
    registerUser({
      name,
      email, 
      password
    })
  }

  return (
    <div className="form-usuario">
      {alert ? (
        <div className={`alerta ${alert.category}`}> {alert.msg} </div>
      ) : null}
      <div className="contenedor-form sombra-dark">
        <h1>Get new account</h1>

        <form onSubmit={handleSubmit}>
          <div className="campo-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={name}
              onChange={handleOnChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your e-mail"
              value={email}
              onChange={handleOnChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
              value={password}
              onChange={handleOnChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="confirm">Confirm password</label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              placeholder="Repeat your password"
              value={confirm}
              onChange={handleOnChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Log up"
            />
          </div>
        </form>

        <Link to={'/'} className="enlace-cuenta">
          To return to login
        </Link>
      </div>
    </div>
  )
}

export default NewAccount
