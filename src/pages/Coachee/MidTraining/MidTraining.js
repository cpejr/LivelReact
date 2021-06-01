import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { treinoAvalia } from 'src/services/backEnd'

import './MidTraining.css'
import Clock from './Elements/Clock/Clock'
import Header from 'src/Components/Header'
import FinalizeModal from './Elements/FinalizeModal'
import { message } from 'antd'

const exerciseTime = 10
const pauseTime = 10
const series = 5

export default function MidTraining() {
  const [isModalVisible, setisModalVisible] = useState(false)
  const [serie, setserie] = useState(0)
  const [active, setActive] = useState({
    paused: true,
    clock: 'training',
  })
  const history = useHistory()

  function changeActive(value) {
    if (value === 'rest') {
      setActive({
        paused: active.paused,
        clock: 'training',
      })
      if (serie === 2) {
        setActive({
          paused: !active.paused,
          clock: active.clock,
        })
        setisModalVisible(true)
      } else {
        setserie(serie + 1)
      }
    } else if (value === 'training') {
      setActive({
        paused: active.paused,
        clock: 'rest',
      })
    } else if (value === 'paused') {
      setActive({
        paused: !active.paused,
        clock: active.clock,
      })
    }
  }

  function advance(e) {
    try {
      e.preventDefault()
      treinoAvalia(234, 5)
      setActive({
        paused: true,
        clock: active.clock,
      })
      setisModalVisible(true)
    } catch (error) {
      message.error('Algo deu errado, tente novamente', 2)
      console.log(error)
    }
  }

  const rateTraining = () => {
    history.push('/trainingTypes')
  }

  return (
    <div style={{ height: '100%' }}>
      <FinalizeModal show={isModalVisible} onFinalize={rateTraining} />
      <Header img={true} name={true} icons={true} />
      <div className="info">
        <div className="titlee">TREINO</div>
      </div>
      <div className="bodyy">
        <div className="block">
          <div className="boxbody">
            <div className="boxtitle">Atividade</div>
            <div className="countinginfo">{exerciseTime} seg</div>
          </div>
          <div className="counting">
            <div>
              <Clock
                seconds={exerciseTime}
                active={() => {
                  if (active.clock === 'training' && !active.paused) {
                    return true
                  } else {
                    return false
                  }
                }}
                clockId={'training'}
                changeActive={changeActive}
              />
            </div>
          </div>
        </div>
        <div className="block">
          <div className="boxbody">
            <div className="boxtitle">Pausa</div>
            <div id="seg" className="countinginfo">
              {pauseTime} seg
            </div>
          </div>
          <div className="counting">
            <div>
              <Clock
                seconds={pauseTime}
                active={() => {
                  if (active.clock === 'rest' && !active.paused) {
                    return true
                  } else {
                    return false
                  }
                }}
                clockId={'rest'}
                changeActive={changeActive}
              />
            </div>
          </div>
        </div>
        <div className="block">
          <div className="boxbody">
            <div className="boxtitle">Serie</div>
            <div className="countinginfo">{series} x</div>
          </div>
          <div className="counting">
            <div>{serie}</div>
          </div>
        </div>
        <div className="playButton">
          <button
            style={{ cursor: 'pointer' }}
            onClick={() => {
              changeActive('paused')
            }}
          >
            <img src="images/playpause.png" alt="playpause"></img>
          </button>
        </div>
      </div>
      <div className="footer">
        <button className="buttonAdvance" onClick={(e) => advance(e)}>
          FINALIZAR
        </button>
      </div>
    </div>
  )
}
