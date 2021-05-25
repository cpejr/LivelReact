import React from "react";

import { useHistory } from "react-router-dom";

import { IconContext } from "react-icons";
import { IoIosArrowBack } from "react-icons/io";
import { getAluno } from "../../services/auth";

import "./Header.css";

export default function Header(props) {
  let history = useHistory();
  let aluno = getAluno();
  if (props.coach) {
    return (
      <div className="HeaderContainer">
        <div className="purpleLine" />

        <div className="CoachheaderContent">
          <img
            src={
              aluno.ALUNO_INFO && aluno.ALUNO_INFO.AlunoFoto
                ? `http://fitgroup.com.br/livel/fotos/${aluno.ALUNO_INFO.AlunoFoto}`
                : "images/avatar-icon.png"
            }
            alt="imagem"
            className="CoachimagemHeader"
            onClick={() => history.push("/profile")}
          />

          {props.name != null && (
            <div className="nameContainer">
              <div>COACH</div>
              <div
                className="Coachname"
                onClick={() => history.push("/profile")}
              >
                {aluno.ALUNO_INFO.AlunoNome}
              </div>
            </div>
          )}

          {props.level != null && (
            <img
              src={`/images/level/nivel${props.level}.png`}
              alt="level"
              className="level"
            />
          )}

          {props.icons != null && (
            <div>
              <img
                src="/images/bodyIcon.png"
                alt="icone1"
                style={{ marginRight: "16px", cursor: "pointer" }}
                onClick={() => history.push("/body")}
              />
              <img
                src="/images/rewardsIcon.png"
                alt="icone1"
                style={{ marginRight: "16px", cursor: "pointer" }}
                onClick={() => history.push("/rewards")}
              />
            </div>
          )}

          {props.back != null && (
            <IconContext.Provider value={{ size: "3em", color: "#632467", cursor: "pointer" }}>
              <IoIosArrowBack onClick={() => history.push("/trainingTypes")} />
            </IconContext.Provider>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="HeaderContainer">
        <div className="orangeLine" />

        <div className="headerContent">
          <img
            src={
              aluno.ALUNO_INFO && aluno.ALUNO_INFO.AlunoFoto
                ? `http://fitgroup.com.br/livel/fotos/${aluno.ALUNO_INFO.AlunoFoto}`
                : "images/avatar-icon.png"
            }
            alt="imagem"
            className="imagemHeader"
            onClick={() => history.push("/profile")}
          />

          {props.name != null && (
            <div className="name" onClick={() => history.push("/profile")}>
              {aluno.ALUNO_INFO.AlunoNome}
            </div>
          )}

          {props.level != null && (
            <img
              src={`/images/level/nivel${props.level}.png`}
              alt="level"
              className="level"
            />
          )}

          {props.icons != null && (
            <div>
              <img
                src="/images/bodyIcon.png"
                alt="icone1"
                style={{ marginRight: "16px", cursor: "pointer" }}
                onClick={() => history.push("/body")}
              />
              <img
                src="/images/rewardsIcon.png"
                style={{ cursor: "pointer" }}
                alt="icone1"
                onClick={() => history.push("/rewards")}
              />
            </div>
          )}

          {props.back != null && (
            <IconContext.Provider value={{ size: "3em", color: "#632467", cursor: "pointer" }}>
              <IoIosArrowBack onClick={() => history.push("/trainingTypes")} />
            </IconContext.Provider>
          )}
        </div>
      </div>
    );
  }
}
