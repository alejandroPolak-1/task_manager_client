import React, { useContext } from 'react'
import projectContext from '../../context/projects/projectContext'
import taskContext from '../../context/tasks/taskContext'

const Task = ({ task }) => {

  //Get if a project is active
    const projectsContext = useContext(projectContext)
    const { project } = projectsContext

    //Get function contex task
  const tasksContext = useContext(taskContext)
  const { removeTask, getTasks, changeStateTask, saveActualTask} = tasksContext

  //destructuring project -> for to name for id
  const [actualProject] = project

  //function that runs when the user presses the btn remove task 
  const handleOnClickTaskRemove= id =>{
    removeTask(id)
    getTasks(actualProject.id) //actualProject = project[0]
  }

  //function to change the state of the tasks
  const handleOnClickChangeState = task=> {
      if(task.state) {
        task.state= false
      } else { 
        task.state= true
      }
      changeStateTask(task)
  }

  //Function to Edit task- It add a current task when the user wants to edit it
  const handleOnClickSelectToEdit = task =>{
      saveActualTask(task)
  }
 
  return (
    <li className="tarea sombra">
      <p>{task.name}</p>
      <div className="estado">
        {task.state ? (
          <button 
              type="button" 
              className="completo"
              onClick= {() => handleOnClickChangeState(task)}
              >
            Complete
          </button>
        ) : (
          <button 
              type="button" 
              className="incompleto"
              onClick= {() => handleOnClickChangeState(task)}
              >
            Incomplete
          </button>
        )}
      </div>

      <div className="acciones">
        <button 
            type="button" 
            className="btn btn-primario"
            onClick={()=>handleOnClickSelectToEdit(task)}
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
