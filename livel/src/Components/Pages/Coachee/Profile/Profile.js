import React from 'react'
import {Link} from 'react-router-dom'

import './Profile.css'

import HeaderProfile from './Elements/HeaderProfile'
import ExitButton from './Elements/ExitButton'


// import PopUp from './Elements/PopUp'


export default function Profile(){
    return(
        <div style={{height: "100%"}} >
            <HeaderProfile img="/images/user.jpg" level={true} back={true} />
            <div className="ProfileContainer">
                {/* <div className="pageTitle">
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
                                <div className="horario">
                                    <div><b>{value}</b></div>
                                </div>
                            )
                        }
                    )
                } */}
            </div>
            <Link type="button" to="/trainingTypes">
                <ExitButton />
            </Link>
        </div>
    )

}