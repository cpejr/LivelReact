import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

import './RequestNumber.css'

import {TextField, CircularProgress} from '@material-ui/core';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import validateInputs from "../../../../utils/Validate";

const styles = {
    inputStyle: {
        borderBottom: '1px solid white',
        color: "white"
    },
    inputLabel: {
      color: "white",
    }
};



function RequestNumber(props){

    const history = useHistory()
    
    const [Nome, setNome] = useState("")
    const [Sobrenome, setSobrenome] = useState("") 
    const [CPF, setCPF] = useState("")
    const [Email, setEmail] = useState("") 
    const { classes } = props;
    const [loading, setLoading] = useState(false);

    //Estados para verificar erros no campo nome
    const [errorNome, setErrorNome] = useState(false);
    const [errorNomeMessage, setErrorNomeMessage] = useState("");
    
    //Estados para verificar erros no campo sobrenome
    const [errorSobrenome, setErrorSobrenome] = useState(false);
    const [errorSobrenomeMessage, setErrorSobrenomeMessage] = useState("");
    
    //Estados para verificar erros no campo email
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorEmailMessage, setErrorEmailMessage] = useState("");

    //Estados para verificar erros no cpf
    const [errorCPF, setErrorCPF] = useState(false);
    const [errorCPFMessage, setErrorCPFMessage] = useState("");

    const handleNome = (e) => {
        setNome(e.target.value);
    };

    const handleSobrenome = (e) => {
        setSobrenome(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

// 000.000.000-00
const maskCPF = value => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

    function handleSend(){
        const isNomeValid = validateInputs("Name", Nome);
        const isSobrenomeValid = validateInputs("Name", Sobrenome);
        const isEmailValid = validateInputs("Email", Email);
    
        if (!isNomeValid || !isSobrenomeValid || !isEmailValid || CPF.length !== 14) {
          if (!isNomeValid) {
            setErrorNome(true);
            setErrorNomeMessage("Campo não pode ser vazio");
          } else {
            setErrorNome(false);
            setErrorNomeMessage("");
          }

          if (!isSobrenomeValid) {
            setErrorSobrenome(true);
            setErrorSobrenomeMessage("Campo não pode ser vazio");
          } else {
            setErrorSobrenome(false);
            setErrorSobrenomeMessage("");
          }

          if (!isEmailValid) {
            setErrorEmail(true);
            setErrorEmailMessage("E-mail inválido");
          } else {
            setErrorEmail(false);
            setErrorEmailMessage("");
          }

          if (CPF.length !== 14) {
            setErrorCPF(true);
            setErrorCPFMessage("CPF inválido");
          } else {
            setErrorCPF(false);
            setErrorCPFMessage("");
          }
        } else {
          setLoading(true);

          setErrorNome(false);
          setErrorNomeMessage("");
          setErrorSobrenome(false);
          setErrorSobrenomeMessage("");
          setErrorEmail(false);
          setErrorEmailMessage("");
          setErrorCPF(false);
          setErrorCPFMessage("");
          console.log(Nome)
          console.log(Sobrenome)
          console.log(CPF)
          console.log(Email)
          const timer = setTimeout(() => {
            setLoading(false);
            history.push('/')
          }, 500);
        
          return () => clearTimeout(timer);
        }
    }
    
    return(
            <div className="Container">
                <img src='/images/Logo_Livel.png' alt="Logo do Livel" className='logo'/>
                <div className='RequestNumberTitle'>Solicite seu número de matrícula</div>
                <div className='RequestNumberText'>Preencha os dados abaixo e enviaremos seu número de matrícula para seu e-mail:</div>
                <div className='formContainer'>
                    <form>
                <TextField label="Nome" error={errorNome} helperText={errorNomeMessage} onChange={(e) => handleNome(e)}
                    InputLabelProps={{
                        classes: {root: classes.inputLabel, focussed: classes.inputLabel}
                    }}
                    InputProps={{
                        classes: {root: classes.inputStyle, focussed: classes.inputStyle, notchedOutline: classes.inputStyle}
                    }}
                />
    
                <TextField label="Sobrenome" error={errorSobrenome} helperText={errorSobrenomeMessage} onChange={(e) => handleSobrenome(e)}
                    InputLabelProps={{
                        classes: {root: classes.inputLabel, focussed: classes.inputLabel}
                    }}
                    InputProps={{
                        classes: {root: classes.inputStyle, focussed: classes.inputStyle, notchedOutline: classes.inputStyle}
                    }}
                />
                <TextField label="CPF" error={errorCPF} helperText={errorCPFMessage} value={CPF} onChange={(e) => setCPF(maskCPF(e.target.value))}
                    InputLabelProps={{
                        classes: {root: classes.inputLabel, focussed: classes.inputLabel}
                    }}
                    InputProps={{
                        classes: {root: classes.inputStyle, focussed: classes.inputStyle, notchedOutline: classes.inputStyle}
                    }}
                />
                <TextField label="E-mail" error={errorEmail} helperText={errorEmailMessage} onChange={(e) => handleEmail(e)}
                    InputLabelProps={{
                        classes: {root: classes.inputLabel, focussed: classes.inputLabel}
                    }}
                    InputProps={{
                        classes: {root: classes.inputStyle, focussed: classes.inputStyle, notchedOutline: classes.inputStyle}
                    }}
                />
                </form>
                </div>
                <button className='forgetClick' onClick={handleSend}>{loading ? <CircularProgress /> : "ENVIAR"}</button>
            </div>
        )
    }

    RequestNumber.propTypes = {
        classes: PropTypes.object.isRequired
    };
    
    
    export default withStyles(styles)(RequestNumber);
    