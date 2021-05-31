import React from 'react'
import { useHistory } from 'react-router-dom'

/* import {getCoach} from '../src/services/auth' */

import '../Coach.css'

export default function CoachHeader(props) {
    let history = useHistory()

    return (
        <>
            <div className="purpleLine" />

            <div className="HeaderContainer">
                <div className="coachBlock">
                    <img
                        src={props.data.ProfessorFoto}
                        alt="imagem coach"
                        className="imagemHeaderCoach"
                        onClick={() => history.push('/coachprofile')}
                    />
                    {/* clique na na imagem do coach leva pra /coachprofile*/}
                    <div className="coachInfo">
                        {props.position != null && (
                            <div className="positionCoach"> Coach</div>
                        )}

                        {props.name != null && (
                            <div className="nameCoach">
                                {' '}
                                {props.data.ProfessorNome}{' '}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
