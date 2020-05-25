import React, { useReducer } from 'react'
import TaskContext from './taskContext'
import TaskReducer from './taskReducer'

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
  }

  //create dispath and state
  const [state, dispatch] = useReducer(TaskReducer, initialState)

  return (
    <TaskContext.Provider value={{
        tasks: state.tasks,
    }}>{props.children}</TaskContext.Provider>
  )
}

export default TaskState
