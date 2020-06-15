import React, { useReducer} from 'react'
import alertReducer from './alertReducer'
import alertContext from './alertContext'

import { SHOW_ALERT, HIDEN_ALERT } from '../../types'

const AlertState = props => {

    const initialState={
        alert: null
    }

    const [ state, dispatch ] = useReducer(alertReducer, initialState)

    //Function
    const showAlert = (msg, category) => {
        dispatch({
            type: SHOW_ALERT,
            payload: {
                msg,
                category
            }
        })

        //Hiden alert
        setTimeout(() =>{
            dispatch({
                type: HIDEN_ALERT
            })
        }, 5000 )
    }

        return(
            <alertContext.Provider
                value={{
                    alert: state.alert,
                    showAlert
                }}
            >
                {props.children}
            </alertContext.Provider>
        )
}

export default AlertState