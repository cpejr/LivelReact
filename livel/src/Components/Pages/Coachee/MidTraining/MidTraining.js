import React from 'react'
import { Link } from 'react-router-dom';

import './MidTraining.css'

import Header from '../../../Header'

let ALUNO_INFO = {
    AlunoFoto: '/images/user.jpg',
    AlunoNome: 'Arthur Lima'
}




export default function MidTraining() {

    return (
        <div style={{ height: "100%" }}>
            <Header img={ALUNO_INFO.AlunoFoto} name={ALUNO_INFO.AlunoNome} icons={true} />
            <div className="info">
                <div className="titlee">
                    TREINO INFERIOR
                </div>
                <div className="timeinfo">
                    <div className="finalization">Finalização:</div><div className="time1">15:30:</div> <div className="time2">59</div>
                </div>
            </div>
            <div className="bodyy">
                <div className="block">
                    <div className="boxbody">
                        <div className="boxtitle">
                            Atividade
                    </div>
                        <div className="countinginfo">
                            5 Min
                        </div>
                    </div>
                    <div className="counting">
                        <div> 
                        05:00
                        </div>
                        </div>

                </div>
                <div className="block">
                <div className="boxbody">
                        <div className="boxtitle">
                            Atividade
                    </div>
                        <div className="countinginfo">
                            5 Min
                        </div>
                    </div>
                    <div className="counting">
                        <div> 
                        05:00
                        </div>
                        </div>

                </div>
                <div className="block">
                <div className="boxbody">
                        <div className="boxtitle">
                            Atividade
                    </div>
                        <div className="countinginfo">
                            5 Min
                        </div>
                    </div>
                    <div className="counting">
                        <div> 
                        05:00
                        </div>
                        </div>u

                </div>
                <div className="playButton">
                    <img src="images/playpause.png" alt="playpause"></img>
                </div>

            </div>
            <div className="footer">
                <Link type="button" to="/requestnumber" className="buttonAdvance">
                    <div>
                        AVANÇAR
                </div>
                </Link>
            </div>

        </div>
    )
}