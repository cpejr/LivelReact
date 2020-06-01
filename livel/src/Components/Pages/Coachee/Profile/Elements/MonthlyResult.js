import React, { Component } from 'react'
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

let quadril = '30 cm';
let coxa = '30 cm';
let cintura = '30 cm';
let pescoco = '30 cm';
let biceps = '30 cm';


const BodyResult= {img:'/images/profile/body.png'}; 


const Abdominais = {img:'/images/profile/abdominais.png', 
                    top: '63%',
                    left: '80%',
                    width: '10%',
                    value: abdominal,
                    times: {tempoAbdominal}, 
                    }; 
const Alongamento = {img:'/images/profile/alongamento.png', 
                    top: '80%',
                    left: '25%',
                    width: '9%',
                    value: alongamento,}; 
const Altura =      {img:'/images/profile/altura.png', 
                    top: '94%',
                    left: '25%',
                    width: '9%',
                    value: altura,}; 
const Barra =       {img:'/images/profile/barra.png', 
                    top: '85%',
                    left: '80%',
                    width: '9%',
                    value: barra,}; 
const Corrida =     {img:'/images/profile/corrida.png', 
                    top: '53%',
                    left: '80%',
                    width: '10%',
                    value: corrida,
                    times: tempoCorrida,}; 
const Peso =        {img:'/images/profile/peso.png', 
                    top: '53%',
                    left: '25%',
                    width: '9%',
                    value: peso,}; 
const Flexao =      {img:'/images/profile/flexoes.png', 
                    top: '74%',
                    left: '80%',
                    width: '10%',
                    value: flexao,
                    times: tempoFlexao,}; 
const Gordura =     {img:'/images/profile/porcentagemGordura.png', 
                    top: '66%',
                    left: '25%',
                    width: '9%',
                    value: gordura,}; 
const LittlePurple = {img:'/images/profile/littlePurpleLine.png', 
                    top: '54%',
                    left: '70%',
                    width: '0.6%',};

const BigPurple = { img:'/images/profile/PurpleLine.png', 
                    top: '77%',
                    left: '75%',
                    width: '12%',};




const array = [Abdominais, Flexao, Alongamento, Altura, Barra, Corrida, Peso, Gordura, LittlePurple, BigPurple];


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
                 <img src={BodyResult.img} className="BodyResultClass" />
                 <div className="quadril">quadril</div>
                 <div className="pescoco">pescoço</div>
                 <div className="cintura">cintura</div>
                 <div className="biceps">bíceps</div>
                 <div className="coxa">coxa</div>
                { array.map(image => {
           return (
                    <div>
                        <div className="valueStyled" style={{position: "relative"}}> 
                        {image.value} 
                        </div>
                    <img key={image.img} src={image.img} style={partStyle(image.top, image.left, image.width)} className="img-responsive"  />
                    </div>
                    
                    )
        }) }
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
