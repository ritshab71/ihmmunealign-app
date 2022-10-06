import Dashboard from './components/dashboard';
import './styles/main.css';
import './styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from "react";

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
    fontSize: 10
  }
});

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <body className="w-full min-h-screen flex justify-center items-center p-4 bg-[#e8edf1]">
        <Dashboard/>
      </body>
    </ThemeProvider>
  );
}

export default App;
