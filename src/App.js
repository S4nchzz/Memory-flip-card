import { useState } from 'react';
import './App.css';
import Tablero from './Tablero';

function App() {
  const [score, setScore] = useState(0);

  return (
    
    <div className="App">
      <h1 className='title'>Memory Game</h1>
      <h1 className='counter'>{score}/4</h1>
      <div>
        <Tablero tamano = "8" score={score} setScore={setScore}/>
      </div>
    </div>
 
  );
}

export default App;