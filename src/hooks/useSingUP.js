import { useState } from 'react';
import { UseFetchAddUser } from '../helpers/fetchUsers';

export const useSingUp = () => {
  const [load, setLoad] = useState(false);
  const [dialog, setDialog] = useState(false);

  const createNewUser = async (newUser) => {
    setLoad(true);
    const registerResult = await UseFetchAddUser(newUser);
    setLoad(false);
    return registerResult;
  };

  const imputValidation = (name, value) => {
    if (name === 'username') {
      if (!value) return { error: true, description: 'username is required!' };
      if (value.length < 2) return { error: true, description: 'username must be more than 2 characteres!' };
      return { error: false, description: '' };
    }
    if (name === 'name') {
      if (!value) return { error: true, description: 'name is required!' };
      if (value.length < 2) return { error: true, description: 'name must be more than long 2 characteres!' };
      return { error: false, description: '' };
    }
    if (name === 'password') {
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

  return {
    createNewUser,
    load,
    dialog,
    setDialog,
    imputValidation
  };
};
