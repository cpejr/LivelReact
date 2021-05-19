import React, { useState, useEffect } from "react";

import ReactStars from "react-stars";

import "./CoachProfile.css";

import Header from "../../../Header";

import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

let ALUNO_INFO = {
  rate: 4,
};

export default function CoachProfile() {
  const [virgula, setvirgula] = useState(false);

    useEffect(()=>{
        if(ALUNO_INFO.rate === 0 || ALUNO_INFO.rate === 1 || ALUNO_INFO.rate === 2 || ALUNO_INFO.rate === 3 || ALUNO_INFO.rate === 4 || ALUNO_INFO.rate === 5){
            setvirgula(true);
        }
        else{
            setvirgula(false);
        }
    },[])


  return (
    <div style={{ height: "100%" }}>
      <Header img={true} name={true} coach={true} />
      <div className="grade">
        <span className="titleStars">Sua nota é:</span>
        <div className="starsrate">
          <ReactStars
            count={5}
            value={ALUNO_INFO.rate}
            size={64}
            color2={"#ffd700"}
            edit={false}
          />
        </div>
        <b>
          {virgula === true && `${ALUNO_INFO.rate}.0`}
          {virgula === false && `${ALUNO_INFO.rate}`}
        </b>

        <div>

          <Link className="buttonCoach" type="button" to="/coach">
            <FiChevronLeft size={60} color="#632467" />
          </Link>
        </div>
      </div>
    </div>
  );
}
