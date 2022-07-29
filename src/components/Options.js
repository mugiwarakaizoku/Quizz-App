import React from "react"

export default function Options(props){
    
    const ele = document.querySelector(':root')
    let color = getComputedStyle(ele).getPropertyValue('--buttonColor')

    const optionBlock = props.optionsArray.map((opt,idx)=>{
        if(props.quizSubmit){
            color = opt.isClicked ? "#94D7A2" : opt.isCorrect ? "#F8BCBC" : "white"
        }else{
            color = opt.isClicked ? "#D6DBF5": "white"
        }

        return(
            <button className="option-button" 
                    key={idx}
                    style = {{'--buttonColor':color}}
                    onClick={props.quizSubmit ? null:()=>props.clickFn(props.quesIdx,idx)}>
                        {opt.value}
            </button>
        )
    })

    return(
        <div className="options">
            {optionBlock}
        </div>
    )
}