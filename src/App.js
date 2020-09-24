import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Parallax from './components/parallax/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Technologies from './components/Technologies'
import Contact from './components/Contact'


function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Parallax} />
          <Route path='/about' component={About} />
          <Route path='Technologies' component={Technologies} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App