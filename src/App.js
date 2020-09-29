import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Parallax from './components/parallax/Home'
import Motion from './components/parallax/Motion'
import Alive from './components/parallax/Alive'
import Navbar from './components/Navbar'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Parallax} />
          <Route path='/about' component={About} />
          <Route path='/technologies' component={Technologies} />
          <Route path='/projects' component={Projects} />
          <Route path='/alive' component={Alive} />
          <Route path='/motion' component={Motion} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App