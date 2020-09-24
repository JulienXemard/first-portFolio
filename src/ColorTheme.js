import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  palette: {
    primary: {
      main: '#C8CFDB'
    },

    secondary: {
      main: '#00928E'
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