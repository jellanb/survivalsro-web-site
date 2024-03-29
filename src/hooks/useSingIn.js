import { useState, useContext } from 'react';
import { UserFetchLogin } from '../helpers/fetchUsers';
import { UserContext } from '../hooks/UserContext';
import { useTranslation } from 'react-i18next';

export const useSingIn = () => {
  const [user, setUser] = useState({});
  const [load, setLoad] = useState(false);
  const { userCtx, setUserCtx } = useContext(UserContext);
  const { t } = useTranslation();

  const inputValidation = (name, value) => {
    if (name === 'username') {
      if (!value) return { error: true, description: 'username is required!' };
      if (value.length < 2) return { error: true, description: 'username must be more than 2 characteres!' };
      return { error: false, description: '' };
    }
    if (name === 'password') {
      if (!value) return { error: true, description: 'password is required!' };
      if (value.length < 5) return { error: true, description: 'password must be more than 6 characteres!' };
      return { error: false, description: '' };
    }
  };

  const handleLogoutClick = () => {
    setUserCtx({ ...userCtx, username: undefined, silk: undefined, isSingIn: false, description: '', url: '' });
  };

  const onLoginClick = async (username, password, setLoginResultMessage) => {
    setLoad(true);
    const login = await UserFetchLogin(username, password);
    if (login.isSingIn) {
      const data = {
        username: login.userName,
        silk: login.silk,
        isSingIn: login.isSingIn,
        description: login.description,
        question: login.secretQuestion,
        answer: login.secretAnswer,
        email: login.email,
        password: login.password,
        url: ''
      };
      await setUserCtx({
        ...userCtx,
        username: data.username,
        silk: data.silk,
        isSingIn: data.isSingIn,
        description: data.description,
        question: data.secretQuestion,
        answer: data.secretAnswer,
        email: data.email,
        password: data.password,
        url: ''
      });
      await setLoginResultMessage(data.description);
      setLoad(false);
      return data;
    } else {
      const data = {
        username: login.userName,
        silk: login.silk,
        isSingIn: false,
        description: login.description,
        url: 'SingIn'
      };
      await setUserCtx({
        ...userCtx,
        username: data.userName,
        silk: data.silk,
        isSingIn: false,
        description: data.description,
        url: 'SingIn'
      });
      await setLoginResultMessage(data.description);
      setLoad(false);
      return data;
    }
  };

  return {
    user,
    onLoginClick,
    userCtx,
    setUserCtx,
    load,
    handleLogoutClick,
    inputValidation
  };
};
