import Intro from "./components/Intro";
import Main from "./components/Main";
import React from "react";

export default function App(){

    const [startQuiz,setStartQuiz] = React.useState(false) //Intro page login
    const [playAgain,setPlayAgain] = React.useState(false) //playAgain

    function handleStartQuiz(){
        setStartQuiz(true)
        setPlayAgain(false)
    }

    function handlePlayAgain(){
        setPlayAgain(true)
        setStartQuiz(false)
    }
    
    return(
        <div className="app">
            {!startQuiz && <Intro start={handleStartQuiz}></Intro>}
            {startQuiz && !playAgain && <Main 
                                            playAgain = {playAgain}
                                            replayFn = {handlePlayAgain}
                                        >
                                        </Main>}

        </div>
    )
}