import React from 'react'
import {Link} from 'react-router-dom'

import PurpleBody from '../../../PurpleBody'

import './RequestNumber.css'


// async function RequestNumber(e){
//     e.preventDefault(); 

//     const data = {
//         name,
//         lastName,
//         email,
//         cpf,
//     };
// try{
//     const response = await api.post('ongs', data);

//     alert(`Seu ID de acesso: ${response.data.id}`);

//     history.push('/');
    
// } catch (err) {
//     alert('Erro na requisição de número de matrícula');
// }
// }

export default function RequestNumber(){
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
                                    type="number"
                                    placeholder="CPF" 
                                    name="CPF" 
                                    required="true"
                                    // value={cpf}
                                    // onChange={e => setCpf(e.target.value)}
                            />

                            <input
                                    type="email" 
                                    placeholder="E-mail" 
                                    name="email" 
                                    required="true"
                                    // value={email}
                                    // onChange={e => setEmail(e.target.value)}
                            />
                    </form>
                    <Link type="submit" to="/">
                        <div className="buttonEnviar"><h1>Enviar</h1></div>
                    </Link>
                </div>
                <div className="requestNumberText"><a>Preencha os dados abaixo e enviaremos seu número de matrícula para seu e-mail:</a></div>
                <div className="title"><h1> Solicite seu número de matrícula </h1></div>
        </div>
    )
}
