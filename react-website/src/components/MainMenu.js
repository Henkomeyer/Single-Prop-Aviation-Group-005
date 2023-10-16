import React, {useContext} from "react";
import { QuizContext } from "../extra/Context";
import "../App.css";
function MainMenu(){
    const{gameState,setGameState} = useContext(QuizContext)
    return(
        <div className="Menu">

            <button onClick={()=> {
                setGameState("quiz");
                }}
            className="">Start</button>
        </div>
    )
}
export default MainMenu