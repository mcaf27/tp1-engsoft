import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Merriweather, serif',
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#b150f2',
    },
    secondary: {
      main: '#d762d9',
    },
    text: {
      primary: '#eee',
    },
  },
});

export default theme;
