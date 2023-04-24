import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import React from 'react';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function ResponseDialog({ dialog, handleClose }) {
  const classes = useStyles();
  return (
    <div>
      <Dialog
        open={dialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{'Has cambiado tu cuenta correctamene!'}</DialogTitle>
        <DialogContent>
          <DialogContentText>{`Datos guardados correctamente!`}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <Button fullWidth variant="contained" color="primary" className={classes.submit}>
              Aceptar
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
