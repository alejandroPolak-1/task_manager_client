import React, { Fragment, useContext } from 'react'
import Task from './Task'
import projectContext from '../../context/projects/projectContext'
import taskContext from '../../context/tasks/taskContext'

const ListTasks = () => {
  //Get form function
  const projectsContext = useContext(projectContext)
  const { project, deleteProject } = projectsContext

  //Get the tashks to project
  const tasksContext = useContext(taskContext)
  const { tasksproject } = tasksContext

  //Iif there is no project selected
  if (!project) return <h2>Select a project</h2>

  //to extract the current project
  const [actualProject] = project

  //Delete a project
  const handleOnClick = () => {
    deleteProject(actualProject.id)
  }

  return (
    <Fragment>
      <h2>Project: {actualProject.name} </h2>

      <ul className="listado-tareas">
        {tasksproject.length === 0 ? (
          <li className="tarea">
            <p>There are no tasks</p>
          </li>
        ) : (
          tasksproject.map((task) => <Task task={task} />)
        )}
      </ul>

      <button
        type="button"
        className="btm btn-eliminar"
        onClick={handleOnClick}
      >
        Delete Project &times;
      </button>
    </Fragment>
  )
}

export default ListTasks
