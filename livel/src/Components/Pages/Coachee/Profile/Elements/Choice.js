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
    width: 33%;
    font-size: 11px;
    font-family: sans-serif, Univers LT;
    font-stretch: condensed;
    color: #231F20;
    height: 100%;
    ${({ active}) =>
    active && 
    `
    font-size: 12px;
    font-family: sans-serif, Univers LT;
    font-stretch: condensed;
    font-weight: bold;
    color: #532166;
    background: white;
    border-bottom: 0.5mm solid purple;
    `
}
`;

const monthNames = ["Dezembro","Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho","Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];


const month = new Date()
const thisMonth =  monthNames[month.getMonth()+1]
const lastMonth = monthNames[month.getMonth()]



function TabGroup(props){
    return(
        <div className="FlexContainer">
                <Tab
                key ={"LastMonth"}
                active = {props.active === "LastMonth"}
                onClick={() => {props.setActive("LastMonth")}}
                > 
                    {lastMonth}
                </Tab>

                <Tab
                key ={"CurrentMonth"}
                active = {props.active === "CurrentMonth"}
                onClick={() => {props.setActive("CurrentMonth")}}
                > 
                    {thisMonth}
                </Tab>

                <Tab
                key ={"RESULTADO"}
                active = {props.active === "RESULTADO"}
                onClick={() => {props.setActive("RESULTADO")}}
                > 
                    Resultados
                </Tab>
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

