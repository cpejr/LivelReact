import React, {useState, useEffect} from 'react';



export default function Clock(props){
    const [seconds, setSeconds] = useState(props.seconds);
    const [play, setplay] = useState(props.state);
    const [state2, setstate2] = useState(props.state2)

    useEffect(() => {
        let interval = null;
        if (play && state2) {
          interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
          }, 1000);
          if(seconds===0){
            props.function();
        }
        } else if (!play) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
         }, [play, seconds, state2]);

         useEffect(()=>{
            setplay(props.state)
        }, [props.state]);

        useEffect(()=>{
            setstate2(props.state2)
        }, [props.state2]);

        useEffect(()=>{
            setSeconds(props.seconds)
        }, [props.seconds]);

        return (
            <div>
            {Math.trunc(seconds/60)}:
            {(seconds%60<10) && `0${seconds%60}`}
           {(seconds%60>=10) && (seconds%60)}
           </div>
        )
 }

