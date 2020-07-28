import React, { useReducer } from 'react'
import TaskContext from './taskContext'
import TaskReducer from './taskReducer'
import clientAxios from '../../config/axios'
// import { v4 as uuidv4 } from 'uuid'

import {
  TASKS_PROJECT,
  ADD_TASK,
  VALIDATE_TASK,
  REMOVE_TASK,
  STATE_TASK,
  ACTUAL_TASK,
  UPDATE_TASK,
  CLEAN_TASK
} from '../../types/index'

const TaskState = (props) => {
  const initialState = {
    tasksproject: [],
    errortask: false,
    selectedtask: null
  }

  //create dispath and state
  const [state, dispatch] = useReducer(TaskReducer, initialState)

  // Create the function

  // gets the project tasks
  const getTasks = async (project) => {
    console.log(project)
    try {
      const result= await clientAxios.get('/api/tasks', { params : { project }})
      console.log(result)

      dispatch({
        type: TASKS_PROJECT,
        payload: result.data.task
        
      })
    } catch (error) {
      console.log(error)
    }
  }

  //Add a new task to project select
  const addTask =async (task) => {
    //task.id = uuidv4() //add id with uuid 
    try {
      const result= await clientAxios.post('/api/tasks', task)
      console.log(result); 

      dispatch({
        type: ADD_TASK,
        payload: task,
      })
      
    } catch (error) {
      
    }
    
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

  //extract a task for editing
  const saveActualTask = task => {
    dispatch({
      type: ACTUAL_TASK,
      payload: task
    })
  }

  //Edit o modify a task
  const updateTask = task =>{
    dispatch({
      type: UPDATE_TASK,
      payload: task
    })
  }

  //Clean or delete task selectedtask
  const cleanTask =()=>{
      dispatch({
        type: CLEAN_TASK
      })
  }

  return (
    <TaskContext.Provider
      value={{
        // tasks: state.tasks,
        tasksproject: state.tasksproject,
        errortask: state.errortask,
        selectedtask: state.selectedtask,
        getTasks,
        addTask,
        validateTask,
        removeTask,
        changeStateTask,
        saveActualTask,
        updateTask,
        cleanTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState
