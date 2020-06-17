import React, {useState, useEffect} from 'react';



export default function Clock(props){
  const [seconds, setSeconds] = useState(props.seconds);
  const [active, setActive] = useState(props.active)

  useEffect(() => {
    let interval = null;
    if (active) {
      interval = setInterval(() => {setSeconds(seconds - 1)}, 1000);
      if(seconds===0){
        props.changeActive(props.clockId);
        setSeconds(props.seconds)
      }
    } 
    else{
      clearInterval(interval);
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, seconds]);

  useEffect(()=>{
    setActive(props.active)
  }, [props.active]);

  return (
      <div>
      {Math.trunc(seconds/60)}:
      {(seconds%60<10) && `0${seconds%60}`}
      {(seconds%60>=10) && (seconds%60)}
      </div>
  )
}

