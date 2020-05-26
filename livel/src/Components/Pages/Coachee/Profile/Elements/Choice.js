import React from 'react'
// import { Link } from 'react-router-dom';

import '../Profile.css'

export default function Choice(props){
    return (

        <div className="ContainerChoice">
            <div className="FlexContainer">
            <ul>  
            {/* Criando as abas  */}
                <li className="lastMonth">
                    <strong>Janeiro</strong>
                </li>
                <li className="month">
                <strong> Fevereiro</strong>
                </li>
                <li className="results">
                <strong>Resultados</strong>
                </li>
            </ul>

           </div>
        </div>
    )
}    