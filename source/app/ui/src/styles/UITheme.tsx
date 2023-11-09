import { blue, grey, orange } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { Colors } from './UIColors';

import './_global.scss';

const customTheme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'Open Sans',
      'Helvetica Neue',
      'Helvetica',
      'sans-serif'
    ].join(','),
    fontWeightMedium: 500,
    fontSize: 14
  },
  palette: {
    background: {
      default: Colors.background,
      paper: Colors.background
    },
    text: {
      primary: Colors.white,
      disabled: Colors.textDisabledColor
    },
    primary: {
      light: blue[300],
      main: blue[600],
      dark: blue[700]
    },
    secondary: {
      light: orange[300],
      main: orange[500],
      dark: orange[600]
    }
    // textColor: '#444656',
    // alternateTextColor: grey[700],
    // canvasColor: Colors.white,
    // borderColor: grey[300],
    // pickerHeaderColor: blue[500],
    // shadowColor: grey[700],
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          color: Colors.white
        }
      }
    }
  }
});

export default customTheme;
