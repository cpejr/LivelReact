import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";

// import {FacebookShareButton} from "react-share"; // pro post do facebook

import "./PopUpRegisterResult.css";

export default function PopUp({ functionState }) {
    let metricasAluno = {
        AlunoID: "",
        dataResultado: "",
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

    function funcao_enviar() {
        console.log(metricasAluno);
    }
    return (
        <div className="Modal">
            <div className="ContainerModal">
                <div
                    className="ClosePopUp2"
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
                            onChange={(e) =>
                                (metricasAluno.AlunoID = e.target.value)
                            }
                        ></input>
                    </div>
                    <div className="div_data">
                        <label>Data:</label>
                        <input
                            type="text"
                            id="data"
                            name="inp_data"
                            onChange={(e) =>
                                (metricasAluno.dataResultado = e.target.value)
                            }
                        />
                    </div>
                    <div className="div_peso">
                        <label>Peso:</label>
                        <input
                            type="text"
                            id="peso"
                            name="inp_peso"
                            onChange={(e) =>
                                (metricasAluno.Peso = e.target.value)
                            }
                        />
                    </div>
                    <div className="div_altura">
                        <label>Altura:</label>
                        <input
                            type="text"
                            id="altura"
                            name="inp_altura"
                            onChange={(e) =>
                                (metricasAluno.Altura = e.target.value)
                            }
                        />
                    </div>
                    <div className="div_along">
                        <label>Alongam. Nivel:</label>
                        <input
                            type="text"
                            id="alogamento"
                            name="inp_along"
                            onChange={(e) =>
                                (metricasAluno.AlongamentoNivel = e.target.value)
                            }
                        />
                    </div>
                    <div className="div_abno">
                        <label>Abdominais:</label>
                        <input
                            type="text"
                            id="Name"
                            name="inp_abno"
                            onChange={(e) =>
                                (metricasAluno.Abdominais = e.target.value)
                            }
                        />
                    </div>
                    <div className="div_flexo">
                        <label>Flexões:</label>
                        <input
                            type="text"
                            id="Name"
                            name="inp_flex"
                            onChange={(e) =>
                                (metricasAluno.Flexoes = e.target.value)
                            }
                        />
                    </div>
                    <div className="div_bar">
                        <label>Barra:</label>
                        <input
                            type="text"
                            id="Name"
                            name="inp_bar"
                            onChange={(e) =>
                                (metricasAluno.barra = e.target.value)
                            }
                        />
                    </div>
                    <div className="div_neck">
                        <label>Pescoço:</label>
                        <input
                            type="text"
                            id="Name"
                            name="inp_neck"
                            onChange={(e) =>
                                (metricasAluno.Pescoco = e.target.value)
                            }
                        />
                    </div>
                    <div className="div_cintura">
                        <label>Cintura:</label>
                        <input
                            type="text"
                            id="Name"
                            name="inp_cintura"
                            onChange={(e) =>
                                (metricasAluno.Cintura = e.target.value)
                            }
                        />
                    </div>
                    <div className="div_quadril">
                        <label>Quadril:</label>
                        <input
                            type="text"
                            id="Name"
                            name="inp_quadril"
                            onChange={(e) =>
                                (metricasAluno.Quadril = e.target.value)
                            }
                        />
                    </div>
                    <div className="div_biceps">
                        <label>Biceps:</label>
                        <input
                            type="text"
                            id="Name"
                            name="inp_biceps"
                            onChange={(e) =>
                                (metricasAluno.Biceps = e.target.value)
                            }
                        />
                    </div>
                    <div className="div_coxa">
                        <label>Coxa:</label>
                        <input
                            type="text"
                            id="Name"
                            name="inp_coxa"
                            onChange={(e) =>
                                (metricasAluno.Coxa = e.target.value)
                            }
                        />
                    </div>
                    <div className="button_submit">
                        <button
                            onClick={funcao_enviar}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
