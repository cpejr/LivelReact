import React, {useState, useEffect} from 'react'

import {Link} from 'react-router-dom'

import './TrainingTypes.css'

import Header from '../../../Header'
import PopUpPeriodizacao from './Elements/PopUpPeriodizacao'
import PopUpCadeiaExcentrica from './Elements/PopUpCadeiaExcentrica'
import PopUpCadeiaConcentrica from './Elements/PopUpCadeiaConcentrica'
import PopUp from './Elements/PopUp'

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


export default function TrainingTypes(){

    const [currentProgress, setCurrentProgress] = useState({
        trof: '/images/trofeis/trof6trans.png',
        message: `Faltam ${ALUNO_TREINOS.NumTreinosFaltam} treinos para você ganhar ${ALUNO_TREINOS.PontosNext} pontos`
    });

    const [training, setTraining] = useState({
        prioridade: 'Inferior',
        anterior: 'Superior'
    });

    useEffect(()=>{

        if (ALUNO_TREINOS.NumTreinosMes<6){
            setCurrentProgress({
                trof: '/images/trofeis/trof6trans.png',
                message: `Faltam ${ALUNO_TREINOS.NumTreinosFaltam} treinos para você ganhar ${ALUNO_TREINOS.PontosNext} pontos`
            })
        }
        else if (ALUNO_TREINOS.NumTreinosMes<8){
            setCurrentProgress({
                trof: '/images/trofeis/trof8trans.png',
                message: `Faltam ${ALUNO_TREINOS.NumTreinosFaltam} treinos para você ganhar ${ALUNO_TREINOS.PontosNext} pontos`
            })
        }
        else if (ALUNO_TREINOS.NumTreinosMes<10){
            setCurrentProgress({
                trof: '/images/trofeis/trof10trans.png',
                message: `Faltam ${ALUNO_TREINOS.NumTreinosFaltam} treinos para você ganhar ${ALUNO_TREINOS.PontosNext} pontos`
            })
        }
        else if (ALUNO_TREINOS.NumTreinosMes<12){
            setCurrentProgress({
                trof: '/images/trofeis/trof12trans.png',
                message: `Faltam ${ALUNO_TREINOS.NumTreinosFaltam} treinos para você ganhar ${ALUNO_TREINOS.PontosNext} pontos`
            })
        }

        else {
            setCurrentProgress({
                trof: '/images/trofeis/trof12full.png',
                message: `Faltam ${ALUNO_TREINOS.NumTreinosFaltam} treinos para você ganhar ${ALUNO_TREINOS.PontosNext} pontos`
            })
        }

        if (ALUNO_TREINOS.ID_ultimoTreinoTipo === 'Superior') {
            setTraining({
                prioridade: 'Inferior',
                anterior: 'Superior'
            })
        }
            
        else {
            setTraining({
                prioridade: 'Superior',
                anterior: 'Inferior'
            })
        }
            
    }, [])


    return(
        <div style={{height: "100%"}}>
            <Header img={ALUNO_INFO.AlunoFoto} name={ALUNO_INFO.AlunoNome} icons={true} />
            <div className="popUpsContainer">
                <PopUp categ='P'/>
                <PopUp categ='20'/>
                <PopUp categ='40'/>
            </div>
            <div className="trainingsContainer">
                <Link className='mainButton' to='/timeSchedule'>
                    <div><b>treino {training.prioridade}</b></div>
                </Link>
                <Link className="secondaryButton" to='/timeSchedule'>
                    <div><b>treino {training.anterior}</b></div>
                </Link>
                <Link className="secondaryButton" to='/timeSchedule'>
                    <div><b>resultado</b></div>
                </Link>
            </div>
            <div className="monthReport">
                <div className="imgSide">
                    JANEIRO
                    <div className="trainingCircle" style={{backgroundImage: `url(/images/circle/${ALUNO_TREINOS.NumTreinosMes}-12.png)`}}>
                        <div style={{fontSize: "100%"}}>você treinou</div>
                        <div className="circleContent">
                            <div style={{fontSize: "500%"}}><b>{ALUNO_TREINOS.NumTreinosMes}</b></div>
                            <div style={{fontSize: "200%"}}>x</div>
                        </div>
                    </div>
                </div>
                <div className="medalSide">
                    <div className='Reward'>
                        <img src={currentProgress.trof} alt='Trofel' className='trophy' />
                        <div>{currentProgress.message}</div>
                    </div>
                    <div className="phrase">
                        {ALUNO_TREINOS.FraseTreino}
                    </div>
                </div>
            </div>
        </div>
    )
}