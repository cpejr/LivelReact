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
    seconds: 10
}


export default function MidTraining() {
    const [time1, settime1] = useState(3);
    const [time2, settime2] = useState(3);
    const [serie, setserie] = useState(1);
    const [Playpause, setPlaypause] = useState(false);
    const [state, setstate] = useState(true);
    function handleButton(){
        setPlaypause(!Playpause)
    };

    function changestate(){
        console.log(time1, time2, Playpause, state);
        if(state==false){
            settime2(15)
            setstate(true)
            setserie(serie+1)
        } else if (state==true){
            settime1(15)
            setstate(false)

        }
        console.log(time1, time2, Playpause, state);
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
                        <Clock seconds={time1} state={Playpause} state2={state} function={changestate}/>
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
                        <Clock seconds={time2} state={Playpause} state2={!state} function={changestate}/>
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
                   <button onClick={handleButton}> <img src="images/playpause.png" alt="playpause"></img>
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