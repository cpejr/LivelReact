import React, {useState} from 'react'

import {Link} from 'react-router-dom'

import './TrainingTypes.css'

import Header from '../../../Header'
import PopUpPeriodizacao from './Elements/PopUpPeriodizacao'
import PopUpCadeiaExcentrica from './Elements/PopUpCadeiaExcentrica'
import PopUpCadeiaConcentrica from './Elements/PopUpCadeiaConcentrica'


export default function TrainingTypes(){

    const [treinosMes, setTreinosMes] = useState(6);


    return(
        <div style={{height: "100%"}}>
            <Header img="/images/user.jpg" name="Arthur Lima" icons={true} />
            <div className="popUpsContainer">
                <PopUpPeriodizacao/>
                <PopUpCadeiaExcentrica/>
                <PopUpCadeiaConcentrica/>
            </div>
            <div className="trainingsContainer">
                <Link className='mainButton'>
                    <div><b>RESULTADO</b></div>
                </Link>
                <Link className="secondaryButton">
                    <div><b>TREINO SUPERIOR</b></div>
                </Link>
                <Link className="secondaryButton">
                    <div><b>TREINO INFERIOR</b></div>
                </Link>
            </div>
            <div className="monthReport">
                <div className="imgSide" style={{backgroundImage: `url(/images/circle/${treinosMes}-12.png)`}}>
                        VOCE TREINOU
                </div>
                <div className="medalSide">

                </div>
            </div>
        </div>
    )
}