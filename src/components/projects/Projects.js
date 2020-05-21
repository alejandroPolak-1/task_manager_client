import React from 'react'
import Sidebar from '../layout/Sidebar.layout'
import Bar from '../layout/Bar.layout'
import FormTask from '../task/FormTask'

const Projects = () => {
  return (
    <div className="contenedor-app">
      <Sidebar />

      <div className="seccion-principal">
        <Bar />

        <main>
         <FormTask />

          <div className="contenedor-tareas">

          </div>
        </main>
      </div>
    </div>
  )
}

export default Projects
