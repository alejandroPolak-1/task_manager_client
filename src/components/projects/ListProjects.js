import React, {useContext, useEffect} from 'react'
import Project from './Project'
import projectContext from '../../context/projects/projectContext'
import AlertContext from '../../context/alerts/alertContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const ListProjects = () => {
    
   //Extract projects a getProject from initial state
    const projectsContext = useContext(projectContext)
    const {message, projects, getProjects} = projectsContext

    const alertContext= useContext(AlertContext)
    const { alert, showAlert} = alertContext

    //get project when load component
    useEffect(()=>{

      //If there are an error
      if(message){
        showAlert(message.msg, message.category)
      }
      getProjects(projects)
      //eslint-disable-next-line
  }, [message])

    //check if projects have content
    if(projects.length === 0) return <p>There is no project, start creating one</p>

   

    return (
    <ul className="listado-proyectos">
      {
        alert ? (<div className={`alerta ${alert.category}`}> {alert.msg} </div>) : null
      }
      <TransitionGroup>
      {projects.map(project => (
        <CSSTransition
            key={project._id}
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
