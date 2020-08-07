import React, { Component, useState } from "react";
import { useSpring } from "react-spring";
import Coachee from "./Coachee";
import Switch from "react-switch";
import { SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';


/* Vermelho do coach: 
HEX : #ff7878
RGB : 34, 20, 43
HSL : 276, 36%, 12% 
*/
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

function Swipe(){
    return(
    <SwipeableList className = "swipeList">
    <SwipeableListItem
        swipeLeft={{
  content: <div>Revealed content during swipe</div>,
  action: () => console.info('swipe action triggered')
        }}
        swipeRight={{
    content: <div>Revealed content during swipe</div>,
    action: () => console.info('swipe action triggered')
}}
onSwipeProgress={progress => console.info(`Swipe progress: ${progress}%`)}>
    <div> Escreva aqui </div>
</SwipeableListItem>
</SwipeableList>)
   

}


export default function Body(props) {
    return (
        <div className="divMother">
            {props.data.Horarios.map((time, index) => (
                <HourBox key={index} time_info={time} />
            ))}
        </div>
    );
}

function HourBox(props) {
    const [toggleOn, setToggleOn] = useState(false);


    const toggleOnAnimation = useSpring({
        opacity: toggleOn ? 1 : 0,
        transform: toggleOn ? `translateX(0)` : `translateX(100%)`,
    });

    const colors = [ {backgroundColor:'#ff7878',color:'#fff'} , { color:'#632467'} ]

    return (
        <div className="eachContainer" style={toggleOn?colors[1]:colors[0]}>
            <div className="parent">
                <div className="HourAndToggle" >
                    <ToggleButton
                        className={`toggle-button`}
                        style={toggleOnAnimation}
                        setToggleOn={()=>(setToggleOn(!toggleOn))}
                        
                    />
                    <div className="whatTimeIsIt">
                        {props.time_info.Horario}
                    </div>
                </div>
                <div className="isItOnorOff">
                    {props.time_info.Horario_Treinos.map((person, index) => (
                            toggleOn &&
                        <Coachee key={index}  data={person}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

// links de consulta:
// https://www.youtube.com/watch?v=SGrfLkW13_c
// https://github.com/markusenglund/react-switch

//https://www.youtube.com/watch?v=aaPkd91GDpI
