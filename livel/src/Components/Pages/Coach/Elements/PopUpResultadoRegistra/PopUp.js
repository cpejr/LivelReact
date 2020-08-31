import React from "react";
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

    function funcao_enviar(event) {
        event.preventDefault();
        //o objeto metricasAluno tá preenchido
    }
    return (
        <div className="Modal1">
            <div className="ContainerModal">
                <div
                    className="ClosePopUpRegister"
                    onClick={() => functionState(false)}
                >
                    <AiFillCloseCircle size={35} />
                </div>
                <div className="titleResultadoRegitra">
                    <span>Registro do Treino</span>
                </div>
                <form className="Form_treino">
                    <div className="dadosGerais">
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
                    <div className="dadosGerais">
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
                    <div className="peso">
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
                    <div className="altura">
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
                    <div className="numeroExercicios" >
                        <label>Alongam. Nivel:</label>
                        <input
                            type="text"
                            id="alogamento"
                            name="inp_along"
                            onChange={(e) =>
                                (metricasAluno.AlongamentoNivel =
                                    e.target.value)
                            }
                        />
                    </div>
                    <div className="numeroExercicios" >
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
                    <div className="numeroExercicios">
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
                    <div className="numeroExercicios">
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
                    <div className="medidasCorpo">
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
                    <div className="medidasCorpo">
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
                    <div className="medidasCorpo">
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
                    <div className="medidasCorpo">
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
                    <div className="medidasCorpo">
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

                        <button
                            className="button"
                            onClick={(event) => funcao_enviar(event)}
                        >
                            Enviar
                        </button>
                </form>
            </div>
        </div>
    );
}
