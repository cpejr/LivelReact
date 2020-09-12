import React, {useState, useEffect} from 'react';
import './Clock.css';

export default function Clock(props){

    const recivedHour = parseInt(props.time.slice(0, 2));
    const recivedMin = parseInt(props.time.slice(3, 5));;
    const recivedSec = parseInt(props.time.slice(6, 8));;

    // Horário atual
    let currentSec = new Date().getSeconds();
    let currentMin = new Date().getMinutes();
    let currentHour = new Date().getHours();

    // Tempo restante para o treino
    let leftSec = recivedSec - currentSec;
    let leftMin = recivedMin - currentMin;
    let leftHour = recivedHour - currentHour;

    // Correção de valores do tempo
    if(leftSec < 0){
        leftSec = 59 + leftSec;
        leftMin--; 
    }

    if(leftMin < 0){
        leftMin = 59 + leftMin;
        leftHour--;
    }

    let countH = leftHour;
    let countM = leftMin;
    let countS = leftSec;   


    const [hour, setHour] = useState(leftHour);
    const [minute, setMinute] = useState(leftMin);
    const [second, setSecond] = useState(leftSec);

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
        <h1>
            {hour < 10 ? `0${hour}`: hour}:
            {minute < 10 ? `0${minute}` : minute}:
            {second < 10 ? `0${second}` : second}
        </h1>
    )

    
}