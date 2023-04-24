import { useContext, useState } from 'react';
import { UserContext } from './UserContext';
import { UserFetchEmailByEmail, UserFetchSaveAccountChange } from '../helpers/fetchUsers';

export const UseEditAccount = () => {
  const { userCtx, setUserCtx } = useContext(UserContext);
  const [load, setLoad] = useState(false);
  const [dialog, setDialog] = useState(false);
  const inputValidation = (name, value) => {
    if (name === 'currentPassword') {
      if (!value) return { error: true, description: 'password is required!' };
      if (value.length < 5) return { error: true, description: 'password must be more than 6 characteres!' };
      return { error: false, description: '' };
    }
    if (name === 'firstNewPassword') {
      if (!value) return { error: true, description: 'password is required!' };
      if (value.length < 5) return { error: true, description: 'password must be more than 6 characteres!' };
      return { error: false, description: '' };
    }
    if (name === 'secondNewPassword') {
      if (!value) return { error: true, description: 'password is required!' };
      if (value.length < 5) return { error: true, description: 'password must be more than 6 characteres!' };
      return { error: false, description: '' };
    }
    if (name === 'email') {
      if (!value) return { error: true, description: 'email is required!' };
      const emailValid = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      if (!emailValid.test(value)) return { error: true, description: 'email is invalid!' };
      return { error: false, description: '' };
    }
    if (name === 'secretQuestion') {
      if (!value) return { error: true, description: 'secret question is required!' };
      return { error: false, description: '' };
    }
    if (name === 'secretAnswer') {
      if (value === '') return { error: true, description: 'secret answer question is required!' };
      return { error: false, description: '' };
    }
  };
  const processUserChanges = async (password, email, newPassword, secretQuestion, secretAnswer) => {
    setLoad(true);
    const resData = await UserFetchSaveAccountChange(
      userCtx.username,
      password,
      email,
      newPassword,
      secretQuestion,
      secretAnswer
    );
    console.log(resData);
    if (resData.username !== undefined) {
      setUserCtx({
        ...userCtx,
        password: resData.password,
        email: resData.email
      });
      setLoad(false);
      setDialog(true);
    }
  };

  return {
    processUserChanges,
    userCtx,
    load,
    dialog,
    setDialog,
    inputValidation
  };
};
