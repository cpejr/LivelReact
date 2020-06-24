import React, { Component, useState } from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom';
import{FaCheck, FaChevronRight} from 'react-icons/fa';
const render = ReactDOM.render;

class LivelOne extends Component {
    render() {
        return (
        < >
        <div className="livelOneStyled">
            <div className="livelStyled"> Livel</div> <div className="OneStyled"> ONE</div>
        </div>
        </>)}}

const Restricao = {img:'/images/Coach/restricao.png',
                   right: '5%',
} 

const Aerobico = {img:'/images/Coach/aerobico.png',
                  right: '10%',
}


function generalInfoStyle(style_right){
    return {
        right: style_right,
    }
}

let Inferior = "Inferior";
let Superior = "Superior";
let Resultado = "Resultado";

const TIPO_EXERCICIOS = [Inferior, Superior, Resultado];

const AVAILABLE_TIME = ['13:00', '14:00', '14:30'];

let COACHEE1_INFO = {
    CoacheeFoto: '/images/Coach/aluno1.jpg',
    CoacheeNome: 'Beatriz Sinqueira',
    CoacheeLevel: 1,
    CoacheeExercise: TIPO_EXERCICIOS[0],
    CoacheeSchedule: AVAILABLE_TIME[0],
    CoacheeLivelOne: LivelOne,
    CoacheeRestriction: Restricao,
    CoacheeCore: Aerobico,
}

let COACHEE2_INFO = {
    CoacheeFoto: '/images/Coach/aluno2.jpg',
    CoacheeNome: 'Paulo Diniz',
    CoacheeLevel: 3,
    CoacheeExercise: TIPO_EXERCICIOS[1],
    CoacheeSchedule: AVAILABLE_TIME[0],
    CoacheeLivelOne: 'null',
    CoacheeRestriction: 'null',
    CoacheeCore: 'null',
}


let COACHEE3_INFO = {
    CoacheeFoto: '/images/Coach/aluno3.jpg',
    CoacheeNome: 'Beatriz Sinqueira',
    CoacheeLevel: 4,
    CoacheeExercise: TIPO_EXERCICIOS[2],
    CoacheeSchedule: AVAILABLE_TIME[0],
    CoacheeLivelOne: 'null',
    CoacheeRestriction: Restricao,
    CoacheeCore: Aerobico,
}


let COACHEE4_INFO = {
    CoacheeFoto: '/images/Coach/aluno4.jpg',
    CoacheeNome: 'Pietro Carvalho',
    CoacheeLevel: 2,
    CoacheeExercise: TIPO_EXERCICIOS[1],
    CoacheeSchedule: AVAILABLE_TIME[0],
    CoacheeLivelOne: LivelOne,
    CoacheeRestriction: 'null',
    CoacheeCore: 'null',
}


const ALL_COACHEES = [COACHEE1_INFO, COACHEE2_INFO, COACHEE3_INFO, COACHEE4_INFO];


let  CheckFA = <FaCheck color="#632467" />;

const Check = styled.button`
    background: #FFFFFF;
    transition: ease border-bottom 250ms;
    border: 0;
    border-bottom: 2px solid transparent;
    outline: 0;
    cursor: pointer;
    text-align: center;
    width: 33px;
    color: #632467;
    height: 100%;
    ${({ active}) =>
    active && 
    `
    background: #632467;
    border: 0;
    border-bottom: 2px solid transparent;
    outline: 0;
    cursor: pointer;
    text-align: center;
    width: 33px;
    color: #FFFFFF;
    height: 100%;
    `
}
`;

let  Chevron = <FaChevronRight color="#676767" size={10}/>;

// const Check = styled.button`
//     background: #FFFFFF;
//     transition: ease border-bottom 250ms;
//     border: 0;
//     border-bottom: 2px solid transparent;
//     outline: 0;
//     cursor: pointer;
//     text-align: center;
//     width: 33px;
//     color: #632467;
//     height: 100%;
//     ${({ active}) =>
//     active && 
//     `
//     background: #632467;
//     border: 0;
//     border-bottom: 2px solid transparent;
//     outline: 0;
//     cursor: pointer;
//     text-align: center;
//     width: 33px;
//     color: #FFFFFF;
//     height: 100%;
//     `
// }
// `;


function AllCoachees(props){
    return(
        <div className="coacheesHours">
            {ALL_COACHEES.map(coachee =>
            <div className="coacheeContainer">
                <div className="checkCoachee">
                <Check
                    key ={{CheckFA}}
                    active = {props.active === {CheckFA}}
                    onClick={() => {props.setActive({CheckFA})}}>
                        {CheckFA}
                </Check>
                </div>
                <div className="grayLine" />
                <img src={coachee.CoacheeFoto} alt="imagem coachee" className="fotoCoachee" />
                <div className="writtenInfos">
                    <div className="coacheeName"> {coachee.CoacheeNome} </div>
                    <div className="coacheeExercise"> {coachee.CoacheeExercise} </div>
                </div>
                <div className="coachee_icons" >
                    {(coachee.CoacheeLivelOne!='null')&&
                    <LivelOne />
                    }
                    {(coachee.CoacheeRestriction!='null')&&
                    <img src={coachee.CoacheeRestriction.img} alt="imagem coachee" className="coacheeIcons" style={generalInfoStyle(coachee.CoacheeRestriction.right)} />
                    }
                    {(coachee.CoacheeCore!='null')&&
                    <img src={coachee.CoacheeCore.img} alt="imagem coachee" className="coacheeIcons" style={generalInfoStyle(coachee.CoacheeCore.right)} />
                    }
                </div>   
            </div>
            )}
        </div>
    )
}



export default function Coachee(props){
    return (
            < >
                <AllCoachees active={props.active} setActive={props.setActive} />
            </> 
    )
}   

//o nivel do coachee mostra qual cor ele tera sua border em volta da sua foto. Como fazer isso?
