import React from 'react'
import {Link} from 'react-router-dom'

import './Profile.css'

import HeaderProfile from './Elements/HeaderProfile'
import ExitButton from './Elements/ExitButton'


// import PopUp from './Elements/PopUp'

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


export default function Profile(){
    return(
        <div style={{height: "100%"}} >
            <HeaderProfile img="/images/user.jpg" level={true} back={true} />
            <div className="ProfileContainer">
                {/* <div className="pageTitle">
                <Link to='/trainingTypes'>
                    <IconContext.Provider value={{ size: '1.8em', color: "#632467"}}>
                        <MdKeyboardArrowLeft />
                    </IconContext.Provider>
                </Link>
                
                    <div>MARQUE SEU HORÁRIO</div>
                </div>
                {
                    horarios.map(
                        (value) => {
                            return(
                                <div className="horario">
                                    <div><b>{value}</b></div>
                                </div>
                            )
                        }
                    )
                } */}
            </div>
            <Link type="button" to="/trainingTypes">
                <ExitButton />
            </Link>
        </div>
    )

}