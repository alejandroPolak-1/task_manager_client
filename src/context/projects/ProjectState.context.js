import React, {useReducer} from 'react';

import ProjectContext from './ProjectContext.context'
import ProjectReducer from './ProjectReducer.context'
import {FORM_PROJECT, GET_PROJECTS} from '../../types'

const projects = [
    { id:1, name: 'Play Store' },
    { id:2, name: 'Study' },
    { id:3,name: 'Teology' }
]

const ProjectState = props => {
    //for show sidebar-> newProject
    const initialState= {
        projects : [],
        form: false
    }

    //Get the projects
    const getProjects = projects =>{
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    }
        
    //Dispatch to execute actions
   const [state, dispatch] = useReducer(ProjectReducer, initialState)

   //function series for the CRUD
    const showForm=() => {
        dispatch({
            type: FORM_PROJECT
        })
    }

   return (
       <ProjectContext.Provider 
            value = {{
                projects:state.projects,
                form: state.form,
                showForm
            }}
       >
           {props.children}
       </ProjectContext.Provider>
   )

}

export default ProjectState