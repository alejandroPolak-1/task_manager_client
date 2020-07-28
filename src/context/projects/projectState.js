import React, { useReducer } from 'react'
// import { v4 as uuidv4 } from 'uuid'

import ProjectContext from './projectContext'
import ProjectReducer from './projectReducer'
import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM,
  ACTUAL_PROJECT,
  DELETE_PROJECT
} from '../../types'

import clientAxios from '../../config/axios'

const ProjectState = (props) => {
  

  //for show sidebar-> newProject
  const initialState = {
    projects: [],
    form: false,
    errorform: false,
    project: null,
  }

  //Dispatch to execute actions
  const [state, dispatch] = useReducer(ProjectReducer, initialState)

  //function series for the CRUD
  const showForm = () => {
    dispatch({
      type: FORM_PROJECT,
    })
  }

  //Get the projects
  const getProjects = async() => {
    try {
      const result = await clientAxios.get('/api/projects')

      dispatch({
        type: GET_PROJECTS,
        payload: result.data.projects,
      })
    } catch (error) {
      console.log(error)
    }
  }

  //Add new Project
  const addProject = async project => {
    // project.id = uuidv4()

   
  try {
    const result = await clientAxios.post('/api/projects', project)
    // console.log(result)
     //Insert the project in the state
    dispatch({
      type: ADD_PROJECT,
      payload: result.data,
    })
  } catch (error) {
    console.log(error)
    
  }
  }

  //Validate forms for errors
  const showError=() => {
      dispatch({
          type: VALIDATE_FORM
      })
  }

  //select the project that the user clicked
const actualProject = projectId => {
  dispatch({
    type: ACTUAL_PROJECT,
    payload: projectId
  })
}

// Delete a Project
const deleteProject = projectId => {
  dispatch({
    type: DELETE_PROJECT,
    payload: projectId
  })
}

  return (
    <ProjectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        errorform: state.errorform,
        project: state.project,
        showForm,
        getProjects,
        addProject,
        showError,
        actualProject,
        deleteProject
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  )
}

export default ProjectState
