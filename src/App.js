import React, { useEffect, useState } from 'react'
import './App.css';
import { inject, observer } from 'mobx-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar'
import Clients from './components/Clients/Clients'
import Actions from './components/Actions/Actions'
import Analytics from './components/Anlalytics/Analytics'
import data from './data.json'


const App = inject('company')(observer((props)=>{

  useEffect(() => {
    props.company.getClientList(data)
  }, [])

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/clients" render={() => <Clients />} />
        <Route exact path="/actions" render={() => <Actions />} />
        <Route exact path="/analytics" render={() => <Analytics />} />
    </div>
    </Router>

  )

}))

export default App