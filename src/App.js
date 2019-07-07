import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board/Board'
import Die from './Die/Die'
import game from './game'

function App() {
  const race = game()

  let dieRef = React.createRef()
  let boardRef = React.createRef()

  return (
    <div className="App">
      <Board ref={boardRef} action={_ => dieRef.current.ready()}></Board>

      <Die ref={dieRef} action={val => {
        race.setDieValue(val + 1)
        
        boardRef.current.hilite(val + 1)

        dieRef.current.busy()
      }}></Die>
    </div>


  );
}

export default App;
