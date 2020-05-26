import React, { useContext, useState } from 'react'
import projectContext from '../../context/projects/projectContext'
import taskContext from '../../context/tasks/taskContext'

const FormTask = () => {
  //Get if a project is active
  const projectsContext = useContext(projectContext)
  const { project } = projectsContext

   //Get function contex task
   const tasksContext = useContext(taskContext)
   const { errortask, addTask, validateTask, getTasks } = tasksContext

  //State to the form. setTask to save the task
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
    if(name.trim() === '') {
      validateTask()
      return
    }
    //pass to validation -> utakReduer-> case ADD_TASK reset the state error -> errortask:false

    //add new Task to state of task
    task.projectId = actualProject.id
    task.state= false
    addTask(task)

    //get task and filter it of actual project. this function take a projectId
    getTasks(actualProject.id)

    // reset form
    setTask({
      name:''
    })

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
      { errortask ?<p className= "error mensaje">The name of the task is required</p> :null}
    </div>
  )
}

export default FormTask
