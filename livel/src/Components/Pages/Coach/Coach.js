import React from 'react'

import './Coach.css'

// import {getCoach} from '../../../services/auth'

import HeaderCoach from './Elements/Header';
import HourBox from './Elements/HourBox';


/* ######################################
Família Peraaaaaa
    Tem 3 arquivos que estão mexendo com o toggle, o coach,
    o Hourbox e o COachee.

    Pelo que eu vi até agora o problema tá no arquivo Coachee.js, dessa pasta.
    O return All coaches nao coloca um 'if', aí ele retorna tudo ou nada.
    
#######################################
 */
export default function Coach(){
    return(
    < >
    <div className="completeBody">
        
        <div className="headerContainer">
            <HeaderCoach img={true} name={true} position={true}/>
        </div>
        
        <HourBox />
        {/* <Coachee active={active} setActive={setActive} /> */}
    </div>
    </>
    )

}
