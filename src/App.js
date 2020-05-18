import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NewAccount from './components/auth/Login.auth'
import Login from './components/auth/NewAccount.auth'
import Projects from './components/projects/Projects'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/new-account" component={NewAccount} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </Router>
  )
}

export default App
