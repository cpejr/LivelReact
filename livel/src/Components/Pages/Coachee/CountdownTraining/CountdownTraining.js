import React from 'react';
import { useHistory } from 'react-router-dom'
import './CountdownTraining.css';
import { checkOut } from '../../../../services/backEnd'

import Header from '../../../Header';
import Clock from './Clock';

const trainingType = "Treino superior";
const phrase = "Seu corpo é sua modara. Cuide-se!";

export default function CountdownTraining(props){

    const history = useHistory()

    async function cancelTraining(){
        try{
            const response = await checkOut(props.location.state.treinoId)
            history.push('/trainingTypes')
        }catch(error){
            alert(error)
        }
    }


    return(
        <div style={{height: "100%"}}>
            <Header img={true} name={true} icons={true} />
            <div class="CountdownTrainingContainer">
                <div class="DisplayTrainingType">
                    <h3>{trainingType}</h3>
                </div>
                <div class="MainContentContainer">
                    <div class="CountdownClock">
                        <h4>Seu treino começa em:</h4>
                        <Clock time={props.location.state.horario}/>
                    </div>
                    <div class="MotivacionalPhrase">
                        <h4>"{phrase}"</h4> 
                    </div>
                </div>
                <div class="ButtonContainer">
                    <button class="MarkoffButton">
                        <h4 onClick={cancelTraining}>desmarcar</h4>
                    </button>
                </div>
            </div>
        </div>
    );
}