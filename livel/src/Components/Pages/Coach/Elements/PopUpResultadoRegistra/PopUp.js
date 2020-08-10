import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";

// import {FacebookShareButton} from "react-share"; // pro post do facebook

import "./PopUpRegisterResult.css";

export default function PopUp({functionState}) {
    let metricasAluno = {
        AlunoID: "tetete",
        dataResultado: "07/08/2020",
        Peso: "",
        Altura: "",
        AlongamentoNivel: "",
        Abdominais: "",
        Flexoes: "",
        barra: "",
        Pescoco: "",
        Cintura: "",
        Quadril: "",
        Biceps: "",
        Coxa: "",
    };

    return (
        <div className="Modal">
            <div className="ContainerModal">
                <div className="ClosePopUp2"
                    onClick={() => functionState(false)}
                >
                    <AiFillCloseCircle size={35} />
                </div>
                <div className="titleResultadoRegitra">
                    <span>Registro do Treino</span>
                </div>
                <form className="Form_treino">
                    <div className="alunoID">
                        <label>AlunoID:</label>
                        <input
                            type="text"
                            id="alunoID"
                            name="inp_alunoID"
                        ></input>
                    </div>
                    <div className="div_data">
                        <label>Data:</label>
                        <input type="text" id="data" name="inp_data" />
                    </div>
                    <div className="div_peso">
                        <label>Peso:</label>
                        <input type="text" id="peso" name="inp_peso" />
                    </div>
                    <div className="div_altura">
                        <label>Altura:</label>
                        <input type="text" id="altura" name="inp_altura" />
                    </div>
                    <div className="div_along">
                        <label>Alongam. Nivel:</label>
                        <input type="text" id="alogamento" name="inp_along" />
                    </div>
                    <div className="div_abno">
                        <label>Abdominais:</label>
                        <input type="text" id="Name" name="inp_abno" />
                    </div>
                    <div className="div_flexo">
                        <label>Flexões:</label>
                        <input type="text" id="Name" name="inp_flex" />
                    </div>
                    <div className="div_bar">
                        <label>Barra:</label>
                        <input type="text" id="Name" name="inp_bar" />
                    </div>
                    <div className="div_neck">
                        <label>Pescoço:</label>
                        <input type="text" id="Name" name="inp_neck" />
                    </div>
                    <div className="div_cintura">
                        <label>Cintura:</label>
                        <input type="text" id="Name" name="inp_cintura" />
                    </div>
                    <div className="div_quadril">
                        <label>Quadril:</label>
                        <input type="text" id="Name" name="inp_quadril" />
                    </div>
                    <div className="div_biceps">
                        <label>Biceps:</label>
                        <input type="text" id="Name" name="inp_biceps" />
                    </div>
                    <div className="div_coxa">
                        <label>Coxa:</label>
                        <input type="text" id="Name" name="inp_coxa" />
                    </div>
                    <div className="button_submit">
                        <button className="button">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
