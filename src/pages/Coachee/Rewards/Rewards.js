import React from 'react'
import { getAluno } from 'src/services/auth'
import './Rewards.css'

import Header from 'src/components/Header'

export default function TrainingTypes() {
  const aluno = getAluno()

  //FUNÇÃO DEFINE QUAIS IMAGENS DE TROFEU APARECE DE ACORDO COM O NUMERO DE TREINO

  const getTrofies = () => {
    if (
      aluno.ALUNO_TREINOS.NumTreinosMes < 6 ||
      aluno.ALUNO_TREINOS.NumTreinosMes == null
    ) {
      return {
        trof12d: 'images/trofeis/trof12trans.png',
        trof10d: 'images/trofeis/trof10trans.png',
        trof8d: 'images/trofeis/trof8trans.png',
        trof6d: 'images/trofeis/trof6trans.png',
      }
    } else if (aluno.ALUNO_TREINOS.NumTreinosMes < 8) {
      return {
        trof12d: 'images/trofeis/trof12trans.png',
        trof10d: 'images/trofeis/trof10trans.png',
        trof8d: 'images/trofeis/trof8trans.png',
        trof6d: 'images/trofeis/trof6full.png',
      }
    } else if (aluno.ALUNO_TREINOS.NumTreinosMes < 10) {
      return {
        trof12d: 'images/trofeis/trof12trans.png',
        trof10d: 'images/trofeis/trof10trans.png',
        trof8d: 'images/trofeis/trof8full.png',
        trof6d: 'images/trofeis/trof6full.png',
      }
    } else if (aluno.ALUNO_TREINOS.NumTreinosMes < 12) {
      return {
        trof12d: 'images/trofeis/trof12trans.png',
        trof10d: 'images/trofeis/trof10full.png',
        trof8d: 'images/trofeis/trof8full.png',
        trof6d: 'images/trofeis/trof6full.png',
      }
    } else if (aluno.ALUNO_TREINOS.NumTreinosMes >= 12) {
      return {
        trof12d: 'images/trofeis/trof12full.png',
        trof10d: 'images/trofeis/trof10full.png',
        trof8d: 'images/trofeis/trof8full.png',
        trof6d: 'images/trofeis/trof6full.png',
      }
    }
  }
  const trophies = getTrofies()

  return (
    <div style={{ height: '100%' }}>
      <Header name={true} back={true} />
      <div className="body">
        <div className="trophies">
          <div className="sentencealign">
            <img src={trophies.trof12d} alt="trof12" />
            <br></br>
            <div className="sentence">12 treinos/mês</div>
            <div className="sentence">
              <b>Ganhe 100 Livel Pontos</b>
            </div>
          </div>
          <div className="sentencealign">
            <img src={trophies.trof10d} alt="trof10" />
            <br></br>
            <div className="sentence">10 treinos/mês</div>
            <div className="sentence">
              <b>Ganhe 60 Livel Pontos</b>
            </div>
          </div>
        </div>
        <div className="trophies">
          <div className="sentencealign">
            <img src={trophies.trof8d} alt="trof8" />
            <br></br>
            <div className="sentence">8 treinos/mês</div>
            <div className="sentence">
              <b>Ganhe 40 Livel Pontos</b>
            </div>
          </div>
          <div className="sentencealign">
            <img src={trophies.trof6d} alt="trof6" />
            <br></br>
            <div className="sentence">6 treinos/mês</div>
            <div className="sentence">
              <b>Ganhe 20 Livel Pontos</b>
            </div>
          </div>
        </div>
      </div>
      <div className="foooter">
        <div className="imageContainer">
          <img
            src="/images/programa.png"
            alt="programa"
            className="programImage"
          />
        </div>
        <div className="points">
          <div>
            Você possui um total de
            <b>{aluno.ALUNO_TREINOS.PontosNext} pontos</b>
          </div>
        </div>
      </div>
    </div>
  )
}
