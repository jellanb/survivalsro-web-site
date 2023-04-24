import React, { Fragment, useState } from 'react';
import { UseEditAccount } from '../hooks/useEditAccount';
import ChangePasswordForm from '../auth/components/editAccount/ChangePasswordForm';
import md5 from 'js-md5';
import ResponseDialog from '../auth/components/editAccount/ResponseDialog';
import BackDropPayment from '../components/common/progress/BackDropPayment';

export default function EditAccount() {
  const [currentPassErrors, setCurrentPassErrors] = useState({});
  const [firstNewPasswordErrors, SetFirstNewPasswordErrors] = useState({});
  const [secondNewPasswordErrors, SetSecondNewPasswordErrors] = useState({});
  const [emailErrors, setEmailErrors] = useState({});
  const [secretQuestionErrors, setSecretQuestionErrors] = useState({});
  const [secretAnswerErrors, setSecretAnswerErrors] = useState({});
  const { processUserChanges, load, setDialog, dialog, inputValidation } = UseEditAccount();

  const handleClose = () => {
    setDialog(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const currentPassword = md5.hex(formData.get('currentPassword').trim());
    const currentPasswordValidation = inputValidation('currentPassword', currentPassword);
    setCurrentPassErrors(currentPasswordValidation);

    const firstNewPassword = formData.get('firstNewPassword').trim();
    const firstNewPasswordValidation = inputValidation('firstNewPassword', firstNewPassword);
    SetFirstNewPasswordErrors(firstNewPasswordValidation);

    const secondNewPassword = formData.get('secondNewPassword').trim();
    const secondNewPasswordValidation = inputValidation('secondNewPassword', secondNewPassword);
    SetSecondNewPasswordErrors(secondNewPasswordValidation);

    const email = formData.get('email').trim();
    const emailValidation = inputValidation('email', email);
    setEmailErrors(emailValidation);

    const secretQuestion = formData.get('secretQuestion').trim();
    const secretQuestionValidation = inputValidation('secretQuestion', secretQuestion);
    setSecretQuestionErrors(secretQuestionValidation);

    const secretAnswer = formData.get('secretAnswer').trim();
    const secretAnswerValidation = inputValidation('secretAnswer', secretAnswer);
    setSecretAnswerErrors(secretAnswerValidation);

    if (
      !currentPassErrors.error &&
      !firstNewPasswordErrors.error &&
      !secondNewPasswordErrors &&
      !emailErrors.error &&
      !secretQuestionErrors.error &&
      !secretAnswerErrors.error
    ) {
      await processUserChanges(
        md5.hex(currentPassword),
        email,
        md5.hex(firstNewPassword),
        secretQuestion,
        secretAnswer
      );
    }
  };

  return (
    <Fragment>
      <ChangePasswordForm
        handleSubmit={handleSubmit}
        currentPassErrors={currentPassErrors}
        firstNewPasswordErrors={firstNewPasswordErrors}
        secondNewPasswordErrors={secondNewPasswordErrors}
        emailErrors={emailErrors}
        secretQuestionErrors={secretQuestionErrors}
        secretAnswerErrors={secretAnswerErrors}
      />
      <ResponseDialog dialog={dialog} handleClose={handleClose} />
      <BackDropPayment open={load} />
    </Fragment>
  );
}
