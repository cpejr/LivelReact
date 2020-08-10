import React, { Component, useState } from "react";
// Teste icons
import { FaArrowsAltH, FaTrashAlt, FaCheck, FaAngleRight } from "react-icons/fa";


import PopUpChangeCoach from './PopUpChangeCoach/PopUp';
import PopUpRegisterResult from './PopUpResultadoRegistra/PopUp';
import PopUpAlertDelete from './PopUpAlertDelete/PopUp'

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

function Train_ID2Style(Train_ID){
    if (Train_ID === 1) {
        /* return "Superior";  Vermelha*/
        return {color:'#FF0000', borderColor:'#FF0000'}
    } else if (Train_ID === 2) {
        /* return "Inferior"; Cinza */
        return {color:'#ADB4B5',borderColor: '#ADB4B5'}
    } else if (Train_ID === 3) {
        /* return "Resutado"; Verde */
        return {color:'#61A64C', borderColor:'#61A64C'}
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

function Train_ID2Function(Train_ID,  setIsPopUpRegisterResultVisible){
    if (Train_ID === 3) {
    setIsPopUpRegisterResultVisible(true);
    
    } else {
        return "Ferrou";
    }
}


function swipeLeftIcons(isPopUpChangeCoachVisible, setIsPopUpChangeCoachVisible, setIsPopUpAlertDelete,isPopUpAlertDelete ) {
    const iconsSize = 25;
    
    function return_zIndexes(){
        document.getElementsByClassName('swipeable-list-item__content')[0].style.zIndex=11 ;
        document.getElementsByClassName('swipeable-list-item__content-left')[0].style.zIndex=-1;
    }

    return (
        <div className="swipeLeft" id="swp_left">
            {/* Primeiro ícone - duas setas */}
            <div className="fistIconSwipeLeft" onClick={ () =>{ 
                return_zIndexes();
                setIsPopUpChangeCoachVisible(!isPopUpChangeCoachVisible)}}>
                <FaArrowsAltH size={iconsSize} />
            </div>

            {/* Segundo ícone - Lixeira */}
            <div className="secondIconSwipeLeft" onClick={() =>{
                return_zIndexes();
                setIsPopUpAlertDelete(!isPopUpAlertDelete);
            }}>
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

    const [isPopUpChangeCoachVisible, setIsPopUpChangeCoachVisible] = useState(false);

    const [isPopUpRegisterResultVisible, setIsPopUpRegisterResultVisible] = useState(false);

    const [isPopUpAlertDelete, setIsPopUpAlertDelete]= useState(false);


    const [isCheck, setIsCheck] = useState(false);

    function function_check(isCheck){
        setIsCheck(!isCheck);
    }

    function function_swipe_left(){
        document.getElementsByClassName('swipeable-list-item__content')[0].style.zIndex=11 ;
        document.getElementsByClassName('swipeable-list-item__content-left')[0].style.zIndex=10;
    }

    return (
        <>
        <div className="PopUp">
                {isPopUpChangeCoachVisible ? <PopUpChangeCoach functionState = {setIsPopUpChangeCoachVisible}/> : null}
                {isPopUpRegisterResultVisible ? <PopUpRegisterResult functionState = {setIsPopUpRegisterResultVisible}/> : null}
                {isPopUpAlertDelete ? <PopUpAlertDelete functionState = {setIsPopUpAlertDelete}/> : null}
                
        </div>
        <SwipeableListItem
            blockSwipe={false}
            threshold={0.1}
            /* scrollStartThreshold= {0.2} Acredito que nao ta funnfando
            swipeStartThreshold= {0.2} */
            swipeLeft={{
                content: swipeLeftIcons(isPopUpChangeCoachVisible, setIsPopUpChangeCoachVisible, setIsPopUpAlertDelete,isPopUpAlertDelete ),
                action: () => function_swipe_left(),
                actionAnimation: ActionAnimations["NONE"],
            }}
            swipeRight={{
                content: swipeRightIcons(),
                action: () => function_check(isCheck),
                actionAnimation: ActionAnimations["RETURN"],
            }}
            onSwipeProgress={(progress) =>
                progress > 50 ? (progress = 50) : progress
            }
        >

            {isCheck &&
                        <FaCheck size={25} style={{margin:'0 10px'}}/>}
            
            <img
                src={props.person.TreinoAlunoFoto}
                alt="imagem coachee"
                className="fotoCoachee"
                style={Train_ID2Style(props.person.TreinoTipoID)}
                onClick={() => Train_ID2Function(props.person.TreinoTipoID,setIsPopUpRegisterResultVisible)}
            />
            
            <div className="coacheeInfo">
                <div className="writtenInfos">
                    <div className="coacheeName">
                        {props.person.TreinoAlunoNome}
                    </div>
                    <div className="coacheeExercise" style={Train_ID2Style(props.person.TreinoTipoID)}>
                        {Train_ID2Name(props.person.TreinoTipoID)}
                    </div>
                </div>

                <div className="coachee_icons" >
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
                    <FaAngleRight size={20} color='#ADB4B5'/>
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
