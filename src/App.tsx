import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <span className='App-logo'>😬</span>
      </header>
      <div className='container'>
        <div className='cool'>
          <h1>Denne siden var bra!</h1>
        </div>
        <div className='lame'>
          <h1>Denne siden var Dårlig!</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
