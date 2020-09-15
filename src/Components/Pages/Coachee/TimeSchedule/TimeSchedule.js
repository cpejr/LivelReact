import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import './TimeSchedule.css'
import {treinoHorarios, treinoRegistra} from '../../../../services/backEnd'
import {getAluno} from '../../../../services/auth'

import Header from '../../../Header'

import { IconContext } from "react-icons";
import { MdKeyboardArrowLeft } from "react-icons/md";


export default function TimeSchedule(props){

    const [horarios, setHorarios] = useState(["14:00", "15:00"])

    const history = useHistory()

    // useEffect(()=>{
        // async function backRequest(){
        //     try {
                // const horarioBack = await treinoHorarios()
                // setHorarios(["14:00", "15:00"])
        //     }
        //     catch(error) {
        //         alert(error)
        //     }
        // }
        // backRequest()
    // }, [])

    async function handleSchedule(horario){
        // const alunoId = getAluno().ALUNO_INFO.ID_Aluno
        // const trainingType = props.location.state.trainingType
        try{
            // const treinoId = await treinoRegistra(alunoId, trainingType, horario.ID_Horario)
            history.push({
                pathname: '/countdownTraining',
                state: {
                    trainingTime: horario,
                    treinoId: 16738
                }
            })
        }
        catch(error) {
            alert(error)
        }
    }



    return(
        <div style={{height: "100%"}} >
            <Header img={true} name={true} icons={true} />
            <div className="TimeScheduleContainer">
                <div className="pageTitle">
                <Link to='/trainingTypes'>
                    <IconContext.Provider value={{ size: '1.8em', color: "#632467"}}>
                        <MdKeyboardArrowLeft />
                    </IconContext.Provider>
                </Link>
                
                    <div>MARQUE SEU HORÁRIO</div>
                </div>
                {
                    horarios.map(horario => {
                        const horarioExibido = horario.Horario.slice(0, -3)
                        return(
                            <div className="horario" onClick={()=>{handleSchedule(horario)}}>
                                <div><b>{horarioExibido}</b></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}