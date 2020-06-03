import React, { Component, useState } from 'react'
import {FiCircle} from 'react-icons/fi';
import ReactDOM from 'react-dom';
import {BarChart} from 'react-easy-chart';


import '../Profile.css'


const render = ReactDOM.render;

let currentforca = 1.0;
let currentcardio = 1.0;
let currentpeso = 12.0;
let currentgordura = 12.0;

let lastforca = 0.1;
let lastcardio = 5.0;
let lastpeso = -5.0;
let lastgordura = 9.0;

let percentForca = (((currentforca)-(lastforca) / lastcardio) * 100).toFixed(0);
let percentCardio = ((lastcardio / currentcardio) * 100).toFixed(0);
let percentPeso = ((lastpeso / currentpeso) * 100).toFixed(0);
let percentGordura = ((lastgordura / currentgordura) * 100).toFixed(0);


function CircleResults(props){
    const isPositive = props.isPositive;
    console.log(isPositive);
    return (
        <div className="circleMove">
            {(isPositive >= 0.0)
                ? <FiCircle size={45} color="#06BFB8" stroke-width="1px" />
                : <FiCircle size={45} color="#FF818B" stroke-width="1px" />
            }
        </div>
    );
}


export class CurrentMonth extends React.Component {
    constructor() {
        super();
        var month = new Date(),
            thisMonth =  (month.getMonth()+1);

        this.state = {
            thisMonth: thisMonth
        };
    }
    render() {
        return (
            <div className='thisMonth'>
                {this.state.thisMonth}
            </div>
        );
    }
}


export class LastMonth extends React.Component {
    constructor() {
        super();
        var month = new Date(),
            lastMonth = (month.getMonth());

        this.state = {
            lastMonth: lastMonth
        };
    }
    render() {
        return (
            <div className='lastsMonth'>
                {this.state.lastMonth}
            </div>
        );
    }
}


export default function Results(props){

    return (
        
        <div className="ResultsContainer">

            <div className="resultsRow">

                <div className="ResultsBox">
                    <div className="boxHeader">
                    <div className="forcaTitle">FORÇA</div> 
                    <LastMonth />
                    <CurrentMonth />
                        <a className="forcaDescription"> = Abdominal + Flexão + Barra</a>
                        <CircleResults isPositive = {percentForca} />
                        <div className="percentType"> {percentForca}% </div>
                        <div className="resultBars" style={{display: 'inline-block', position: 'absolute'}}>
                            <div className="forcaMove">
                                <BarChart
                                    data={[
                                        {x: 'forcaBefore', y: percentForca, color: '#C6BBCE'},
                                        {x: 'forcaAfter', y: 150, color: '#532166'}
                                    ]}
                                        width={90}
                                        height={75}
                                        margin={{top: 0, right: 0, bottom: 0, left: 0}}
                                        yDomainRange={[0, 200]}
                                    />
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="ResultsBox">
                    <div className="boxHeader">
                    <div className="cardioTitle">CARDIO</div> 
                    <LastMonth />
                    <CurrentMonth />
                            <a className="cardioDescription"> Corrida / Caminhada</a>
                            <CircleResults isPositive = {percentCardio} />
                                <div className="percentType"> {percentCardio}% </div>
                            <div className="resultBars" style={{display: 'inline-block', position: 'absolute'}}>
                                <div className="cardioMove">
                                    <BarChart
                                        data={[
                                            {x: 'cardioBefore', y: 4000, color: '#C6BBCE'},
                                            {x: 'cardioAfter', y: 2000, color: '#532166'},
                                        ]}
                                        width={90}
                                        height={75}
                                        margin={{top: 0, right: 0, bottom: 0, left: 0}}
                                        yDomainRange={[0, 4000]}
                                    />
                                </div>
                        </div>
                    </div>
                </div>
                
            </div>


            <div className="resultsRow">

                <div className="ResultsBox">
                    <div className="boxHeader">
                        <div className="pesoTitle">PESO</div> 
                        <LastMonth />
                        <CurrentMonth />
                        <CircleResults isPositive = {percentPeso} />
                        <div className="percentType"> {percentPeso}% </div>
                        <div className="resultBars" style={{display: 'inline-block', position: 'absolute'}}>
                            <div className="pesoMove">
                                <BarChart
                                    data={[
                                        {x: 'pesoBefore', y: 120, color: '#C6BBCE'},
                                        {x: 'pesoAfter', y: 130, color: '#532166'},
                                    ]}
                                        width={90}
                                        height={75}
                                        margin={{top: 0, right: 0, bottom: 0, left: 0 }}
                                        yDomainRange={[0, 200]}
                                    />
                            </div>    
                        </div>
                    </div>
                </div>

                <div className="ResultsBox">
                    <div className="boxHeader">
                        <div className="gorduraTitle"> % GORDURA </div>
                        <LastMonth />
                        <CurrentMonth />
                        <CircleResults isPositive = {percentGordura} />
                        <div className="percentType"> {percentGordura}% </div>
                        <div className="resultBars" style={{display: 'inline-block', position: 'absolute'}}>
                            <div className="gorduraMove">
                                <BarChart
                                    data={[
                                        {x: 'gorduraBefore', y: 20, color: '#C6BBCE'},
                                        {x: 'gorduraAfter', y: 30, color: '#532166'},
                                    ]}
                                        width={90}
                                        height={75}
                                        margin={{top: 0, right: 0, bottom: 0, left: 0}}
                                        yDomainRange={[0, 40]}
                              />
                            </div>  
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}


//link do graficos com porcentagem https://www.fusioncharts.com/dev/getting-started/react/percentage-calculation-using-react

// link ensinando a usar react-easy-chart: https://experience-experiments.github.io/react-easy-chart/bar-chart/index.html

// link que pega o month https://stackoverflow.com/questions/43744312/react-js-get-current-date 


// let month = "Fevereiro";
// let lastMonth = "Janeiro";


        // var month = new Date().getMonth() + 1;
        // var lastMonth = new Date().getMonth();
        // console.log(month);
        // console.log(lastMonth);

// Month = () => {
//     var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
//     var now       = new Date();
//     var thisMonth = months[now.getMonth()]; // getMonth method returns the month of the date (0-January :: 11-December)
//     var output = document.getElementById('output');
//     console.log(thisMonth);

//     if(output.textContent !== undefined) {
//         output.textContent = thisMonth;
//     }
//     else {
//         output.innerText = thisMonth;
//     }
// }

// Month = () => {
//     const [startDate, setStartDate] = useState(
//       (new Date())
//     );
//     return (
//       <DatePicker
//         selected={startDate}
//         onChange={date => setStartDate(date)}
//         showTimeSelect
//         dateFormat="MMMM"
//       />
//     );
//   };

// class Months extends React.Component {  
//     constructor(props) {
//         super(props);
//         this.state = {
//         month = new Date().getMonth() + 1,
//         lastMonth = new Date().getMonth()
//         };
//       }
//     handleMonth(){  
//       console.log(this.lastMonth);  
//       console.log(this.month);  
//     }  
//     render() {
//         return (
//           <div class="date">
//             <p> ddd {this.state.date}</p>
//           </div>
//         );
//       }
//     }


// function getMonths(props){
//     constructor(props) {
//         super(props);
//         // Don't call this.setState() here!
//         this.state = { counter: 0 };
//         this.handleClick = this.handleClick.bind(this);
//       }
//       }
    

// class Months extends React.Component {
//     state = {
//         date: ""
//     };
        
//     getDate() {
//         var month = new Date().getMonth() + 1;
//         var lastMonth = new Date().getMonth();
//         this.setState({ month });
//         this.setState({ lastMonth });
//     }
      
//     render() {
//     return (
//         <div class="date">
//             <p> ddd {this.state.month}</p>
//         </div>
//           );
//         }
// }

// var month = new Date().getMonth() + 1;
// var lastMonth = new Date().getMonth();

//(function() {
    //     var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    //     Date.prototype.getMonthName = function() {
    //         return months[ this.getMonth() ];
    //     };
    // })();
    
    //     var now = new Date();
    //     var month = now.getMonthName();
    
// function decidingPercentForca(props){
// //     if(currentforca>=lastforca){
// //       let percentForca = ((currentforca)-(lastforca) / lastcardio) * 100);
// //     }
// //     else if(currentforca<lastforca){
// //         let percentForca = ((currentforca)-(lastforca) / lastcardio) * 100);
// //     }
// // }