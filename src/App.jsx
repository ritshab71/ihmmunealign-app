import { useState } from 'react';
import Dashboard from './components/dashboard.tsx';
import './styles/main.css';

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
    <div className="bg-[#e8edf1] max-w-screen max-h-screen">
      <Dashboard/>
    </div>
  );
}

export default App;
