import { useState, useContext } from 'react';
import { UserFetchLogin, UseFetchUsersByName } from '../helpers/fetchUsers'
import { UserContext } from '../hooks/UserContext';
import { FormattedMessage } from 'react-intl';

export const useSingIn = () => {
    const [user, setUser] = useState({});
    const [load, setLoad] = useState(false);
    const  { userCtx, setUserCtx }  = useContext(UserContext);

    const handleLogoutClick = () => {
        setUserCtx({...userCtx, username: undefined, silk: undefined, isSingIn: false, description: '', url: '' })
        console.log(userCtx)
    }

    const handleUsernameOnBlur = async (e) => {
        setLoad(true)
        const value = e.target.value;
        const result = await UseFetchUsersByName(value);
        if (!value) {
            setUser({...user, errorIsValid: true, descName: <FormattedMessage id='app.loginInputSingInError'/>})
            setLoad(false)
            return
        }
        console.log(result.isValid)
        if (result.isValid) {
            setUser({...user, username: value, errorIsValid: false, descName: ''});
            setLoad(false);
        } else {
            function getMessageError(){
                return (
                    <div>
                        <FormattedMessage id='app.loginInputSingInError2'/>
                        {`  ${value}  `}
                        <FormattedMessage id='app.loginInputSingInError3'/>
                    </div>

                )}
            setUser({...user, errorIsValid: true, descName: getMessageError()})
            setLoad(false)
        }
    }

    const handlePasswordOnBlur = (e) =>{
        let value = e.target.value;
        if (value && value.length >= 6)
        {
            setUser({ ...user, password: value,  errorPass: false, descPass: ''});
        }
        else
        {
            setUser({...user, password: value,  errorPass: true, descPass: '6 caracteres minimo'});
        }
    }

    const onLoginClick = async (e) => {
        e.preventDefault();
        setLoad(true);
        const login = await UserFetchLogin(user.username, user.password)
        if (login.isSingIn)
        {
            setUserCtx({
                ...userCtx,
                username: login.userName,
                silk: login.silk,
                isSingIn: login.isSingIn,
                description: login.description,
                question: login.secretQuestion,
                answer: login.secretAnswer,
                email: login.email,
                password: login.password,
                url: '' })
            setLoad(false)
        }
        else
        {
            setUserCtx({ ...userCtx, username: login.userName, silk: login.silk, isSingIn: false, description: login.description, url: 'SingIn' })
            setLoad(false)
        }
    }

    return {
        user,
        onLoginClick,
        handlePasswordOnBlur,
        handleUsernameOnBlur,
        userCtx,
        setUserCtx,
        load,
        handleLogoutClick
    };
}
