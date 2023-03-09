import { useState } from 'react';
import { getLoadInformation } from '../helpers/fetchUsers';

export default function UseMain() {
  const [userLastKill, setUserLastKill] = useState({});
  const [usersOnlineCount, setUsersOnlineCount] = useState({});
  const [fortressInfo, setFortressInfo] = useState([]);
  const [nextCaptureFlagTime, setNextCaptureFlagTime] = useState({});
  const [systemTime, setSystemTime] = useState({});
  const [playesOnlineNames, setPlayersOnlineNames] = useState([]);
  const [uniqueSection, setUniqueSection] = useState([]);

  const loadInformation = async (setOpenDialog) => {
    try {
      setOpenDialog(true);
      const {
        usersOnline,
        usernameLastUniqueKill,
        fortressInfo,
        nextCaptureFlagTime,
        serverTime,
        onlinePlayersNames,
        lastKillByUserName
      } = await getLoadInformation();
      const { CharName16 } = usernameLastUniqueKill;
      setSystemTime(serverTime.SYSTEM_TIME);
      setUserLastKill(CharName16);
      setUsersOnlineCount(usersOnline);
      setFortressInfo(fortressInfo);
      setNextCaptureFlagTime(nextCaptureFlagTime);
      setOpenDialog(false);
      setPlayersOnlineNames(onlinePlayersNames);
      setUniqueSection(lastKillByUserName);
    } catch (failure) {
      setOpenDialog(true);
    }
  };
  return {
    loadInformation,
    userLastKill,
    usersOnlineCount,
    fortressInfo,
    nextCaptureFlagTime,
    systemTime,
    playesOnlineNames,
    uniqueSection
  };
}
