import React, { useState } from 'react'
/* import {getCoach} from '../../../../services/auth' */

import '../Coach.css'


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
