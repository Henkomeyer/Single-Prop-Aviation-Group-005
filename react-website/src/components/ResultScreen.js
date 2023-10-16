import React, {useContext} from "react";
import { QuizContext } from "../extra/Context";
import { Questions } from "../extra/Questions"

function ResultScreen(){
    const{score, setScore, setGameState} = useContext(QuizContext);

    const restart = ()=>{
        setScore(0);  
        setGameState("menu");         
    }
    return(
        <div className="ResultScreen">
            <h1>Finished </h1><br/>
            <h2>Score: {score} / {Questions.length}</h2>
            <button onClick={restart}>Restart</button> 
        </div>
    )
}
export default ResultScreen;