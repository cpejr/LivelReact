import React, { Component, useState } from 'react'
import '../Profile.css'
import ReactDOM from 'react-dom';
const render = ReactDOM.render;

let peso = '180 kg';
let gordura = '19.5 %';
let alongamento = 'bom';
let altura = '1,20 m';
let corrida = '0 km';
let abdominal = '130';
let flexao = '120';
let barra = '50';
            
let tempoCorrida = '10`';
let tempoAbdominal = '1`';
let tempoFlexao = '1`';

let score = '55';

const biceps = {
    value: '40 cm',
    description: 'bíceps',
    bottom: '73%',
    left: '79%',
}
const coxa = {
    value: '120 cm',
    description: 'coxa',
    left: '24.5%',
    bottom: '35.5%',
}
const cintura = {
    value: '130 cm',
    description: 'cintura',
    bottom: '58.5%',
    left: '24.5%',
}
const pescoco = {
    value: '10 cm',
    description: 'pescoço',
    left: '24.5%',
    bottom: '80.5%',
}
const quadril = {
    value: '10 cm',
    description: 'quadril',
    left: '79%',
    bottom: '49.5%',
}


function descriptionStyle(style_bottom, style_left){
    return {
        bottom: style_bottom,
        left: style_left,
        position: 'absolute',
        fontSize: '9px',
        fontFamily: 'sans-serif, Univers LT',
        fontStretch: 'condensed',
        color: '#676767',
        fontWeight: 'bold',
    }
}




const bodySubtitles = [quadril, coxa, cintura, pescoco, biceps];


const BodyResult= {img:'/images/profile/body.png'}; 


const Abdominais = {img:'/images/profile/abdominais.png', 
                    value: abdominal,
                    time: '('+ tempoAbdominal + ')', 
                }; 
const Alongamento = {img:'/images/profile/alongamento.png', 
                    value: alongamento,
                }; 
const Altura =      {img:'/images/profile/altura.png',                    
                    value: altura,
                }; 
const Barra =       {img:'/images/profile/barra.png',                           
                    value: barra,
                }; 
const Corrida =     {img:'/images/profile/corrida.png',                     
                    value: corrida,
                    time: '('+ tempoCorrida + ')',
                }; 
const Peso =        {img:'/images/profile/peso.png',                    
                    value: peso,
                }; 
const Flexao =      {img:'/images/profile/flexoes.png',                     
                    value: flexao,
                    time: '('+ tempoFlexao+ ')',
                }; 
const Gordura =     {img:'/images/profile/porcentagemGordura.png',                    
                    value: gordura,
                }; 
const LittlePurple = {img:'/images/profile/purpleline.png', 
                };

const BigPurple = { img:'/images/profile/purpleL.png', 
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
                        <div className="thePurples">
                            <img className="bigPurple" src={BigPurple.img} />
                            <img className="littlePurple" src={LittlePurple.img} />
                            <div className="purpleScore">Score total:</div>
                            <div className="purpleScoreAmount">{score}</div>
                        </div>
                    {listaRight.map(right =>{
                            return(
                                <li className="rightIcons">
                                    <img className="iconList" src={right.img} />
                                    <div className="valueList">
                                        {right.value}
                                    </div>
                                    <div className="timeSubtitles">
                                         {right.time} 
                                    </div>
                                </li>
                            )
                        }

                        )}

                    </ul>

                </div>
            </div>
        </>
        );
    }
}



export default function CurrentMonthResult(props){
    return (
            <div className="BodyResultContainer">
                <MonthlyResultImages /> 
 
            </div> 
    )
}    
