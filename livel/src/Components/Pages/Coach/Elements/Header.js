import React, { useState } from 'react'
import {getCoach} from '../../../../services/auth'

import '../Coach.css'


let COACH_INFO = {
    CoachFoto: '/images/Coach/coach.jpg',
    CoachNome: 'Alemao',
    Position: 'coach',
    Hours: ('13:30', '14:00' ,'14:30'),
}

export default function CoachHeader(props){

    return (
    < >
        <div className="purpleLine" />
        
        <div className="HeaderContainer">
            <div className="coachBlock">
            <img src={props.data.ProfessorFoto} alt="imagem coach" className="imagemHeaderCoach" />

                <div className="coachInfo">
                    {(props.position!=null) &&
                        <div className="positionCoach"> Coach</div>
                    }

                    {(props.name!=null) &&
                        <div className="nameCoach"> {props.data.ProfessorNome} </div>
                    }
                </div>
            </div>
        </div>
    </>
    )
}
