

export const UseFetchCreateOrderPayment = async (username, amount, silk) => {
        const url = `${process.env.REACT_APP_API_URL}/payment/createPaymentPaypal?username=${username}&amount=${amount}&silkQuantity=${silk}`;
        return (await fetch(url, {mode:'cors', method:'GET'})).json();
}
