export default function Intro(props){
    return(
        <div className="intro">
            <h1 className="intro--title">Quizz</h1>
            <button className="intro--button" onClick={props.start}>Start Quiz</button>
        </div>
    )
}