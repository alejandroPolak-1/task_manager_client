import React, { Fragment, useState } from 'react'

const NewProject = () => {
  //State for Project
  const [project, setProject] = useState({
    name: '',
  })

  //Extract name project
  const { name } = project

  //Save project, read the content of the project
  const handleOnChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    })
  }

  //when the user submit from input
  const handleOnSubmit = (e) => {
    e.preventDefault()

    //Validate the project

    //Add to state

    //restart the form
  }

  return (
    <Fragment>
      <button 
        type="button" 
         className="btn btn-block btn-primario"
         >
        New Project
      </button>

      <form className="formulario-nuevo-proyecto" onSubmit={handleOnSubmit}>
        <input
          type="text"
          className="input-text"
          placeholder="Project Name"
          name="name"
          value={name}
          onChange={handleOnChange}
        />

        <input
          type="submit"
          className="btn btn-primario btn-block"
          value="Add Project"
        />
      </form>
    </Fragment>
  )
}

export default NewProject
