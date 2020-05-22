import React, {useContext} from 'react'
import Project from './Project'
import ProjectContext from '../../context/projects/ProjectContext.context'

const ListProjects = () => {
    
   //Extract projects from initial state
    const projectsContext = useContext(ProjectContext)
    const {projects} = projectsContext

    //check if projects have content
    if(projects.length === 0) return null

    return (
    <ul className="listado-proyectos">
      {projects.map(project => (
        <Project 
        key={project.id}
        project={project} 
        />
      ))}
    </ul>
  )
}

export default ListProjects
