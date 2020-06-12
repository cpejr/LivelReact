import React, {useState} from 'react'
import {treinoAvalia} from '../../../../services/backEnd'


import './MidTraining.css'
import Clock from './Clock/Clock'
import Header from '../../../Header'



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

    function advance(){
        try{
            const result = treinoAvalia(234, 5)
            console.log(result)
        }catch(error){
            alert(error)
        }
    }
 
    return (

        
        <div style={{ height: "100%", }}>
            <Header img={true} name={true} icons={true} />
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
                <button type="button" className="buttonAdvance" onClick={advance}>
                    <div>
                        AVANÇAR
                    </div>
                </button>
            </div>

        </div>
    )
}