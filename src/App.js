import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Parallax from './components/parallax/Home'
// import Alive from './components/parallax/Alive'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'


function App() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route exact path='/' component={Parallax} />
          <Route path='/about' component={About} />
          <Route path='/technologies' component={Technologies} />
          <Route path='/projects' component={Projects} />
          {/* <Route path='/alive' component={Alive} /> */}
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App