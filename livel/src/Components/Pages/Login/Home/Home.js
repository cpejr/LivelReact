import React from 'react'
import { Link } from 'react-router-dom';

import './Home.css'


export default function Home() {

    return (
        <div className="background-Img">
            <div className="purple-opacity">
                <div className="livelIcon">
                    <img src='/images/Logo_Livel.png' alt="Logo do Livel" />
                </div>
                
                <Link type="button" to="/login" className="buttonLogin">
                <div>
                    LOGIN
                </div>
                </Link>

            </div>
        </div>

    )
}