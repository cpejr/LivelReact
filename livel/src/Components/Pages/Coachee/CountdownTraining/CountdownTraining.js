import React from 'react';
import './CountdownTraining.css';

import Header from '../../../Header';
import Clock from '../Clock';

const trainingType = "Treino superior";
const phrase = "Seu corpo é sua modara. Cuide-se!";

export default function CountdownTraining(){

    return(
        <div style={{height: "100%"}}>
            <Header img="/images/user.jpg" name="Arthur Lima" icons={true} />
            <div class="CountdownTrainingContainer">
                <div class="DisplayTrainingType">
                    <h3>{trainingType}</h3>
                </div>
                <div class="MainContentContainer">
                    <div class="CountdownClock">
                        <h4>Seu treino começa em:</h4>
                        <Clock/>
                    </div>
                    <div class="MotivacionalPhrase">
                        <h4>"{phrase}"</h4> 
                    </div>
                </div>
                <div class="ButtonContainer">
                    <button class="MarkoffButton">
                        <h4>desmarcar</h4>
                    </button>
                </div>
            </div>
        </div>
    );
}