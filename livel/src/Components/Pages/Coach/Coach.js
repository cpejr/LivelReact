import React from 'react'

import './Coach.css'

// import {getCoach} from '../../../services/auth'

import HeaderCoach from './Elements/Header';
import HourBox from './Elements/HourBox';



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
