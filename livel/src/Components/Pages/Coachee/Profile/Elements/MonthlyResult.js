import React, { Component } from 'react'
import '../Profile.css'
import ReactDOM from 'react-dom';
const render = ReactDOM.render;
// colocar body result separado pois coisas em cima

const BodyResult= {img:'/images/profile/BodyResult.png'}; 


const Abdominais = {img:'/images/profile/abdominais.png', 
                    top: '71%',
                    left: '33%',
                    width: '7%',}; 
const Alongamento = {img:'/images/profile/alongamento.png', 
                    top: '41%',
                    left: '3%',
                    width: '7%',}; 
const Altura = {img:'/images/profile/altura.png', 
                    top: '11%',
                    left: '43%',
                    width: '7%',}; 
const Barra = {img:'/images/profile/barra.png', 
                    top: '19%',
                    left: '53%',
                    width: '7%',}; 
const Corrida = {img:'/images/profile/corrida.png', 
                    top: '10%',
                    left: '10%',
                    width: '7%',}; 
const Peso = {img:'/images/profile/peso.png', 
                    top: '20%',
                    left: '29%',
                    width: '7%',}; 
const Gordura = {img:'/images/profile/porcentagemGordura.png', 
                    top: '30%',
                    left: '55%',
                    width: '7%',}; 
const PathCintura = {img:'/images/profile/pathCintura.png', 
                    top: '19%',
                    left: '23%',
                    width: '7%',}; 
const PathBiceps = {img:'/images/profile/pathBiceps.png', 
                    top: '34%',
                    left: '43%',
                    width: '7%',}; 
const PathPescoco = {img:'/images/profile/pathPescoco.png', 
                    top: '23%',
                    left: '13%',
                    width: '45%',}; 
const PathCoxa = {img:'/images/profile/pathCoxa.png', 
                    top: '23%',
                    left: '13%',
                    width: '45%',}; 
const PathQuadril = {img:'/images/profile/pathQuadril.png', 
                    top: '65%',
                    left: '53%',
                    width: '45%',}; 

const array = [Abdominais, Alongamento, Altura, Barra, Corrida, Peso, Gordura, PathBiceps, PathCintura, PathCoxa, PathPescoco, PathQuadril];

function partStyle(style_top, style_left, style_width){
    return {
        position: 'absolute',
        top: style_top,
        left: style_left,
        width: style_width,
        transform: 'translate(-50%, -50%)',
        height: 'auto',
    }
}

class MonthlyResultImages extends Component {
    render() {
        return (
            <div className="imagesContainer">
                 <img src={BodyResult.img} />
                { array.map(image => {
           return <img key={image.img} src={image.img} style={partStyle(image.top, image.left, image.width)} className="img-responsive" />
        }) }
            </div>
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
