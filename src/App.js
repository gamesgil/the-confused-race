import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board/Board'
import Die from './Die/Die'

function App() {
  return (
    <div className="App">
      <Board></Board>

      <Die></Die>
    </div>


  );
}

export default App;
