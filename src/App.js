
import './App.css';
import React, {useState, useContext } from 'react'
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import {QuizContext} from "./Helpers/Contexts";
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [gameState,setGameState] = useState("menu");
   const [score, setScore] = useState (0)


  return (
    <div className="App">



      <div class="topnav">
  <a class="active" href="#">Welcome to Quiz App</a>
  

  <div class="footer">
  <p>Designed by Punith</p>
</div>
 
</div>
    {/* <h1>Quiz App</h1> */}
      <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>

      {gameState === "menu" && <MainMenu />}
      {gameState === "quiz" && <Quiz />}
      {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>


    </div>
  );
}

export default App;
