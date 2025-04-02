
// import React from "react";
// import { useState } from "react";

// const Guess = () => {
//   const [randomNumber, setRandomNumber] = useState(null);
//   const [userInput, setUserInput] = useState("");
//   const [message, setMessage] = useState("");
//   const [attempts, setAttempts] = useState(0);

//   const generate = () => {
//     const num = Math.floor(Math.random() * 10) + 1;
//     setRandomNumber(num);
//     setMessage("");
//     setAttempts(0);
//   };
//   const checkGuess = () => {
//     if (!randomNumber) {
//       setMessage("Please generate a number first!");
//       return;
//     }
//     setAttempts((prevAttempts) => prevAttempts + 1);
//     if (parseInt(userInput) < randomNumber) {
//       setMessage("Too Low");
//     } else if (parseInt(userInput) > randomNumber) {
//       setMessage("Too High");
//     } else if (parseInt(userInput) === randomNumber) {
//       setMessage("You Won!!!!!!!!");
//     }
//     if (attempts + 1 >= 3) {
//       setMessage(
//         `❌ Game Over! The number was ${randomNumber}. Click Generate to try again.`
//       );
//     }
//   };
//   return (
//     <div>
//       <button onClick={generate}>Generate</button>
//       <label>Enter No:</label>
//       <input
//         type="number"
//         value={userInput}
//         onChange={(e) => setUserInput(e.target.value)}
//       ></input>
//       <button onClick={checkGuess}>Submit</button>
//       <p>{message}</p>
//     </div>
//   );
// };

// export default Guess;



import React from 'react'
import { useState } from 'react';

const App = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [userInput, setUserInput] = useState("")
  const [msg ,setMsg]= useState("");
  const [attempts , setAttempts] = useState(0);


  const gen = ()=>{
    const num = Math.floor(Math.random() * 10 )+1;
    setRandomNumber(num);
    setMsg("");
    setAttempts(0);

  };

  const chk = ()=>{
    if(!randomNumber ){
      setMsg("Pls generate krle nuber")
      return ;
    }
    
    setAttempts ((prevAttempt) => prevAttempt +1);

    if(parseInt(userInput) < randomNumber){
      setMsg("bda socho ")
    }
    else if(parseInt(userInput) > randomNumber){
      setMsg("Chota socho ")
    }
    else if(parseInt(userInput) === randomNumber){
      setMsg("Victory !!!!!")
    }

    if(attempts +1 >= 3){
      setMsg(`Haar gya , Bettter luck nxt time ${randomNumber}. Click to try again `)
    }
  }
 
  return (
    <div>
      <div>
      <button onClick={gen }>Start the Game </button>

      </div>
      Number daal be
      <div>
        <input type="number"  value={userInput} onChange={(e)=>{setUserInput(e.target.value)}}/>
        <button onClick={chk}>submit it </button>
      </div>
      <p>{msg}</p>
    </div>
    
  )
}

export default App

