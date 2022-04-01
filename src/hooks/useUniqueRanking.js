import { UseFetchGetUniquesKills } from '../helpers/fecthUniques'
import {useState} from "react";

export const UseUniqueKills = () => {
    const [killInfo, setKillInfo] = useState();
    const [columnName, setColumnName] = useState();
    const [rowsUsers, setRowsUsers] = useState();
    const [rowsKill, setRowsKill ] = useState();

    const getCharNameUniqueKills = async () => {
        const data = await UseFetchGetUniquesKills()
        const columnsNames = await getColumnsNames(data)
        const values = await getUsersRowsValues(data)
        const uniqueQuantity = await getUniqueKillsQuantity(data)
        console.log(uniqueQuantity)
        setKillInfo(data);
        setColumnName(columnsNames);
        setRowsUsers(values);
        setRowsKill(uniqueQuantity);
    }

    const getColumnsNames = async (killInfo) => {
        let columnsNames = []
        killInfo.forEach((data) => {
            if (columnsNames.length === 0) {
                columnsNames.push(data.unique)
            }
            if (!columnsNames.find((uniqueName) => uniqueName === data.unique)) {
                columnsNames.push(data.unique)
            }
        })
        return columnsNames
    }

    const getUsersRowsValues = async (killInfo) => {
        let usersNames = []
        killInfo.map((item) => {
            if (usersNames.length === 0) {
                usersNames.push(item.username)
            }
            if (!usersNames.find((name) => name === item.username)) {
                usersNames.push(item.username)
            }
        })
        return usersNames
    }

    const getUniqueKillsQuantity = async (killInfo) => {
        let kills = []
        const usersNames = await getUsersRowsValues(killInfo)

        if (usersNames) {
            usersNames.forEach((name) =>{
                kills.push(killInfo.filter((user) => user.username === name).map((killqty) => killqty.killQuantity))
            })
        }
        return kills
    }

    return {
        getCharNameUniqueKills,
        killInfo,
        columnName,
        rowsUsers,
        rowsKill
    }
}
