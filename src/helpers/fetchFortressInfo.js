
export const UseGetFortressInfo = async () => {
    const url = `${process.env.REACT_APP_API_URL}/fortress/get-guild-name-occupied-ftw`;
    return (await fetch(url, {mode:'cors', method:'GET'})).json();
}
