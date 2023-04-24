import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Fragment, React, useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import Box from '@mui/material/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FeedbackDialog from '../auth/components/editAccount/FeedbackDialog';
import { useSingUp } from '../hooks/useSingUP';
import BackDropPayment from '../components/common/progress/BackDropPayment';

export default function RecoveryPassword() {
  const [disableButton, setDisableButton] = useState(false);
  const [disableUserName, setDisableUserName] = useState(false);
  const [open, setOpen] = useState(false);
  const [openLoad, setOpenLoad] = useState(false);
  const [usernameErrors, setUsernameErrors] = useState({});
  const [codeErrors, setCodeErrors] = useState({});
  const [resultMsg, setResultMsg] = useState({});
  const [userName, setUserName] = useState(undefined);
  const { inputValidation, resetPasswordRequest, validPasswordRequest } = useSingUp();
  const handleSubmit = (event) => {
    async function handleSubmit(event) {
      event.preventDefault();
      const submitName = event.nativeEvent.submitter.name;
      const formData = new FormData(event.currentTarget);
      if (submitName === 'send-code') {
        const username = formData.get('username');
        const usernameValidation = inputValidation('username', username);
        setUsernameErrors(usernameValidation);
        if (!usernameValidation.error) {
          setUserName(username);
          setDisableButton(true);
          setDisableUserName(true);
          const message = await resetPasswordRequest(username);
          setTimeout(() => {
            setDisableButton(false);
            setDisableUserName(false);
          }, 90000);
          return message;
        }
      }
      if (submitName === 'validate-code') {
        console.log('validate-code-click');
        const code = formData.get('code');
        const codeValidation = inputValidation('code', code);
        setCodeErrors(codeValidation);
        if (!codeValidation.error) {
          const msg = await validPasswordRequest(userName, code);
          console.log(msg);
          return msg;
        }
      }
    }
    setOpenLoad(true);
    handleSubmit(event).then((msg) => {
      console.log(msg);
      if (msg.message === 'CODE_GENERATED' || msg === 'CODE_IS_NOT_EXPIRED') {
        setResultMsg('Codigo enviado correctamente!');
        setOpen(true);
        setOpenLoad(false);
      }
      if (msg.message === 'USER_NOT_FOUND') {
        setResultMsg('Usuario no encontrado!');
        setOpen(true);
        setDisableButton(false);
        setDisableUserName(false);
        setOpenLoad(false);
      }
      if (msg.message === 'INTERNAL_ERROR_SERVER') {
        setResultMsg('Error por favor contacte al administraddor!');
        setOpen(true);
        setDisableButton(false);
        setDisableUserName(false);
        setOpenLoad(false);
      }
      if (msg.message.email !== undefined) {
        setResultMsg(`Se ha enviado un codigo al email : ${msg.message.email} para reestablecer tu contraseña!`);
        setOpen(true);
        setOpenLoad(false);
      }
      if (msg.message === 'CODE_NOT_MATCHED') {
        setResultMsg('El codigo introducido es incorrecto!');
        setOpen(true);
        setDisableButton(false);
        setDisableUserName(false);
        setOpenLoad(false);
      }
      if (msg.message === 'USER_WITH_OUT_CODE') {
        setResultMsg('Ha ocurrido un error por favor contacte al administrador!');
        setOpen(true);
        setDisableButton(false);
        setDisableUserName(false);
        setOpenLoad(false);
      }
      if (msg.message == 'RESET_PASSWORD_SUCCESS_FULLY') {
        setResultMsg(`Su nueva contraseña fue enviada a su Email!`);
        setOpen(true);
        setOpenLoad(false);
      }
    });
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <br />
      <br />
      <Container component="main" maxWidth="xl">
        <Grid container component="main">
          <CssBaseline />
          <Grid item xs={false} sm={4} md={4} />
          <div>
            <form onSubmit={handleSubmit} noValidate>
              <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
                <Typography variant="h2" component="h1" gutterBottom>
                  Recovery password
                </Typography>
                <TextField
                  fullWidth
                  id="username"
                  name="username"
                  label={'Username'}
                  variant="filled"
                  disabled={disableUserName}
                  helperText={!usernameErrors.error ? '' : usernameErrors.description}
                />
                <Typography variant="h5" component="h2" gutterBottom>
                  {'Enviaremos un codigo a tu correo electronico registrado'}
                  {'en tu cuenta con el que podras reestablecer tu contraseña'}
                </Typography>
                <Typography variant="body1">
                  {'NOTA: Si no reciber un correo con el codigo ponte en contacto con el administrador.'}
                </Typography>
              </Container>
              <Box
                component="footer"
                sx={{
                  py: 3,
                  px: 2,
                  mt: 'auto',
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800]
                }}
              >
                <Container maxWidth="sm">
                  <TextField
                    id="code"
                    name="code"
                    label={'Codigo'}
                    variant="filled"
                    helperText={!codeErrors.error ? '' : codeErrors.description}
                  />
                </Container>
                <Typography variant="body1">
                  {!disableButton ? 'Presiona el boton para enviar el codigo.' : ''}
                </Typography>
                <Typography variant="body1">{disableButton ? 'Introduce el codigo' : ''}</Typography>
              </Box>
              <br />
              <Button
                type="submit"
                name="send-code"
                fullWidth
                variant="contained"
                disabled={disableButton}
                color="primary"
              >
                Enviar codigo
              </Button>
              <br />
              <Button
                type="submit"
                name="validate-code"
                fullWidth
                variant="contained"
                disabled={!disableButton}
                color="primary"
              >
                Validar codigo
              </Button>
            </form>
          </div>
        </Grid>
      </Container>
      <br />
      <br />
      <FeedbackDialog isOpen={open} handleClose={handleClose} msg={resultMsg} />
      <BackDropPayment open={openLoad} />
    </Fragment>
  );
}
