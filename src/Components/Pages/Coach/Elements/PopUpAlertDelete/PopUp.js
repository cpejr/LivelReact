import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import {FaExclamationTriangle} from 'react-icons/fa'

// import {FacebookShareButton} from "react-share"; // pro post do facebook

import "./PopUpAlertDelete.css";

import { message } from 'antd';

export default function PopUp({functionState}) {

    return (
        <div className="Modal">
            <div className="ContainerModal">
                <div className="ClosePopUp2"
                    onClick={() => functionState(false)}
                >
                    <AiFillCloseCircle size={35} />
                </div>
                {/* corlaranja:'#0d98f00' corroxa:'#632467'*/}
                <FaExclamationTriangle  size ={190} color='#632467' style={{}} className='exclamation'/>

                <div className="text">Tem certeza que deseja apagar o aluno?</div>

                <div className="buttons">
                    <button className="button" onClick={() => {functionState(false); message.success("Usuário deletado com sucesso", 2);}}>Sim</button>
                    <button className="button" onClick={() => functionState(false)}>Não</button>
                </div>

            </div>
        </div>
    );
}
