import { useState } from 'react';
import { getUserLastUniqueKill, getQuantityUsersOnline } from '../helpers/fetchUsers';
import { UseGetFortressInfo } from '../helpers/fetchFortressInfo';


export default function UseFortesBarIndo() {
    const [userLastKill, setUserLastKill] = useState({});
    const [usersOnlineCount, setUsersOnlineCount ] = useState({});
    const [fortressInfo, setFortressInfo] = useState([{}])

    const getFortressInfo = async () => {
        const getFortressInfo = await UseGetFortressInfo();
        setFortressInfo(getFortressInfo);
    }

    const getUserLastKill = async () => {
        const { CharName16 } = await getUserLastUniqueKill();
        setUserLastKill(CharName16);
    }

    const loadUsersOnline = async () => {
        const { usersOnline } = await getQuantityUsersOnline();
        setUsersOnlineCount(usersOnline + 30);
    }

    return {
        getUserLastKill,
        userLastKill,
        loadUsersOnline,
        usersOnlineCount,
        getFortressInfo,
        fortressInfo
    }
}
