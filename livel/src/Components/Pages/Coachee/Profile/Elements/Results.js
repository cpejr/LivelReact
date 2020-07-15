import React from 'react'
import {FiCircle} from 'react-icons/fi';
import {BarChart} from 'react-easy-chart';


import '../Profile.css'


let currentforca = 180.0;
let currentcardio = 3000.0;
let currentpeso = 159.0;
let currentgordura = 25.0;

let lastforca = 90.0;
let lastcardio = 4000.0;
let lastpeso = 190.0;
let lastgordura = 40.0;

let percentForca = ((((currentforca)-(lastforca) )/ lastforca) * 100).toFixed(0);
let percentCardio = ((((currentcardio)-(lastcardio)) / lastcardio) * 100).toFixed(0);
let percentPeso = ((((currentpeso)-(lastpeso)) / lastpeso) * 100).toFixed(0);
let percentGordura = ((((currentgordura)-(lastgordura)) / lastgordura) * 100).toFixed(0);

function StyleForcaPercent(props){
    const isPositive = props.isPositive;
    return (
        <div className="percentMove">
            {(isPositive >= 0.0)
                ? <div style={{color:"#06BFB8"}}>{ percentForca }%</div>
                : <div style={{color:"#FF818B"}}>{ percentForca }%</div>
            }
        </div>
    );
}

function StyleCardioPercent(props){
    const isPositive = props.isPositive;
    return (
        <div className="percentMove">
            {(isPositive >= 0.0)
                ? <div style={{color:"#06BFB8"}}>+{ percentCardio }%</div>
                : <div style={{color:"#FF818B"}}>{ percentCardio }%</div>
            }
        </div>
    );
}

function StylePesoPercent(props){
    const isPositive = props.isPositive;
    return (
        <div className="percentMove">
            {(isPositive >= 0.0)
                ? <div style={{color:"#06BFB8"}}>+{ percentPeso }%</div>
                : <div style={{color:"#FF818B"}}>{ percentPeso }%</div>
            }
        </div>
    );
}

function StyleGorduraPercent(props){
    const isPositive = props.isPositive;
    return (
        <div className="percentMove">
            {(isPositive >= 0.0)
                ? <div style={{color:"#06BFB8"}}>+{ percentGordura }%</div>
                : <div style={{color:"#FF818B"}}>{ percentGordura }%</div>
            }
        </div>
    );
}


function CircleResults(props){
    const isPositive = props.isPositive;
    return (
        <div className="circleMove">
            {(isPositive >= 0.0)
                ? <FiCircle size={45} color="#06BFB8" stroke-width="1px" />
                : <FiCircle size={45} color="#FF818B" stroke-width="1px" />
            }
        </div>
    );
}

const monthNames = ["Dez","Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul", "Ago", "Set", "Out", "Nov", "Dez"];

export class CurrentMonth extends React.Component {
    constructor() {
        super();
        const month = new Date(),
            thisMonth =  monthNames[month.getMonth()+1];

        this.state = {
            thisMonth: thisMonth
        };
    }
    render() {
        return (
            <div className="thisMonth">
                {this.state.thisMonth}
            </div>
        );
    }
}


export class LastMonth extends React.Component {
    constructor() {
        super();
        const month = new Date(),
            lastMonth = monthNames[month.getMonth()];

        this.state = {
            lastMonth: lastMonth
        };
    }
    render() {
        return (
            <div className="lastsMonth">
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
                    <div className="lastMonthStyle">
                        <LastMonth />
                    </div> 
                    <div className="thisMonthStyle">
                        <CurrentMonth />
                    </div> 
                        <div className="forcaDescription"> = Abdominal + Flexão + Barra</div>
                        <CircleResults isPositive = {percentForca} />
                        <StyleForcaPercent isPositive = {percentForca} className="percentType" />
                        <div className="resultBars" style={{display: 'inline-block', position: 'absolute'}}>
                            <div className="forcaMove">
                                <BarChart
                                    data={[
                                        {x: 'forcaBefore', y: lastforca, color: '#C6BBCE'},
                                        {x: 'forcaAfter', y: currentforca, color: '#532166'}
                                    ]}
                                        width={90}
                                        height={75}
                                        margin={{top: 0, right: 0, bottom: 0, left: 0}}
                                        yDomainRange={[0, 200]}
                                    />
                                <div className="currentAmount"> {currentforca} </div>
                                <div className="lastAmount"> {lastforca} </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="ResultsBox">
                    <div className="boxHeader">
                    <div className="cardioTitle">CARDIO</div> 
                    <div className="lastMonthStyle">          
                        <LastMonth />
                    </div> 
                    <div className="thisMonthStyle">   
                        <CurrentMonth />
                    </div> 
                            <div className="cardioDescription"> Corrida / Caminhada</div>
                            <CircleResults isPositive = {percentCardio} />
                            <StyleCardioPercent isPositive = {percentCardio} className="percentType" />
                            <div className="resultBars" style={{display: 'inline-block', position: 'absolute'}}>
                                <div className="cardioMove">
                                    <BarChart
                                        data={[
                                            {x: 'cardioBefore', y: lastcardio, color: '#C6BBCE'},
                                            {x: 'cardioAfter', y: currentcardio, color: '#532166'},
                                        ]}
                                        width={90}
                                        height={75}
                                        margin={{top: 0, right: 0, bottom: 0, left: 0}}
                                        yDomainRange={[0, 4000]}
                                    />
                                    <div className="currentAmount"> {currentcardio}m </div>
                                    <div className="lastAmount"> {lastcardio}m </div>
                                </div>
                        </div>
                    </div>
                </div>
                
            </div>


            <div className="resultsRow">

                <div className="ResultsBox">
                    <div className="boxHeader">
                        <div className="pesoTitle">PESO</div> 
                        <div className="lastMonthStyle">   
                            <LastMonth />
                        </div> 
                        <div className="thisMonthStyle">   
                            <CurrentMonth />
                        </div> 
                        <CircleResults isPositive = {percentPeso} />
                        <StylePesoPercent isPositive = {percentPeso} className="percentType" />
                        <div className="resultBars" style={{display: 'inline-block', position: 'absolute'}}>
                            <div className="pesoMove">
                                <BarChart
                                    data={[
                                        {x: 'pesoBefore', y: lastpeso, color: '#C6BBCE'},
                                        {x: 'pesoAfter', y: currentpeso, color: '#532166'},
                                    ]}
                                        width={90}
                                        height={75}
                                        margin={{top: 0, right: 0, bottom: 0, left: 0 }}
                                        yDomainRange={[0, 200]}
                                    />
                                    <div className="currentAmount"> {currentpeso}kg </div>
                                    <div className="lastAmount"> {lastpeso}kg </div>
                            </div>    
                        </div>
                    </div>
                </div>

                <div className="ResultsBox">
                    <div className="boxHeader">
                        <div className="gorduraTitle"> % GORDURA </div>
                        <div className="lastMonthStyle">
                            <LastMonth />
                        </div>
                        <div className="thisMonthStyle">
                            <CurrentMonth />
                        </div>
                        <CircleResults isPositive = {percentGordura} />
                        <StyleGorduraPercent isPositive = {percentGordura} className="percentType" />
                        <div className="resultBars" style={{display: 'inline-block', position: 'absolute'}}>
                            <div className="gorduraMove">
                                <BarChart
                                    data={[
                                        {x: 'gorduraBefore', y: lastgordura, color: '#C6BBCE'},
                                        {x: 'gorduraAfter', y: currentgordura, color: '#532166'},
                                    ]}
                                        width={90}
                                        height={75}
                                        margin={{top: 0, right: 0, bottom: 0, left: 0}}
                                        yDomainRange={[0, 40]}
                              />
                                <div className="currentAmount"> {currentgordura}% </div>
                                <div className="lastAmount"> {lastgordura}% </div>
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
