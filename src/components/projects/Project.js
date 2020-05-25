import React, { useContext } from 'react'
import projectContext from '../../context/projects/projectContext'
import taskContext from '../../context/tasks/taskContext'

const Project = ({ project }) => {
  //Get form function
  const projectsContext = useContext(projectContext)
  const { actualProject } = projectsContext

  //Get function contex task
  const tasksContext = useContext(taskContext)
  const { getTasks } = taskContext

  //Funtion to add actual project
  const handleOnClick = (id) => {
    actualProject(id) //fix a current project
    getTasks(id) //filter tasks when clicked
  }
  return (
    <li>
      <button type="button" className="btn btn-blank" onClick={handleOnClick}>
        {project.name}
      </button>
    </li>
  )
}

export default Project
