import React, { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Modal } from 'react-bootstrap'

// import {FacebookShareButton} from "react-share"; // pro post do facebook

import './PopUpRegisterResult.css'

export default function PopUp({ show, setShow, aluno }) {
  const [error, setError] = useState(false)
  const [metricasAluno, setMetricasAluno] = useState({
    AlunoID: aluno.TreinoAlunoInscricaoID,
    dataResultado: new Date(),
    Peso: '',
    Altura: '',
    AlongamentoNivel: '',
    Abdominais: '',
    Flexoes: '',
    barra: '',
    Pescoco: '',
    Cintura: '',
    Quadril: '',
    Biceps: '',
    Coxa: '',
  })

  const handleInputChage = (key, value) => {
    setError()
    metricasAluno[key] = value
    setMetricasAluno({ ...metricasAluno })
  }

  function funcao_enviar(e) {
    e.preventDefault()
    let campo
    let validate = true
    for (campo in metricasAluno) {
      if (metricasAluno[campo] === '' || isNaN(metricasAluno[campo])) {
        validate = false
        setError('Preencha todos os campos, usando numeros!')
      }
    }
    if (validate && !error) {
      //envia resultado
      setShow(false)
    }
  }
  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      className="ModalResult"
      centered={true}
    >
      <Modal.Body className="ContainerModalResult">
        <div className="ClosePopUpRegister" onClick={() => setShow(false)}>
          <AiFillCloseCircle size={35} />
        </div>
        <div className="titleResultadoRegitra">
          Registro do Treino de {aluno.TreinoAlunoNome}
        </div>
        {error && (
          <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>
        )}
        <form className="Form_treino">
          <div className="peso">
            <label>Peso:</label>
            <input
              type="text"
              onChange={(e) => handleInputChage('Peso', e.target.value)}
            />
          </div>
          <div className="altura">
            <label>Altura:</label>
            <input
              type="text"
              onChange={(e) => handleInputChage('Altura', e.target.value)}
            />
          </div>
          <div className="numeroExercicios">
            <label>Alongam. Nivel:</label>
            <input
              type="text"
              onChange={(e) =>
                handleInputChage('AlongamentoNivel', e.target.value)
              }
            />
          </div>
          <div className="numeroExercicios">
            <label>Abdominais:</label>
            <input
              type="text"
              onChange={(e) => handleInputChage('Abdominais', e.target.value)}
            />
          </div>
          <div className="numeroExercicios">
            <label>Flexões:</label>
            <input
              type="text"
              onChange={(e) => handleInputChage('Flexoes', e.target.value)}
            />
          </div>
          <div className="numeroExercicios">
            <label>Barra:</label>
            <input
              type="text"
              onChange={(e) => handleInputChage('barra', e.target.value)}
            />
          </div>
          <div className="medidasCorpo">
            <label>Pescoço:</label>
            <input
              type="text"
              onChange={(e) => handleInputChage('Pescoco', e.target.value)}
            />
          </div>
          <div className="medidasCorpo">
            <label>Cintura:</label>
            <input
              type="text"
              onChange={(e) => handleInputChage('Cintura', e.target.value)}
            />
          </div>
          <div className="medidasCorpo">
            <label>Quadril:</label>
            <input
              type="text"
              onChange={(e) => handleInputChage('Quadril', e.target.value)}
            />
          </div>
          <div className="medidasCorpo">
            <label>Biceps:</label>
            <input
              type="text"
              onChange={(e) => handleInputChage('Biceps', e.target.value)}
            />
          </div>
          <div className="medidasCorpo">
            <label>Coxa:</label>
            <input
              type="text"
              onChange={(e) => handleInputChage('Coxa', e.target.value)}
            />
          </div>

          <button className="button" onClick={(event) => funcao_enviar(event)}>
            Enviar
          </button>
        </form>
      </Modal.Body>
    </Modal>
  )
}
