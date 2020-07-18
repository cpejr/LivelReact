import React, { Component } from "react";

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

function Train_ID2Name(Train_ID){

    if (Train_ID === 1){
        return 'Superior'
    }else  if (Train_ID === 2){
        return 'Inferior'
    }else if (Train_ID ===3 ){
        return 'Resutado'
    }else {
        return 'Ferrou'
    }
}

function AllCoachees(props) {
    return (
        <div className="coacheesHours">
            <div className="coacheeContainer">
                <div className="checkCoachee"></div>
                <div className="grayLine" />
                <img
                    src={props.person.TreinoAlunoFoto}
                    alt="imagem coachee"
                    className="fotoCoachee"
                />

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
        </div>
    );
}

export default function Coachee(props) {
    return (
        <>
            <AllCoachees person={props.data} />
            {console.log(props.active + " o props .active")}
        </>
    );
}
