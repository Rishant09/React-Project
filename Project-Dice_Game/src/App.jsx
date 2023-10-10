import React, { useState } from 'react'
import StartGame from './components/StartGame'
import Gameplay from './components/Gameplay';


const App = () => {

  const [isGameStarted,setGameStarted] = useState(false);
  const toggleGameplay = () => {
    setGameStarted((prev) => !prev);
  };
  return (
    <>
      {isGameStarted ? <Gameplay/>: <StartGame toggle={toggleGameplay}/> }
    </>
  );
};

export default App;







