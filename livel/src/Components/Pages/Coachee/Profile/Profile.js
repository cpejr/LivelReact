import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import './Profile.css'

import HeaderProfile from './Elements/HeaderProfile'
import ExitButton from './Elements/ExitButton'
import Choice from './Elements/Choice'
import Results from './Elements/Results'
import CurrentMonthResult from './Elements/CurrentMonth'
import LastMonthResult from './Elements/LastMonth'


export default function Profile(){

    const [active, setActive] = useState('RESULTADO');

    return(
        <div style={{height: "100%"}} >
      
            <HeaderProfile img="/images/user.jpg" level={7} back={true} />
            <Choice resultados={false} active={active} setActive={setActive} />

            <div className="ProfileContainer">

                    {(active === 'RESULTADO') && <Results   />}
                    {(active === "LastMonth") && <LastMonthResult  />}
                    {(active === "CurrentMonth") && <CurrentMonthResult  />}

            </div>
            
            <Link type="button" to="/trainingTypes">
                <ExitButton />
            </Link>
        </div>
    )

}
