import React, { Fragment, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useSingUp } from '../hooks/useSingUP';
import BackDropPayment from '../components/common/progress/BackDropPayment';
import { useTranslation } from 'react-i18next';
import SingUpForm from '../auth/components/singup/SingUpForm';
import RegisterDialog from '../auth/components/singup/RegisterDialog';
import md5 from 'js-md5';

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
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  container: {
    backgroundColor: 'white'
  }
}));

export default function SignUp() {
  const { t } = useTranslation();
  const classes = useStyles();
  const [userNameErrors, setUsernameErrors] = useState({});
  const [nameErrors, setNameErrors] = useState({});
  const [emailErrors, setEmailErrors] = useState({});
  const [passwordErrors, setPasswordErrors] = useState({});
  const [secretQErrors, setSecretQErrors] = useState({});
  const [secretAErrors, setSecretAErrors] = useState({});
  const [registerResult, setRegisterResult] = useState({});
  const { createNewUser, load, dialog, setDialog, imputValidation } = useSingUp();

  const handleClose = () => {
    setDialog(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get('username').trim();
    const usernameValidation = imputValidation('username', username);
    setUsernameErrors(usernameValidation);

    const name = formData.get('name').trim();
    const nameValidation = imputValidation('name', name);
    setNameErrors(nameValidation);

    const email = formData.get('email').trim();
    const emailValidation = imputValidation('email', email);
    setEmailErrors(emailValidation);

    const password = md5.hex(formData.get('password').trim());
    const passwordValidation = imputValidation('password', formData.get('password').trim());
    setPasswordErrors(passwordValidation);

    const secretQuestion = formData.get('secretQuestion');
    const secretQuestionValidation = imputValidation('secretQuestion', secretQuestion);
    setSecretQErrors(secretQuestionValidation);

    const secretAnswer = formData.get('secretAnswer');
    const secretAnswerValidation = imputValidation('secretAnswer', secretAnswer);
    setSecretAErrors(secretAnswerValidation);

    if (
      !usernameValidation.error &&
      !nameValidation.error &&
      !emailValidation.error &&
      !passwordValidation.error &&
      !secretQuestionValidation.error &&
      !secretAnswerValidation.error
    ) {
      const userResult = await createNewUser({
        username,
        lastName: name,
        email,
        password,
        secretQuestion,
        secretAnswer
      });
      setRegisterResult(userResult);
      setDialog(true);
    }
  };

  return (
    <Fragment>
      <Container component="main" maxWidth="xs" className={classes.container}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {t('app.SingUpTile')}
          </Typography>
          <SingUpForm
            handleSubmit={handleSubmit}
            userNameErrors={userNameErrors}
            nameErrors={nameErrors}
            emailErrors={emailErrors}
            passwordErrors={passwordErrors}
            secretQErrors={secretQErrors}
            secretAErrors={secretAErrors}
          />
        </div>
        <div>
          <RegisterDialog registerResult={registerResult} isOpen={dialog} handleClose={handleClose} />
        </div>
      </Container>
      <BackDropPayment open={load} />
    </Fragment>
  );
}
