import React from 'react'
import { useState } from 'react'

const App = () => {
  const [batsman1Score, setBatsman1Score] = useState(0);
  const [batsman2Score, setBatsman2Score] = useState(0);
  const [strike, setStrike] = useState(1);
  const [teamScore, setTeamScore] = useState(0);

  const inc = (value) => {
    if (strike === 1) {
      setBatsman1Score((prevScore) => prevScore + value);
    } else {
      setBatsman2Score((prevScore) => prevScore + value);
    }
    if (value % 2 !== 0) {
      setStrike((prevStrike) => (prevStrike === 1 ? 2 : 1));
    }
    setTeamScore((prevScore) => prevScore + value);
    if (value === 0) {
      setTeamScore((prevScore) => prevScore + 1);
    }
  };
  
  return (
    <div>
      <h1>CricBuzz</h1>
      <p>player1 = {batsman1Score} </p>
      <p>player2 = {batsman2Score}</p>

      <button onClick={()=> inc(1)}> 1 </button>
      <button onClick={()=> inc(2)}> 2 </button>
      <button onClick={()=> inc(3)}> 3 </button>
      <button onClick={()=> inc(4)}> 4 </button>
      <button onClick={()=> inc(6)}> 6 </button>
      <button onClick={()=> inc(1)}> wide </button>
      <button onClick={()=> inc(1)}> No ball </button>

      <h3>Team Score : {teamScore}</h3>
    </div>
  )
}

export default App
