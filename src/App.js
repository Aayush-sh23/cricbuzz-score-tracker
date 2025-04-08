import React, { useState } from 'react';
import './App.css';
import CricketGame from './CricketGame';

const App = () => {
  const [oversLimit, setOversLimit] = useState('');
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [gameStarted, setGameStarted] = useState(false);

  const handleStart = () => {
    if (oversLimit && player1 && player2) {
      setGameStarted(true);
    }
  };

  return (
    <div className="app">
      {!gameStarted ? (
        <div className="form">
          <h2>Start Cricket Match</h2>
          <input
            type="number"
            placeholder="Enter number of overs"
            value={oversLimit}
            onChange={(e) => setOversLimit(Number(e.target.value))}
          />
          <input
            type="text"
            placeholder="Enter Player 1 Name"
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Player 2 Name"
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
          />
          <button onClick={handleStart}>Start Match</button>
        </div>
      ) : (
        // <CricketGame  />
        <CricketGame oversLimit={oversLimit} player1={player1} player2={player2} />
      )}
    </div>
  );
};

export default App;
