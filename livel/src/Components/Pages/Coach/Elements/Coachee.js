import React, { Component, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import ReactDOM from 'react-dom';
import{FaCheck} from 'react-icons/fa';
const render = ReactDOM.render;

class LivelOne extends Component {
    render() {
        return (
        < >
        <div className="livelOneStyled">
            <div className="livelStyled"> Livel</div> <div className="OneStyled"> ONE</div>
        </div>
        </>)}}

let Restricao =  '/images/Coach/restricao.png';
let Aerobico = '/images/Coach/aerobico.png';

const GENERAL_INFO = [null, Restricao, LivelOne, Aerobico];

let Inferior = "Inferior";
let Superior = "Superior";
let Resultado = "Resultado";

const TIPO_EXERCICIOS = [Inferior, Superior, Resultado];


let COACHEE1_INFO = {
    CoacheeFoto: '/images/Coach/aluno1.jpg',
    CoacheeNome: 'Beatriz Sinqueira',
    CoacheeLevel: 1,
    CoacheeExercise: TIPO_EXERCICIOS[0],
    CoacheeIcons: GENERAL_INFO[1],
}

let COACHEE2_INFO = {
    CoacheeFoto: '/images/Coach/aluno2.jpg',
    CoacheeNome: 'Paulo Diniz',
    CoacheeLevel: 3,
    CoacheeExercise: TIPO_EXERCICIOS[1],
    CoacheeIcons: GENERAL_INFO[2],
    CoacheeIcons: GENERAL_INFO[3],
}

let COACHEE3_INFO = {
    CoacheeFoto: '/images/Coach/aluno3.jpg',
    CoacheeNome: 'Beatriz Sinqueira',
    CoacheeLevel: 4,
    CoacheeExercise: TIPO_EXERCICIOS[2],
    CoacheeIcons: null,
}

let COACHEE4_INFO = {
    CoacheeFoto: '/images/Coach/aluno4.jpg',
    CoacheeNome: 'Pietro Carvalho',
    CoacheeLevel: 2,
    CoacheeExercise: TIPO_EXERCICIOS[1],
    CoacheeIcons: GENERAL_INFO[2],
}

const ALL_COACHEES = [COACHEE1_INFO, COACHEE2_INFO, COACHEE3_INFO, COACHEE4_INFO];

function AllRestriction(props){
    return(
        < >
        <ul className="restricoesescritas">    
        {(props.cabeca!=null) &&
            <li className="cabeca"> Cabeça </li>
        }

        {(props.pescoco!=null) &&
            <li className="pescoco"> Pescoço </li>
        }

        {(props.coluna!=null) &&
            <li className="coluna"> Coluna </li>
        }

        {(props.coracao!=null) &&
            <li className="coracao"> Coração </li>
        }

        {(props.quadril!=null) &&
            <li className="quadril"> Quadril </li>
        }

        {(props.joelhoesquerdo!=null) &&
            <li className="joelhoesquerdo"> Joelho Esquerdo </li>
        }

        {(props.joelhodireito!=null) &&
            <li className="joelhodireito"> Joelho Direito </li>
        }

        {(props.canelaesquerda!=null) &&
            <li className="canelaesquerda"> Canela Esquerda </li>
        }

        {(props.caneladireita!=null) &&
            <li className="caneladireita"> Canela Direita </li>
        }

        {(props.ombroesquerdo!=null) &&
            <li className="ombroesquerdo"> Ombro Esquerdo </li>
        }

        {(props.ombrodireito!=null) &&
            <li className="ombrodireito"> Ombro Direito </li>
        }

        {(props.cotoveloesquerdo!=null) &&
            <li className="cotoveloesquerdo"> Cotovelo Esquerdo </li>
        }

        {(props.cotovelodireito!=null) &&
            <li className="cotovelodireito"> Cotovelo Direito </li>
        }

        {(props.pulsoesquerdo!=null) &&
            <li className="pulsoesquerdo"> Pulso Esquerdo </li>
        }

        {(props.pulsodireito!=null) &&
            <li className="pulsodireito"> Pulso Direito </li>
        }

        {(props.maoesquerda!=null) &&
            <li className="maoesquerda"> Mão Esquerda </li>
        }

        {(props.maoedireita!=null) &&
            <li className="maoedireita"> Mão Direita </li>
        }

    </ul>
    </>
    )
}

const CheckFA = <FaCheck />;

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

function AllCoachees(props){

    return(
        <div className="coacheesHours">
            {ALL_COACHEES.map(coachee =>
            <div className="coacheeContainer">
                <div className="checkCoachee">
                <Check
                    key ={{CheckFA}}
                    active = {props.active === {CheckFA}}
                    onClick={() => {props.setActive({CheckFA})}}
                /> 
                </div>
                <div className="grayLine" />
                <img src={coachee.CoacheeFoto} alt="imagem coachee" className="fotoCoachee" />
                <div className="writtenInfos">
                    <div className="coacheeName"> {coachee.CoacheeNome} </div>
                    <div className="coacheeExercise"> {coachee.CoacheeExercise} </div>
                </div>
                {
                (coachee.CoacheeIcons!=GENERAL_INFO[0]&&coachee.CoacheeIcons!=GENERAL_INFO[2]) &&
                <img src={coachee.CoacheeIcons} alt="imagem coachee" className="coacheeIcons" />
                }
                {
                (coachee.CoacheeIcons!=GENERAL_INFO[0]&&coachee.CoacheeIcons==GENERAL_INFO[2]) &&
                <LivelOne />
                }                   
            </div>
            )}
        </div>
    )
}



export default function Coachee(props){
    const [active, setActive] = useState();
    return (
            < >
                <AllCoachees active={active} setActive={setActive} />
            </> 
    )
}   

//o nivel do coachee mostra qual cor ele tera sua border em volta da sua foto. Como fazer isso?
