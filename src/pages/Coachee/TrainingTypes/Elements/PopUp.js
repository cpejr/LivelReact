import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal'

import { AiFillCloseCircle } from 'react-icons/ai'

import useStyles from './styles'

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

export default function PopUpPeriodizacao({ TREINO_SEMANA }) {
  const classes = useStyles()
  const [modalStyle] = useState(getModalStyle)
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div
        style={{
          color: '#632467',
          position: 'absolute',
          top: '-17px',
          right: '15px',
          backgroundColor: 'white',
          borderRadius: '50%',
        }}
        onClick={handleClose}
      >
        <AiFillCloseCircle size={32} />
      </div>
      <div className={classes.popUpHeader}>ESTÍMULO DO MÊS</div>
      {TREINO_SEMANA.Periodizacao === 'T' ? (
        <div className={classes.estimuloDoMesContainer}>
          <div className={classes.yellowSymbol}>
            {TREINO_SEMANA.Periodizacao}
          </div>
          <div className={classes.descriptionText}>
            <div className={classes.descriptionTitleYellow}>TENSIONAL</div>
            Maiores cargas
            <br />
            Menores repetiçoes ({TREINO_SEMANA.MargemtRepeticaoInferior} a{' '}
            {TREINO_SEMANA.MargemRepeticaoSuperior})
            <br />
            Maiores Pausas (1&apos; a 2&apos;)
            <br />
            Cadeia Excêntrica
          </div>
        </div>
      ) : (
        <div className={classes.estimuloDoMesContainer}>
          <div className={classes.orangeSymbol}>
            {TREINO_SEMANA.Periodizacao}
          </div>
          <div className={classes.descriptionText}>
            <div className={classes.descriptionTitleOrange}>METABÓLICO</div>
            Menores cargas
            <br />
            Menores repetiçoes ({TREINO_SEMANA.MargemtRepeticaoInferior} a{' '}
            {TREINO_SEMANA.MargemtRepeticaoSuperior})
            <br />
            Menores Pausas (0&apos; a 1&apos;)
            <br />
            Cadeia Concêntrica
          </div>
        </div>
      )}

      <div className={classes.divider} />

      <div className={classes.popUpHeader}>CADÊNCIA DA SEMANA</div>
      <div className={classes.CadeiaContainer}>
        <div className={classes.CadeiaRow}>
          <div className={classes.purpleSymbol}>
            {TREINO_SEMANA.CadeiaExcentrica}
          </div>
          <div className={classes.descriptionTitlePurple}>EXCÊNTRICA</div>
          <div className={classes.descriptionText}>
            É a fase do movimento em que freamos o peso/resistência contra a
            gravidade. É o primeiro número da cadência.
          </div>
        </div>
        <div style={{ width: '20%' }}>
          <div className={classes.setasContainer}>
            <img src="/images/SetasPopUp.png" alt="Setas" />
          </div>
        </div>
        <div className={classes.CadeiaRow}>
          <div className={classes.purpleSymbol}>
            {TREINO_SEMANA.CadeiaConcentrica}
          </div>
          <div className={classes.descriptionTitlePurple}>CONSCÊNTRICA</div>
          <div className={classes.descriptionText}>
            É a fase do movimento em que fazemos força para
            erguer/puxar/empurrar o peso contra gravidade. É o segundo número da
            cadência.
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <React.Fragment>
      {TREINO_SEMANA.Periodizacao === 'T' ? (
        <button
          type="button"
          className={classes.yellowPopUpButton}
          onClick={handleOpen}
        >
          {TREINO_SEMANA.Periodizacao}
        </button>
      ) : (
        <button
          type="button"
          className={classes.orangePopUpButton}
          onClick={handleOpen}
        >
          {TREINO_SEMANA.Periodizacao}
        </button>
      )}
      <button
        type="button"
        className={classes.purplePopUpButton}
        onClick={handleOpen}
      >
        {TREINO_SEMANA.CadeiaExcentrica}
      </button>
      <button
        type="button"
        className={classes.purplePopUpButton}
        onClick={handleOpen}
      >
        {TREINO_SEMANA.CadeiaConcentrica}
      </button>

      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </React.Fragment>
  )
}
