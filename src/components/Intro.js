export default function Intro(props){

    return(
        <div className="intro">
            <h1 className="intro--title">Quizz</h1>
            <div className="quiz-selector-container">
                <div className="quiz-sub">
                    <label htmlFor = "amount">Number of Questions</label>
                    <input type="number" 
                            id="amount" 
                            name="amount"
                            min="1" 
                            max="50"
                            value = {props.selection.amount}
                            onChange={props.handleChange}
                            ></input>
                </div>
                <div className="quiz-sub">
                    <label htmlFor='category'>Category</label>
                    <select name='category' 
                            id='category'
                            value = {props.selection.category}
                            onChange={props.handleChange}
                            >
                        <option value=''>Any Category</option>
                        <option value='9'>General Knowledge</option>
                        <option value='10'>Books</option>
                        <option value='11'>Film</option>
                        <option value='12'>Music</option>
                        <option value='13'>Musicals & Theatres</option>
                        <option value='14'>Television</option>
                        <option value='15'>Video Games</option>
                        <option value='16'>Board Games</option>
                        <option value='17'>Science & Nature</option>
                        <option value='18'>Computers</option>
                        <option value='19'>Mathematics</option>
                        <option value='20'>Mythology</option>
                        <option value='21'>Sports</option>
                        <option value='22'>Geography</option>
                        <option value='23'>History</option>
                        <option value='24'>Politics</option>
                        <option value='25'>Art</option>
                        <option value='26'>Celebrities</option>
                        <option value='27'>Animals</option>
                        <option value='28'>Vehicles</option>
                        <option value='29'>Comics</option>
                        <option value='30'>Gadgets</option>
                        <option value='31'>Anime & Manga</option>
                        <option value='32'>Cartoons & Animations</option>
                    </select>
                </div>
                <div className="quiz-sub">
                    <label htmlFor="difficulty">Difficulty</label>
                    <select name="difficulty" 
                            id="difficulty"
                            value = {props.selection.difficulty}
                            onChange={props.handleChange}
                            >
                        <option value="">Any Difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                <div className="quiz-sub">
                    <label htmlFor="type">Type</label>
                    <select name="type" 
                            id="type"
                            value = {props.selection.type}
                            onChange={props.handleChange}
                            >
                        <option value="">Any Type</option>
                        <option value="multiple">Multiple Choice</option>
                        <option value="boolean">True/False</option>
                    </select>
                </div>
            </div>
            <button className="intro--button" onClick={props.start}>Start Quiz</button>
        </div>
    )
}