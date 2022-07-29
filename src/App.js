import Intro from "./components/Intro";
import Main from "./components/Main";
import React from "react";

export default function App(){

    const [startQuiz,setStartQuiz] = React.useState(false) //Intro page login
    const [playAgain,setPlayAgain] = React.useState(false) //playAgain
    const [userSelection,setUserSelection] = 
                            React.useState({
                                amount:5,
                                category:'',
                                difficulty:'',
                                type:'',
                            })
    
    function handleUserSelection(event){
        setUserSelection(prevState => {
            return{
                ...prevState,
                [event.target.name] : event.target.value
            }
        })
    }

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
            {!startQuiz && <Intro 
                                selection = {userSelection}
                                start={handleStartQuiz}
                                handleChange={handleUserSelection}
                            >
                            </Intro>}
            {startQuiz && !playAgain && <Main 
                                            playAgain = {playAgain}
                                            replayFn = {handlePlayAgain}
                                            selection = {userSelection}
                                        >
                                        </Main>}

        </div>
    )
}