import React, {useState, useEffect} from 'react';



export default function Clock2(props){



// Correção de valores do tempo
if(props.second < 0){
    props.second = 59 + props.second;
    props.minute--; 
}

if(props.minute < 0){
    props.minute = 59 + props.minute;
    props.hour--;
}

let countH = props.hour;
let countM = props.minute;
let countS = props.second;

    const [hour, setHour] = useState(props.hour);
    const [minute, setMinute] = useState(props.minute);
    const [second, setSecond] = useState(props.second);

    useEffect(() => {
        setInterval(() => {
            // Condição de parada da contagem regressiva
            if(countH === 0 && countM === 0 && countS === 0){
                setHour(hour => 0);
                setMinute(minute => 0);
                setSecond(second => 0);
            }

            // Contagem regressiva
            else if(countS > 0){
                countS--;
                setSecond(second => second - 1);
            }
            else{
                countS = 59;
                setSecond(second => 59);
                if(countM > 0){
                    countM--;
                    setMinute(minute => minute -1);
                }
                else{
                    countM = 59;
                    setMinute(minute => 59);
                    if(hour > 0){
                        countH--;
                        setHour(hour => hour - 1);
                    }
                    // Ativação da condição de parada
                    else{
                        countH = 0;
                        countM = 0;
                        countS = 0;
                    }
                }     
            }
        
        }, 1000);
      }, []);


    return(
        <div>

            {minute < 10 ? `0${minute}` : minute}:
            {second < 10 ? `0${second}` : second}
        </div>
    )

    
}