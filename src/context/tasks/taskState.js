import React, { useReducer } from 'react'
import TaskContext from './taskContext'
import TaskReducer from './taskReducer'

const TaskState = (props) => {
  const initialState = {
    tasks: [],
  }

  //create dispath and state
  const [state, dispatch] = useReducer(TaskReducer, initialState)

  return (
    <TaskContext.Provider value={{}}>{props.children}</TaskContext.Provider>
  )
}

export default TaskState
