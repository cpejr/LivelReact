import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

import {getAluno} from '../../../../services/backEnd'
import { login } from "../../../../services/auth";


export default function Login(){
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault()
        const request = async () => {
            getAluno(userName, password).then(result=>{
                if(result.LOGIN.ID_Aluno > 0 && result.LOGIN.Status === 1){
                    login(result.LOGIN.ID_Aluno)
                    history.push('/trainingTypes')
                }
                else{
                    alert('Dados incorretos')
                    history.push('/login')
                }
            }).catch(error=>{
                alert(error)
                history.push('/login')
            })
        }
        request();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={(e)=>{setUserName(e.target.value)}}/>
            <input type='text' onChange={(e)=>{setPassword(e.target.value)}}/>
            <button type='submit'>ENVIAR</button>
        </form>
    )
}