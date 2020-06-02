import React, { Component } from 'react'
import {FiCircle} from 'react-icons/fi';


import '../Profile.css'


let forca = 1.0;
let cardio = 0.0;
let peso = -2.0;
let gordura = 10.0;

export default function Results(props){
    return (
        <div className="ResultsContainer">
            <div className="resultsRow">

                <div className="ResultsBox">
                    <div className="boxHeader">FORÇA</div>
                    <a> = Abdominal + Flexão + Barra</a>
                    <CircleResults isPositive = {forca} />
                </div>


                <div className="ResultsBox">
                    <div className="boxHeader">CARDIO</div>
                    <a> Corrida / Caminhada</a>
                    <CircleResults isPositive = {cardio} />
                </div>
            </div>
            <div className="resultsRow">
                <div className="ResultsBox">
                    <div className="boxHeader">PESO</div>
                    <CircleResults isPositive = {peso} />
                </div>

                <div className="ResultsBox">
                    <div className="boxHeader">% GORDURA </div>
                    <CircleResults isPositive = {gordura} />
                </div>
                
            </div>
        </div>
    )
}


function CircleResults(props){
    const isPositive = props.isPositive;
    console.log(isPositive);
    return (
        <>
            {(isPositive >= 0.0)
                ? <FiCircle size={50} color="#06BFB8" stroke-width="1px" />
                : <FiCircle size={50} color="#FF818B" stroke-width="1px" />
            }
        </>
    );
}



