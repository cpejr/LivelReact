import React, { Component, useState } from 'react'
import ToggleSwitch from './ToggleSwitch';
import Coachee from './Coachee';
import ReactDOM from 'react-dom';
const render = ReactDOM.render;


const AvailableTime = ['13:00', '14:00', '14:30'];


export default function HourBox(props){
    return (
        <div className="thisHourBox">
            <div className="hourContainer">
                {AvailableTime[0]}
                <ToggleSwitch />
            </div>
            <div className="coacheeContainerHourBox">
                    <Coachee />
            </div>
        </div>
    )
}   