import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/auth/Login.auth'
import NewAccount from './components/auth/NewAccount.auth'
import Projects from './components/projects/Projects'

import ProjectState from './context/projects/projectState'
import TaskState from './context/tasks/taskState'

function App() {
  return (
    <ProjectState>
      <TaskState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/new-account" component={NewAccount} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </Router>
      </TaskState>
    </ProjectState>
  )
}

export default App
