import React, {useState, Fragment} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import imagePresent from '../images/newLogin.png';
import { useSingIn } from '../hooks/useSingIn';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from "@material-ui/core/Slide";
import BackDropPayment from '../components/common/progress/BackDropPayment';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${imagePresent})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SignInSide() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const {
    user,
    onLoginClick,
    handlePasswordOnBlur,
    handleUsernameOnBlur,
    userCtx,
    load,
  } = useSingIn()

    const handleClose = () => {
      setOpen(false);
    };

    const handleClick = async (e) => {
        await onLoginClick(e);
        setOpen(true);
    }

  return (
      <Fragment>
        <Container component="main" maxWidth="xl">
          <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Iniciar Sesion
                </Typography>
                <form className={classes.form} noValidate>
                  <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="ID cuenta"
                      label="ID cuenta"
                      name="ID cuenta"
                      autoComplete="ID cuenta"
                      autoFocus
                      onBlur={handleUsernameOnBlur}
                      helperText={user.errorIsValid ? user.descName : ''}
                  />
                  <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onBlur={handlePasswordOnBlur}
                      helperText={user.errorPass ? user.descPass : ''}
                  />
                  <Button
                      //type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      onClick={handleClick}
                  >
                    Entrar
                  </Button>
                </form>
              </div>
            </Grid>
          </Grid>
          <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle id="alert-dialog-slide-title">{userCtx.description}</DialogTitle>
              <DialogContent>
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
