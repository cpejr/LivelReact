import React from 'react'
import './TimeSchedule.css'

import Header from '../../../Header'

import { IconContext } from "react-icons";
import { MdKeyboardArrowLeft } from "react-icons/md";

const horarios = ["15:00", "16:30", "17:00"];

//Quando lincar com o back, pegar a imagem e passar como props para o Header

export default function TimeSchedule(){
    return(
        <div style={{height: "100%"}} >
            <Header img="/images/user.jpg" name="Arthur Lima" icons={true} />
            <div className="TimeScheduleContainer">
                <div className="pageTitle">
                <IconContext.Provider value={{ size: '1.8em'}}>
                    <MdKeyboardArrowLeft />
                </IconContext.Provider>
                    <div>MARQUE SEU HORÁRIO</div>
                </div>
                {
                    horarios.map(
                        (value) => {
                            return(
                                <div className="horario">
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