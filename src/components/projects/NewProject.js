import React, { Fragment, useState, useContext } from 'react'
import ProjectContext from '../../context/projects/ProjectContext.context'

const NewProject = () => {
  //Get form status
  const projectsContext = useContext(ProjectContext)
  const {form, errorform, showForm, addProject, showError} = projectsContext

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
    if(name === '') {
      showError()
      return
    }
    //Add to state
    addProject(project)

    //restart the form
    setProject({
      name: ''
    })
  }

  //To Show form  when click to new Project
  const handleOnCLick = () => {
    showForm()
  }

  return (
    <Fragment>
      <button 
        type="button" 
         className="btn btn-block btn-primario"
         onClick={handleOnCLick}
         >
        New Project
      </button>

      {form ? 
      (
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
      )
      : null
    }

    { errorform ?
         <p className="mensaje error">The project name is required</p>
      : null }
    </Fragment>
  )
}

export default NewProject
