import React, { useState } from "react";

import "./ForgetPassword.css";

import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

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
  const [matricula, setMatricula] = useState();
  const [email, setEmail] = useState();
  const { classes } = props;

  const send = ()=>{
    console.log(matricula, email)
  }


  return (
    <div className="Container">
      <img src="/images/Logo_Livel.png" alt="Logo do Livel" className="logo" />
      <div className="ForgetTitle">Esqueci Minha Senha</div>
      <div className="formContainer">
        <form>
          <TextField
            label="Matrícula"
            onChange={(e) => {
              setMatricula(e.target.value);
            }}
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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
      <div className="forgetClick" onClick={()=>send()}>
        ENVIAR
      </div>
    </div>
  );
}

ForgetPassword.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ForgetPassword);
