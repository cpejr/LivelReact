import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Profile.css";

import Header from "../../../Header";
import Choice from "./Elements/Choice";
import Results from "./Elements/Results";
import CurrentMonthResult from "./Elements/CurrentMonth";
import LastMonthResult from "./Elements/LastMonth";
import { logout } from "../../../../services/auth";

export default function Profile() {
  const [active, setActive] = useState("RESULTADO");
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push("/");
  };

  return (
    <div className="profile">
      <Header level={3} back={true} />
      <Choice resultados={false} active={active} setActive={setActive} />

      <div className="ProfileContainer">
        {active === "RESULTADO" && <Results />}
        {active === "LastMonth" && <LastMonthResult />}
        {active === "CurrentMonth" && <CurrentMonthResult />}
      </div>

      <div className="footerprofile">
        <div className="exitButtonContainer" onClick={handleLogout}>
          SAIR
        </div>
      </div>
    </div>
  );
}
