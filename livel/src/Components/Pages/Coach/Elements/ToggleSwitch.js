import React, { Component, useState } from 'react'
import Switch from 'react-switch'
import ReactDOM from 'react-dom';
const render = ReactDOM.render;

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


export default function ToggleSwitch(props){
    return (
            < >
                <ToggleButton />
            </> 
    )
}   

// links de consulta: 
// https://www.youtube.com/watch?v=SGrfLkW13_c
// https://github.com/markusenglund/react-switch

{/* <p>this switch is <b>{this.state.checked ? 'on' : 'off'}</b></p> */}

