import { useState } from 'react';
import './App.css';
import Tablero from './Tablero';

function App() {
  const [score, setScore] = useState(0);
  const [movements, setMovements] = useState(0);

  const [reset, setReset] = useState(false);

  const restartCards = (() => {
    const reset_aux = !reset;
      
    setReset(reset_aux)
    setTimeout( () => {
      setReset(!reset_aux)
      setMovements(0);
      setScore(0);
    })
  })

  return (
    <div className="App">
      <h1 className='title'>Memory Game</h1>
      <h1 className='counter'>{score}/4</h1>
      <h1 className='movimientos'>Movimientos: {movements}</h1>

      <div className='restartDiv'>
        <img img id='restartButton' src="restartImg.png" alt='Button Restart' width={40} onClick={restartCards}></img>
      </div>

      {
        !reset ? <Tablero score={score} setScore={setScore} movements={movements} setMovements={setMovements}/> : null
      }
    </div>
 
  );
}

export default App;