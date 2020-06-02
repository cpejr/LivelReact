import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {getAluno} from '../../../../services/backEnd'
import { login } from "../../../../services/auth";

import {TextField} from '@material-ui/core';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";


import './Login.css'

const styles = {
    inputStyle: {
        borderBottom: '1px solid white',
        color: "white"
    },
    inputLabel: {
      color: "white",
    }
};


function Login(props){
    const [matricula, setMatricula] = useState()
    const [senha, setSenha] = useState()
    const history = useHistory()
    const { classes } = props;

    function handleSubmit(e){
        e.preventDefault()
        const request = async () => {
            getAluno(matricula, senha).then(async (result)=>{
                if(result.LOGIN.ID_Aluno > 0 && result.LOGIN.Status === 1){
                    await login(result)
                    history.push('/trainingTypes')
                }
                    
                else{
                    alert('Dados incorretos')
                    history.push('/login')
                }
            }).catch(error=>{
                alert(error)
                history.push('/login')
            })
        }
        request();
    }

    return(
        <div className="bodyContainer">
            <img src='/images/Logo_Livel.png' alt="Logo do Livel" className='logo'/>
            <div className='LoginTitle'>Login</div>
            <div className='inputsContainer'>
                <TextField label="Matrícula" onChange={(e)=>{setMatricula(e.target.value)}}
                    InputLabelProps={{
                        classes: {root: classes.inputLabel, focussed: classes.inputLabel}
                    }}
                    InputProps={{
                        classes: {root: classes.inputStyle, focussed: classes.inputStyle, notchedOutline: classes.inputStyle}
                    }}
                />
    
                <TextField label="Senha" onChange={(e)=>{setSenha(e.target.value)}}
                    type="password"
                    InputLabelProps={{
                        classes: {root: classes.inputLabel, focussed: classes.inputLabel}
                    }}
                    InputProps={{
                        classes: {root: classes.inputStyle, focussed: classes.inputStyle, notchedOutline: classes.inputStyle}
                    }}
                />
            </div>
            <div className='loginClick' onClick={handleSubmit}>ENTRAR</div>
            <Link className='link' to='/signUp'>Solicitar número de matrícula</Link>
        </div>
    )
}


Login.propTypes = {
    classes: PropTypes.object.isRequired
};


export default withStyles(styles)(Login);