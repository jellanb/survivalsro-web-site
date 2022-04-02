import {useState} from "react";


export default function UseLanguageSetting(){
    const [locale, setLocale] = useState(navigator.locale);

    return {
        locale,
        setLocale
    }
}
