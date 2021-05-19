import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTreinoSemana } from "../../../../services/backEnd";
import { getAluno } from "../../../../services/auth";

import "./TrainingTypes.css";

import Header from "../../../Header";
import PopUp from "./Elements/PopUp";

var meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export default function TrainingTypes() {
  // eslint-disable-next-line no-unused-vars
  const [aluno, setAluno] = useState(getAluno());
  const [treinoSemana, setTreinoSemana] = useState({
    periodizacao: "T",
  });

  const [currentProgress, setCurrentProgress] = useState({
    trof: "/images/trofeis/trof6trans.png",
    message: `Faltam ${aluno.ALUNO_TREINOS?.NumTreinosFaltam} treinos para você ganhar ${aluno.ALUNO_TREINOS?.PontosNext} pontos`,
  });

  // eslint-disable-next-line no-unused-vars
  const [training, setTraining] = useState(() => {
    if (aluno.ALUNO_TREINOS?.ID_ultimoTreinoTipo === "Superior") {
      return {
        prioridade: "Inferior",
        anterior: "Superior",
      };
    } else {
      return {
        prioridade: "Superior",
        anterior: "Inferior",
      };
    }
  });

  useEffect(() => {
    getTreinoSemana()
      .then((result) => {
        if (result.ID_Semana > 0) {
          setTreinoSemana(result);
        } else {
          alert("Erro nos treinos da semana");
        }
      })
      .catch((erro) => {
        console.log(erro);
      });

    if (!aluno.ALUNO_TREINOS?.NumTreinosMes) {
      setCurrentProgress({
        trof: "/images/trofeis/trof6trans.png",
        message: `Nenhum treino registrado`,
      });
    } else if (aluno.ALUNO_TREINOS?.NumTreinosMes < 6) {
      setCurrentProgress({
        trof: "/images/trofeis/trof6trans.png",
        message: `Faltam ${aluno.ALUNO_TREINOS?.NumTreinosFaltam} treinos para você ganhar ${aluno.ALUNO_TREINOS?.PontosNext} pontos`,
      });
    } else if (aluno.ALUNO_TREINOS?.NumTreinosMes < 8) {
      setCurrentProgress({
        trof: "/images/trofeis/trof8trans.png",
        message: `Faltam ${aluno.ALUNO_TREINOS?.NumTreinosFaltam} treinos para você ganhar ${aluno.ALUNO_TREINOS?.PontosNext} pontos`,
      });
    } else if (aluno.ALUNO_TREINOS?.NumTreinosMes < 10) {
      setCurrentProgress({
        trof: "/images/trofeis/trof10trans.png",
        message: `Faltam ${aluno.ALUNO_TREINOS?.NumTreinosFaltam} treinos para você ganhar ${aluno.ALUNO_TREINOS?.PontosNext} pontos`,
      });
    } else if (aluno.ALUNO_TREINOS?.NumTreinosMes < 12) {
      setCurrentProgress({
        trof: "/images/trofeis/trof12trans.png",
        message: `Faltam ${aluno.ALUNO_TREINOS?.NumTreinosFaltam} treinos para você ganhar ${aluno.ALUNO_TREINOS?.PontosNext} pontos`,
      });
    } else {
      setCurrentProgress({
        trof: "/images/trofeis/trof12full.png",
        message: `Faltam ${aluno.ALUNO_TREINOS?.NumTreinosFaltam} treinos para você ganhar ${aluno.ALUNO_TREINOS?.PontosNext} pontos`,
      });
    }
  }, [aluno]);

  return (
    <div style={{ height: "100%" }}>
      <Header name={true} icons={true} />
      <div className="popUpsContainer">
        <PopUp TREINO_SEMANA={treinoSemana} />
      </div>
      <div className="trainingsContainer">
        <Link
          className="mainButton"
          to={{
            pathname: "/timeSchedule",
            state: { trainingType: training.prioridade },
          }}
        >
          <div>
            <b>treino {training.prioridade}</b>
          </div>
        </Link>
        <Link
          className="secondaryButton"
          to={{
            pathname: "/timeSchedule",
            state: { trainingType: training.prioridade },
          }}
        >
          <div>
            <b>treino {training.anterior}</b>
          </div>
        </Link>
        <Link className="secondaryButton" to="/timeSchedule">
          <div>
            <b>resultado</b>
          </div>
        </Link>
      </div>
      <div className="monthReport">
        {}
        <div className="imgSide">
          {meses[new Date().getMonth()].toUpperCase()}
          <div
            className="trainingCircle"
            style={{
              backgroundImage: `url(/images/circle/${aluno.ALUNO_TREINOS?.NumTreinosMes}-12.png)`,
            }}
          >
            <div style={{ fontSize: "100%" }}>você treinou</div>
            <div className="circleContent">
              <div style={{ fontSize: "500%" }}>
                <b>
                  {aluno.ALUNO_TREINOS?.NumTreinosMes
                    ? aluno.ALUNO_TREINOS?.NumTreinosMes
                    : 0}
                </b>
              </div>
              <div style={{ fontSize: "200%" }}>x</div>
            </div>
          </div>
        </div>
        <div className="medalSide">
          <div className="Reward">
            <img src={currentProgress.trof} alt="Trofel" className="trophy" />
            <div>{currentProgress.message}</div>
          </div>
          <div className="phrase">{aluno.ALUNO_TREINOS?.FraseTreino}</div>
        </div>
      </div>
    </div>
  );
}
