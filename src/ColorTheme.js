import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  palette: {
    primary: {
      main: 'white'
    },

    secondary: {
      main: 'white'
    },

    typography: {
      fontFamily: '\'Nunito\', serif',
      textTransform: 'none',
      h1: {
        fontSize: 20
      },
      p: {
        fontSize: 10
      },
      subtitle1: {
        fontSize: 15
      }
    },

    overrides: {
      MuiTypography: {
        text: {
          fontFamily: 'Nunito'
        }
      }
    }
  }
})