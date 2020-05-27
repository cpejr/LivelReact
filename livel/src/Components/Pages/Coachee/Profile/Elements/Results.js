import React from 'react'
import {FiCircle} from 'react-icons/fi';
// import { Link } from 'react-router-dom';

import '../Profile.css'
import { renderIntoDocument } from 'react-dom/test-utils';



export default function Results(props){
    return (
        <div className="ResultsContainer">
            <ul>
                <li className="ResultsForça">
                    forca
                </li>
                <li className="ResultsCardio" circle={true}>
                    {/* {this.isPositive : {true}} */}
                    cardio
                    <CircleResults />
                </li>
                <li className="ResultsPeso" circle={null}>
                    peso
                    <CircleResults />
                </li>
                <li className="ResultsGordura" circle={true}>
                    gordura
                    <CircleResults />
                </li>
            </ul>
        </div>
    )
}


function CircleResults(props){
    const isPositive = this.state.isPosite;
    return (
        <div>
            {isPositive
                ? <FiCircle size={50} color="#06BFB8" stroke-width="1px" />
                : <FiCircle size={50} color="#FF818B" stroke-width="1px" />
            }
        </div>
    );
}


// function CircleResults(props){
//     return (
//         <div>  
//             {/* 
//             JSX expression must have parents expressions, so 2 divs 
//             FF818B eh o vermelho
//             06BFB8 eh o azul-agua
//             */}
//             <div>
//             {(props.circle<0) &&
//                 <FiCircle size={50} color="#FF818B" stroke-width="1px" />
//             },
            
//             {(props.circle=> 0) &&
//                 <FiCircle size={50} color="#06BFB8" stroke-width="1px" />
//             }
//             </div>
//         </div>
//     )
// }
