import React from 'react'
import { Link } from 'react-router-dom';

import './MidTraining.css'

import Header from '../../../Header'

let ALUNO_INFO = {
    AlunoFoto: '/images/user.jpg',
    AlunoNome: 'Arthur Lima'
}




export default function MidTraining() {

    return (
        <div style={{ height: "100%" }}>
            <Header img={ALUNO_INFO.AlunoFoto} name={ALUNO_INFO.AlunoNome} icons={true} />
            <div className="info">
                <div>
                    TREINO INFERIOR
                </div>
                <div>
                    Finalização: 15:30:59
                </div>
            </div>
            <div className="body">
                <div class="block">


                </div>
                <div class="block">


                </div>
                <div class="block">


                </div>
            </div>
            <div className="footer">
                <Link type="button" to="/requestnumber" className="buttonAdvance">
                    <div>
                        AVANÇAR
                </div>
                </Link>
            </div>

        </div>
    )
}