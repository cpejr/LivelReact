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

    function handleSelect(part){
        setHurtParts([...hurtParts, part]);
    }


    return (
        <div style={{height: '100%'}}>
            <Header img={ALUNO_INFO.AlunoFoto} name={ALUNO_INFO.AlunoNome} icons={true} />
            <div className='BodyContainer'>
                <div className='BodyInput'>
                    <div className='HurtList'>
                        
                    </div>
                    <div className="Body">
                        <InterativeBody/>
                    </div>
                </div>
                <div className='TextInputContainer'>

                </div>
                
            </div>
        </div>
    )
}