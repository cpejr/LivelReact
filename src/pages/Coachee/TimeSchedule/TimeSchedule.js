import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './TimeSchedule.css'
import { treinoHorarios, treinoRegistra } from 'src/services/backEnd'
import { getAluno } from 'src/services/auth'

import Header from 'src/components/Header'

import { IconContext } from 'react-icons'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { message } from 'antd'

export default function TimeSchedule(props) {
  const [horarios, setHorarios] = useState([])

  const history = useHistory()

  useEffect(() => {
    async function backRequest() {
      try {
        const horarioBack = await treinoHorarios()
        setHorarios(horarioBack.TREINO_HORARIOS)
      } catch (error) {
        message.error('Algo deu errado, tente novamente', 2)
        console.log(error)
      }
    }
    backRequest()
  }, [])

  async function handleSchedule(horario) {
    try {
      const alunoId = getAluno().ALUNO_INFO.ID_Aluno
      const trainingType = props.location.state.trainingType
      const treinoId = await treinoRegistra(
        alunoId,
        trainingType,
        horario.ID_Horario
      )
      history.push({
        pathname: '/countdownTraining',
        state: {
          trainingTime: horario,
          treinoId: treinoId,
        },
      })
    } catch (error) {
      message.error('Algo deu errado, tente novamente', 2)
      console.log(error)
      history.push('/trainingTypes')
    }
  }

  return (
    <div style={{ height: '100%' }}>
      <Header img="/images/user.jpg" name="Arthur Lima" icons={true} />
      <div className="TimeScheduleContainer">
        <div className="pageTitle">
          <IconContext.Provider value={{ size: '1.8em', color: '#632467' }}>
            <MdKeyboardArrowLeft
              style={{ cursor: 'pointer' }}
              onClick={() => history.push('/trainingTypes')}
            />
          </IconContext.Provider>

          <div>MARQUE SEU HORÁRIO</div>
        </div>
        {horarios &&
          horarios.map((horario, index) => {
            const horarioExibido = horario.Horario.slice(0, -3)
            return (
              <div
                key={index}
                className="horario"
                onClick={() => {
                  handleSchedule(horario)
                }}
              >
                <div>
                  <b>{horarioExibido}</b>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
