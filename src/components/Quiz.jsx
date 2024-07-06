import { useCallback, useState } from "react";
import QUESTIONS from '../question.js';
import Question from "./Question.jsx";
import quizCompleteLogo from '../assets/quiz-complete.png';

export default function Quiz() {
    const [usersAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex =  usersAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS[activeQuestionIndex].answers.length;
    
    const handleSelectAnswer = useCallback(function handleSelectAnswer(answer) {
        setUserAnswers((prevAnswer) => {
            return [...prevAnswer, answer]
        })
    },[activeQuestionIndex]);
    
    const handleSkipAnswer = useCallback(()=> handleSelectAnswer(null),[]);

    if (quizIsComplete) {
        return (
            <div id="summary">
                <img src={quizCompleteLogo} alt="Trophy Icon" />
                <h2>Quiz is Completed !!</h2>
            </div>
        )
    }


    
    return (
        <div id="quiz">
            <Question 
            key={activeQuestionIndex}
            questionIndex={activeQuestionIndex}
            onSelect={handleSelectAnswer}
            handleSkipAnswer={handleSkipAnswer}
            />
        </div>
    )
}