import React from 'react'
// import { Link } from 'react-router-dom';

import '../Profile.css'

export default function Results(props){
    return (
        <div className="ResultsContainer">
            <ul>
                <li className="ResultsForça">
                    forca
                </li>
                <li className="ResultsCardio">
                    cardio
                </li>
                <li className="ResultsPeso">
                    peso
                </li>
                <li className="ResultsGordura">
                    gordura
                </li>
            </ul>
        </div>
    )
}
