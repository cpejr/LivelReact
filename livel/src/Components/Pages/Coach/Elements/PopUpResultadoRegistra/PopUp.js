import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import {FacebookShareButton} from "react-share"; // pro post do facebook

import "./PopUp.css";


export default function PopUp() {

    let metricasAluno = {
        AlunoID: 'tetete',
        dataResultado: '07/08/2020',
        Peso: '',
        Altura: '',
        AlongamentoNivel: '',
        Abdominais: '',
        Flexoes: '',
        barra: '',
        Pescoco: '',
        Cintura: '',
        Quadril: '',
        Biceps: '',
        Coxa: '',
    }

    return (
        <div className="Modal">
            <div className="ContainerModal">
                <div className="titleResultadoRegitra">
                    <span>TESTE</span>
                </div>
                <form >
                    
                    
                    {/* // metricasAluno.map( (medidas) =>  */}
                        {/* // <div className="juninhoAlemao"> */}
                            {/* // <label>{medidas.AlunoID}</label> <input type="text" id={`${medidas.AlunoID}`} name={`${medidas.AlunoID}`} /> */}
                            <label>Data</label> <input type="text" id="data" name="data" />
                            <label>Peso</label> <input type="text" id="peso" name="peso" />
                            <label>Altura</label> <input type="text" id="altura" name="altura" />
                            <label>Alongamento Nivel</label> <input type="text" id="alogamento" name="Name" />
                            <label>Abdominais</label> <input type="text" id="Name" name="Name" />
                            <label>Flexões</label> <input type="text" id="Name" name="Name" />
                            <label>Barra</label> <input type="text" id="Name" name="Name" />
                            <label>Pescoço</label> <input type="text" id="Name" name="Name" />
                            <label>Cintura</label> <input type="text" id="Name" name="Name" />
                            <label>Quadril</label> <input type="text" id="Name" name="Name" />
                            <label>Biceps</label> <input type="text" id="Name" name="Name" />
                            <label>Coxa</label> <input type="text" id="Name" name="Name" />
                            
                        {/* // </div>
                    // )
                    // } */}
                </form>

            </div>
        </div>
    );
}
