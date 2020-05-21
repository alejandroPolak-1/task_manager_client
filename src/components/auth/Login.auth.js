import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  //State to Log in
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  //Extract from user
  const { email, password } = user

  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
    console.log(user)
  }

  //When the user wants to login
  const handleSubmit = (e) => {
    e.preventDefault()

    //validate(that there are no empty fields)


    //pass to action
  }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Log in</h1>

        <form onSubmit={handleSubmit}>
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
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Log in"
            />
          </div>
        </form>

        <Link to={'/new-account'} className="enlace-cuenta">
            Get new account
        </Link>
      </div>
    </div>
  )
}

export default Login
