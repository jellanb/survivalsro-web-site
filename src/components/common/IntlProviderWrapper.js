import English from '../../lang/en.json';
import React, {useState} from "react";
import {IntlProvider} from "react-intl";
import SilkroadSurvivalApp from "../../silkroad-survival-app";


export default function IntlProviderWrapper(){
    const [locale, setLocale] = useState('en-US');
    const [message, setMessage] = useState(English);

    return (
        <IntlProvider locale ={locale} messages={message}>
            <SilkroadSurvivalApp setMessage={setMessage} locale={locale} setLocale={setLocale}/>
        </IntlProvider>
    )

}
