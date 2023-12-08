import './App.css';
import GamePlay from './components/GamePlay';
import StartGame from './components/StartGame';
import { useState } from 'react';

function App() {

  const [gameIsRunning, setGameIsRunning] = useState(false);
  const toggelGamePlay = () => {
    setGameIsRunning((prev) => !prev)
  }

  return (
    <>
    {gameIsRunning? <GamePlay/> : <StartGame toggel={toggelGamePlay}/>}
    {/* <GamePlay/> */}
    </>
  );
}

export default App;
