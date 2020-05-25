import React from 'react'
import {Link} from 'react-router-dom'

import PurpleBody from '../../../PurpleBody'

import './Login.css'

export default function Login(){
    return(
        <div className="purpleBodyContainer">
                <div className="Container">
                <PurpleBody/>
                    <form> 
                    {/* onSubmit={handleLogin} */}
                                <input
                                    type="text"
                                    placeholder="Matrícula"
                                    name="Matricula" 
                                    required="true"
                                    // value={matricula}
                                    // onChange={e => setMatricula(e.target.value)}
                                 /> 
                    </form>
                    <Link type="submit" to="/trainingTypes">
                        <div className="buttonAvancar"><h1>AVANÇAR</h1></div>
                    </Link>
                </div>
                <div className="Container">
                    <Link type="button" to="/requestNumber">
                        <div className="linkRequestNumber"><a>Solicitar número da matrícula</a></div>
                    </Link>
                </div>
                <div className="title"><h1> Login </h1></div>
                
        </div>
    )
}
