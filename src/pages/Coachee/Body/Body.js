import React, { useState } from 'react'
import { restricoesRegistra } from 'src/services/backEnd'
import { getAluno } from 'src/services/auth'

import { message } from 'antd'

import './Body.css'

import Header from 'src/components/Header'

import InterativeBody from './Elements/InterativeBody'

export default function Body() {
    const [hurtParts, setHurtParts] = useState([])
    const [customComment, setCustomComment] = useState()
    const [available, setAvailable] = useState(true)

    function handleSelect(part) {
        //Checa se já esta selecionado ou não (-1 significa que não está selecionado)
        let index = hurtParts.indexOf(part)

        //Maniplando arrays em state sempre exige que, no momento de alterar o state, se desconstrua o novo array para atribuir ao state (usando esse ... abaixo)
        if (index === -1)
            //Desconstroi o array anterior, adicionando a nova parte ao final
            setHurtParts([...hurtParts, part])
        else {
            //Remove a parte já selecionada, depois atribuindo ao state o novo array sem essa parte
            hurtParts.splice(index, 1)
            setHurtParts([...hurtParts])
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        setAvailable(false)
        if (hurtParts.length === 0) {
            message.error('Escolha pelo menos uma parte do corpo dolorida', 2)
        } else {
            message.loading('Processando...', 1.3).then(async () => {
                const hide = message.loading('Enviando...')
                try {
                    const alunoId = getAluno().ALUNO_INFO.ID_Aluno
                    if (customComment) {
                        await restricoesRegistra(
                            alunoId,
                            customComment,
                            hurtParts
                        )
                        message.sucess('Enviado com sucesso')
                        hide()
                    } else {
                        await restricoesRegistra(alunoId, -1, hurtParts)
                        hide()
                        message.sucess('Enviado com sucesso')
                    }
                } catch (error) {
                    console.warn(error)
                    hide()
                    message.error('Erro ao enviar')
                }
            })
            setAvailable(true)
        }
    }

    return (
        <div style={{ height: '100%' }}>
            <Header name={true} back={true} />
            <form className="BodyContainer">
                <div className="title">
                    Caso você tenha alguma restrição e/ou dor de movimentos,
                    marque na figura abaixo os locais para que possamos orientar
                    melhor o seu treino:
                </div>
                <div className="BodyInput">
                    <div className="HurtList">
                        {hurtParts.map((value, index) => {
                            return (
                                <li key={index} style={{ marginBottom: '5px' }}>
                                    {value}
                                </li>
                            )
                        })}
                    </div>
                    <div className="Body">
                        <InterativeBody handleSelect={handleSelect} />
                    </div>
                </div>
                <div className="TextInputContainer">
                    <div>
                        Caso tenha algum problema mais grave, digite aqui:
                    </div>
                    <textarea
                        type="text"
                        className="input"
                        value={customComment}
                        onChange={(e) => setCustomComment(e.target.value)}
                    />
                </div>
                {available && (
                    <button className="button" onClick={handleSubmit}>
                        ENVIAR
                    </button>
                )}
            </form>
        </div>
    )
}
