import React, {useReducer} from 'react';

import ProjectContext from './ProjectContext.context'
import ProjectReducer from './ProjectReducer.context'
import {FORM_PROJECT} from '../../types'

const ProjectState = props => {
    //for show sidebar-> newProject
    const initialState= {
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

   return (
       <ProjectContext.Provider 
            value = {{
                form: state.form,
                showForm
            }}
       >
           {props.children}
       </ProjectContext.Provider>
   )

}

export default ProjectState