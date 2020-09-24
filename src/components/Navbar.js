import React from 'react'
import ColorTheme from '../ColorTheme'

import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button, ThemeProvider } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2)
  },

  title: {
    flexGrow: 1,
    fontFamily: 'Nunito',
    color: 'rgb(9, 195, 246)',
    fontSize: '25px',
    letterSpacing: '2px'
  },

  button: {
    fontFamily: 'Nunito',
    fontSize: '17px',
    color: 'black'
  }
}))

function Navbar() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={ColorTheme}>
      <div className={classes.root} >
        <AppBar 
        position="static"
        style={{
          background: 'transparent',
          boxShadow: 'none'
        }}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
            </Typography>
            <Button className={classes.button}>Projects</Button>
            <Button className={classes.button}>Experience</Button>
            <Button className={classes.button}>Contact</Button>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  )

}

export default Navbar

