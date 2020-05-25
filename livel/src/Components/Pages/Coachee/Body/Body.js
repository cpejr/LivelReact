import React, {useState} from 'react'
import './Body.css'

import Header from '../../../Header'

import InterativeBody from './Elements/InterativeBody'

let ALUNO_INFO = {
    AlunoFoto: '/images/user.jpg',
    AlunoNome: 'Arthur Lima'
}

let TREINO_SEMANA = {
    Periodizacao: 'T', 
    CadeiaExcentrica: '40',
    CadeiaConcentrica: '60'
}

let ALUNO_TREINOS = {
    ID_ultimoTreinoTipo: 'Inferior',
    NumTreinosMes: 9,
    NumTreinosFaltam: 2,
    PontosNext: 20,
    FraseTreino: 'O progresso é impossível sem mudanças.',
}


export default function Body(){
    const [hurtParts, setHurtParts] = useState([])
    const [customComment, setCustomComment] = useState()
    const [reload, setReload] = useState(true)


    function handleSelect(part){
        let exist = hurtParts.indexOf(part)
        if(exist===-1)
            setHurtParts([...hurtParts, part]);
        else{
            hurtParts.splice(exist, 1)
            setHurtParts(hurtParts)
            setReload(!reload)
        }
    }

    function handleSubmit(){
        alert('Enviado com sucesso')
        console.log(hurtParts)
        console.log(customComment)
    }


    return (
        <div style={{height: '100%'}}>
            <Header img={ALUNO_INFO.AlunoFoto} name={ALUNO_INFO.AlunoNome} back={true} />
            <form onSubmit={handleSubmit} className='BodyContainer'>
                <div className='title'>
                    Caso você tenha alguma restrição e/ou dor de movimentos, marque na figura abaixo os locais para que possamos orientar melhor o seu treino:
                </div>
                <div className='BodyInput'>
                    <div className='HurtList'>
                            {reload ?
                                hurtParts.map((value)=>{
                                    return <li style={{marginBottom: '5px', marginRight: '-50px'}}>{value}</li>
                                })
                                :
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