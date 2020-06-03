import React from 'react'
import { Link } from 'react-router-dom';

import './MidTraining.css'
import Clock2 from '../Clock2/Clock2'
import Clock3 from '../Clock3/Clock3'
import Header from '../../../Header'

let ALUNO_INFO = {
    AlunoFoto: '/images/user.jpg',
    AlunoNome: 'Arthur Lima'
}

let time = {
    hour: 0,
    minutes: 5,
    seconds: 0,
    minutes2: 0,
    seconds: 10
}


export default function MidTraining() {

    return (
        
        <div style={{ height: "100%", }}>
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
                        5  min
                        </div>
                    </div>
                    <div className="counting">
                        <div> 
                        <Clock2 minute={5} hour={0} second={0}/>
                        </div>
                        </div>

                </div>
                <div className="block">
                <div className="boxbody">
                        <div className="boxtitle">
                            Pausa
                    </div>
                        <div className="countinginfo">
                            10 seg  
                        </div>
                    </div>
                    <div className="counting">
                        <div> 
                        <Clock2 minute={0} hour={0} second={10}/>
                        </div>
                        </div>

                </div>
                <div className="block">
                <div className="boxbody">
                        <div className="boxtitle">
                            Serie
                    </div>
                        <div className="countinginfo">
                            5 x
                        </div>
                    </div>
                    <div className="counting">
                        <div> 
                        2
                        </div>
                        </div>

                </div>
                <div className="playButton">
                   <button> <img src="images/playpause.png" alt="playpause"></img>
                   </button>
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