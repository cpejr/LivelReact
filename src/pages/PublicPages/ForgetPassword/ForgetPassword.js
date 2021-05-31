import React, { useState } from "react";

import "./ForgetPassword.css";

import { TextField, CircularProgress } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import validateInputs from "../../../utils/Validate";

const styles = {
  inputStyle: {
    borderBottom: "1px solid white",
    color: "white",
  },
  inputLabel: {
    color: "white",
  },
};

function ForgetPassword(props) {
  const [matricula, setMatricula] = useState("");
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(false);
  const { classes } = props;
  const [loading, setLoading] = useState(false);

  //Estados para verificar erros no campo matrícula
  const [errorMatricula, setErrorMatricula] = useState(false);
  const [errorMatriculaMessage, setErrorMatriculaMessage] = useState("");

  //Estados para verificar erros no campo email
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorEmailMessage, setErrorEmailMessage] = useState("");

  const handleMatricula = (e) => {
    setMatricula(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const send = () => {
    const isMatriculaValid = validateInputs("Name", matricula);
    const isEmailValid = validateInputs("Email", email);

    if (!isMatriculaValid || !isEmailValid) {
      if (!isMatriculaValid) {
        setErrorMatricula(true);
        setErrorMatriculaMessage("Campo não pode ser vazio");
      } else {
        setErrorMatricula(false);
        setErrorMatriculaMessage("");
      }

      if (!isEmailValid) {
        setErrorEmail(true);
        setErrorEmailMessage("E-mail inválido");
      } else {
        setErrorEmail(false);
        setErrorEmailMessage("");
      }
    } else {
      setLoading(true);
      setDisabled(true);

      setErrorMatricula(false);
      setErrorMatriculaMessage("");
      setErrorEmail(false);
      setErrorEmailMessage("");
      console.log(matricula, email);
      const timer = setTimeout(() => {
        setLoading(false);
        setDisabled(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  };

  return (
    <div className="Container">
      <img src="/images/Logo_Livel.png" alt="Logo do Livel" className="logo" />
      <div className="ForgetTitle">Esqueci Minha Senha</div>
      <div className="formContainer">
        <form>
          <TextField
            label="Matrícula"
            error={errorMatricula}
            helperText={errorMatriculaMessage}
            onChange={(e) => handleMatricula(e)}
            InputLabelProps={{
              classes: {
                root: classes.inputLabel,
                focussed: classes.inputLabel,
              },
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
            label="E-mail"
            error={errorEmail}
            helperText={errorEmailMessage}
            onChange={(e) => handleEmail(e)}
            InputLabelProps={{
              classes: {
                root: classes.inputLabel,
                focussed: classes.inputLabel,
              },
            }}
            InputProps={{
              classes: {
                root: classes.inputStyle,
                focussed: classes.inputStyle,
                notchedOutline: classes.inputStyle,
              },
            }}
          />
        </form>
      </div>
      <button
        className="forgetClick"
        disabled={disabled}
        onClick={() => send()}
      >
        {loading ? <CircularProgress /> : "ENVIAR"}
      </button>
    </div>
  );
}

ForgetPassword.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ForgetPassword);
