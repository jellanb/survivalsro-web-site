import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  container: {
    backgroundColor: 'white'
  }
}));

export default function ChangePasswordForm({
  handleSubmit,
  currentPassErrors,
  emailErrors,
  firstNewPasswordErrors,
  secondNewPasswordErrors,
  secretQuestionErrors,
  secretAnswerErrors
}) {
  const classes = useStyles();

  return (
    <Fragment>
      <Container component="main" maxWidth="xs" className={classes.container}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Editar cuenta
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="currentPassword"
                  label="Contraseña actual"
                  type="password"
                  id="currentPassword"
                  autoComplete="current-password"
                  helperText={currentPassErrors.error ? currentPassErrors.description : ''}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="firstNewPassword"
                  label="Nueva contraseña"
                  type="password"
                  id="firstNewPassword"
                  autoComplete="first-password"
                  helperText={firstNewPasswordErrors.error ? firstNewPasswordErrors.description : ''}
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
                  helperText={secondNewPasswordErrors.error ? secondNewPasswordErrors.description : ''}
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
                  helperText={emailErrors.error ? emailErrors.description : ''}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="outlined" className={classes.form}>
                  <InputLabel id="demo-simple-select-filled-label">Seleccione una pregunta secreta *</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="secretQuestion"
                    //value={accountData.errorAnswerDesc}
                    label="Seleccione una pregunta secreta *"
                  >
                    <MenuItem value={'Lugar de nacimiento de la madre'}>Lugar de nacimiento de la madre</MenuItem>
                    <MenuItem value={'Mejor amigo de la infancia'}>Mejor amigo de la infancia</MenuItem>
                    <MenuItem value={'Nombre de la primera mascota'}>Nombre de la primera mascota</MenuItem>
                    <MenuItem value={'Profesor favorito'}>Profesor favorito</MenuItem>
                    <MenuItem value={'Personaje faborita de la historia'}>Personaje faborita de la historia</MenuItem>
                    <MenuItem value={'Ocupación de abuelo'}>Ocupación de abuelo</MenuItem>
                  </Select>
                  <FormHelperText>{secretQuestionErrors.error ? secretQuestionErrors.description : ''}</FormHelperText>
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
                  helperText={secretAnswerErrors.error ? secretAnswerErrors.description : ''}
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              Guardar
            </Button>
          </form>
        </div>
      </Container>
    </Fragment>
  );
}
