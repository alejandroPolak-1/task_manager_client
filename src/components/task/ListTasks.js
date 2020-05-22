import React, { Fragment } from 'react'
import Task from './Task'

const ListTasks = () => {

    const tasksProject = [
        {name: 'Select program', state: true},
        {name: 'Select type', state: false},
        {name: 'Select color', state: false},
        {name: 'Select plataform', state: true}
    ]

  return (
    <Fragment>
      <h2>Project: Play Store</h2>

      <ul className="listado-tareas">
        {(tasksProject.length === 0) 
            ? (<li className="tarea"><p>There are no tasks</p></li>)
            : (tasksProject.map(task => (
                <Task task={task} />
            )))
        }
      </ul>
    </Fragment>
  )
}

export default ListTasks
