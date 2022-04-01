import md5 from 'js-md5';
import dotenv from 'dotenv';
dotenv.config();


export const UseFetchUsersByName = async (name) => {
    const url = `${process.env.REACT_APP_API_URL}/users/GetUserByName?username=${name}`;
    return (await fetch(url, {mode: 'cors', method:'GET'})).json();
}

export const UserFetchEmailByEmail = async (email) => {
    const url = `${process.env.REACT_APP_API_URL}/users/EmailByEmail?email=${email}`;
    return (await fetch(url, {mode: 'cors' , method:'GET'})).json();
}

export const UseFetchAddUser = async (user) => {
    const url = `${process.env.REACT_APP_API_URL}/users/saveUser?username=${user.username}&lastname=${user.lastName}&email=${user.email}&password=${md5.hex(user.password)}&secretQuestion=${user.secretQuestion}&secretAnswer=${user.secretAnswer}`;
    return (await fetch(url, {mode:'cors', method:'POST'})).json();
}

export const UserFetchLogin = async (username, password) => {
    const url = `${process.env.REACT_APP_API_URL}/users/UserByNamePassword?username=${username}&password=${md5.hex(password)}`;
    return (await fetch(url, {mode:'cors', method:'GET'})).json();
}

export const UserFetchSaveAccountChange = async (username, password, email) => {
    const url = `${process.env.REACT_APP_API_URL}/users/EditAccount?username=${username}&password=${md5.hex(password)}&email=${email}`
    return (await fetch(url, {mode:'cors', method:'POST'})).json();
}

export const getUserLastUniqueKill = async () => {
    const url = `${process.env.REACT_APP_API_URL}/users/getUserLastUniqueKill`
    return (await fetch(url, {mode:'cors', method:'GET'})).json();
}
export const getQuantityUsersOnline = async () => {
    const url = `${process.env.REACT_APP_API_URL}/users/getQuantityUsersOnline`
    return (await fetch(url, {mode: 'cors', method: 'GET'})).json();
}

export const addSilkAfterPayment = async (username, silkQuantity) => {
    const url = `${process.env.REACT_APP_API_URL}/users/add-silk-after-payment?username=${username}&silkQuantity=${silkQuantity}`
    return (await fetch(url, {mode:'cors', method:'POST'})).json();
}
