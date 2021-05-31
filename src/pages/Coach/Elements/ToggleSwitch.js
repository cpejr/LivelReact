import React, { Component } from "react";
import Switch from "react-switch";
import ReactDOM from "react-dom";
const render = ReactDOM.render;

class IsActive extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(checked) {
    this.setState({ checked });
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

function toggleOnFunction(props) {
  return (
    <div className="HourBoxIsOn">
      <div className="hourContainer">{UNAVAILABLE_TIME[0]}</div>
    </div>
  );
}

function toggleOffFunction(props) {
  return (
    <div className="HourBoxIsOff">
      <div className="hourContainer">{AVAILABLE_TIME[0]}</div>
      <div className="coacheeContainerHourBox">
        <Coachee />
      </div>
    </div>
  );
}
