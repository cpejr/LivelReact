import React from 'react'
import { Link } from 'react-router-dom';

import{FiChevronLeft} from 'react-icons/fi';

import '../Profile.css'

export default function HeaderProfile(props){
    return (
        <div className="headerContainer">

            <div className="orangeLine"/>

            <div className='headerContent'>
                {(props.img!=null) &&
                    <img src={props.img} alt="imagem" className="imagemHeader" />
                }

                {(props.level!=null) &&
                    <img src='/images/Level.png' alt="level"className="levelEscala"/>
                }

                {(props.back!=null) && //rewards and profile
                    <div>
                        <Link className="button"  type="button" to="/trainingTypes">
                            <FiChevronLeft size={18} color="#632467" />
                        </Link>
                    </div>
                }

            </div>

        </div>
    )
}    
