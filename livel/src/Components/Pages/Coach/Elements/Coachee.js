import React, { Component, useState } from 'react'
import ReactDOM from 'react-dom';
const render = ReactDOM.render;

let COACHEE1_INFO = {
    CoacheeFoto: '/images/Coach/aluna1.jpg',
    CoacheeNome: 'Beatriz Sinqueira',
}

let COACHEE2_INFO = {
    CoacheeFoto: '/images/Coach/alun02.jpg',
    CoacheeNome: 'Paulo Diniz',
}

let COACHEE3_INFO = {
    CoacheeFoto: '/images/Coach/aluna3.jpg',
    CoacheeNome: 'Beatriz Sinqueira',
}

let COACHEE4_INFO = {
    CoacheeFoto: '/images/Coach/aluno3.jpg',
    CoacheeNome: 'Pietro Carvalho',
}

let GENERAL_INFO = {
    Restricao: '/images/Coach/restricao.png',
    LivelOne: '/images/Coach/livelOne.png',
    Aerobico: '/images/Coach/aerobico.png',
}


function Restricoes(props){
    return(
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
    )
}


export default function HourBox(props){
    return (
            < >
                <ToggleSwitch />
            </> 
    )
}   