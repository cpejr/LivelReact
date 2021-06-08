import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { loginRequest } from 'src/services/backEnd'
import { login } from 'src/services/auth'

import { TextField, CircularProgress } from '@material-ui/core'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import validateInputs from 'src/utils/Validate'

import './Login.css'
import { message } from 'antd'

const styles = {
  inputStyle: {
    borderBottom: '1px solid white',
    color: 'white',
  },
  inputLabel: {
    color: 'white',
  },
}

function Login(props) {
  const [matricula, setMatricula] = useState('')
  const [senha, setSenha] = useState('')
  const [disabled, setDisabled] = useState(false)
  const history = useHistory()
  const [loading, setLoading] = useState(false)

  //Estados para verificar erros no campo matrícula
  const [errorMatricula, setErrorMatricula] = useState(false)
  const [errorMatriculaMessage, setErrorMatriculaMessage] = useState('')

  //Estados para verificar erros no campo senha
  const [errorSenha, setErrorSenha] = useState(false)
  const [errorSenhaMessage, setErrorSenhaMessage] = useState('')

  const handleMatricula = (e) => {
    setMatricula(e.target.value)
  }

  const handleSenha = (e) => {
    setSenha(e.target.value)
  }

  const { classes } = props

  function handleSubmit(e) {
    e.preventDefault()
    const isMatriculaValid = validateInputs('Name', matricula)
    const isSenhaValid = validateInputs('Password', senha)
    const request = async () => {
      loginRequest(matricula, senha)
        .then(async (result) => {
          if (result.LOGIN.ID_Aluno > 0 && result.LOGIN.Status === 1) {
            if (!isMatriculaValid || !isSenhaValid) {
              if (!isMatriculaValid) {
                setErrorMatricula(true)
                setErrorMatriculaMessage('Campo não pode ser vazio')
              } else {
                setErrorMatricula(false)
                setErrorMatriculaMessage('')
              }

              if (!isSenhaValid) {
                setErrorSenha(true)
                setErrorSenhaMessage('Mínimo de 6 caracteres')
              } else {
                setErrorSenha(false)
                setErrorSenhaMessage('')
              }
            } else {
              setLoading(true)
              setDisabled(true)

              setErrorMatricula(false)
              setErrorMatriculaMessage('')
              setErrorSenha(false)
              setErrorSenhaMessage('')
              login(result)

              // Validação de coach ou nao
              const timer = setTimeout(() => {
                setLoading(false)
                setDisabled(false)
                result.USER_TYPE === 'coach'
                  ? history.push('/coach')
                  : history.push('/trainingTypes')
              }, 500)

              return () => clearTimeout(timer)
            }
          } else {
            setLoading(false)
            setDisabled(false)
            // alert("Dados incorretos");
            message.error('Dados incorretos', 2)
            history.push('/login')
          }
        })
        .catch((error) => {
          setLoading(false)
          setDisabled(false)
          // alert(error);
          message.error(error, 2)
          history.push('/login')
        })
    }
    request()
  }

  return (
    <div className="bodyContainer">
      <img src="/images/Logo_Livel.png" alt="Logo do Livel" className="logo" />
      <h1 className="titleCoachOrCoachee">Bora treinar?</h1>
      <div className="LoginTitle">Login</div>
      <div className="inputsContainer">
        <TextField
          className="matriculaInput"
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
          className="senhaInput"
          label="Senha"
          error={errorSenha}
          helperText={errorSenhaMessage}
          onChange={(e) => handleSenha(e)}
          type="password"
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
      </div>
      <div className="optionsContainer">
        <button
          className="loginClick"
          disabled={disabled}
          onClick={handleSubmit}
        >
          {loading ? <CircularProgress /> : 'ENTRAR'}
        </button>
        <Link className="link" to="/signUp">
          Solicitar número de matrícula
        </Link>
      </div>
    </div>
  )
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Login)
