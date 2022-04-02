import { useState } from 'react';
import { getLoadInformation } from '../helpers/fetchUsers';


export default function UseMain() {
    const [userLastKill, setUserLastKill] = useState({});
    const [usersOnlineCount, setUsersOnlineCount] = useState({});
    const [fortressInfo, setFortressInfo] = useState([]);
    const [nextCaptureFlagTime, setNextCaptureFlagTime] = useState({});

    const loadInformation = async (setOpenDialog) => {
        try {
            setOpenDialog(true);
            const { usersOnline, usernameLastUniqueKill, fortressInfo, nextCaptureFlagTime } = await getLoadInformation();
            const { CharName16 } = usernameLastUniqueKill;
            setUserLastKill(CharName16);
            setUsersOnlineCount(usersOnline + 30);
            setFortressInfo(fortressInfo);
            setNextCaptureFlagTime(nextCaptureFlagTime);
            setOpenDialog(false);
        } catch (failure) {
            setOpenDialog(true);
        }
    }

    return {
        loadInformation,
        userLastKill,
        usersOnlineCount,
        fortressInfo,
        nextCaptureFlagTime
    }
}
