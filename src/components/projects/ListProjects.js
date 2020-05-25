import React, {useContext, useEffect} from 'react'
import Project from './Project'
import projectContext from '../../context/projects/projectContext'

const ListProjects = () => {
    
   //Extract projects a getProject from initial state
    const projectsContext = useContext(projectContext)
    const {projects, getProjects} = projectsContext

    //get project when load component
    useEffect(()=>{
      getProjects(projects)
  }, [])

    //check if projects have content
    if(projects.length === 0) return <p>There is no project, start creating one</p>

   

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
