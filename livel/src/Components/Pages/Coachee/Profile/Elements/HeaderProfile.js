import React from 'react'

import '../Profile.css'


export default function HeaderProfile(props){
    return (
        <div className="HeaderContainer">
            {(props.level!=null) &&
                <img src={props.level} alt="level"/>
            }
        </div>
    )
}