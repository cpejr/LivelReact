import React from 'react'
// import { Link } from 'react-router-dom';

import '../Profile.css'

export default function Results(props){
    return (
        <div className="ResultsContainer">
            <ul className="ResultsFirstRow">
                <li className="ResultsForça">
                    forca
                </li>
                <li className="ResultsPeso">
                    peso
                </li>
            </ul>
            <ul className="ResultsSecondRow">
                <li className="ResultsCardio">
                    cardio
                </li>
                <li className="ResultsGordura">
                    gordura
                </li>
            </ul>
        </div>
    )
}
