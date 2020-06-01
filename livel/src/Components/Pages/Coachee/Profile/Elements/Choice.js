import React, { useState } from 'react'
import styled from 'styled-components'



import '../Profile.css'



const Tab = styled.button`
    background: #E6E6E6;
    transition: ease border-bottom 250ms;
    border: 0;
    border-bottom: 2px solid transparent;
    outline: 0;
    cursor: pointer;
    text-align: center;
    flex-grow: 1;
    font-size: 12px;
    font-family: sans-serif, Univers LT;
    font-stretch: condensed;
    font-weight: bold;
    color: #532166;
    ${({ active}) =>
    active && 
    `
    background: white;
    border-bottom: 0.5mm solid purple;
    `
}
`;
let lastMonth = "JANEIRO";
let thisMonth = "FEVEREIRO";

const abas = [lastMonth, thisMonth, 'RESULTADO'];

function TabGroup(props){
    return(
        <div className="FlexContainer">
            {abas.map(type => (
                <Tab
                key ={type}
                active = {props.active === type}
                onClick={() => {props.setActive(type)}}
                >
                    {type}
                </Tab>
            )) }
         </div>
    );
}



export default function Choice(props){
    return (
        <div className="choices">
            <div className="grayLine" />  
            <TabGroup  active={props.active} setActive={props.setActive} />
        </div>
    )
}    
