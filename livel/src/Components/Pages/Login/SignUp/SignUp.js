import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import './SignUp.css'

import {TextField} from '@material-ui/core';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
    inputStyle: {
        borderBottom: '1px solid white',
        color: "white"
    },
    inputLabel: {
      color: "white",
    }
};


 function SignUp(props){
    const [Nome, setNome] = useState()
    const [Sobrenome, setSobrenome] = useState()
    const [Email, setEmail] = useState() 
    const [Password, setPassword] = useState()
    const [ConfirmPassword, setConfirmPassword] = useState() 
    const { classes } = props;

    return(
            <div className="Container">
                <img src='/images/Logo_Livel.png' alt="Logo do Livel" className='logo'/>
                <div className='ForgetTitle'>Sign Up</div>
                <div className='formContainer'>
                    <form>
                <TextField label="Nome" onChange={(e)=>{setNome(e.target.value)}}
                    InputLabelProps={{
                        classes: {root: classes.inputLabel, focussed: classes.inputLabel}
                    }}
                    InputProps={{
                        classes: {root: classes.inputStyle, focussed: classes.inputStyle, notchedOutline: classes.inputStyle}
                    }}
                />
    
                <TextField label="Sobrenome" onChange={(e)=>{setSobrenome(e.target.value)}}
                    InputLabelProps={{
                        classes: {root: classes.inputLabel, focussed: classes.inputLabel}
                    }}
                    InputProps={{
                        classes: {root: classes.inputStyle, focussed: classes.inputStyle, notchedOutline: classes.inputStyle}
                    }}
                />
                <TextField label="E-mail" onChange={(e)=>{setEmail(e.target.value)}}
                    InputLabelProps={{
                        classes: {root: classes.inputLabel, focussed: classes.inputLabel}
                    }}
                    InputProps={{
                        classes: {root: classes.inputStyle, focussed: classes.inputStyle, notchedOutline: classes.inputStyle}
                    }}
                />
                <TextField label="Criar Senha" onChange={(e)=>{setPassword(e.target.value)}}
                    InputLabelProps={{
                        classes: {root: classes.inputLabel, focussed: classes.inputLabel}
                    }}
                    InputProps={{
                        classes: {root: classes.inputStyle, focussed: classes.inputStyle, notchedOutline: classes.inputStyle}
                    }}
                />
                <TextField label="Confirmar Senha" onChange={(e)=>{setConfirmPassword(e.target.value)}}
                    InputLabelProps={{
                        classes: {root: classes.inputLabel, focussed: classes.inputLabel}
                    }}
                    InputProps={{
                        classes: {root: classes.inputStyle, focussed: classes.inputStyle, notchedOutline: classes.inputStyle}
                    }}
                />
                </form>
                </div>
                <Link className='forgetClick' to='/'>CADASTRAR</Link>
            </div>
        )
    }

    SignUp.propTypes = {
        classes: PropTypes.object.isRequired
    };
    
    
    export default withStyles(styles)(SignUp);
    