import React from "react";
import RadioComponent from "./RadioComponent";


const Question = ({question, options}) => {
    return (
        <>
        <h1>{question}</h1>

        {options.map(option => (
            <RadioComponent key={question} options={option}/>
        ))}
        </>

        
    )
}

export default Question;