import React, { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.scss';

function App() {

  const [currentTime, setCurrentTime] = useState(0);

  useEffect( () => {
    async function fetchData()  {
      let result = await fetch('/time');
      result = await result.json()

      setCurrentTime(result.time);
    }
    setInterval(()=>{
      fetchData();    
    },1000);
  }, []);

  const getTime= function(time){
    let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(time);
    return d+"";
  }
  return (
    <div className="App">
      <header className="App-header">
        Kevin Dinh
        <img src={logo} className="App-logo" alt="logo" />
        <p className="accent">The current time is {getTime(currentTime)}.</p>
      </header>
    </div>
  );
}

export default App;
