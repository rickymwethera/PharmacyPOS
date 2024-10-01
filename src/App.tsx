import { CartProvider } from './context/CartContext';
import AppRoutes from './routes';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = {
  palette: {
    primary: {
      main: '#283342',
    },
    secondary: {
      main: '#283342',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
    <CartProvider>
      <AppRoutes />
    </CartProvider>
    </ThemeProvider>
    
  );
  
  
}

export default App;
