import React from 'react'
import { useHistory } from 'react-router-dom'
import './CountdownTraining.css'

import Header from 'src/Components/Header'
import Clock from './Clock'
import { message } from 'antd'

const trainingType = 'Treino superior'
const phrase = 'Seu corpo é sua modara. Cuide-se!'

export default function CountdownTraining(props) {
    const history = useHistory()

    async function cancelTraining() {
        message.loading('Cancelando treino', 1).then(() => {
            history.push('/trainingTypes')
        })
        // try {
        //   await treinoCheckOut(props.location.state.treinoId);
        // } catch (error) {
        //   message.error("Erro ao cancelar o treino, tente novamente, 2);
        //   console.error(error);
        // }
    }

    const startTraining = () => {
        history.push('/midTraining')
    }

    return (
        <div style={{ height: '100%' }}>
            <Header img={true} name={true} icons={true} />
            <div className="CountdownTrainingContainer">
                <div className="DisplayTrainingType">
                    <h3>{trainingType}</h3>
                </div>
                <div className="MainContentContainer">
                    <div className="CountdownClock">
                        <h4>Seu treino começa em:</h4>
                        <Clock
                            startTime={
                                props.location.state.trainingTime.Horario
                            }
                            onFinish={startTraining}
                        />
                    </div>
                    <div className="MotivacionalPhrase">
                        <h4>&quot{phrase}&quot</h4>
                    </div>
                </div>
                <div className="ButtonContainer">
                    <button className="MarkoffButton">
                        <h4 onClick={cancelTraining}>DESMARCAR</h4>
                    </button>
                </div>
            </div>
        </div>
    )
}
