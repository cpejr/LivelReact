import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

import './RequestNumber.css'

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



function RequestNumber(props){

    const history = useHistory()
    
    const [Name, setName] = useState()
    const [LastName, setLastName] = useState() 
    const [CPF, setCPF] = useState()
    const [Email, setEmail] = useState() 
    const { classes } = props;

    function handleSend(){
        console.log(Name)
        console.log(LastName)
        console.log(CPF)
        console.log(Email)
        history.push('/')
    }
    
    return(
            <div className="Container">
                <img src='/images/Logo_Livel.png' alt="Logo do Livel" className='logo'/>
                <div className='RequestNumberTitle'>Solicite seu número de matrícula</div>
                <div className='RequestNumberText'>Preencha os dados abaixo e enviaremos seu número de matrícula para seu e-mail:</div>
                <div className='formContainer'>
                    <form>
                <TextField label="Nome" onChange={(e)=>{setName(e.target.value)}}
                    InputLabelProps={{
                        classes: {root: classes.inputLabel, focussed: classes.inputLabel}
                    }}
                    InputProps={{
                        classes: {root: classes.inputStyle, focussed: classes.inputStyle, notchedOutline: classes.inputStyle}
                    }}
                />
    
                <TextField label="Sobrenome" onChange={(e)=>{setLastName(e.target.value)}}
                    InputLabelProps={{
                        classes: {root: classes.inputLabel, focussed: classes.inputLabel}
                    }}
                    InputProps={{
                        classes: {root: classes.inputStyle, focussed: classes.inputStyle, notchedOutline: classes.inputStyle}
                    }}
                />
                <TextField label="CPF" onChange={(e)=>{setCPF(e.target.value)}}
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
                </form>
                </div>
                <button className='forgetClick' onClick={()=>handleSend}>ENVIAR</button>
            </div>
        )
    }

    RequestNumber.propTypes = {
        classes: PropTypes.object.isRequired
    };
    
    
    export default withStyles(styles)(RequestNumber);
    