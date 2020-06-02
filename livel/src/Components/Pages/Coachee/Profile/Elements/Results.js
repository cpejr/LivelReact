import React, { Component, useState } from 'react'
import {FiCircle} from 'react-icons/fi';
import ReactDOM from 'react-dom';
import {BarChart} from 'react-easy-chart';


import '../Profile.css'

const render = ReactDOM.render;



let forca = 1.0;
let cardio = 0.0;
let peso = -2.0;
let gordura = 10.0;


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



export default function Results(props){
    return (
        <div className="ResultsContainer">


            <div className="resultsRow">

                <div className="ResultsBox">
                    <div className="boxHeader">
                    FORÇA
                        <a> = Abdominal + Flexão + Barra</a>
                        <CircleResults isPositive = {forca} />
                        <div className="resultBars" style={{display: 'inline-block', position: 'absolute'}}>
                            <BarChart
                                data={[
                                    {x: 'forcaBefore', y: 5, color: '#C6BBCE'},
                                    {x: 'forcaAfter', y: 5, color: '#532166'}
                                ]}
                                    height={150}
                                    barWidth={40}
                                    width={650}
                                    margin={{top: 0, right: 0, bottom: 0, left: 100}}
                                    yDomainRange={[5, 50]}
                                />
                        </div>
                    </div>
                </div>

                <div className="ResultsBox">
                    <div className="boxHeader">
                    CARDIO
                            <a> Corrida / Caminhada</a>
                            <CircleResults isPositive = {cardio} />
                            <div className="resultBars" style={{display: 'inline-block', position: 'absolute'}}>
                                <BarChart
                                    data={[
                                        {x: 'cardioBefore', y: 40, color: '#C6BBCE'},
                                        {x: 'cardioAfter', y: 20, color: '#532166'},
                                    ]}
                                    height={150}
                                    barWidth={40}
                                    width={650}
                                    margin={{top: 0, right: 0, bottom: 0, left: 100}}
                                    yDomainRange={[5, 50]}
                                />
                        </div>
                    </div>
                </div>
                
            </div>


            <div className="resultsRow">

                <div className="ResultsBox">
                    <div className="boxHeader">
                        PESO
                        <CircleResults isPositive = {peso} />
                        <div className="resultBars" style={{display: 'inline-block', position: 'absolute'}}>
                            <BarChart
                                data={[
                                    {x: 'pesoBefore', y: 20, color: '#C6BBCE'},
                                    {x: 'pesoAfter', y: 30, color: '#532166'},
                                ]}
                                    height={150}
                                    barWidth={40}
                                    width={650}
                                    margin={{top: 0, right: 0, bottom: 0, left: 100}}
                                    yDomainRange={[5, 50]}
                                />
                        </div>
                    </div>
                </div>

                <div className="ResultsBox">
                    <div className="boxHeader">
                        % GORDURA 
                        <CircleResults isPositive = {gordura} />
                        <div className="resultBars" style={{display: 'inline-block', position: 'absolute'}}>
                            <BarChart
                                data={[
                                    {x: 'gorduraBefore', y: 20, color: '#C6BBCE'},
                                    {x: 'gorduraAfter', y: 30, color: '#532166'},
                                ]}
                                    height={150}
                                    barWidth={40}
                                    width={650}
                                    margin={{top: 0, right: 0, bottom: 0, left: 100}}
                                    yDomainRange={[5, 50]}
                                />
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}






