import React, { useReducer } from 'react'
import TaskContext from './taskContext'
import TaskReducer from './taskReducer'

import { TASKS_PROJECT } from '../../types/index'

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { name: 'Select program', state: true, projectId: 1 },
      { name: 'Select type', state: false, projectId: 2 },
      { name: 'Select color', state: false, projectId: 3 },
      { name: 'Select plataform', state: true, projectId: 4 },
      { name: 'Select program', state: true, projectId: 1 },
      { name: 'Select type', state: false, projectId: 2 },
      { name: 'Select color', state: false, projectId: 3 },
      { name: 'Select program', state: true, projectId: 4 },
      { name: 'Select type', state: false, projectId: 1 },
      { name: 'Select color', state: false, projectId: 2 },
      { name: 'Select program', state: true, projectId: 3 },
      { name: 'Select type', state: false, projectId: 4 },
      { name: 'Select color', state: false, projectId: 3 },
    ],
    tasksproject: null
  }

  //create dispath and state
  const [state, dispatch] = useReducer(TaskReducer, initialState)

  // Create the function

  // gets the project tasks
  const getTasks= projectId =>{
      dispatch({
          type: TASKS_PROJECT,
          payload: projectId
      })
  }

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        tasksproject: state.tasksproject,
        getTasks,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState
