import React, { Component } from "react";
import "../Profile.css";

let peso = "180 kg";
let gordura = "19.5 %";
let alongamento = "bom";
let altura = "1,20 m";
let corrida = "0 km";
let abdominal = "130";
let flexao = "120";
let barra = "50";

let tempoCorrida = "10`";
let tempoAbdominal = "1`";
let tempoFlexao = "1`";

let score = "55";

const biceps = {
  value: "30 cm",
  description: "bíceps",
  bottom: "72%",
  left: "81%",
};
const coxa = {
  value: "30 cm",
  description: "coxa",
  left: "0%",
  bottom: "32%",
};
const cintura = {
  value: "30 cm",
  description: "cintura",
  bottom: "57%",
  left: "0%",
};
const pescoco = {
  value: "30 cm",
  description: "pescoço",
  left: "0%",
  bottom: "80%",
};
const quadril = {
  value: "30 cm",
  description: "quadril",
  left: "81%",
  bottom: "48%",
};

function descriptionStyle(style_bottom, style_left) {
  return {
    bottom: style_bottom,
    left: style_left,
    width: "60px",
    position: "absolute",
    fontSize: "9px",
    fontFamily: "sans-serif, Univers LT",
    fontStretch: "condensed",
    color: "#676767",
    fontWeight: "bold",
  };
}

const bodySubtitles = [quadril, coxa, cintura, pescoco, biceps];

const BodyResult = { img: "/images/profile/body.png" };

const Abdominais = {
  img: "/images/profile/abdominais.png",
  value: abdominal,
  time: "(" + tempoAbdominal + ")",
};
const Alongamento = {
  img: "/images/profile/alongamento.png",
  value: alongamento,
};
const Altura = { img: "/images/profile/altura.png", value: altura };
const Barra = { img: "/images/profile/barra.png", value: barra };
const Corrida = {
  img: "/images/profile/corrida.png",
  value: corrida,
  time: "(" + tempoCorrida + ")",
};
const Peso = { img: "/images/profile/peso.png", value: peso };
const Flexao = {
  img: "/images/profile/flexoes.png",
  value: flexao,
  time: "(" + tempoFlexao + ")",
};
const Gordura = {
  img: "/images/profile/porcentagemGordura.png",
  value: gordura,
};
const LittlePurple = { img: "/images/profile/purpleline.png" };

const BigPurple = { img: "/images/profile/purpleL.png" };

const listaLeft = [Peso, Gordura, Alongamento, Altura];
const listaRight = [Corrida, Abdominais, Flexao, Barra];

class MonthlyResultImages extends Component {
  render() {
    return (
      <>
        <div className="bodyData">
          <div className="bodyAlign">
            <div className="responsiveBody">
              <img
                src={BodyResult.img}
                alt="bodyResults"
                className="BodyResultClass"
              />
              {bodySubtitles.map((part, index) => {
                return (
                  <div
                    key={index}
                    style={descriptionStyle(part.bottom, part.left)}
                  >
                    <span className="valueSubtitles">{part.value}</span>
                    <p className="bodyPart">{part.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mainData">
          <div className="leftSide">
            <ul className="list">
              {listaLeft.map((left, index) => {
                return (
                  <li key={index} className="icons">
                    <img className="iconList" alt="iconlist" src={left.img} />
                    <span className="valueStyled">{left.value}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="right">
            <div className="thePurples">
              <img
                className="littlePurple"
                alt="purpleDivider"
                src={LittlePurple.img}
              />
              <img
                className="bigPurple"
                alt="purpleDivider"
                src={BigPurple.img}
              />
              <strong className="purpleScore">Score total: {score}</strong>
            </div>

            <div className="rightSide">
              <ul className="list">
                {listaRight.map((right, index) => {
                  return (
                    <li key={index} className="icons">
                      <img
                        className="iconList"
                        alt="iconList"
                        src={right.img}
                      />
                      <span className="valueStyled">{right.value}</span>
                      <span className="timeSubtitles">{right.time}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default function CurrentMonthResult() {
  return (
    <div className="BodyResultContainer">
      <MonthlyResultImages />
    </div>
  );
}
