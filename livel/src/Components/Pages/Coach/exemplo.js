import React, { useState } from 'react'

const PROFESSOR_HORARIOS = {
    ProfessorID: 12,
    ProfessorNome: 'Coach Alemão',
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
                    TreinoAlunoFoto: 123,
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
                    TreinoAlunoFoto: 12,
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
                    TreinoAlunoFoto: 1,
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
                    TreinoAlunoFoto: 15,
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
                    TreinoAlunoFoto: 45,
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
                    TreinoAlunoFoto: 8,
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
                    TreinoAlunoFoto: 5,
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

export default function Body(){

    return (
        <div>
            {
                PROFESSOR_HORARIOS.Horarios.map((horario)=>{
                    return <Horario horario_info={horario}/>
                })
            }
        </div>
    )
}

function Horario(){
    const [toggleOn, setToggleOn] = useState(true)

    return(
        <div>
            <div className='header'>
                <button onClick={()=>{setToggleOn(!toggleOn)}}>OI</button>
            </div>
            {
                toggleOn &&
                <div className='coachess'>
                    
                </div>
            }
        </div>
    )
}