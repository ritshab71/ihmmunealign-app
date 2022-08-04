import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
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
    <div className="App">
      <header className="App-header">
      <button onClick={getResults}>Click</button>
      {loading && <div>Loading...</div>}
      {data && <div>{data.log_probability}</div>}
      </header>
    </div>
  );
}

export default App;
