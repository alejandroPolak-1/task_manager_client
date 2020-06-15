import { SHOW_ALERT, HIDEN_ALERT } from '../../types'

export default (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        atert: action.payload,
      }
    case HIDEN_ALERT:
      return {
        alert: null,
      }
    default:
      return state
  }
}
