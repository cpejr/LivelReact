import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import './MidTraining.css'
import Clock from './Clock/Clock'
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
    seconds2: 10
}


export default function MidTraining() {
    const [serie, setserie] = useState(1);
    const [active, setActive] = useState({
        paused: true,
        clock: 'training'
    });

    function changeActive(value){
        if (value==='rest') {
            setActive({
                paused: active.paused,
                clock: 'training'
            })
            setserie(serie+1)
        }
        else if (value==='training') {
            setActive({
                paused: active.paused,
                clock: 'rest'
            })
        }
        else if (value==='paused') {
            console.log(active)
            setActive({
                paused: !active.paused,
                clock: active.clock
            })
        }
    };
 
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
                        <Clock
                            seconds={5}
                            active={()=>{
                                if((active.clock==='training') && !(active.paused)) {console.log('Clock 1: true'); return true}
                                else {console.log('Clock 1: false'); return false}
                            }}
                            clockId = {'training'}
                            changeActive={changeActive}
                        />
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
                        <Clock seconds={5} 
                            active={()=>{
                                if((active.clock==='rest') && !(active.paused)) {console.log('Clock 2: true'); return true}
                                else {console.log('Clock 2: false'); return false}
                            }}
                            clockId = {'rest'}
                            changeActive={changeActive}
                        />
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
                        {serie  }
                        </div>
                        </div>

                </div>
                <div className="playButton">
                   <button onClick={()=>{changeActive('paused')}}> 
                        <img src="images/playpause.png" alt="playpause"></img>
                   </button>
                </div>

            </div>
            <div className="footer">
                <Link type="button" to="/requestnumber" className="buttonAdvance" >
                    <div>
                        AVANÇAR
                    </div>
                </Link>
            </div>

        </div>
    )
}