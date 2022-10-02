import { useState } from 'react';
import Dashboard from './components/dashboard';
import './styles/main.css';
import './styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
    fontSize: "12px"
  }
});

const App = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const getResults = () => {
    setLoading(true);
    fetch('https://ihmmunealign-api.herokuapp.com/getihmmune/', {
      method: "GET",
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
      }
    })
    .then(res => { return res.json(); })
    .then(response => {
      setData(response)
      setLoading(false);
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <body className="w-full min-h-screen overflow-y-scroll flex justify-center items-center p-4 bg-[#e8edf1]">
        <Dashboard/>
      </body>
    </ThemeProvider>
  );
}

export default App;
