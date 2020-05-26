import React from 'react'
// import { Link } from 'react-router-dom';

import '../Profile.css'

export default function Choice(props){
    return (

        <div className="ContainerChoice">
            <div className="Abas">  
            {/* Criando as abas  */}
                <div className="lastMonth">
                    Janeiro
                </div>
                <div className="month">
                    Fevereiro
                </div>
                <div className="results">
                    Resultados
                </div>
            </div>

           
        </div>
    )
}    