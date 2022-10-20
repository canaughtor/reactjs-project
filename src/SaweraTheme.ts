import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      contrastText: '#000000' 
    },
    secondary: {
      main: '#000000',
    },
    error: {
      main: red.A400,
    },
    background: {
      paper: '#F2F9FC',
      default: '#F2F9FC'
    }
  },
  typography: {
    fontFamily: '\'Poppins-Medium\', \'Poppins-Regular\''
  }
});

export default theme;