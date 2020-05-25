import React from 'react'
import {Link} from 'react-router-dom'

import PurpleBody from '../../../PurpleBody'

import './SignUp.css'




export default function SignUp(){
    return(
        <div className="Container">
            <PurpleBody/>
            <div className="SignUpForm">
                <form> 
                {/* onSubmit={handleSignUp} */}
                        <input
                                placeholder="Nome"
                                // value={name}
                                // onChange={e => setName(e.target.value)}
                        />
                        <input 
                                placeholder="Sobrenome" 
                                // value={lastName}
                                // onChange={e => setLastName(e.target.value)}
                        />

                        <input
                                placeholder="CPF" 
                                // value={cpf}
                                // onChange={e => setCpf(e.target.value)}
                        />

                        <input
                                type="email" 
                                placeholder="E-mail" 
                                // value={email}
                                // onChange={e => setEmail(e.target.value)}
                        />
                </form>

                <Link type="submit" to="/">
                    <div className="buttonEnviar"><a>Enviar</a></div>
                </Link>
                
            </div>
        </div>
    )}