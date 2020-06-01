import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import './Profile.css'

import HeaderProfile from './Elements/HeaderProfile'
import ExitButton from './Elements/ExitButton'
import Choice from './Elements/Choice'
import Results from './Elements/Results'
import MonthlyResult from './Elements/MonthlyResult'


let lastMonth = "JANEIRO";
let thisMonth = "FEVEREIRO";



export default function Profile(){
    const [active, setActive] = useState('RESULTADO');
    return(
        <div style={{height: "100%"}} >
      
            <HeaderProfile img="/images/user.jpg" level={5} back={true} />
            <Choice janeiro={true} fevereiro={false} resultados={false} active={active} setActive={setActive} />

            <div className="ProfileContainer">
                    {(active === 'RESULTADO') && <Results />}
                    {(active === 'lastMonth') && <MonthlyResult />}
                    {(active === 'thisMonth') && <MonthlyResult />}
            </div>
            
            <Link type="button" to="/trainingTypes">
                <ExitButton />
            </Link>
        </div>
    )

}