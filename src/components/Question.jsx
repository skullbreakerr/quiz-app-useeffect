import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import QUESTIONS from '../question.js';
import { useState } from "react";
const TIMER = 10000;
const INITIAL_STATE={
    selectedAnswer:'',
    isCorrect: null
}

export default function Question({questionIndex,onSelect,handleSkipAnswer}){
    const [answer,setAnswer] = useState(INITIAL_STATE);

    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer:answer,
            isCorrect:null
        });
        setTimeout(()=>{
            setAnswer({
                selectedAnswer:answer,
                isCorrect:QUESTIONS[questionIndex].answers[0]=== answer
            })

            setTimeout(()=>{
                onSelect(answer);               
            },2000);
        },1000);

    };
    let answerState='';
    if(answer.selectedAnswer){
        answerState = answer.isCorrect ? 'correct' : 'false';
    }
    return(
        <div id="question">
                <QuestionTimer timer={TIMER} onTimeout={ handleSkipAnswer} />
                <h2>{QUESTIONS[questionIndex].text}</h2>
                <Answers  
                answers={QUESTIONS[questionIndex].answers}
                selectedAnswer={answer.selectedAnswer}
                answeredState={answerState}
                onSelect={handleSelectAnswer}
                />
            </div>
    )
}