import React, { Component, useState } from 'react'
import Switch from 'react-switch'
import ReactDOM from 'react-dom';
const render = ReactDOM.render;

const ToggleButtonDo = styled.button`
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





class IsActive extends Component {
    constructor() {
        super()
        this.state = {
            checked: false

        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(checked) {
        this.setState({checked})
    }
    render() {
        return(
            <div>
                <Switch
                    className="react-switch"
                    onChange={this.handleChange}
                    checked={this.state.checked}

                    //when its off
                    offColor="#A991AA"
                    offHandleColor="#632467"
                    //when its on
                    onColor="#A991AA"
                    onHandleColor="#FFFFFF"

                    
                    handleDiameter={15}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    height={15}
                    width={35}

                />
            </div>
        )

    }
}

function toggleOnFunction (props){
    return (
        <div className="HourBoxIsOn">
            <div className="hourContainer">
                {UNAVAILABLE_TIME[0]}
            </div>
        </div>
    )
}

function toggleOffFunction (props){
    return (
        <div className="HourBoxIsOff">
            <div className="hourContainer">
                {AVAILABLE_TIME[0]}
            </div>
            <div className="coacheeContainerHourBox">
                <Coachee />
            </div>
        </div>
    )
}