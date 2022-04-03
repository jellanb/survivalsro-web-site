import React, { Fragment } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import { useSingUp } from '../hooks/useSingUP';
import Slide from "@material-ui/core/Slide";
import BackDropPayment from '../components/common/progress/BackDropPayment';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SignUp() {
  const classes = useStyles();
  const {
    handleEmailOnBlur,
    handlePasswordOnBlur,
    handleUsernameOnBlur,
    handlerLastNameOnBlur,
    user,
    createNewUser,
    load,
    dialog,
    setDialog,
    handleChangeSelectSecretQuestion,
    handleSecretAnswerOnBlur} = useSingUp();

  const handleClose = () => {
    setDialog(false);
  };

  const handleClick = async (e) => {
    await createNewUser(e);
  }

  return (
      <Fragment>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              <FormattedMessage id="app.SingUpTile"/>
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                      autoComplete="fname"
                      name="ID Us"
                      variant="outlined"
                      required
                      fullWidth
                      id="ID usuario"
                      label=<FormattedMessage id="app.SingUpInputUserId"/>
                      autoFocus
                      onBlur={handleUsernameOnBlur}
                      helperText={ user.errorIsValid ? user.descName : '' }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="Nombre"
                      label=<FormattedMessage id="app.SingUpInputName"/>
                      name="Nombre"
                      autoComplete="lname"
                      onBlur={handlerLastNameOnBlur}
                      helperText={ user.errorLastname ? user.descLast : '' }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label=<FormattedMessage id="app.SingUpInputEmail"/>
                      name="email"
                      autoComplete="email"
                      onBlur={handleEmailOnBlur}
                      helperText={ user.errorEmail ? user.descEmail : '' }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label=<FormattedMessage id="app.SingUpInputPassword"/>
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onBlur={handlePasswordOnBlur}
                      helperText={ user.errorPass ? user.descPass : '' }
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl variant="outlined" className={classes.form}>
                    <InputLabel id="demo-simple-select-filled-label"><FormattedMessage id="app.SingUpInputSecretQ"/></InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={user.secretQuestion}
                        onChange={handleChangeSelectSecretQuestion}
                        label={<FormattedMessage id="app.SingUpInputSecretQ"/>}
                    >
                      <MenuItem value="Lugar de nacimiento de la madre">{<FormattedMessage
                          id="app.SingUpInputSecretQ1"/>}
                      </MenuItem>
                      <MenuItem value="Mejor amigo de la infancia">{<FormattedMessage
                          id="app.SingUpInputSecretQ2"/>}
                      </MenuItem>
                      <MenuItem value="Nombre de la primera mascota">{<FormattedMessage
                          id="app.SingUpInputSecretQ3"/>}
                      </MenuItem>
                      <MenuItem value="Personaje faborita de la historia">{<FormattedMessage
                          id="app.SingUpInputSecretQ4"/>}
                      </MenuItem>
                      <MenuItem value="ocupacion del abuelo">{<FormattedMessage
                          id="app.SingUpInputSecretQ5"/>}
                      </MenuItem>
                    </Select>
                    <FormHelperText>{user.errorQuestion ? user.errorQuestionDesc : ''}</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="secretAnswer"
                      label={<FormattedMessage id="app.SingUpInputSecretQ5"/>}
                      type="secretAnswer"
                      id="secretAnswer"
                      autoComplete="current-secretAnswer"
                      onBlur={handleSecretAnswerOnBlur}
                      helperText={ user.errorAnswer ? user.errorAnswerDesc : '' }
                  />
                </Grid>
              </Grid>
              <Button
                  type="reset"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={handleClick}
              >
                <FormattedMessage id="app.SingUpButtonCreateAccount"/>
              </Button>
              <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                <Button
                    fullWidth
                    variant="contained"
                    color="default"
                    className={classes.submit}
                >
                  <FormattedMessage id="app.SingUpButtonBackHome"/>
                </Button>
              </Link>
              <Grid container justify="flex-end">
                {/* <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid> */}
              </Grid>
            </form>
          </div>
          <div>
            <Dialog
                open={dialog}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle id="alert-dialog-slide-title">{<FormattedMessage id="app.SingUpPopUpMessage"/>}</DialogTitle>
              <DialogContent>
                <DialogContentText>{ `Tu ID de cuenta es: ${user.username}` }</DialogContentText>
              </DialogContent>
              <DialogActions>
                <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                  <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                  >
                    Aceptar
                  </Button>
                </Link>
              </DialogActions>
            </Dialog>
          </div>
        </Container>
        <BackDropPayment open={load}/>
      </Fragment>
  );
}
