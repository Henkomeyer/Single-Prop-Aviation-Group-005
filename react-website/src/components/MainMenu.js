import React, {useContext} from "react";
import { QuizContext } from "../extra/Context";
import "../App.css";
function MainMenu(){
    const{gameState,setGameState} = useContext(QuizContext)
    return(
        <div className="Menu">
        
<p>Test your mettle on Single Prop Aeroplane Safety with our Quiz!</p>

            <button onClick={()=> {
                setGameState("quiz");
                }}
            className="">Start</button>

        </div>
    )
}
export default MainMenu