import React from 'react';
import { Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function LoginDialog({ open, setOpen, message }) {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">{message}</DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <Button fullWidth variant="contained" color="primary" className={classes.submit}>
            Aceptar
          </Button>
        </Link>
      </DialogActions>
    </Dialog>
  );
}
