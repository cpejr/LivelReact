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
      width: "60%",
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },

    container: {
        height: '100%',
        width: '15%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    yellowPopUp: {
        fontSize: '150%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '56%',
        fontWeight: '700',
        color: 'black',
        backgroundColor: '#FFBA2F',
        borderRadius: '0 40% 0 0',
        border: '0px'
    },

    purplePopUp: {
        fontSize: '150%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '56%',
        fontWeight: '700',
        color: 'white',
        backgroundColor: '#632467',
        borderRadius: '0 40% 0 0',
        border: '0px'
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
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
    );

    return(
        <div className={classes.container}>
            {
                (props.categ==='P') ? 
                <button type='button' className={classes.yellowPopUp} onClick={handleOpen}>{props.categ}</button>
                :
                <button type='button' className={classes.purplePopUp} onClick={handleOpen}>{props.categ}</button>
            }
            
            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    )
}