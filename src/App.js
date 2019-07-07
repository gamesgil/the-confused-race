import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board/Board'
import Die from './Die/Die'
import game from './game'

function App() {
  const race = game()

  let boardRef = React.createRef()

  return (
    <div className="App">
      <Board ref={boardRef}></Board>

      <Die action={val => {
        race.setDieValue(val + 1)
        boardRef.current.hilite(val + 1)
      }}></Die>

      <button onClick={_ => boardRef.current.moveToNext()}>Next</button>
    </div>


  );
}

export default App;
