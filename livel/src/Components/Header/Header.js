import React from 'react'
import { Link } from 'react-router-dom';

import{FiChevronLeft} from 'react-icons/fi';

import './Header.css'

export default function Header(props){
    return (
        <div className="HeaderContainer">

            <div className="orangeLine"/>

            <div className='headerContent'>
                {(props.img!=null) &&
                    <img src={props.img} alt="imagem" className="imagemHeader" />
                }

                {(props.name!=null) &&
                    <div className="name">{props.name}</div>
                }

                {(props.level!=null) &&
                    <img src={props.level} alt="level"/>
                }

                {(props.icons!=null) &&
                    <div>
                        <img src='/images/icon1.png' alt="icone1" style={{marginRight: '16px'}} />
                        <img src='/images/icon2.png' alt="icone1"/>
                    </div>
                }

                {(props.back!=null) &&
                    <div>
                        <Link className="button" to="/trainingTypes" />
                            <button onClick={goBack} type="button">
                                <FiChevronLeft size={18} color="#632467" />
                            </button>
                    </div>
                }

            </div>

        </div>
    )
}

// export function goBack(){
//     localStorage.clear();

//     // history.push('/');
// }