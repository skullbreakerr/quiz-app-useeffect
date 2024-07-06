import { useRef } from "react";
export default function Answers({answers,selectedAnswer,answeredState,onSelect}) {
    const shuffleAnswers = useRef();
    if(!shuffleAnswers.current){
        shuffleAnswers.current = [...answers];
        shuffleAnswers.current.sort(() => Math.random() - 0.5);

    }

    return (
        <ul id="answers">
            {shuffleAnswers.current.map(answer => {
                let cssClasses = '';
                const isSelected = selectedAnswer === answer;
                if (answeredState === 'answered' && isSelected) {
                    cssClasses = 'selected';
                }
                if ((answeredState === 'correct' || answeredState === 'wrong') && isSelected) {
                    cssClasses = answeredState;
                }
                return (
                    <li key={answer.length * 20} className="answer"><button disabled={answeredState!==""} className={cssClasses} onClick={() => { onSelect(answer) }}>{answer}</button></li>
                )
            })}
        </ul>
    )
}