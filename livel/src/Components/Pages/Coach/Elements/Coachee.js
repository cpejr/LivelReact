import React, { Component, useState } from 'react'
import ReactDOM from 'react-dom';
const render = ReactDOM.render;

let COACHEE1_INFO = {
    CoacheeFoto: '/images/Coach/aluno1.jpg',
    CoacheeNome: 'Beatriz Sinqueira',
    CoacheeLevel: 1,
}

let COACHEE2_INFO = {
    CoacheeFoto: '/images/Coach/aluno2.jpg',
    CoacheeNome: 'Paulo Diniz',
    CoacheeLevel: 3,
}

let COACHEE3_INFO = {
    CoacheeFoto: '/images/Coach/aluno3.jpg',
    CoacheeNome: 'Beatriz Sinqueira',
    CoacheeLevel: 4,
}

let COACHEE4_INFO = {
    CoacheeFoto: '/images/Coach/aluno4.jpg',
    CoacheeNome: 'Pietro Carvalho',
    CoacheeLevel: 2,
}

const ALL_COACHEES = [COACHEE1_INFO, COACHEE2_INFO, COACHEE3_INFO, COACHEE4_INFO];

let GENERAL_INFO = {
    Restricao: '/images/Coach/restricao.png',
    LivelOne: '/images/Coach/livelOne.png',
    Aerobico: '/images/Coach/aerobico.png',
}

let TIPO_EXERCICIOS = {
    Inferior: 'inferior',
    Superior: 'Superior',
    Aerobico: 'Resultado',
}

function AllProps(props){
    return(
        < >
        <div className="GeneralInfos">

            <img src={COACHEE4_INFO.CoacheeFoto} alt="imagem coachee" className="fotoCoachee" />
            <img src={GENERAL_INFO.LivelOne} alt="icons coachee" className="icons" />
            <div className="WrittenInfos">
                    {(props.name!=null) &&
                        <div className="nameCoachee"> {COACHEE4_INFO.CoacheeNome} </div>
                    }
                    {(props.exerciseType!=null) &&
                        <div className="exerciseType"> {TIPO_EXERCICIOS.Inferior} </div>
                    }
            </div> 
        </div>

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


export default function HourBox(props){
    return (
            < >
                <AllProps img={true} name={true} exerciseType={true} icons={true} />
            </> 
    )
}   

//o nivel do coachee mostra qual cor ele tera sua border em volta da sua foto. Como fazer isso?
//Fazer um mapa com os coachees
//como colocar na informacoa do coachee qual a restricao e tipo de exercicio dele?