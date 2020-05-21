import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NewAccount= () => {
  //State to Log in
  const [user, setUser] = useState({
      name:'',
    email: '',
    password: '',
    confirm:''
  })

  //Extract from user
  const { name, email, password, confirm } = user

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

    //password 6 characters minimum

    //that the two passwords are the same

    //pass to action
  }

  return (
    <div className="form-usuario">
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
