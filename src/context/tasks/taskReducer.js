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

export default (state, action) => {
  switch (action.type) {
    case TASKS_PROJECT:
      return {
        ...state,
        tasksproject: action.payload
      }
    case ADD_TASK:
      return {
        ...state,
        tasksproject: [action.payload, ...state.tasksproject],
        errortask: false,
      }
    case VALIDATE_TASK:
      return {
        ...state,
        errortask: true,
      }
    case REMOVE_TASK:
      return {
        ...state,
        tasksproject: state.tasksproject.filter((task) => task._id !== action.payload),
      }
    case UPDATE_TASK:
    case STATE_TASK:
      return {
        ...state,
        tasksproject: state.tasksproject.map((task) =>
          task.id === action.payload.id ? action.payload : task,
        ),
        // selectedtask: null,
      }
    case ACTUAL_TASK:
      return {
        ...state,
        selectedtask: action.payload,
      }
      case CLEAN_TASK:
          return {
              ...state,
              selectedtask: null
          }
    default:
      return state
  }
}
