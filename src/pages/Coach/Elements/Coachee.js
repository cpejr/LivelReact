import React, { Component, useState } from "react";
// Teste icons
import {
  FaArrowsAltH,
  FaTrashAlt,
  FaCheck,
  FaAngleRight,
} from "react-icons/fa";

import PopUpChangeCoach from "./PopUpChangeCoach/PopUp";
import PopUpRegisterResult from "./PopUpResultadoRegistra/PopUp";
import PopUpAlertDelete from "./PopUpAlertDelete/PopUp";

//  Teste
import {
  SwipeableListItem,
  ActionAnimations,
} from "@sandstreamdev/react-swipeable-list";
import "@sandstreamdev/react-swipeable-list/dist/styles.css";

class LivelOne extends Component {
  render() {
    return (
      <>
        <div className="livelOneStyled">
          <div className="livelStyled"> Livel</div>{" "}
          <div className="OneStyled"> ONE</div>
        </div>
      </>
    );
  }
}

const Restricao = "/images/Coach/restricao2.svg";

const Aerobico = "/images/Coach/aerobico.png";

function Train_ID2Style(Train_ID) {
  if (Train_ID === 1) {
    return { color: "#FF0000", borderColor: "#FF0000" };
  } else if (Train_ID === 2) {
    return { color: "#ADB4B5", borderColor: "#ADB4B5" };
  } else if (Train_ID === 3) {
    return { color: "#61A64C", borderColor: "#61A64C" };
  }
}

function Train_ID2Name(Train_ID) {
  if (Train_ID === 1) {
    return "Superior";
  } else if (Train_ID === 2) {
    return "Inferior";
  } else if (Train_ID === 3) {
    return "Resutado";
  } else {
    return "Ferrou";
  }
}

function Train_ID2Function(Train_ID, setIsPopUpRegisterResultVisible) {
  if (Train_ID === 3) {
    setIsPopUpRegisterResultVisible(true);
  } else {
    return "Ferrou";
  }
}

function swipeLeftIcons(
  isPopUpChangeCoachVisible,
  setIsPopUpChangeCoachVisible,
  setIsPopUpAlertDelete,
  isPopUpAlertDelete
) {
  const iconsSize = 25;

  function return_zIndexes() {
    let outsideContent = document.getElementsByClassName(
      "swipeable-list-item__content"
    );
    let insideContent = document.getElementsByClassName(
      "swipeable-list-item__content-left"
    );
    let coacheeInfoContent = document.getElementsByClassName("coacheeInfo");

    for (let item of outsideContent) {
      item.style.zIndex = 0;
    }

    for (let item of coacheeInfoContent) {
      item.style.zIndex = 0;
    }
    for (let item of insideContent) {
      item.style.zIndex = -1;
    }
  }

  return (
    <div className="swipeLeft" id="swp_left">
      <div
        className="fistIconSwipeLeft"
        onClick={() => {
          setIsPopUpChangeCoachVisible(!isPopUpChangeCoachVisible);
        }}
      >
        <FaArrowsAltH size={iconsSize} />
      </div>

      <div
        className="secondIconSwipeLeft"
        onClick={() => {
          setIsPopUpAlertDelete(!isPopUpAlertDelete);
        }}
      >
        <FaTrashAlt size={iconsSize} />
      </div>
    </div>
  );
}

function AllCoachees(props) {
  const [isPopUpChangeCoachVisible, setIsPopUpChangeCoachVisible] =
    useState(false);

  const [isPopUpRegisterResultVisible, setIsPopUpRegisterResultVisible] =
    useState(false);

  const [isPopUpAlertDelete, setIsPopUpAlertDelete] = useState(false);

  const [isCheck, setIsCheck] = useState(false);

  const styleCheck = [
    {
      margin: "0 10px",
      color: "#4a1768",
    },
    {
      margin: "0 10px",
      color: "#bbb",
    },
  ];

  function swipingLeft() {
    let outsideContent = document.getElementsByClassName(
      "swipeable-list-item__content"
    );
    let insideContent = document.getElementsByClassName(
      "swipeable-list-item__content-left"
    );

    for (let item of outsideContent) {
      item.style.zIndex = 0;
    }

    for (let item of insideContent) {
      item.style.zIndex = 1;
    }
  }

  return (
    <>
      <div className="PopUp">
        {isPopUpChangeCoachVisible ? (
          <PopUpChangeCoach functionState={setIsPopUpChangeCoachVisible} />
        ) : null}
        {isPopUpRegisterResultVisible ? (
          <PopUpRegisterResult
            functionState={setIsPopUpRegisterResultVisible}
          />
        ) : null}
        {isPopUpAlertDelete ? (
          <PopUpAlertDelete functionState={setIsPopUpAlertDelete} />
        ) : null}
      </div>
      <SwipeableListItem
        blockSwipe={false}
        threshold={0.1}
        swipeLeft={{
          content: swipeLeftIcons(
            isPopUpChangeCoachVisible,
            setIsPopUpChangeCoachVisible,
            setIsPopUpAlertDelete,
            isPopUpAlertDelete
          ),
          actionAnimation: ActionAnimations["NONE"],
        }}
      >
        <FaCheck
          size={30}
          style={isCheck ? styleCheck[0] : styleCheck[1]}
          onClick={() => setIsCheck(!isCheck)}
        />

        <img
          src={props.person.TreinoAlunoFoto}
          alt="imagem coachee"
          className="fotoCoachee"
          style={Train_ID2Style(props.person.TreinoTipoID)}
          onClick={() =>
            Train_ID2Function(
              props.person.TreinoTipoID,
              setIsPopUpRegisterResultVisible
            )
          }
        />

        <div className="coacheeInfo">
          <div className="writtenInfos">
            <div className="coacheeName">{props.person.TreinoAlunoNome}</div>
            <div
              className="coacheeExercise"
              style={Train_ID2Style(props.person.TreinoTipoID)}
            >
              {Train_ID2Name(props.person.TreinoTipoID)}
            </div>
          </div>

          <div className="coachee_icons">
            {props.person.TreinoAlunoTipo === 1 && <LivelOne />}
            {props.person.TreinoAlunoRestricoes !== 0 && (
              <img
                src={Restricao}
                alt="imagem coachee"
                className="coacheeIcons"
              />
            )}
            {props.person.TreinoTipoID === 3 && (
              <img
                src={Aerobico}
                alt="imagem coachee"
                className="coacheeIcons"
              />
            )}
            <FaAngleRight size={35} color="#ADB4B5" />
          </div>
        </div>
      </SwipeableListItem>
    </>
  );
}

export default function Coachee(props) {
  return (
    <>
      <AllCoachees person={props.data} />
    </>
  );
}
