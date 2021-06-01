import React from 'react'

import { FaExclamationTriangle } from 'react-icons/fa'

// import {FacebookShareButton} from "react-share"; // pro post do facebook

import './PopUpAlertDelete.css'

import { message } from 'antd'
import { Modal } from 'react-bootstrap'

export default function PopUp({ show, setShow }) {
  return (
    <Modal show={show} centered={true} onHide={() => setShow(false)}>
      <Modal.Body className="ContainerModalDelete">
        <FaExclamationTriangle
          size={190}
          color="#632467"
          style={{}}
          className="exclamation"
        />

        <div className="text">Tem certeza que deseja apagar o aluno?</div>

        <div className="buttons">
          <button className="button" onClick={() => setShow(false)}>
            Não
          </button>
          <button
            className="button"
            onClick={() => {
              setShow(false)
              message.success('Usuário deletado com sucesso', 2)
            }}
          >
            Sim
          </button>
        </div>
      </Modal.Body>
    </Modal>
  )
}
