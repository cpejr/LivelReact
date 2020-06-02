import React, { Component } from 'react'
import {FiCircle} from 'react-icons/fi';
// import { Link } from 'react-router-dom';

import '../Profile.css'
// import { renderIntoDocument } from 'react-dom/test-utils';

let forca = 1.0;
let cardio = 0.0;
let peso = -2.0;
let gordura = 10.0;

export default function Results(props){
    return (
        <div className="ResultsContainer">
            <ul>

                <li className="ResultsForça">
                    <strong>FORÇA</strong>
                    <a> = Abdominal + Flexão + Barra</a>
                    <CircleResults isPositive = {forca} />
                </li>


                <li className="ResultsCardio">
                    <strong>CARDIO</strong>
                    <a> Corrida / Caminhada</a>
                    <CircleResults isPositive = {cardio} />
                </li>
            </ul>
            <ul>
                <li className="ResultsPeso">
                    <strong>PESO</strong>
                    <CircleResults isPositive = {peso} />
                </li>

                <li className="ResultsGordura">
                    <strong>% GORDURA </strong>
                    <CircleResults isPositive = {gordura} />
                </li>
                
            </ul>
        </div>
    )
}


function CircleResults(props){
    const isPositive = props.isPositive;
    console.log(isPositive);
    return (
        <div className="resultsCircle">
            {(isPositive >= 0.0)
                ? <FiCircle size={50} color="#06BFB8" stroke-width="1px" />
                : <FiCircle size={50} color="#FF818B" stroke-width="1px" />
            }
        </div>
    );
}



