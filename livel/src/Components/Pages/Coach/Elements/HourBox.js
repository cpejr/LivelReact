import React, { Component, useState } from "react";
import { useSpring } from "react-spring";
import Coachee from "./Coachee";
import Switch from "react-switch";

 const ALL_TIME = [
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
] 

const AVAILABLE_TIME = ["13:00", "14:00", "14:30", "15:00"];

const UNAVAILABLE_TIME = ["13:30"];

class ToggleButton extends Component {
    constructor() {
        super();
        this.state = {
            checked: false,
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(checked) {
        this.setState({ checked });
        this.props.setToggleOn();
    }
    render() {
        return (
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
        );
    }
}

function ToggleOffFunction(props) {
    return <div className="HourBoxIsOff" />;
}

function ToggleOnFunction(props) {
    return (
        <div className="HourBoxIsOn">
            <div className="coacheeContainerHourBox">
                <Coachee />
                {/* Algo ali */}
            </div>
        </div>
    );
}

export default function HourBox(props) {
    const [toggleOn, setToggleOn] = useState(false);

    const [horas_disp, setHorasDisp] = useState([]);

    const toggleOnAnimation = useSpring({
        opacity: toggleOn ? 1 : 0,
        transform: toggleOn ? `translateX(0)` : `translateX(100%)`,
    });



    return (

        <div className="divMother">
            <div className="eachContainer">
                {ALL_TIME.map((time, index) => {
                    return (
                        <div className="parent">
                            <div className="HourAndToggle">
                                <ToggleButton
                                    className={`toggle-button`}
                                    style={toggleOnAnimation}
                                    setToggleOn={() => {
                                        if (!horas_disp.includes(time)) {
                                            setHorasDisp((Antigo_array) => [
                                                ...Antigo_array,
                                                time,
                                            ]);
                                        } else {
                                            var array = [...horas_disp]; // make a separate copy of the array
                                            var index = array.indexOf(
                                                time
                                            );
                                            if (index !== -1) {
                                                array.splice(index, 1);
                                                
                                                setHorasDisp(array)
                                            }
                                        }
                                    }}
                                />
                                <div className="whatTimeIsIt">{time}</div>
                            </div>
                            <div className="isItOnorOff">
                                {horas_disp.includes(time)? ToggleOnFunction(): ToggleOffFunction()}
                                {console.log(horas_disp)}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// links de consulta:
// https://www.youtube.com/watch?v=SGrfLkW13_c
// https://github.com/markusenglund/react-switch

//https://www.youtube.com/watch?v=aaPkd91GDpI
