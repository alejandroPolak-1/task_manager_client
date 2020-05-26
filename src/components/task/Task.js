import React, { useContext } from 'react'
import projectContext from '../../context/projects/projectContext'
import taskContext from '../../context/tasks/taskContext'

const Task = ({ task }) => {

  //Get if a project is active
    const projectsContext = useContext(projectContext)
    const { project } = projectsContext

    //Get function contex task
  const tasksContext = useContext(taskContext)
  const { removeTask, getTasks } = tasksContext

  //destructuring project -> for to name for id
  const [actualProject] = project

  //function that runs when the user presses the btn remove task 
  const handleOnClickTaskRemove= id =>{
    removeTask(id)
    getTasks(actualProject.id) //actualProject = project[0]
  }

 
  return (
    <li className="tarea sombra">
      <p>{task.name}</p>
      <div className="estado">
        {task.state ? (
          <button 
              type="button" 
              className="completo"
              >
            Complete
          </button>
        ) : (
          <button 
              type="button" 
              className="incompleto"
              >
            Incomplete
          </button>
        )}
      </div>

      <div className="acciones">
        <button 
            type="button" 
            className="btn btn-primario"
            >
          Edit
        </button>
        <button 
              type="button" 
              className="btn btn-secundario"
              onClick={() => handleOnClickTaskRemove(task.id)}
              >
          Remove
        </button>
      </div>
    </li>
  )
}

export default Task
