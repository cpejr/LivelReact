import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { loginRequest } from "../../../../services/backEnd";
import { login } from "../../../../services/auth";

import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import "./Login.css";
import { message } from "antd";

const styles = {
  inputStyle: {
    borderBottom: "1px solid white",
    color: "white",
  },
  inputLabel: {
    color: "white",
  },
};

function Login(props) {
  const [matricula, setMatricula] = useState();
  const [senha, setSenha] = useState();
  const history = useHistory();

  const { classes } = props;

  function handleSubmit(e) {
    e.preventDefault();
    const request = async () => {
      loginRequest(matricula, senha)
        .then(async (result) => {
          if (result.LOGIN.ID_Aluno > 0 && result.LOGIN.Status === 1) {
            login(result);

            // Validação de coach ou nao
            result.USER_TYPE === "coach"
              ? history.push("/coach")
              : history.push("/trainingTypes");
          } else {
            message.error("Dados incorretos", 2);
            history.push("/login");
          }
        })
        .catch((error) => {
          message.error("Algo deu errado, tente novamente", 2);
          console.error(error);
          history.push("/");
        });
    };
    request();
  }

  return (
    <div className="bodyContainer">
      <img src="/images/Logo_Livel.png" alt="Logo do Livel" className="logo" />
      <h1 className="titleCoachOrCoachee">Bora treinar?</h1>
      <div className="LoginTitle">Login</div>
      <div className="inputsContainer">
        <TextField
          className="matriculaInput"
          label="matrícula"
          onChange={(e) => {
            setMatricula(e.target.value);
          }}
          InputLabelProps={{
            classes: { root: classes.inputLabel, focussed: classes.inputLabel },
          }}
          InputProps={{
            classes: {
              root: classes.inputStyle,
              focussed: classes.inputStyle,
              notchedOutline: classes.inputStyle,
            },
          }}
        />

        <TextField
          className="senhaInput"
          label="senha"
          onChange={(e) => {
            setSenha(e.target.value);
          }}
          type="password"
          InputLabelProps={{
            classes: { root: classes.inputLabel, focussed: classes.inputLabel },
          }}
          InputProps={{
            classes: {
              root: classes.inputStyle,
              focussed: classes.inputStyle,
              notchedOutline: classes.inputStyle,
            },
          }}
        />
      </div>
      <div className="loginClick" onClick={handleSubmit}>
        ENTRAR
      </div>
      <Link className="link" to="/signUp">
        Solicitar número de matrícula
      </Link>
    </div>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
