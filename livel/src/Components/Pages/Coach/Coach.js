import React from 'react'

import './Coach.css'

// import {getCoach} from '../../../services/auth'

import HeaderCoach from './Elements/Header';
import HourBox from './Elements/HourBox';


const PROFESSOR_HORARIOS = {
    ProfessorID: 12,
    ProfessorNome: 'Alemão',
    ProfessorFoto: '/images/Coach/coach.jpg',
    Horarios: [
        {
            HorarioID: 123,
            Horario: '14:00',
            HorarioOnline: 1,
            Horario_Treinos: [
                {
                    TreinoID: 12,
                    TreinoAlunoInscricaoID: 123,
                    TreinoAlunoTipo: 1,
                    TreinoAlunoFoto: '/images/Coach/aluno1.jpg',
                    TreinoAlunoRestricoes: 5,
                    TreinoTipoID: 1,
                    TreinoTipoDescricao: 'blablabla',
                    TreinoConcluido: 0,
                    TreinoAlunoNome: 'Joana'
                },
                {
                    TreinoID: 13,
                    TreinoAlunoInscricaoID: 12,
                    TreinoAlunoTipo: 2,
                    TreinoAlunoFoto: '/images/Coach/aluno2.jpg',
                    TreinoAlunoRestricoes: 0,
                    TreinoTipoID: 2,
                    TreinoTipoDescricao: 'blablabla',
                    TreinoConcluido: 0,
                    TreinoAlunoNome: 'Batata'
                },
                {
                    TreinoID: 14,
                    TreinoAlunoInscricaoID: 113,
                    TreinoAlunoTipo: 2,
                    TreinoAlunoFoto: '/images/Coach/aluno3.jpg',
                    TreinoAlunoRestricoes: 0,
                    TreinoTipoID: 3,
                    TreinoTipoDescricao: 'blablabla',
                    TreinoConcluido: 0,
                    TreinoAlunoNome: 'Maria'
                },
                {
                    TreinoID: 15,
                    TreinoAlunoInscricaoID: 10,
                    TreinoAlunoTipo: 2,
                    TreinoAlunoFoto: '/images/Coach/aluno4.jpg',
                    TreinoAlunoRestricoes: 3,
                    TreinoTipoID: 2,
                    TreinoTipoDescricao: 'blablabla',
                    TreinoConcluido: 0,
                    TreinoAlunoNome: 'Arthur'
                },
            ]
        },
        {
            HorarioID: 13,
            Horario: '15:00',
            HorarioOnline: 1,
            Horario_Treinos: [
                {
                    TreinoID: 110,
                    TreinoAlunoInscricaoID: 11,
                    TreinoAlunoTipo: 1,
                    TreinoAlunoFoto: '/images/Coach/aluno1.jpg',
                    TreinoAlunoRestricoes: 0,
                    TreinoTipoID: 3,
                    TreinoTipoDescricao: 'blablabla',
                    TreinoConcluido: 0,
                    TreinoAlunoNome: 'Gabriel'
                },
                {
                    TreinoID: 3,
                    TreinoAlunoInscricaoID: 3,
                    TreinoAlunoTipo: 2,
                    TreinoAlunoFoto: '/images/Coach/aluno3.jpg',
                    TreinoAlunoRestricoes: 0,
                    TreinoTipoID: 2,
                    TreinoTipoDescricao: 'blablabla',
                    TreinoConcluido: 0,
                    TreinoAlunoNome: 'Paloma'
                },
                {
                    TreinoID: 5,
                    TreinoAlunoInscricaoID: 5,
                    TreinoAlunoTipo: 1,
                    TreinoAlunoFoto: '/images/Coach/aluno4.jpg',
                    TreinoAlunoRestricoes: 0,
                    TreinoTipoID: 1,
                    TreinoTipoDescricao: 'blablabla',
                    TreinoConcluido: 0,
                    TreinoAlunoNome: 'Diogo'
                },
            ]
        }
    ]
}

export default function Coach(){
    return(
    < >
    <div className="completeBody">
        
        <div className="headerContainer">
            <HeaderCoach img={true} name={true} position={true} data={PROFESSOR_HORARIOS} />
        </div>
        
         <HourBox data={PROFESSOR_HORARIOS} />  
 
        {/* <Coachee active={active} setActive={setActive} /> */}
    </div>
    </>
    )

}
