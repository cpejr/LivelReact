import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import './Profile.css'

import Header from '../../../Header'
import ExitButton from './Elements/ExitButton'
import Choice from './Elements/Choice'
import Results from './Elements/Results'
import CurrentMonthResult from './Elements/CurrentMonth'
import LastMonthResult from './Elements/LastMonth'


export default function Profile(){

    const [active, setActive] = useState('RESULTADO');

    return(
        <div className="profile">
            <Header level={3} back={true} />
            <Choice resultados={false} active={active} setActive={setActive} />

            <div className="ProfileContainer">
                    {(active === 'RESULTADO') && <Results   />}
                    {(active === "LastMonth") && <LastMonthResult  />}
                    {(active === "CurrentMonth") && <CurrentMonthResult  />}

            </div>
            
            <div className="exitButton">
                <Link type="button" to="/trainingTypes">
                    <ExitButton />
                </Link>
            </div>
        </div>
    )

}
