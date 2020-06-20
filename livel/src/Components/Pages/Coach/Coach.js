import React, {useState} from 'react'
import {Link} from 'react-router-dom'


import './Coach.css'

// import {getCoach} from '../../../services/auth'

import HeaderCoach from './Elements/Header';
import HourBox from './Elements/HourBox';
// import Coachee from './Elements/Coachee';



export default function Coach(){
    return(
    < >
    <div className="completeBody">
        
        <div className="headerContainer">
            <HeaderCoach img={true} name={true} position={true}/>
        </div>
        
        <HourBox />
    </div>
    </>
    )

}
