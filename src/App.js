import './App.css';
import Tablero from './Tablero';

function App() {
  return (
    <div className="App">
      <h1 className='title'>Memory game</h1>
      <h1 className='counter'>0/4</h1>
      <div>
        <Tablero tamano = "8"/>
      </div>
    </div>
  );
}

export default App;