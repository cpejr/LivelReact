import React, { Component, useState } from 'react'
import ToggleSwitch from './ToggleSwitch';
import Coachee from './Coachee';
import ReactDOM from 'react-dom';
const render = ReactDOM.render;


class CompatibleHours extends Component{
    render(){
        let AVAILABLE_TIME = ['13:00', '14:00', '14:30'];
        let DAY_HOURS = ['13:00', '13:30', '14:00', '14:30', '15:00', '15:30'];
        let compatible = [];
        let incompatible = [];
        do{
        for(let i=0; i<20; i++){
            var num = AVAILABLE_TIME[i];
                for(let j=0; j<20; j++){
                    if(num==DAY_HOURS[j]){
                        for(let k=0; k<20; k++){
                            if (num !=compatible[k]){
                                var compatibleNumber = num;
                            }
                            compatible.push(compatibleNumber);
                        }
                    }
                    else{
                        for(let k=0; k<20; k++){
                            if (num !=compatible[k]){
                                if(num!=incompatible){
                                    var incompatibleNumber = num; 
                                    incompatible.push(incompatibleNumber);
                                }
                            }

                            else {
                            }
                        }
                    }
                }
      }
    }
    while(i=<AVAILABLE_TIME.length);
      return incompatible;
    }
  }

  export default function HourBox(props){
    return (
                <div className="thisHourBox">
                    <CompatibleHours />
                </div>
    )
}

















// export default function HourBox(props){
//     return (
//         <div className="thisHourBox">
//             <div className="hourContainer">
//                 {AvailableTime[0]}
//                 <ToggleSwitch />
//             </div>
//             <div className="coacheeContainerHourBox">
//                     <Coachee />
//             </div>
//         </div>
//     )
// }   