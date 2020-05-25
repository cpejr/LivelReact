import React from 'react'
import {Link} from 'react-router-dom'

import PurpleBody from '../../../PurpleBody'

import './SignUp.css'




export default function SignUp(){
        return(
                <div className="purpleBodyContainer">
                        <div className="Container">
                        <PurpleBody/>
                            <form> 
                            {/* onSubmit={handleRequestNumber} */}
                                        <input
                                            type="text"
                                            placeholder="Nome"
                                            name="Nome" 
                                            required="true"
                                            // value={name}
                                            // onChange={e => setName(e.target.value)}
                                         />
                                         <input 
                                            type="text"
                                            placeholder="Sobrenome" 
                                            name="Sobrenome" 
                                            required="true"
                                            // value={lastName}
                                            // onChange={e => setLastName(e.target.value)}
                                        />
                                        <input
                                            type="email" 
                                            placeholder="E-mail" 
                                            name="email" 
                                            required="true"
                                            // value={email}
                                            // onChange={e => setEmail(e.target.value)}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Criar senha" 
                                            name="Senha" 
                                            required="true"
                                            // value={cpf}
                                            // onChange={e => setCpf(e.target.value)}
                                         />
                                        <input
                                            type="text"
                                            placeholder="Confirmar senha" 
                                            name="ConfirmarSenha" 
                                            required="true"
                                            // value={cpf}
                                            // onChange={e => setCpf(e.target.value)}
                                         />
                            </form>
                            <Link type="submit" to="/">
                                <div className="buttonCadastrar"><h1>CADASTRAR</h1></div>
                            </Link>
                        </div>
                        <div className="title"><h1>Realize seu cadastro </h1></div>
                </div>
            )
    }