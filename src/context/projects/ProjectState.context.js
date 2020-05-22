import React, {useReducer} from 'react';
import {v4 as uuidv4} from 'uuid'

import ProjectContext from './ProjectContext.context'
import ProjectReducer from './ProjectReducer.context'
import {FORM_PROJECT, GET_PROJECTS, ADD_PROJECT} from '../../types'


const ProjectState = props => {

    const projects = [
        { id:1, name: 'Play Store' },
        { id:2, name: 'Study' },
        { id:3, name: 'Teology' }
    ]

    //for show sidebar-> newProject
    const initialState= {
        projects : [],
        form: false
    }

      //Dispatch to execute actions
   const [state, dispatch] = useReducer(ProjectReducer, initialState)

   //function series for the CRUD
   const showForm=() => {
    dispatch({
        type: FORM_PROJECT
    })
   }

    //Get the projects
    const getProjects = () =>{
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    }

    //Add new Project
    const addProject = project => {
        project.id = uuidv4()

        //Insert the project in the state
        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
    }
        
   

   return (
       <ProjectContext.Provider 
            value = {{
                projects:state.projects,
                form: state.form,
                showForm,
                getProjects,
                addProject
            }}
       >
           {props.children}
       </ProjectContext.Provider>
   )

}

export default ProjectState