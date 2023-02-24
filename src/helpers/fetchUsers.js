import dotenv from 'dotenv';
import md5 from 'js-md5';
dotenv.config();

export const UseFetchUsersByName = async (name) => {
  const url = `${process.env.REACT_APP_API_URL}/users/username-validation?username=${name}`;
  return (await fetch(url, { mode: 'cors', method: 'GET' })).json();
};

export const UserFetchEmailByEmail = async (email) => {
  const url = `${process.env.REACT_APP_API_URL}/users/email-validation?email=${email}`;
  return (await fetch(url, { mode: 'cors', method: 'GET' })).json();
};

export const UseFetchAddUser = async (user) => {
  const url = `${process.env.REACT_APP_API_URL}/users/add-new-user?username=${user.username}&lastname=${user.lastName}&email=${user.email}&password=${user.password}&secretQuestion=${user.secretQuestion}&secretAnswer=${user.secretAnswer}`;
  return (await fetch(url, { mode: 'cors', method: 'POST' })).json();
};

export const UserFetchLogin = async (username, password) => {
  const url = `${process.env.REACT_APP_API_URL}/users/sing-in?username=${username}&password=${password}`;
  return (await fetch(url, { mode: 'cors', method: 'GET' })).json();
};

export const UserFetchSaveAccountChange = async (username, password, email) => {
  const url = `${process.env.REACT_APP_API_URL}/users/edit-account?username=${username}&password=${md5.hex(
    password
  )}&email=${email}`;
  return (await fetch(url, { mode: 'cors', method: 'POST' })).json();
};

export const getLoadInformation = async () => {
  const url = `${process.env.REACT_APP_API_URL}/users/get-load-information`;
  return (await fetch(url, { mode: 'cors', method: 'GET' })).json();
};

export const addSilkAfterPayment = async (username, silkQuantity) => {
  const url = `${process.env.REACT_APP_API_URL}/users/user-add-silk?username=${username}&silkQuantity=${silkQuantity}`;
  return (await fetch(url, { mode: 'cors', method: 'POST' })).json();
};
