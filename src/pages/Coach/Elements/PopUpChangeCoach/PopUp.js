import React from 'react'

import { Modal } from 'react-bootstrap'

import './PopUpChangeCoach.css'

export default function PopUp({ show, setShow }) {
  let coachArray = [
    {
      name: 'Juninho Alemão',
      photo: '/images/Coach/coach.jpg',
    },
    {
      name: 'Juninho Alemão',
      photo: '/images/Coach/coach.jpg',
    },
    {
      name: 'Juninho Alemão',
      photo: '/images/Coach/coach.jpg',
    },
    {
      name: 'Juninho Alemão',
      photo: '/images/Coach/coach.jpg',
    },
    {
      name: 'Juninho Alemão',
      photo: '/images/Coach/coach.jpg',
    },
    {
      name: 'Juninho Alemão',
      photo: '/images/Coach/coach.jpg',
    },
    {
      name: 'Juninho Alemão',
      photo: '/images/Coach/coach.jpg',
    },
    {
      name: 'Juninho Alemão',
      photo: '/images/Coach/coach.jpg',
    },
  ]

  return (
    <Modal show={show} centered={true} onHide={() => setShow(false)}>
      <Modal.Body className="ContainerModal">
        <div className="titlePopUpChangeCoach">
          <span>Selecione o coach para transferir o treino:</span>
        </div>

        <div className="manyCoachs">
          {coachArray.map((coach, index) => (
            <div key={index} className="coachOption">
              <img src={coach.photo} alt="coachs" />
              <span>{coach.name}</span>
            </div>
          ))}
        </div>
      </Modal.Body>
    </Modal>
  )
}
