import React, { Component } from 'react'
import '../Profile.css'

let peso = '80 kg';
let gordura = '15.5 px';
let alongamento = 'média';
let altura = '1,79 m';
let corrida = '2 km';
let abdominal = '30';
let flexao = '20';
let barra = '5';
            
let tempoCorrida = '10`';
let tempoAbdominal = '1`';
let tempoFlexao = '1`';

let score = '55';

const biceps = {
    value: '30 cm',
    description: 'bíceps',
    bottom: '141px',
    left: '7px',
}
const coxa = {
    value: '30 cm',
    description: 'coxa',
    left: '26px',
    bottom: '35.5px',
}
const cintura = {
    value: '30 cm',
    description: 'cintura',
    bottom: '58.5px',
    left: '26px',
}
const pescoco = {
    value: '30 cm',
    description: 'pescoço',
    left: '26px',
    bottom: '80.5px',
}
const quadril = {
    value: '30 cm',
    description: 'quadril',
    left: '79px',
    bottom: '49px',
}


function descriptionStyle(style_bottom, style_left){
    return {
        bottom: style_bottom,
        left: style_left,
        width: '60px',
        position: 'relative',
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



class MonthlyResultImages extends Component {
    render() {
        return (
        <>
            <div className="imagesContainer">
                {/* parte de cima */}
                <div className="bodyData" >
                    <img src={BodyResult.img} alt='bodyResults' className="BodyResultClass" />
                    <div className="bodyMeasures">
                        { bodySubtitles.map(part => {
                            return (
                                <div style={descriptionStyle(part.bottom, part.left)} >
                                    <span className="valueSubtitles">
                                        {part.value}
                                    </span>
                                    <p className="bodyPart">
                                        {part.description}
                                    </p>  
                                </div>
                            )
                        }
                        )}
                    </div>

                </div>
                {/* parte de baixo */}
                <div className="mainData">
                    <ul className="LeftList"> 
                        {listaLeft.map(left =>{
                            return(
                                <li className="leftIcons">
                                    <img className="iconList" alt='iconlist' src={left.img} />
                                    <div className="valueList">
                                        {left.value}
                                    </div>
                                </li>
                            )
                        }

                        )}

                    </ul>
                    <div className="RightSide">

                        <div className="thePurples">
                            <img className="bigPurple" alt='purpleDivider' src={BigPurple.img} />
                            <img className="littlePurple" alt='purpleDivider' src={LittlePurple.img} />
                            <strong className="purpleScore">Score total: {score}</strong>
                            {/* <div className="purpleScoreAmount"></div> */}
                        </div>
                        <ul className="RightList">
                            
                            {listaRight.map(right =>{
                                    return(
                                        <li className="rightIcons">
                                            <img className="iconList" alt='iconList' src={right.img} />
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
