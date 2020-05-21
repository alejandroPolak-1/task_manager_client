import React from 'react'
import Project from './Project'

const ListProjects = () => {

  const projects = [
    { name: 'Play Store' },
    { name: 'Study' },
    { name: 'Teology' }
  ]

  return (
    <ul className="listado-proyectos">
      {projects.map(project => (
        <Project project={project} 
        />
      ))}
    </ul>
  )
}

export default ListProjects
