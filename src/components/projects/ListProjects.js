import React, {useContext, useEffect} from 'react'
import Project from './Project'
import projectContext from '../../context/projects/projectContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const ListProjects = () => {
    
   //Extract projects a getProject from initial state
    const projectsContext = useContext(projectContext)
    const {projects, getProjects} = projectsContext

    //get project when load component
    useEffect(()=>{
      getProjects(projects)
      //eslint-disable-next-line
  }, [])

    //check if projects have content
    if(projects.length === 0) return <p>There is no project, start creating one</p>

   

    return (
    <ul className="listado-proyectos">
      <TransitionGroup>
      {projects.map(project => (
        <CSSTransition
            key={project.id}
            timeout={200}
            classNames="proyecto"
          >
            <Project 
              project={project} 
            />
        </CSSTransition>
      ))}
      </TransitionGroup>
      
    </ul>
  )
}

export default ListProjects
