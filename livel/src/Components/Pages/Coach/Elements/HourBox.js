import React, { useState } from 'react'
import {getCoach} from '../../../../services/auth'
import styled from 'styled-components'

import '../Coach.css'

const hourBoxContainer = styled.button`
    background: #E6E6E6;
    transition: ease border-bottom 250ms;
    border: 0;
    border-bottom: 2px solid transparent;
    outline: 0;
    cursor: pointer;
    text-align: center;
    width: 33%;
    font-size: 11px;
    font-family: sans-serif, Univers LT;
    font-stretch: condensed;
    color: #231F20;
    height: 100%;
    ${({ active}) =>
    active && 
    `
    font-size: 12px;
    font-family: sans-serif, Univers LT;
    font-stretch: condensed;
    font-weight: bold;
    color: #532166;
    background: white;
    border-bottom: 0.5mm solid purple;
    `
}
`;

let COACH_INFO = {
    CoachFoto: '/images/coach.jpg',
    CoachNome: 'Alemao',
    Position: 'coach',
    Hours: ('13:30', '14:00' ,'14:30'),
}

export default function HourBox(props){
    const [coach, setCoach] = useState(getCoach())
    return (
    < >
        <div className="hourBoxTotalContainer">
            <hourBoxContainer
                key ={"LastMonth"}
                active = {props.active === "LastMonth"}
                onClick={() => {props.setActive("LastMonth")}}
                > 
                    {lastMonth}
            </hourBoxContainer>
        </div>
    </>
    )
}