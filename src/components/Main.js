import React from "react"
import Options from "./Options"

export default function Questions(props){

    const [quizData,setQuizData] = React.useState([]) //Data from fetch API
    const [quizSubmit, setQuizSubmit] = React.useState(false)

    function shuffleArray(arr){
        for(let i=arr.length-1;i>0;i--){
            const j = Math.floor(Math.random()*(i+1))
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    //https://opentdb.com/api.php?amount=5&category=31&difficulty=medium&type=multiple
    //https://opentdb.com/api.php?amount=3&type=multiple

    React.useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=3&category=31&difficulty=easy&type=multiple")
        .then(res=> res.json())
        .then(res=>res.results)
        .then(data=>setQuizData(()=>data.map((obj)=>{
            const ques = obj.question.replace(/&quot;/g, '"').replace(/&#039;/g, '`')
            const corrAns = obj.correct_answer.replace(/&quot;/g, '"').replace(/&#039;/g, '`')
            const incArr = obj.incorrect_answers.map((ans)=>{
                return ans.replace(/&quot;/g, '"').replace(/&#039;/g, '`')
            })

            const options = incArr.map((opt)=>{
                return {value:opt,isCorrect:false,isClicked:false}
            })

            options.push({value:corrAns,isCorrect:true,isClicked:false})
            shuffleArray(options)

            return {
                ...obj,
                question:ques,
                correct_answer:corrAns,
                incorrect_answers:incArr,
                allOptions: options
            }
        })))
        .then(data => setQuizData(prevData => prevData.map(data=>{
            return{...data,scoreContribution:0}
        })))

        setQuizSubmit(false)

    },[props.playAgain]);
    console.log(quizData)

    function handleOptionClick(quesIdx,optionIdx){
        setQuizData(prevData => prevData.map((data,qidx)=>{
            let contribution = 0
            if(quesIdx != qidx){
                return data
            }else{
                const options = data.allOptions
                const newOptions = options.map((old,optidx)=>{
                    return optidx === optionIdx? {...old,isClicked:true} : {...old,isClicked:false}
                })
                return {...data,allOptions:newOptions,scoreContribution:contribution}
            }
        }))
    }

    function handleSubmit(){
        setQuizSubmit(true)
    }

    const questionsArray = quizData.map((data,id)=>{

        return(
            <div className="question-and-answer" key={id}>
                <p className="question">{data.question}</p>
                <Options
                    optionsArray={data.allOptions}
                    quizSubmit = {quizSubmit}
                    quesIdx = {id}
                    clickFn = {handleOptionClick}
                ></Options>
                <hr className="questions--linebreak"></hr>
            </div>
        )
    })

    let score = 0
    if(quizSubmit){
        for(let i=0;i<quizData.length;i++){
            for(let j=0;j<quizData[i].allOptions.length;j++){
                let ques = quizData[i].allOptions[j]
                if(ques.isClicked && ques.isCorrect){score = score+1}
            }
        }
    }


    const submit = <button className="submit"
                            onClick={handleSubmit}>
                            submit
                    </button>
    
    const restartQuiz = <div className="bottom-content">
                            <h3 className="score">You scored {score}/{quizData.length} answers</h3>
                            <button className="retake-quiz" onClick={props.replayFn}>Play again</button>
                        </div>

    return(
        <div className="main">
                {questionsArray}
                {!quizSubmit && submit}
                {quizSubmit && restartQuiz}
        </div>
    )
}