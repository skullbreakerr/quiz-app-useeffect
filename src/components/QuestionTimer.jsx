import { useEffect, useState } from "react";

export default function QuestionTimer({timer,onTimeout}){

    const [remainingTime,setRemainingTime] = useState(timer);
    
    useEffect(()=>{
        console.log("Set Timeout");
        const timeout = setTimeout(onTimeout,timer);


        return()=>{
            clearTimeout(timeout);
        }
    },[timer,onTimeout]);
    
    useEffect(()=>{
        console.log("Set Interval");
        const interval =setInterval(() => {
            setRemainingTime(prevTime => prevTime-100 );
        }, 100);


        return()=>{
            clearInterval(interval);
        }
    },[]);

    return <progress id="question-time" value={remainingTime} max={timer}/>
}