import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import './SignUp.css'

import {TextField} from '@material-ui/core';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

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
    const [Nome, setNome] = useState()
    const [Sobrenome, setSobrenome] = useState()
    const [Email, setEmail] = useState() 
    const [Password, setPassword] = useState()
    const [ConfirmPassword, setConfirmPassword] = useState() 
    const { classes } = props;

    return(
            <div className="Container">
                <img src='/images/Logo_Livel.png' alt="Logo do Livel" className='logo'/>
                <div className='SignUpTitle'>Realize seu Cadastro</div>
                <div className='formContainer'>
                    <form>
                <TextField label="nome" onChange={(e)=>{setNome(e.target.value)}}
                    InputLabelProps={{
                        classes: {root: classes.inputLabel, focussed: classes.inputLabel}
                    }}
                    InputProps={{
                        classes: {root: classes.inputStyle, focussed: classes.inputStyle, notchedOutline: classes.inputStyle}
                    }}
                />
    
                <TextField label="sobrenome" onChange={(e)=>{setSobrenome(e.target.value)}}
                    InputLabelProps={{
                        classes: {root: classes.inputLabel, focussed: classes.inputLabel}
                    }}
                    InputProps={{
                        classes: {root: classes.inputStyle, focussed: classes.inputStyle, notchedOutline: classes.inputStyle}
                    }}
                />
                <TextField label="e-mail" onChange={(e)=>{setEmail(e.target.value)}}
                    InputLabelProps={{
                        classes: {root: classes.inputLabel, focussed: classes.inputLabel}
                    }}
                    InputProps={{
                        classes: {root: classes.inputStyle, focussed: classes.inputStyle, notchedOutline: classes.inputStyle}
                    }}
                />
                <TextField label="criar senha" onChange={(e)=>{setPassword(e.target.value)}}
                    InputLabelProps={{
                        classes: {root: classes.inputLabel, focussed: classes.inputLabel}
                    }}
                    InputProps={{
                        classes: {root: classes.inputStyle, focussed: classes.inputStyle, notchedOutline: classes.inputStyle}
                    }}
                />
                <TextField label="confirmar senha" onChange={(e)=>{setConfirmPassword(e.target.value)}}
                    InputLabelProps={{
                        classes: {root: classes.inputLabel, focussed: classes.inputLabel}
                    }}
                    InputProps={{
                        classes: {root: classes.inputStyle, focussed: classes.inputStyle, notchedOutline: classes.inputStyle}
                    }}
                />
                </form>
                </div>
                <Link className='forgetClick' to='/'>ENVIAR</Link>
            </div>
        )
    }

    SignUp.propTypes = {
        classes: PropTypes.object.isRequired
    };
    
    
    export default withStyles(styles)(SignUp);
    