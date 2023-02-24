import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function RegisterDialog({ registerResult, isOpen, handleClose }) {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Fragment>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {registerResult.error ? 'Error' : t('app.SingUpPopUpMessage')}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{`${registerResult.errorDescription}`}</DialogContentText>
        </DialogContent>
        <DialogActions>
          {registerResult.error ? (
            <Button fullWidth variant="contained" onClick={handleClose} color="primary" className={classes.submit}>
              Aceptar
            </Button>
          ) : (
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
              <Button fullWidth variant="contained" color="primary" className={classes.submit}>
                Aceptar
              </Button>
            </Link>
          )}
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
