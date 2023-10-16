import React, {useState,useContext} from "react";
import {Questions} from "../extra/Questions";
import { QuizContext } from "../extra/Context";
function Quiz(){
    
        const [currentQuestion, setCurrentQuestion] = useState(0);
        const{score,setScore, setGameState} = useContext(QuizContext);
        const [Selected,setSelected] = useState("");

        const nextQuestion = ()=>{
            if (Questions[currentQuestion].answer === Selected) {
                setScore(score+1);
                
        }
        setCurrentQuestion(currentQuestion +1);
    }
    const finishQuiz = ()=>{
        if (Questions[currentQuestion].answer === Selected) {
            setScore(score + 1);
    }
    setGameState("result");
    }
       return <div className="Quiz">
    <h1 >{Questions[currentQuestion].prompt}</h1>
    <div className="options"> 
    <button onClick={()=>{setSelected("A")}}>{Questions[currentQuestion].optionA}</button>
    <button onClick={()=>{setSelected("B")}}>{Questions[currentQuestion].optionB}</button>
    <button onClick={()=>{setSelected("C")}}>{Questions[currentQuestion].optionC}</button>
    <button onClick={()=>{setSelected("D")}}>{Questions[currentQuestion].optionD}</button>
    </div>

    {currentQuestion === Questions.length-1 ? (
        <button onClick={finishQuiz}>Finish</button>
    ):(<button onClick={nextQuestion}>Next Question</button>)
    }
   
        </div>
    
}
export default Quiz