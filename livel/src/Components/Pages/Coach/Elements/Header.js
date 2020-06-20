import React, { useState } from 'react'
import {getCoach} from '../../../../services/auth'

import '../Coach.css'


let COACH_INFO = {
    CoachFoto: '/images/coach.jpg',
    CoachNome: 'Alemao',
    Position: 'coach',
    Hours: ('13:30', '14:00' ,'14:30'),
}

export default function CoachHeader(props){
    const [coach, setCoach] = useState(getCoach())
    return (
    < >
        <div className="purpleLine" />
        
        <div className="HeaderContainer">
            <div className="coachBlock">
            <img src={COACH_INFO.CoachFoto} alt="imagem coach" className="imagemHeaderCoach" />
                <div className="coachInfo">
                    {(props.position!=null) &&
                        <div className="positionCoach"> {COACH_INFO.Position} </div>
                    }

                    {(props.name!=null) &&
                        <div className="nameCoach"> {COACH_INFO.CoachNome} </div>
                    }
                </div>
            </div>
        </div>
    </>
    )
}
