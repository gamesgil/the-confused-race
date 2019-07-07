import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board/Board'
import Die from './Die/Die'

function App() {
  let boardRef = React.createRef()

  return (
    <div className="App">
      <Board ref={boardRef}></Board>

      <Die></Die>

      <button onClick={_ => boardRef.current.moveToNext()}>Next</button>
    </div>


  );
}

export default App;
