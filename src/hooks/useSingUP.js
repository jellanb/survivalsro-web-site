import React, { useState } from "react";
import { UseFetchUsersByName, UserFetchEmailByEmail, UseFetchAddUser } from '../helpers/fetchUsers';
import { FormattedMessage } from 'react-intl';

export const useSingUp = () => {
    const [user, setUser] = useState({});
    const [load, setLoad] = useState(false);
    const [dialog, setDialog] = useState(false);

    const createNewUser = async (e) => {
        e.preventDefault()
        setLoad(true)

        if (user.username === undefined || user.username === '') {
            setUser({...user, errorIsValid: true, descName: <FormattedMessage id="app.SingUpInputUserIdError"/>})
            setLoad(false)
            return
        }
        if (user.lastName === undefined || user.lastName === '') {
            setUser({...user, errorLastname: true, descLast: <FormattedMessage id="app.SingUpInputNameError"/>})
            setLoad(false)
            return
        }
        if (user.email === undefined || user.email === '') {
            setUser({...user, errorEmail: true, descEmail: <FormattedMessage id="app.SingUpInputEmailError"/>})
            setLoad(false)
            return
        }
        if (user.password === undefined || user.password === '') {
            setUser({...user, errorPass: true, descPass: <FormattedMessage id="app.SingUpInputPassError"/>})
            setLoad(false)
            return
        }
        if (user.secretQuestion === undefined || user.secretQuestion === '') {
            setUser({...user, errorQuestion: true, errorQuestionDesc: <FormattedMessage id="app.SingUpInputSecretQError"/>})
            setLoad(false)
            return
        }
        if (user.secretAnswer === undefined || user.secretAnswer === '') {
            setUser({...user, errorAnswer: true, errorAnswerDesc: 'debe ingresar una respuesta secreta!'})
            setLoad(false)
            return
        }

        const result = await UseFetchAddUser(user);
        if (result !== undefined){
            setLoad(false);
            setDialog(true);
        }
    }

    const handleUsernameOnBlur = async (e) => {
        const value = e.target.value.split(" ").join("");
        setLoad(true);

        if (!value) {
            setUser({...user, errorIsValid: true, descName: <FormattedMessage id="app.SingUpInputUserIdError"/>})
            setLoad(false);
            return
        }

        const result = await UseFetchUsersByName(value);
        if (!result.isValid) {
            setUser({...user, isValid: result.isValid, username: value, errorIsValid: false, descName: ''})
            setLoad(false);
        } else {
            function getMessageError(){
                return (
                    <div>
                        <FormattedMessage id="app.loginInputSingUpError2"/>
                        {`  ${value}  `}
                        <FormattedMessage id="app.loginInputSingUpError3"/>
                    </div>
                )
            }
            setUser({...user, errorIsValid: true, descName: getMessageError()})
            setLoad(false);
        }
    }

    const handlerLastNameOnBlur = async (e) => {
        const value = e.target.value;
        if (value) {
            setUser({...user, lastName: value, errorLastname: false, descLast: ''})
        } else {
            setUser({...user, errorLastname: true, descLast: <FormattedMessage id="app.SingUpInputNameError"/>})
        }
    }

    const handleEmailOnBlur = async (e) => {
        const value = e.target.value;
        setLoad(true);
        const emailValid = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (!emailValid.test(value)) {
            setUser({...user, errorEmail: true, descEmail: 'email is invalid!'})
            setLoad(false);
            return
        }
        const email = await UserFetchEmailByEmail(value)
        console.log(email)
        if (email.isValid) {
            setUser({...user, email: value, errorEmail: false, descEmail: ''})
            setLoad(false)
        } else {
            setUser({...user, errorEmail: true, descEmail: <FormattedMessage id="app.SingUpInputEmailError2"/>})
            setLoad(false)
        }
    }

    const handlePasswordOnBlur = (e) =>{
        const password = e.target.value
        if (password && password.length >= 6)
        {
            setUser({ ...user, password: password,  errorPass: false, descPass: ''});
        }
        else
        {
            setUser({...user, password: password,  errorPass: true, descPass: <FormattedMessage id="app.SingUpInputPassError"/>});
        }
    }

    const handleChangeSelectSecretQuestion = (e) => {
        let question = e.target.value
        console.log(question)
        if (question) {
            setUser({...user, secretQuestion: question.toString(), errorQuestion: false, errorQuestionDesc: ''})
        } else {
            setUser({...user, errorQuestion: true, errorQuestionDesc: <FormattedMessage id="app.SingUpInputSecretQError"/>})
        }
    }

    const handleSecretAnswerOnBlur = (e) => {
        let answer = e.target.value
        if (answer || answer.length > 0){
            setUser({...user, secretAnswer: answer.toString(), errorAnswer: false, errorAnswerDesc:''})
        } else {
            setUser({...user, errorAnswer: true, errorAnswerDesc: <FormattedMessage id="app.SingUpInputSecretAError"/>})
        }
    }

    return {
        user,
        handleEmailOnBlur,
        handlePasswordOnBlur,
        handleUsernameOnBlur,
        handlerLastNameOnBlur,
        createNewUser,
        load,
        dialog,
        setDialog,
        handleChangeSelectSecretQuestion,
        handleSecretAnswerOnBlur,
    };
}


