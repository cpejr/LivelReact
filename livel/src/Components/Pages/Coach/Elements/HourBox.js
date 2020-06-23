import React, { Component, useState } from 'react'
import { useSpring } from "react-spring";
import Coachee from './Coachee';
import Switch from 'react-switch'
import styled from 'styled-components'
import ReactDOM from 'react-dom';
const render = ReactDOM.render;

const ALL_TIME = [
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
]


const AVAILABLE_TIME = [
    '13:00',
    '14:00',
    '14:30',
    '15:00',
]

const UNAVAILABLE_TIME = [
    '13:30',
]


class ToggleButton extends Component {
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

export default function HourBox(props){
    const [toggleOn, setToggleOn] = useState(false);
    
    const toggleOnAnimation = useSpring({
      opacity: toggleOn ? 1 : 0,
      transform: toggleOn ? `translateX(0)` : `translateX(100%)`
    });
    return (
    <div className="divMother" >

        <div className="App">
            <ToggleButton
            className="toggle-button"
            onClick={() => setToggleOn(!toggleOn)}
            style={toggleOnAnimation}
            />
        </div>
        {toggleOn ? toggleOnFunction(props) : toggleOffFunction(props)}
      </div>
    );
  }
  

// export default function HourBox(props){
//     return (
//         <div className="thisHourBox">
//             <div className="hourContainer">
//                 {AVAILABLE_TIME[0]}
//                 <setActiveOrNot />
//             </div>
//             <div className="coacheeContainerHourBox">
//                     <Coachee />
//             </div>
//         </div>
//     )
// }   


// links de consulta: 
// https://www.youtube.com/watch?v=SGrfLkW13_c
// https://github.com/markusenglund/react-switch

{/* <p>this switch is <b>{this.state.checked ? 'on' : 'off'}</b></p> */}