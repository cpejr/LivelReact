import React from 'react'

import {useHistory} from 'react-router-dom'

import { IconContext } from "react-icons";
import { IoIosArrowBack } from "react-icons/io";


import './Header.css'

export default function Header(props){
    let history = useHistory()

    return (
        <div className="HeaderContainer">

            <div className="orangeLine"/>

            <div className='headerContent'>
                {(props.img!=null) &&
                    <img src={props.img} alt="imagem" className="imagemHeader" onClick={()=>history.push('/profile')}/>
                }

                {(props.name!=null) &&
                    <div className="name" onClick={()=>history.push('/profile')}>{props.name}</div>
                }

                {(props.level!=null) &&
                    <img src={`/images/level/nivel${props.level}.png`} alt="level" className='level' />
                }

                {(props.icons!=null) &&
                    <div>
                        <Link className="button"  type="button" to="/rewards">
                        <img src='/images/icon1.png' alt="icone1" style={{marginRight: '16px'}} />
                        </Link>
                        <img src='/images/icon2.png' alt="icone1">
                    </div>
                }

                {(props.back!=null) &&
                    <IconContext.Provider value={{ size: '3em', color: "#632467" }}>
                        <IoIosArrowBack  onClick={()=>history.push('/trainingTypes')}/>
                    </IconContext.Provider>

                }

            </div>

        </div>
    )
}
