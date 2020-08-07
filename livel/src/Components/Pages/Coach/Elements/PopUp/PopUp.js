import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import {FacebookShareButton} from "react-share"; // pro post do facebook

import "./PopUp.css";


export default function PopUp() {

    let coachArray = [
        {
            name: 'Juninho Alemão',
            photo: '/images/Coach/coach.jpg',
        },
        {
            name: 'Juninho Alemão',
            photo: '/images/Coach/coach.jpg',
        },
        {
            name: 'Juninho Alemão',
            photo: '/images/Coach/coach.jpg',
        },
        {
            name: 'Juninho Alemão',
            photo: '/images/Coach/coach.jpg',
        },
        {
            name: 'Juninho Alemão',
            photo: '/images/Coach/coach.jpg',
        },
        {
            name: 'Juninho Alemão',
            photo: '/images/Coach/coach.jpg',
        },
        {
            name: 'Juninho Alemão',
            photo: '/images/Coach/coach.jpg',
        },
        {
            name: 'Juninho Alemão',
            photo: '/images/Coach/coach.jpg',
        },
        
    ]

    return (
        <div className="Modal">
            <div className="ContainerModal">
                <div className="titlePopUpChangeCoach">
                    <span>Selecione o coach para transferir o treino:</span>
                </div>
                <div className="manyCoachs">
                    
                    {
                    coachArray.map( (coach) => 
                        // <div className="juninhoAlemao">
                            <div className="coachOption" onClick={() => console.log('CLICOU AUQI')}>
                                <img src={coach.photo} alt="coachs" />
                                <span>{coach.name}</span>
                            </div>
                        // </div>
                    )
                    }
                </div>

            </div>
        </div>
    );
}
