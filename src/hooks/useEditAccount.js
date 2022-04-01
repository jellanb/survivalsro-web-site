import { useContext, useState } from 'react';
import { UserContext } from "./UserContext";
import { UserFetchEmailByEmail, UserFetchSaveAccountChange } from '../helpers/fetchUsers'

export const UseEditAccount = () => {
    const { userCtx, setUserCtx } = useContext(UserContext)
    const [accountData, setAccountData] = useState({})
    const [load, setLoad] = useState(false)
    const [dialog, setDialog] = useState(false)

    const handleSaveClick = async (e) => {
        e.preventDefault();
        setLoad(true)
        if (accountData.errorPass === undefined || accountData.password === ''){
            setAccountData({ ...accountData, password: undefined,  errorPass: true, descPass: 'Contraseña incorrecta!'});
            setLoad(false)
            return
        }
        if (accountData.errorNewPass === undefined || accountData.newPassword === '') {
            setAccountData({...accountData, errorNewPass: true, errorNewPassDesc: '6 caracteres minimo!'})
            setLoad(false)
            return
        }
        if (accountData.errorConfirmPass === undefined || accountData.confirmPassword === '') {
            setAccountData({...accountData, errorConfirmPass: true, errorConfirmPassDesc: '6 caracteres minimo!'})
            setLoad(false)
            return
        }
        if (accountData.errorEmail === undefined || accountData.email === '') {
            setAccountData({...accountData, errorEmail: true, descEmail: 'debe ingresar un Email!'})
            setLoad(false)
            return
        }
        if (accountData.errorQuestion === undefined || accountData.secretQuestion === '') {
            setAccountData({...accountData, errorQuestion: true, errorQuestionDesc: 'Debe selecionar una pregunta secreta!'})
            setLoad(false)
            return
        }
        if (accountData.errorAnswer === undefined || accountData.secretAnswer === '') {
            setAccountData({...accountData, errorAnswer: true, errorAnswerDesc:'Debe ingresar una respuesta!'})
            setLoad(false)
            return
        }
        const resData = await UserFetchSaveAccountChange(userCtx.username, accountData.newPassword, accountData.email)
        console.log(resData)
        if (resData.username !== undefined) {
            setUserCtx({
                ...userCtx,
                password: resData.password,
                email: resData.email
            })
            setLoad(false)
            setDialog(true)
        }

    }

    const handlePasswordOnBlur = async (e) => {
        setLoad(true)
        const passwordCurrent = e.target.value
        if (passwordCurrent && passwordCurrent.length >= 6)
        {
            if (userCtx.isSingIn && userCtx.password === passwordCurrent) {
                setAccountData({ ...accountData, password: passwordCurrent,  errorPass: false, descPass: ''});
                setLoad(false)
            } else {
                setAccountData({ ...accountData, password: undefined,  errorPass: true, descPass: 'Contraseña incorrecta!'});
                setLoad(false)
            }
        }
        else
        {
            setAccountData({...accountData, password: undefined,  errorPass: true, descPass: '6 caracteres minimo!'});
            setLoad(false)
        }
    }

    const handleNewPasswordOnBlur = async (e) => {
        setLoad(true)
        const value = await e.target.value
        if (value && e.target.value.length >= 6) {
            setAccountData({...accountData, newPassword: value, errorNewPass: false, errorNewPassDesc: '' })
            setLoad(false)
        } else {
            setAccountData({...accountData, errorNewPass: true, errorNewPassDesc: '6 caracteres minimo!'})
            setLoad(false)
        }
    }

    const handleConfirmPasswordOnBlur = async (e) => {
        const passwordConfirm = e.target.value
        setLoad(true)
        if (passwordConfirm && e.target.value.length >= 6) {
            if (accountData.newPassword !== passwordConfirm){
                setAccountData({...accountData, errorConfirmPass: true, errorConfirmPassDesc: 'La contraseña no coincide!'})
                setLoad(false)
            } else {
                setAccountData({...accountData, confirmPassword: passwordConfirm, errorConfirmPass: false, errorConfirmPassDesc: '' })
                setLoad(false)
            }
        } else {
            setAccountData({...accountData, errorConfirmPass: true, errorConfirmPassDesc: '6 caracteres minimo!'})
            setLoad(false)
        }
    }

    const handleEmailOnBlur = async (e) => {
        const value = e.target.value;
        setLoad(true);
        const emailValid = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (!emailValid.test(value)) {
            setAccountData({...accountData, errorEmail: true, descEmail: 'email is invalid!'})
            setLoad(false);
            return
        }
        const email = await UserFetchEmailByEmail(value)
        if (!email.isValid) {
            setAccountData({...accountData, email: value, errorEmail: false, descEmail: ''})
            setLoad(false)
        } else {
            setAccountData({...accountData, errorEmail: true, descEmail: 'email no existe!'})
            setLoad(false)
        }
    }

    const handleChangeSelectSecretQuestion = (e) => {
        let question = e.target.value
        setLoad(true)
            if (question === userCtx.question) {
                setAccountData({...accountData, secretQuestion: question, errorQuestion: false, errorQuestionDesc: ''})
                setLoad(false)
            } else {
                setAccountData({...accountData, errorQuestion: true, errorQuestionDesc: 'La pregunta secreta es incorrecta'})
                setLoad(false)
            }

    }

    const handleSecretAnswerOnBlur = (e) => {
        let answer = e.target.value
        setLoad(true)
        if (answer || answer.length > 0){
            if (answer === userCtx.answer) {
                setAccountData({...accountData, secretAnswer: answer, errorAnswer: false, errorAnswerDesc:''})
                setLoad(false)
            } else {
                setAccountData({...accountData, secretAnswer: answer, errorAnswer: true, errorAnswerDesc:'La respuesta secreta es incorrecta'})
                setLoad(false)
            }
        } else {
            setAccountData({...accountData, errorAnswer: true, errorAnswerDesc: 'debe ingresar una respuesta secreta!'})
            setLoad(false)
        }
    }

    return {
        handlePasswordOnBlur,
        handleSaveClick,
        handleNewPasswordOnBlur,
        handleConfirmPasswordOnBlur,
        handleEmailOnBlur,
        handleChangeSelectSecretQuestion,
        handleSecretAnswerOnBlur,
        userCtx,
        accountData,
        load,
        dialog,
        setDialog
    }

}
