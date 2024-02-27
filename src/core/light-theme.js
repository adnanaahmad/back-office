import { createTheme } from '@mui/material/styles';

export const LightTheme = createTheme({
  typography: {
    fontFamily: 'Poppins'
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#0376bc',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#2C546A',
    },
  },
});