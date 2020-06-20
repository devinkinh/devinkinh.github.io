import React from 'react';
import './App.scss';
import Details from './Details';

function App() {

 

  return (
    <div className="App">
      <div className="portfolio-container">
        <div className="about-me">
          <div id="pic">
          </div>
          <div id="description">
            <h2 style={{ color:'rgba(218, 211, 41, 1)', marginLeft: 60 + 'px',marginTop: 60 + 'px' }}>
              Hey!
          </h2>
            <span style={{ fontSize: .5 + 'em' }}>
              <p>
                My name’s Kevin Dinh.
            </p>
              <p>
                I’m an Alexandria, VA based fullstack-developer who likes to keep it simple.
          </p>
            </span>
          </div>
        </div>
        < Details/>
      </div>
    </div>
  );
}


export default App;
