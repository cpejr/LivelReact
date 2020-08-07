import React, { Component, useState } from "react";
// Teste icons
import { FaArrowsAltH, FaTrashAlt, FaCheck } from "react-icons/fa";

import PopUp from './PopUp/PopUp';

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

const Restricao = "/images/Coach/restricao.png";

const Aerobico = "/images/Coach/aerobico.png";


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

function swipeLeftIcons({isModalVisible, setisModalVisible}) {
    const iconsSize = 25;

    return (
        <div className="swipeLeft">
            {/* Primeiro ícone - duas setas */}
            <div className="fistIconSwipeLeft" onClick={ () => console.log('ahahahaha') }>
                <FaArrowsAltH size={iconsSize} />
            </div>

            {/* Segundo ícone - Lixeira */}
            <div className="secondIconSwipeLeft">
                <FaTrashAlt size={iconsSize} />
            </div>
        </div>
    );
}

function swipeRightIcons() {
    const iconsSize = 25;

    return (
        <div className="swipeRight">
            {/* Primeiro ícone - Check */}
            <div className="fistIconSwipeRigth">
                <FaCheck size={iconsSize} />
            </div>
        </div>
    );
}
 
function AllCoachees(props) {

    const [isModalVisible, setisModalVisible] = useState(false);

    return (
        <>  
            <PopUp />
            <div className="PopUp">
                    {isModalVisible ? <PopUp /> : null}
            </div>

            <SwipeableListItem
                blockSwipe={false}
                threshold={0.1}
    /*             scrollStartThreshold= {0.2} Acredito que nao ta funnfando
                swipeStartThreshold= {0.2} */
                swipeLeft={{
                    content: swipeLeftIcons(isModalVisible, setisModalVisible),
                    action: () => console.info("swipe action triggered"),
                    actionAnimation: ActionAnimations["NONE"],
                }}
                swipeRight={{
                    content: swipeRightIcons(),
                    action: () => console.info("swipe action triggered"),
                    actionAnimation: ActionAnimations["NONE"],
                }}
                onSwipeProgress={(progress) =>
                    progress > 50 ? (progress = 50) : progress
                }
            >
                {/* console.info(`Swipe progress: ${progress}%`) */}
                <img
                    src={props.person.TreinoAlunoFoto}
                    alt="imagem coachee"
                    className="fotoCoachee"
                />

                <div className="coacheeInfo">
                    <div className="writtenInfos">
                        <div className="coacheeName">
                            {props.person.TreinoAlunoNome}
                        </div>
                        <div className="coacheeExercise">
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
