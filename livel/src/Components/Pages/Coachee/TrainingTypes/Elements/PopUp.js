import React, {useState} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    const top = 50
    const left = 50
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: "69%",
      height: '60%',
      backgroundColor: '#F7F6F6',
      border: '0px',
      padding: '10%',
    },

    container: {
        height: '100%',
        width: '15%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    yellowPopUpButton: {
        margin: '5px',
        fontSize: '150%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '8vh',
        height: '56%',
        fontWeight: '700',
        color: 'black',
        backgroundColor: '#FFBA2F',
        borderRadius: '0 40% 0 0',
        border: '0px'
    },

    orangePopUpButton: {
        margin: '5px',
        fontSize: '150%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '8vh',
        height: '56%',
        fontWeight: '700',
        color: 'black',
        backgroundColor: '#F5821F',
        borderRadius: '0 40% 0 0',
        border: '0px'
    },

    purplePopUpButton: {
        margin: '5px',
        fontSize: '150%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '8vh',
        height: '56%',
        fontWeight: '700',
        color: 'white',
        backgroundColor: '#632467',
        borderRadius: '0 40% 0 0',
        border: '0px'
    },

    popUpHeader: {
        color: '#717171',
        fontSize: '140%',
        fontWeight: '300',
    },

    purpleSymbol: {
        margin: '5px',
        fontSize: '150%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '10vh',
        height: '29%',
        fontWeight: '700',
        color: 'white',
        backgroundColor: '#632467',
        borderRadius: '0 40% 0 0',
        border: '0px'
    },

    yellowSymbol: {
        margin: '5px',
        fontSize: '150%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '10vh',
        height: '56%',
        fontWeight: '700',
        color: 'black',
        backgroundColor: '#FFBA2F',
        borderRadius: '0 40% 0 0',
        border: '0px'
    },

    orangeSymbol: {
        margin: '5px',
        fontSize: '150%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '10vh',
        height: '56%',
        fontWeight: '700',
        color: 'black',
        backgroundColor: '#F5821F',
        borderRadius: '0 40% 0 0',
        border: '0px'
    },

    estimuloDoMesContainer: {
        height: '30%',
        display: 'flex',
        alignItems: 'center',
    },

    divider: {
        border: '1px solid #DEDEDE',
        marginBottom: '10%'
    },

    descriptionText: {
        fontSize: '1.7vh',
        color: '#231F20',
        marginLeft: '7%'
    },

    descriptionTitleYellow: {
        fontSize: '2vh',
        color: '#FFBA2F',
        fontWeight: '800',
    },

    descriptionTitleOrange: {
        fontSize: '2vh',
        color: '#F5821F',
        fontWeight: '800',
    },

    CadeiaContainer: {
        marginTop: '10%',
        height: '60%',
        display: 'flex',
        justifyContent: 'space-around',
    },

    setasContainer: {
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%'
    },

    CadeiaRow: {
        width: '40%',
        height: '100%',
        display: 'flex', 
        alignItems: 'center',
        flexDirection: 'column'
    },

    descriptionTitlePurple: {
        fontSize: '2vh',
        color: '#632467',
        fontWeight: '800',
    }

}));


export default function PopUpPeriodizacao(props){

    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    
      const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>

            <div className={classes.popUpHeader}>ESTÍMULO DO MÊS</div>
                {
                    (props.TREINO_SEMANA.Periodizacao==='T') ?
                        <div className={classes.estimuloDoMesContainer}>
                            <div className={classes.yellowSymbol}>{props.TREINO_SEMANA.Periodizacao}</div>
                            <div className={classes.descriptionText}>
                                <div className={classes.descriptionTitleYellow}>TENSIONAL</div>
                                Maiores cargas
                                <br/>
                                Menores repetiçoes ({props.TREINO_SEMANA.MargemtRepeticaoInferior} a {props.TREINO_SEMANA.MargemtRepeticaoSuperior})
                                <br/>
                                Maiores Pausas (1' a 2')
                                <br/>
                                Cadeia Excêntrica
                            </div>
                        </div>
                    :
                        <div className={classes.estimuloDoMesContainer}>
                            <div className={classes.orangeSymbol}>{props.TREINO_SEMANA.Periodizacao}</div>
                            <div className={classes.descriptionText}>
                                <div className={classes.descriptionTitleOrange}>METABÓLICO</div>
                                Menores cargas
                                <br/>
                                Menores repetiçoes ({props.TREINO_SEMANA.MargemtRepeticaoInferior} a {props.TREINO_SEMANA.MargemtRepeticaoSuperior})
                                <br/>
                                Menores Pausas (0' a 1')
                                <br/>
                                Cadeia Concêntrica
                            </div>
                        </div>
                }
                
            <div className={classes.divider}/>

            <div className={classes.popUpHeader}>CADÊNCIA DA SEMANA</div>
            <div className={classes.CadeiaContainer}>
                <div className={classes.CadeiaRow}>
                    <div className={classes.purpleSymbol}>{props.TREINO_SEMANA.CadeiaExcentrica}</div>
                    <div className={classes.descriptionTitlePurple}>EXCÊNTRICA</div>
                    <div className={classes.descriptionText}>É a fase do movimento em que freamos o peso/resistência contra a gravidade. É o primeiro número da cadência.</div>
                </div>
                <div style={{width: '20%'}}>
                    <div className={classes.setasContainer}>
                        <img src='/images/setasPopUp.png' alt='Setas' />
                    </div>
                    
                </div>
                <div className={classes.CadeiaRow}>
                    <div className={classes.purpleSymbol}>{props.TREINO_SEMANA.CadeiaConcentrica}</div>
                    <div className={classes.descriptionTitlePurple}>CONSCÊNTRICA</div>
                    <div className={classes.descriptionText}>É a fase do movimento em que fazemos força para erguer/puxar/empurrar o peso contra gravidade. É o segundo número da cadência.</div>
                </div>
                
            </div>
        </div>
    );

    return(
        <React.Fragment>

            {
                (props.TREINO_SEMANA.Periodizacao==='T') ?
                    <button type='button' className={classes.yellowPopUpButton} onClick={handleOpen}>{props.TREINO_SEMANA.Periodizacao}</button>
                :
                    <button type='button' className={classes.orangePopUpButton} onClick={handleOpen}>{props.TREINO_SEMANA.Periodizacao}</button>
            }
            <button type='button' className={classes.purplePopUpButton} onClick={handleOpen}>{props.TREINO_SEMANA.CadeiaExcentrica}</button>
            <button type='button' className={classes.purplePopUpButton} onClick={handleOpen}>{props.TREINO_SEMANA.CadeiaConcentrica}</button>
            
            
            <Modal
                open={open}
                onClose={handleClose}
            >
                {body}
            </Modal>
        </React.Fragment>
    )
}