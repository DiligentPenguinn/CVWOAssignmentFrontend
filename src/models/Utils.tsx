import { createTheme} from '@mui/material/styles';


// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      contrastText: '007FFF',
    },
    secondary: {
      main: '#BEBFC5',
    },
  },
});

export default theme;