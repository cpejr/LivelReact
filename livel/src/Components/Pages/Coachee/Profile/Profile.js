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

// 

// const currentInformation = [peso, gordura, alongamento, altura, corrida, abdominal, flexao, barra, tempoCorrida, tempoAbdominal, tempoFlexao];


export default function Profile(){

    const [active, setActive] = useState('RESULTADO');
    // const [InfosActive] = useState(currentInformation[0]);

    return(
        <div style={{height: "100%"}} >
      
            <HeaderProfile img="/images/user.jpg" level={5} back={true} />
            <Choice resultados={false} active={active} setActive={setActive} />

            <div className="ProfileContainer">

                    {(active === 'RESULTADO') && <Results   />}
                    {(active === lastMonth) && <MonthlyResult  />}
                    {(active === thisMonth) && <MonthlyResult  />}
                    {/* <ChartResults /> */}

            </div>
            
            <Link type="button" to="/trainingTypes">
                <ExitButton />
            </Link>
        </div>
    )

}
//const tempoCorrida = { info: '10`', 
//                     top: '53%',
//                     left: '80%',
// }; 

// const tempoAbdominal = { info: '1`', 
//                     top: '63%', 
//                     left: '80%',
// };

// const tempoFlexao = { info: '1`', 
//                     ttop: '74%',
//                     left: '80%',
// };  

// const flexao = {    info: '20', 
//                     top: '74%',
//                     left: '80%',
// }; 

// const barra = {     info: '5', 
//                     top: '85%',
//                     left: '80%',
// }; 

// const peso = {      info: '80 kg', 
//                     top: '53%',
//                     left: '25%',
// };

// const gordura = {   info: '15,5 %', 
//                     top: '66%',
//                     left: '25%',
// };

// const alongamento = {info: 'médio', 
//                     top: '80%',
//                     left: '25%',
// }; 

// const altura = {    info: '1,79 m', 
//                     top: '94%',
//                     left: '25%',
// }; 

// const corrida = {   info: '2 km', 
//                     top: '53%',
//                     left: '80%',
// }; 

// const abdominal = { info: '30', 
//                     top: '63%',
//                     left: '80%',
// }; 