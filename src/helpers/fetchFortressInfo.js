
export const UseGetFortressInfo = async () => {
    const url = `${process.env.REACT_APP_API_URL}/fortress/getGuildNamesOccupiedFortressWar`;
    return (await fetch(url, {mode:'cors', method:'GET'})).json();
}
