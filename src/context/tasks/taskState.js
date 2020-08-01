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
import Axios from 'axios'

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
  const removeTask = async (id, project) => {
    try {
         await clientAxios.delete(`/api/tasks/${id}`, {params: { project }}) 
      
      //Remove a Task
      dispatch({
        type: REMOVE_TASK,
        payload: id
      })
    } catch (error) {
      console.log(error)
    }
  }

  //change the state of each task
  //Edit o modify a task
  const updateTask = async task =>{
    // console.log(task)
    try {
    const result = await clientAxios.put(`/api/tasks/${task._id}`, task)
      console.log(result)

      dispatch({
        type: UPDATE_TASK,
        payload: result.data.task
      })
    } catch (error) {
      console.log(error)
    }
  }

  //extract a task for editing
  const saveActualTask = task => {
    dispatch({
      type: ACTUAL_TASK,
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
