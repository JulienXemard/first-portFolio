import React from 'react'
import About from '../About'
import Technologies from '../Technologies'
// import Contact from '../Contact'

import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'


import { makeStyles } from '@material-ui/core/styles'
import { IconButton } from '@material-ui/core'

let parallax = null

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  }
}))

function Home() {
  const classes = useStyles()

    return (
      <>
        <Parallax pages={5} ref={ref => (parallax = ref)}>

        <ParallaxLayer offset={0.9} speed={1} style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }} />

          <ParallaxLayer offset={0.1} speed={1.6} style={{ pointerEvents: 'none' }}>
            <About />
          </ParallaxLayer>

          <ParallaxLayer offset={0.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
            <img src='https://i.ibb.co/qJ32QpS/GALogo.png' style={{ width: '15%', marginLeft: '70%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={0.4} speed={4} style={{ pointerEvents: 'none' }}>
            <i className="icons devicon-sass-original" style={{ display: 'block', marginLeft: '35%' }}></i>
            <i className="icons devicon-html5-plain" style={{ display: 'block', marginLeft: '15%' }}></i>
            <i className="icons devicon-javascript-plain" style={{ display: 'block', marginLeft: '55%' }}></i>
            <i className="icons devicon-react-original" style={{ display: 'block', marginLeft: '65%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={0.5} speed={2.4} style={{ pointerEvents: 'none' }}>
            <i className="icons devicon-react-original" style={{ display: 'block', marginLeft: '65%' }}></i>
            <i className="icons devicon-sass-original" style={{ display: 'block', marginLeft: '35%' }}></i>
            <i className="icons devicon-html5-plain" style={{ display: 'block', marginLeft: '15%' }}></i>
            <i className="icons devicon-javascript-plain" style={{ display: 'block', marginLeft: '55%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={0.8} speed={2} style={{ pointerEvents: 'none' }}>
            <i className="icons devicon-html5-plain" style={{ display: 'block', marginLeft: '15%' }}></i>
            <i className="icons devicon-mongodb-plain" style={{ display: 'block', marginLeft: '65%' }}></i>
            <i className="icons devicon-sass-original" style={{ display: 'block', marginLeft: '35%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={0.2} speed={2.5} style={{ pointerEvents: 'none' }}>
            <i className="icons devicon-git-plain" style={{ display: 'block', marginLeft: '45%' }}></i>
            <i className="icons devicon-html5-plain" style={{ display: 'block', marginLeft: '15%' }}></i>
            <i className="icons devicon-react-original" style={{ display: 'block', marginLeft: '65%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={0.7} speed={3} style={{ pointerEvents: 'none' }}>
            <i className="icons devicon-github-plain" style={{ display: 'block', marginLeft: '45%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={0.5} speed={3.5} style={{ pointerEvents: 'none' }}>
            <i className="icons devicon-python-plain" style={{ display: 'block', marginLeft: '75%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={0.8} speed={2.2} style={{ pointerEvents: 'none' }}>
            <i className="icons devicon-django-plain" style={{ display: 'block', marginLeft: '90%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={0.4} speed={2.8} style={{ pointerEvents: 'none' }}>
            <i className="icons devicon-css3-plain" style={{ display: 'block', marginLeft: '10%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={0.7} speed={1} style={{ pointerEvents: 'none' }}>
            <i className="icons devicon-intellij-plain" style={{ display: 'block', marginLeft: '10%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={0.8} speed={3} style={{ pointerEvents: 'none' }}>
            <i className="icons devicon-trello-plain" style={{ display: 'block', marginLeft: '80%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={0.4} speed={1.2} style={{ pointerEvents: 'none' }}>
            <i className="icons devicon-java-plain" style={{ display: 'block', marginLeft: '80%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={0.3} speed={1.6} style={{ pointerEvents: 'none' }}>
            <i className="icons devicon-nodejs-plain" style={{ display: 'block', marginLeft: '60%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={0.6} speed={1.6} style={{ pointerEvents: 'none' }}>
            <i className="icons devicon-postgresql-plain" style={{ display: 'block', marginLeft: '30%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={0.3} speed={1.7} style={{ pointerEvents: 'none' }}>
            <i className="icons devicon-slack-plain" style={{ display: 'block', marginLeft: '20%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={0.4} speed={2.6} style={{ pointerEvents: 'none' }}>
            <i className="icons devicon-visualstudio-plain" style={{ display: 'block', marginLeft: '90%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={0.8} speed={7} style={{ pointerEvents: 'none' }}>
            <i className="icons devicon-typescript-plain" style={{ display: 'block', marginLeft: '34%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={0.4} speed={5} style={{ pointerEvents: 'none' }}>
            <i className="icons devicon-npm-original-wordmark" style={{ display: 'block', marginLeft: '22%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={0.9} speed={1} style={{ pointerEvents: 'none' }}>
            <Technologies /> 
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={3} style={{ pointerEvents: 'none' }}>
          </ParallaxLayer>

          <ParallaxLayer offset={2.5} speed={1} style={{ pointerEvents: 'none' }}>
            {/* <Contact /> */}
          </ParallaxLayer>

          <ParallaxLayer offset={3} speed={0.5}>
            <span onClick={() => parallax.scrollTo(0)}>Click back Home</span>
          </ParallaxLayer>

        </Parallax>

        <IconButton>
          {/* <ArrowUpwardIcon 
            fontSize="large"
            aria-label="sticky-up"
            className={classes.margin}
            /> */}
        </IconButton>
      </>
    )
}

export default Home
