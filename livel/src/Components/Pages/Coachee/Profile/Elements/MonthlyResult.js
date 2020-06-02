import React, { Component, useState } from 'react'
import '../Profile.css'
import ReactDOM from 'react-dom';
const render = ReactDOM.render;

let peso = '80 kg';
let gordura = '15.5 %';
let alongamento = 'média';
let altura = '1,79 m';
let corrida = '2 km';
let abdominal = '30';
let flexao = '20';
let barra = '5';
            
let tempoCorrida = '10`';
let tempoAbdominal = '1`';
let tempoFlexao = '1`';

const quadril = {
    value: '30 cm',
    description: 'quadril',
    bottom: '26.5%',
    left: '77%',
}
const coxa = {
    value: '30 cm',
    description: 'coxa',
    left: '35%',
    bottom: '28.5%',
}
const cintura = {
    value: '30 cm',
    description: 'cintura',
    bottom: '35%',
    left: '34%',
}
const pescoco = {
    value: '30 cm',
    description: 'pescoço',
    left: '33%',
    bottom: '43.5%',
}
const biceps = {
    value: '30 cm',
    description: 'bíceps',
    left: '77%',
    bottom: '44.3%',
}


function descriptionStyle(style_bottom, style_left){
    return {
        bottom: style_bottom,
        left: style_left,
        position: 'absolute',
        fontSize: '8px',
        fontFamily: 'sans-serif, Univers LT',
        fontStretch: 'condensed',
        color: '#676767',
        fontWeight: 'bold',
    }
}




const bodySubtitles = [quadril, coxa, cintura, pescoco, biceps];


const BodyResult= {img:'/images/profile/body.png'}; 


const Abdominais = {img:'/images/profile/abdominais.png', 
                    // top: '63%',
                    // left: '80%',
                    // width: '10%',
                    value: abdominal,
                    time: {tempoAbdominal}, 
                    }; 
const Alongamento = {img:'/images/profile/alongamento.png', 
                    // top: '80%',
                    // left: '25%',
                    // width: '9%',
                    value: alongamento,
                }; 
const Altura =      {img:'/images/profile/altura.png', 
                    // top: '94%',
                    // left: '25%',
                    // width: '9%',
                    value: altura,
                }; 
const Barra =       {img:'/images/profile/barra.png', 
                    // top: '85%',
                    // left: '80%',
                    // width: '9%',
                    value: barra,
                }; 
const Corrida =     {img:'/images/profile/corrida.png', 
                    // top: '53%',
                    // left: '80%',
                    // width: '10%',
                    value: corrida,
                    time: tempoCorrida,
                }; 
const Peso =        {img:'/images/profile/peso.png', 
                    // top: '53%',
                    // left: '25%',
                    // width: '9%',
                    value: peso,
                }; 
const Flexao =      {img:'/images/profile/flexoes.png', 
                    // top: '74%',
                    // left: '80%',
                    // width: '10%',
                    value: flexao,
                    time: tempoFlexao,
                }; 
const Gordura =     {img:'/images/profile/porcentagemGordura.png', 
                    // top: '66%',
                    // left: '25%',
                    // width: '9%',
                    value: gordura,
                }; 
const LittlePurple = {img:'/images/profile/littlePurpleLine.png', 
                    // top: '54%',
                    // left: '70%',
                    // width: '0.6%',
                };

const BigPurple = { img:'/images/profile/PurpleLine.png', 
                    // top: '77%',
                    // left: '75%',
                    // width: '12%',
                };




const listaLeft = [Alongamento, Altura, Peso, Gordura, ];
const listaRight = [Corrida, Abdominais, Flexao, Barra,]


function partStyle(style_top, style_left, style_width){
    return {
        position: 'absolute',
        top: style_top,
        left: style_left,
        width: style_width,
        transform: 'translate(-50%, -50%)',
        height: 'auto',
        fontSize: '55px',
        textAlign: 'center'
    }
}


class MonthlyResultImages extends Component {
    render() {
        return (
        <>
            <div className="imagesContainer">
                {/* parte de cima */}
                <div style={{position: "relative"}} >
                    <img src={BodyResult.img} className="BodyResultClass" />
                    { bodySubtitles.map(part => {
                        return (
                            <div style={descriptionStyle(part.bottom, part.left)} >
                                <div className="valueSubtitles">
                                    {part.value}
                                </div>
                                <div>
                                    {part.description}
                                </div>  
                            </div>
                        )
                    }

                    )}
                </div>
                {/* parte de baixo */}
                <div style={{display: "flex", height:"40%"}}>
                    <ul className="LeftList"> 
                        {listaLeft.map(left =>{
                            return(
                                <li className="leftIcons">
                                    <img className="iconList" src={left.img} />
                                    <div className="valueList">
                                        {left.value}
                                    </div>
                                </li>
                            )
                        }

                        )}

                    </ul>
                    <ul className="RightList">

                    </ul>

                </div>
            </div>
        </>
        );
    }
}



export default function MonthlyResult(props){
    return (
            <div className="BodyResultContainer">
                <MonthlyResultImages />      
 
            </div> 
    )
}    
