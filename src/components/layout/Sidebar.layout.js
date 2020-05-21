import React from 'react'
import NewProject from '../projects/NewProject'

const Sidebar = () => {
  return (
    <aside>
      <h1>
        Task<span>Manager</span>

        <NewProject />

        <div className="proyectos">
            <h2>Your Projects</h2>
        </div>
      </h1>
    </aside>
  )
}

export default Sidebar
