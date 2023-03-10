import React, { useState, Fragment } from 'react';
import { useSingIn } from '../hooks/useSingIn';
import Container from '@material-ui/core/Container';
import BackDropPayment from '../components/common/progress/BackDropPayment';
import md5 from 'js-md5';
import LoginDialog from '../auth/components/singin/LoginDialog';
import SingInForm from '../auth/components/singin/SingInForm';

export default function SignInSide() {
  const [open, setOpen] = useState(false);
  const [usernameErrors, setUsernameErrors] = useState({});
  const [passwordErrors, setPasswordErrors] = useState({});
  const [loginResultMessage, setLoginResultMessage] = useState([]);

  const { onLoginClick, load, inputValidation } = useSingIn();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get('username').trim();
    const usernameValidation = inputValidation('username', username);
    setUsernameErrors(usernameValidation);

    const password = md5.hex(formData.get('password').trim());
    const passwordValidation = inputValidation('password', formData.get('password').trim());
    setPasswordErrors(passwordValidation);

    if (!usernameValidation.error && !passwordValidation.error) {
      await onLoginClick(username, password, setLoginResultMessage);
      setOpen(true);
    }
  };

  return (
    <Fragment>
      <Container component="main" maxWidth="xl">
        <SingInForm handleSubmit={handleSubmit} usernameErrors={usernameErrors} passwordErrors={passwordErrors} />
        <div>
          <LoginDialog open={open} setOpen={setOpen} message={loginResultMessage} />
        </div>
      </Container>
      <BackDropPayment open={load} />
    </Fragment>
  );
}
