

export const UseFetchGetPesoToDollar = async () => {
    const url = `https://api.cmfchile.cl/api-sbifv3/recursos_api/dolar?apikey=50618a45c11732e0a50b0f0791e849b0a095fe21&formato=json`;
    return (await fetch(url, {mode:'cors', method:'GET'})).json();
}
