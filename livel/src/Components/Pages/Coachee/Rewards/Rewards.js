import React, {useState} from 'react'

import './Rewards.css'

import Header from '../../../Header'

let ALUNO_INFO = {
    AlunoFoto: '/images/user.jpg',
    AlunoNome: 'Arthur Lima'
}

let ALUNO_TREINOS = {
    NumTreinosMes: 10,
    Pontos: 40
}




export default function TrainingTypes() {

    const [trophies, setTrophies] = useState(()=>{
        if (ALUNO_TREINOS.NumTreinosMes<6){
           return{
               trof12d:'/images/trofeis/trof12trans.png',             
               trof10d: '/images/trofeis/trof10trans.png',
               trof8d: '/images/trofeis/trof8trans.png',
               trof6d: '/images/trofeis/trof6trans.png'
           }
            
        }
        else if (ALUNO_TREINOS.NumTreinosMes<8){
            return{
                trof12d:'/images/trofeis/trof12trans.png',
                trof10d: '/images/trofeis/trof10trans.png',
                trof8d: '/images/trofeis/trof8trans.png',
                trof6d: '/images/trofeis/trof6full.png'
            }
        }
        else if (ALUNO_TREINOS.NumTreinosMes<10){
            return{
                trof12d:'/images/trofeis/trof12trans.png',      
                trof10d: '/images/trofeis/trof10trans.png',
                trof8d: '/images/trofeis/trof8full.png',
                trof6d: '/images/trofeis/trof6full.png'
            }
        }
        else if (ALUNO_TREINOS.NumTreinosMes<12){
            return{
                trof12d:'/images/trofeis/trof12trans.png',
                trof10d: '/images/trofeis/trof10full.png',
                trof8d: '/images/trofeis/trof8full.png',
                trof6d: '/images/trofeis/trof6full.png'
            }
            }
         else if (ALUNO_TREINOS.NumTreinosMes>=12){
            return{
                trof12d:'/images/trofeis/trof12full.png',
                trof10d: '/images/trofeis/trof10full.png',
                trof8d: '/images/trofeis/trof8full.png',
                trof6d: '/images/trofeis/trof6full.png'
                }
                }

    });

    return (
        <div style={{ height: "100%" }}>
            <Header img={ALUNO_INFO.AlunoFoto} name={ALUNO_INFO.AlunoNome} back={true} />
            <div className="body">
                <div className="trophies">
                  <div className="sentencealign"> 
                      <img src={trophies.trof12d} alt="trof12" />
                      <br></br>
                      <div className="sentence">12 treinos/mês</div>
                      <div className="sentence"><b>Ganhe 100 Livel Pontos</b></div>
                  </div>
                  <div className="sentencealign"> 
                      <img src={trophies.trof10d} alt="trof10" />
                      <br></br>
                      <div className="sentence">10 treinos/mês</div>
                      <div className="sentence"><b>Ganhe 60 Livel Pontos</b></div>
                  </div>
                </div>
                <div className="trophies">
                  <div className="sentencealign"> 
                      <img src={trophies.trof8d} alt="trof8" />
                      <br></br>
                      <div className="sentence">8 treinos/mês</div>
                      <div className="sentence"><b>Ganhe 40 Livel Pontos</b></div>
                  </div>
                  <div className="sentencealign"> 
                      <img src={trophies.trof6d} alt="trof6" />
                      <br></br>
                      <div className="sentence">6 treinos/mês</div>
                      <div className="sentence"><b>Ganhe 20 Livel Pontos</b></div>
                  </div>
                </div>
            </div>
            <div className="foooter">
                <div className="imageContainer">
                <img src='/images/programa.png' alt="programa" className="programImage"/>
                </div>
                <div className="points">
                    <div>Você possui um total de <b>{ALUNO_TREINOS.Pontos} pontos</b></div>
                </div>
            </div>
        </div>
    )
}