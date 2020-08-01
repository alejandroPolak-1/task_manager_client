import React, {useContext, useEffect} from 'react'
import Sidebar from '../layout/Sidebar.layout'
import Bar from '../layout/Bar.layout'
import FormTask from '../task/FormTask'
import ListTasks from '../task/ListTasks'
import AuthContext from '../../context/authentication/authContext'

const Projects = () => {

  //Extract information to authentication
  const authContext = useContext(AuthContext)
  const { userAuthenticated } = authContext

  useEffect(() => {
    userAuthenticated()
    //eslint-disable.next-line
  }, [userAuthenticated])

  return (
    <div className="contenedor-app">
      <Sidebar />

      <div className="seccion-principal">
        <Bar />

        <main>
         <FormTask />

          <div className="contenedor-tareas">
              <ListTasks />

          </div>
        </main>
      </div>
    </div>
  )
}

export default Projects
