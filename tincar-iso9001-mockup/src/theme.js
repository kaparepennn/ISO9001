import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f4a300', // amarillo anaranjado (para botones y destacados)
    },
    background: {
      default: '#0b1424', // color azul oscuro fondo principal
      paper: '#152338', // color para paneles y sidebar
    },
    text: {
      primary: '#e6e6e6',
      secondary: '#b0becf',
    },
  },
  typography: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
});

export default theme;