import React, { useState } from 'react';
import './CricketGame.css'; 

const CricketGame = ({ oversLimit, player1, player2 }) => {
  const [team, setTeam] = useState(1);
  const [runs, setRuns] = useState([0, 0]);
  const [wickets, setWickets] = useState(0);
  const [balls, setBalls] = useState(0);
  const [strike, setStrike] = useState(0);
  const [history, setHistory] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [team1Total, setTeam1Total] = useState(0);

  const totalBalls = oversLimit * 6;

  const isInningsOver = () =>
    balls + 1 >= totalBalls || wickets >= 9; 

  const handleRun = (run) => {
    if (gameOver || balls >= totalBalls || wickets >= 10) return;

    const newHistory = [...history, { runs: [...runs], balls, wickets, strike }];
    setHistory(newHistory);

    const newRuns = [...runs];
    newRuns[strike] += run;
    setRuns(newRuns);

    const nextBall = balls + 1;
    setBalls(nextBall);

    
    if (run % 2 === 1 || nextBall % 6 === 0) {
      setStrike(strike === 0 ? 1 : 0);
    }

    
    if (isInningsOver()) {
      if (team === 1) {
        setTeam1Total(newRuns[0] + newRuns[1]);
        setTeam(2);
        setRuns([0, 0]);
        setBalls(0);
        setWickets(0);
        setStrike(0);
        setHistory([]);
      } else {
        setGameOver(true);
      }
    }
  };

  const handleWicket = () => {
    if (gameOver || balls >= totalBalls || wickets >= 10) return;

    const newHistory = [...history, { runs: [...runs], balls, wickets, strike }];
    setHistory(newHistory);

    const nextBall = balls + 1;
    setBalls(nextBall);
    setWickets(wickets + 1);

    if (nextBall % 6 === 0) {
      setStrike(strike === 0 ? 1 : 0);
    }

    if (isInningsOver()) {
      if (team === 1) {
        setTeam1Total(runs[0] + runs[1]);
        setTeam(2);
        setRuns([0, 0]);
        setBalls(0);
        setWickets(0);
        setStrike(0);
        setHistory([]);
      } else {
        setGameOver(true);
      }
    }
  };

  const handleUndo = () => {
    if (history.length === 0) return;
    const last = history[history.length - 1];
    setHistory(history.slice(0, history.length - 1));
    setRuns(last.runs);
    setBalls(last.balls);
    setWickets(last.wickets);
    setStrike(last.strike);
  };

  const total = runs[0] + runs[1];

  return (
    <div className="game">
      <h2>Team {team} Batting</h2>
      <p>{player1} {strike === 0 ? '⚡' : ''}: {runs[0]} runs</p>
      <p>{player2} {strike === 1 ? '⚡' : ''}: {runs[1]} runs</p>
      <p>Overs: {Math.floor(balls / 6)}.{balls % 6}</p>
      <p>Wickets: {wickets}</p>
      <h3>Total: {total}</h3>

      <div className="buttons">
        {[0, 1, 2, 3, 4, 6].map((r) => (
          <button key={r} onClick={() => handleRun(r)}>{r}</button>
        ))}
        <button onClick={handleWicket}>Wicket</button>
        <button onClick={handleUndo}>Undo</button>
      </div>

      {gameOver && (
        <div className="result">
          <h2>Match Over!</h2>
          <h3>Team 1 Score: {team1Total}</h3>
          <h3>Team 2 Score: {total}</h3>
          <h2>
            {total > team1Total
              ? 'Team 2 Wins! 🏆'
              : total < team1Total
              ? 'Team 1 Wins! 🏆'
              : "It's a Tie!"}
          </h2>
        </div>
      )}
    </div>
  );
};

export default CricketGame;
