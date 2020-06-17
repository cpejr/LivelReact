import React, {useState} from 'react'
import {restricoesRegistra} from '../../../../services/backEnd'
import {getAluno} from '../../../../services/auth'

import './Body.css'

import Header from '../../../Header'

import InterativeBody from './Elements/InterativeBody'

export default function Body(){
    const [hurtParts, setHurtParts] = useState([])
    const [customComment, setCustomComment] = useState()


    function handleSelect(part){
        //Checa se já esta selecionado ou não (-1 significa que não está selecionado)
        let index = hurtParts.indexOf(part)

        //Maniplando arrays em state sempre exige que, no momento de alterar o state, se desconstrua o novo array para atribuir ao state (usando esse ... abaixo)
        if(index===-1)
            //Desconstroi o array anterior, adicionando a nova parte ao final
            setHurtParts([...hurtParts, part]);
        else{
            //Remove a parte já selecionada, depois atribuindo ao state o novo array sem essa parte
            hurtParts.splice(index, 1)
            setHurtParts([...hurtParts])
        }
    }

    async function handleSubmit(){
        try{
            const alunoId = getAluno().ALUNO_INFO.ID_Aluno
            if (customComment) {
                await restricoesRegistra(alunoId, customComment, hurtParts)
                alert('Enviado com sucesso')
            }
            else{
                await restricoesRegistra(alunoId, -1, hurtParts)
                alert('Enviado com sucesso')
            }
        }
        catch(error){
            alert(error)
        }
    }


    return (
        <div style={{height: '100%'}}>
            <Header name={true} back={true} />
            <form onSubmit={handleSubmit} className='BodyContainer'>
                <div className='title'>
                    Caso você tenha alguma restrição e/ou dor de movimentos, marque na figura abaixo os locais para que possamos orientar melhor o seu treino:
                </div>
                <div className='BodyInput'>
                    <div className='HurtList'>
                            {
                                hurtParts.map((value)=>{
                                    return <li style={{marginBottom: '5px', marginRight: '-50px'}}>{value}</li>
                                })
                            }
                    </div>
                    <div className="Body">
                        <InterativeBody handleSelect={handleSelect}/>
                    </div>
                </div>
                <div className='TextInputContainer'>
                        <div>Caso tenha algum problema mais grave, digite aqui:</div>
                        <textarea type='text' className='input' value={customComment} onChange={(e)=>setCustomComment(e.target.value)} />
                </div>
                <button className='button' type='submit'>
                    ENVIAR
                </button>
            </form>
        </div>
    )
}