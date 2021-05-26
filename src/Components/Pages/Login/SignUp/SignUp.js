import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

import './SignUp.css'

import {TextField, CircularProgress} from '@material-ui/core';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import validateInputs from "../../../../utils/Validate";

const styles = {
    inputStyle: {
        borderBottom: '1px solid white',
        color: "white",
        opacity: 0.8,
    },
    inputLabel: {
      color: "white",
    }
};


 function SignUp(props){

    const history = useHistory()

    const [Nome, setNome] = useState("")
    const [Sobrenome, setSobrenome] = useState("")
    const [Email, setEmail] = useState("") 
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("") 
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
  
    //Estados para verificar erros no campo senha
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorPasswordMessage, setErrorPasswordMessage] = useState("");

    //Estados para verificar erros no campo confirmar senha
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
    const [errorConfirmPasswordMessage, setErrorConfirmPasswordMessage] = useState("");

    const handleNome = (e) => {
        setNome(e.target.value);
    };

    const handleSobrenome = (e) => {
        setSobrenome(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    function handleSend(){
        const isNomeValid = validateInputs("Name", Nome);
        const isSobrenomeValid = validateInputs("Name", Sobrenome);
        const isEmailValid = validateInputs("Email", Email);
        const isPasswordValid = validateInputs("Password", Password);
        const isConfirmPasswordValid = validateInputs("Password", ConfirmPassword);
    
        if (!isNomeValid || !isSobrenomeValid || !isEmailValid || !isPasswordValid || !isConfirmPasswordValid) {
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
    
          if (!isPasswordValid) {
            setErrorPassword(true);
            setErrorPasswordMessage("Mínimo de 6 caracteres");
          } else {
            setErrorPassword(false);
            setErrorPasswordMessage("");
          }

          if (!isConfirmPasswordValid || Password !== ConfirmPassword) {
            setErrorConfirmPassword(true);
            setErrorConfirmPasswordMessage("Senha precisa ser igual");
          } else {
            setErrorConfirmPassword(false);
            setErrorConfirmPasswordMessage("");
          }
        } else {
          setLoading(true);

          setErrorNome(false);
          setErrorNomeMessage("");
          setErrorSobrenome(false);
          setErrorSobrenomeMessage("");
          setErrorEmail(false);
          setErrorEmailMessage("");
          setErrorPassword(false);
          setErrorPasswordMessage("");
          setErrorConfirmPassword(false);
          setErrorConfirmPasswordMessage("");
          console.log(Nome)
          console.log(Sobrenome)
          console.log(Email)
          console.log(Password)
          console.log(ConfirmPassword)
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
                <div className='SignUpTitle'>Realize seu Cadastro</div>
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
                <TextField label="E-mail" error={errorEmail} helperText={errorEmailMessage} onChange={(e) => handleEmail(e)}
                    InputLabelProps={{
                        classes: {root: classes.inputLabel, focussed: classes.inputLabel}
                    }}
                    InputProps={{
                        classes: {root: classes.inputStyle, focussed: classes.inputStyle, notchedOutline: classes.inputStyle}
                    }}
                />
                <TextField label="Criar senha" error={errorPassword} helperText={errorPasswordMessage} onChange={(e) => handlePassword(e)}
                    InputLabelProps={{
                        classes: {root: classes.inputLabel, focussed: classes.inputLabel}
                    }}
                    InputProps={{
                        classes: {root: classes.inputStyle, focussed: classes.inputStyle, notchedOutline: classes.inputStyle}
                    }}
                />
                <TextField label="Confirmar senha" error={errorConfirmPassword} helperText={errorConfirmPasswordMessage} onChange={(e) => handleConfirmPassword(e)}
                    InputLabelProps={{
                        classes: {root: classes.inputLabel, focussed: classes.inputLabel}
                    }}
                    InputProps={{
                        classes: {root: classes.inputStyle, focussed: classes.inputStyle, notchedOutline: classes.inputStyle}
                    }}
                />
                </form>
                </div>
                <div className='forgetClick' onClick={handleSend}>{loading ? <CircularProgress /> : "ENVIAR"}</div>
            </div>
        )
    }

    SignUp.propTypes = {
        classes: PropTypes.object.isRequired
    };
    
    
    export default withStyles(styles)(SignUp);
    