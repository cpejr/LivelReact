import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";

// import {FacebookShareButton} from "react-share"; // pro post do facebook

import "./PopUpChangeCoach.css";


export default function PopUp({functionState}) {

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
                <div className="ClosePopUp"
                    onClick={() => functionState(false)}
                >
                    <AiFillCloseCircle size={35} />
                </div>
                <div className="titlePopUpChangeCoach">
                    <span>Selecione o coach para transferir o treino:</span>
                </div>

                <div className="manyCoachs">
                    
                    {
                    coachArray.map( (coach) => 
                        // <div className="juninhoAlemao">
                            <div className="coachOption">
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
