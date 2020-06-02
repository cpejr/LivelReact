import React, { Component, useState } from 'react'
import '../Profile.css'
import ReactDOM from 'react-dom';
import {BarChart} from 'react-easy-chart';
const render = ReactDOM.render;


//criando a barra recebendo % como props 
// link do gráfico: https://experience-experiments.github.io/react-easy-chart/bar-chart/index.html

const Bar = ({ percent }) => {
    return (
      <div className="bar" style={{ height: `${percent}%` }} />
    )
  }

  

export default function ChartResults(props){
    return(
        <div className="resultBars" style={{display: 'inline-block'}}>
              <BarChart
                  data={[
                    {x: 'pesoBefore', y: 20},
                    {x: 'pesoAfter', y: 30},
                    {x: 'cardioBefore', y: 40},
                    {x: 'cardioAfter', y: 20},
                    {x: 'gorduraBefore', y: 40},
                    {x: 'gorduraAfter', y: 25},
                    {x: 'forcaBefore', y: 5},
                    {x: 'forcaAfter', y: 5}
                  ]}
                    colorBars
                    height={150}
                    barWidth={40}
                    width={650}
                    margin={{top: 0, right: 0, bottom: 30, left: 100}}
                    yDomainRange={[5, 50]}
                />
        </div>
    )
}

// let thisData: 106330074359;
// let thisData: 32402945322;
// let thisData: 11864383092;
// let thisData: 9612908814;
// let thisData: 4644155391;
// let thisData: 4084424747;

//   <BarChart
//     colorBars
//     height={150}
//     width={650}
//     data={this.defaultData}
//     margin={{top: 0, right: 0, bottom: 30, left: 100}}
//   />

// class Chart extends React.Component{
//     state = {}
//     renderColumnBar(){
//         const { currentData } = this.props;

//         let sumOfAllcurrentData = currentData.reduce((acc, currency)
//       => {
//           return acc + currency.thisData;
//       }, 0);  

//         return currentData.map((currency) => {
//             const percent = (currency.thisData / sumOfAllcurrentData) * 100;
//         }
//         )
//         return(
//                 <div className="barContainer">
//                     { this.renderColumnBar() }
//                     <div className="forcachart">
//                         <ColumnBar percent={50} key={currency.currencyName} />
//                         <ColumnBar percent={20} key={currency.currencyName} />
//                     </div>
//                     <div className="cardiochart">
//                         <ColumnBar percent={10} key={currency.currencyName} />
//                         <ColumnBar percent={20} key={currency.currencyName} />
//                     </div>
//                     <div className="gordurachart">
//                         <ColumnBar percent={20} key={currency.currencyName} />
//                         <ColumnBar percent={20} key={currency.currencyName} />
//                     </div>
//                     <div className="pesochart">
//                         <ColumnBar percent={20} key={currency.currencyName} />
//                         <ColumnBar percent={20} key={currency.currencyName} />
//                     </div>
//                 </div>
//         )
//     }
// }

// class App extends React.Component{
//     state={
//         currentData: [
//             {
//               thisData: 106330074359
//             },
//             {
//               thisData: 32402945322
//             },
//             {
//               thisData: 11864383092
//             },
//             {
//               thisData: 9612908814
//             },
//             {
//               thisData: 4644155391
//             },
//             {
//               thisData: 4084424747
//             }
//           ]
//         }  
//         render () {
//             return (
//                 <div>
//                     <Chart 
//                     currentData={this.state.currentData}
//                     />
//                 </div>
//             )
//         }      
// }