
export const UseFetchGetUniquesKills = async () => {
    const url = `${process.env.REACT_APP_API_URL}/Unique/ListUniqueKill`;
    return (await fetch(url, {mode:'cors', method:'GET'})).json();
}
