
import './App.css';
import React, {useState, useContext} from 'react';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import ResultScreen from './components/ResultScreen';
import { QuizContext } from './extra/Context';

const Quize = () => {
    const [gameState, setGameState] = useState("menu");
    const [score,setScore] = useState(0);
	return (
        <div className="App">
        <h1>Quiz App</h1>
   
        <QuizContext.Provider value={{gameState,setGameState,score,setScore}}>
        {gameState ==="menu" && <MainMenu/>}
        {gameState ==="quiz" && <Quiz/>}
        {gameState ==="result" && <ResultScreen/>}
        </QuizContext.Provider>
       </div>
		 
	);
};

export default Quize;