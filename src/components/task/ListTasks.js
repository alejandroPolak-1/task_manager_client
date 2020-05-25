import React, { Fragment, useContext } from 'react'
import Task from './Task'
import ProjectContext from '../../context/projects/ProjectContext.context'

const ListTasks = () => {

    //Get form function
    const projectsContext = useContext(ProjectContext)
    const {project, deleteProject} = projectsContext

    //Iif there is no project selected
    if(!project) return <h2>Select a project</h2>

    //to extract the current project
    const [actualProject] = project
    

    const tasksProject = [
        {name: 'Select program', state: true},
        {name: 'Select type', state: false},
        {name: 'Select color', state: false},
        {name: 'Select plataform', state: true}
    ]

  //Delete a project
  const handleOnClick = ()=>{
    deleteProject(actualProject.id)
  }

  return (
    <Fragment>
      <h2>Project: {actualProject.name} </h2>

      <ul className="listado-tareas">
        {(tasksProject.length === 0) 
            ? (<li className="tarea"><p>There are no tasks</p></li>)
            : (tasksProject.map(task => (
                <Task task={task} />
            )))
        }
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
