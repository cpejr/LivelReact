import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import './TimeSchedule.css'
import {getHorarios, registroTreino} from '../../../../services/backEnd'
import {getAluno} from '../../../../services/auth'

import Header from '../../../Header'

import { IconContext } from "react-icons";
import { MdKeyboardArrowLeft } from "react-icons/md";

const horarios = ["15:00", "16:30", "17:00"];

export default function TimeSchedule(props){

    // const [horarios, setHorarios] = useState([])

    const history = useHistory()

    useEffect(()=>{
        async function backRequest(){
            try {
                const horarioBack = await getHorarios()
                console.log(horarioBack)
                //Checar se vem na forma de vetor (se n, transformar em vetor)
                // setHorarios(horarioBack)
            }
            catch(error) {
                alert(error)
            }
        }
        backRequest()
    }, [])

    async function handleSchedule(time){
        const alunoId = getAluno().ALUNO_INFO.ID_Aluno
        const trainingType = props.location.state
        try{
            const treinoId = await registroTreino(alunoId, trainingType, time)
            history.push({
                pathname: '/countdownTraining',
                state: {
                    trainingTime: time,
                    treinoId: treinoId
                }
            })
        }
        catch(error) {
            alert(error)
        }
    }



    return(
        <div style={{height: "100%"}} >
            <Header img="/images/user.jpg" name="Arthur Lima" icons={true} />
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
                    horarios.map(
                        (value) => {
                            return(
                                <div className="horario" onClick={()=>{handleSchedule(value)}}>
                                    <div><b>{value}</b></div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )

}