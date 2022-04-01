import React, { Fragment } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import { UseEditAccount } from '../hooks/useEditAccount'
import BackDropPayment from "../components/common/BackDropPayment";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import {Link} from "react-router-dom";
import Slide from "@material-ui/core/Slide";

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

export default function EditAccount() {
    const classes = useStyles();
    const { handlePasswordOnBlur,
        accountData,
        handleNewPasswordOnBlur,
        handleConfirmPasswordOnBlur,
        handleEmailOnBlur,
        handleChangeSelectSecretQuestion,
        handleSecretAnswerOnBlur,
        handleSaveClick,
        load,
        setDialog,
        dialog } = UseEditAccount()

    const handleClose = () => {
        setDialog(false);
    };

    return(
        <Fragment>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Editar cuenta
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="CurrentPassword"
                                    label="Contraseña actual"
                                    type="password"
                                    id="CurrentPassword"
                                    autoComplete="current-password"
                                    onBlur={handlePasswordOnBlur}
                                    helperText={ accountData.errorPass ? accountData.descPass : '' }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="firsPassword"
                                    label="Nueva contraseña"
                                    type="password"
                                    id="firsPassword"
                                    autoComplete="first-password"
                                    onBlur={handleNewPasswordOnBlur}
                                    helperText={ accountData.errorNewPass ? accountData.errorNewPassDesc : '' }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="secondPassword"
                                    label="Repetir contraseña"
                                    type="password"
                                    id="secondPassword"
                                    autoComplete="second-password"
                                    onBlur={handleConfirmPasswordOnBlur}
                                    helperText={ accountData.errorConfirmPass ? accountData.errorConfirmPassDesc : '' }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    id="email"
                                    label="email"
                                    name="email"
                                    autoComplete="email"
                                    onBlur={handleEmailOnBlur}
                                    helperText={ accountData.errorEmail ? accountData.descEmail : '' }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl variant="outlined" className={classes.form}>
                                    <InputLabel id="demo-simple-select-filled-label">Seleccione una pregunta secreta *</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        //value={accountData.errorAnswerDesc}
                                        onChange={handleChangeSelectSecretQuestion}
                                        label="Seleccione una pregunta secreta *"
                                    >
                                        <MenuItem value={'Lugar de nacimiento de la madre'}>Lugar de nacimiento de la madre</MenuItem>
                                        <MenuItem value={'Mejor amigo de la infancia'}>Mejor amigo de la infancia</MenuItem>
                                        <MenuItem value={'Nombre de la primera mascota'}>Nombre de la primera mascota</MenuItem>
                                        <MenuItem value={'Profesor favorito'}>Profesor favorito</MenuItem>
                                        <MenuItem value={'Personaje faborita de la historia'}>Personaje faborita de la historia</MenuItem>
                                        <MenuItem value={'Ocupación de abuelo'}>Ocupación de abuelo</MenuItem>
                                    </Select>
                                    <FormHelperText>{accountData.errorQuestion ? accountData.errorQuestionDesc : ''}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="secretAnswer"
                                    label="Respuesta secreta"
                                    type="secretAnswer"
                                    id="secretAnswer"
                                    autoComplete="current-secretAnswer"
                                    onBlur={handleSecretAnswerOnBlur}
                                    helperText={ accountData.errorAnswer ? accountData.errorAnswerDesc : '' }
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="reset"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleSaveClick}
                        >
                            Guardar
                        </Button>
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
                        <DialogTitle id="alert-dialog-slide-title">{"Has cambiado tu cuenta correctamene!"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText>{ `Datos guardados correctamente!` }</DialogContentText>
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
    )
}
