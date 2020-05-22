import React, {useReducer} from 'react';

import ProjectContext from './ProjectContext.context'
import ProjectReducer from './ProjectReducer.context'

const ProjectState = props => {
    //for show sidebar-> newProject
    const initialState= {
        form: false
    }

        
    //Dispatch to execute actions
   const [state, dispatch] = useReducer(ProjectReducer, initialState)

   //function series for the CRUD

   return (
       <ProjectContext.Provider 
            value = {{
                form: state.newProject
            }}
       >
           {props.children}
       </ProjectContext.Provider>
   )

}

export default ProjectState