import React, { useReducer } from 'react'
import TaskContext from './taskContext'
import TaskReducer from './taskReducer'

import {
  TASKS_PROJECT,
  ADD_TASK,
  VALIDATE_TASK,
  REMOVE_TASK,
  STATE_TASK
} from '../../types/index'

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { id: 1, name: 'Select program', state: true, projectId: 1 },
      { id: 2, name: 'Select type', state: false, projectId: 2 },
      { id: 3, name: 'Select color', state: false, projectId: 3 },
      { id: 4, name: 'Select plataform', state: true, projectId: 4 },
      { id: 5, name: 'Select program', state: true, projectId: 1 },
      { id: 6, name: 'Select type', state: false, projectId: 2 },
      { id: 7, name: 'Select color', state: false, projectId: 3 },
      { id: 8, name: 'Select program', state: true, projectId: 4 },
      { id: 9, name: 'Select type', state: false, projectId: 1 },
      { id: 10, name: 'Select color', state: false, projectId: 2 },
      { id: 11, name: 'Select program', state: true, projectId: 3 },
      { id: 12, name: 'Select type', state: false, projectId: 4 },
      { id: 13, name: 'Select color', state: false, projectId: 3 },
    ],
    tasksproject: null,
    errortask: false,
  }

  //create dispath and state
  const [state, dispatch] = useReducer(TaskReducer, initialState)

  // Create the function

  // gets the project tasks
  const getTasks = (projectId) => {
    dispatch({
      type: TASKS_PROJECT,
      payload: projectId,
    })
  }

  //Add a new task to project select
  const addTask = (task) => {
    dispatch({
      type: ADD_TASK,
      payload: task,
    })
  }

  //(Validate and show if an error in case to need it)
  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK,
    })
  }

 //Remove a Task
  const removeTask = (id) => {
    dispatch({
      type: REMOVE_TASK,
      payload: id
    })
  }

  //change the state of each task
  const changeStateTask = task => {
      dispatch({
        type: STATE_TASK,
        payload: task
      })
  }

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        tasksproject: state.tasksproject,
        errortask: state.errortask,
        getTasks,
        addTask,
        validateTask,
        removeTask,
        changeStateTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState
