import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
    const { open, handleClose } = props
    const aaa = 'aaaa'
    let message = {}
    const testUser = {
        nome: 'carlos',
        data_nascimento: '01/01/2001',
        estado_civil: 'casado'
    }

    const handleClickOpen = () => {
        props.openModal()
    };
    
    const checkStatus = () => {
        
        let messageObj = {}
        console.log(messageObj)
        if (props.status === 'ok-insert-user') {
            messageObj.title = 'Objeto inserido'
            messageObj.text = props.membroObj
        }
       message = messageObj
    }
    
    checkStatus()

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{message.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description" >
                        {JSON.stringify(message.text)}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose}>Agree</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}