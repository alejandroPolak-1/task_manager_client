import React, { useContext, useState, useEffect } from 'react'
import projectContext from '../../context/projects/projectContext'
import taskContext from '../../context/tasks/taskContext'

const FormTask = () => {
  //Get if a project is active
  const projectsContext = useContext(projectContext)
  const { project } = projectsContext

  //Get function contex task
  const tasksContext = useContext(taskContext)
  const {
    selectedtask,
    errortask,
    addTask,
    validateTask,
    getTasks,
    updateTask
  } = tasksContext

  //Effect that detects if there is a selected task
  useEffect(() => {
    if (selectedtask !== null) {
      setTask(selectedtask)
    } else {
      setTask({
        name: '',
      })
    }
  }, [selectedtask])

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

  // submit form
  const handleOnSubmit = (e) => {
    e.preventDefault()

    //validate
    if (name.trim() === '') {
      validateTask()
      return
    }
    //pass to validation -> utakReduer-> case ADD_TASK reset the state error -> errortask:false

    //(check if it's an edit or if it's a new task)
    if (selectedtask === null) {
      //New Task- add new Task to state of task
      task.projectId = actualProject.id
      task.state = false
      addTask(task)
    } else {
      //update existing task 
      updateTask(task)
    }

    //get task and filter it of actual project. this function take a projectId
    getTasks(actualProject.id)

    // reset form
    setTask({
      name: '',
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
            value={selectedtask ? 'Edit Task' : 'Add Task'}
          />
        </div>
      </form>
      {errortask ? (
        <p className="error mensaje">The name of the task is required</p>
      ) : null}
    </div>
  )
}

export default FormTask
