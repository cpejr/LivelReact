import React, { Component, useState } from 'react'
import { useSpring } from "react-spring";
import Coachee from './Coachee';
import Switch from 'react-switch'

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
        this.props.setToggleOn()
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

function ToggleOffFunction (props){
    return (
        <div className="HourBoxIsOff" />
    )
}

function ToggleOnFunction (props){
    return (
        <div className="HourBoxIsOn">
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
    })

    function teste(){
        setToggleOn(!toggleOn);
        console.log(toggleOn);
    }

    return (
        <div className="divMother" >
            <div className="eachContainer">
                {ALL_TIME.map(time =>
                {return(
                    <div className="parent">
                        <div className="HourAndToggle">
                            <ToggleButton
                            className="toggle-button"
                            style={toggleOnAnimation}
                            setToggleOn={teste}
                            />
                            <div className="whatTimeIsIt">
                                {time}
                            </div>
                        </div>
                        <div className="isItOnorOff">
                        {toggleOn ? ToggleOnFunction(time) : ToggleOffFunction(time) }
                        </div>
                    </div>
                    )
                    }
                )
            }
            </div>
        </div>
    );
  }
  


// links de consulta: 
// https://www.youtube.com/watch?v=SGrfLkW13_c
// https://github.com/markusenglund/react-switch

//https://www.youtube.com/watch?v=aaPkd91GDpI