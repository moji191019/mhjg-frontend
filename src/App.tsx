import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([
    { id: 0, name: 'mo' },
    { id: 1, name: 'hong' },
    { id: 2, name: 'kim' },
  ]);
  const test = () => {
    console.log('asdf');
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hi react!! <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
