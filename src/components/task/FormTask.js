import React, { useContext, useState } from 'react'
import projectContext from '../../context/projects/projectContext'
import taskContext from '../../context/tasks/taskContext'

const FormTask = () => {
  //Get if a project is active
  const projectsContext = useContext(projectContext)
  const { project } = projectsContext

   //Get function contex task
   const tasksContext = useContext(taskContext)
   const { addTask } = tasksContext

  //State to the form
  const [task, setTask] = useState({
    name: '',
  })

  //Extract the name to task _> for value to input
  const { name } = task

  //If there is no select project, don't show FormTask
  if (!project) return null

  //read form values
  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    })
  }

  //to extract the current project
  const [actualProject] = project

  //
  const handleOnSubmit = (e) => {
    e.preventDefault()

    //validate

    //pass to validation

    //add new Task to state of task
    task.projectId = actualProject.id
    task.state= false
    addTask(task)

    // reset form
  }

  return (
    <div className="formulario">
      <form onSubmit={handleOnSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Name Task ..."
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Add Task"
          />
        </div>
      </form>
    </div>
  )
}

export default FormTask
