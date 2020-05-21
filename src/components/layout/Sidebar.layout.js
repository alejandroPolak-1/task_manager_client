import React from 'react'
import NewProject from '../projects/NewProject'
import ListProjects from '../projects/ListProjects'

const Sidebar = () => {
  return (
    <aside>
      <h1>
        Task<span>Manager</span>

        <NewProject />

        <div className="proyectos">
            <h2>Your Projects</h2>

            <ListProjects />
        </div>
      </h1>
    </aside>
  )
}

export default Sidebar
